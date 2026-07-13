import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// Initialize the connection
const supabaseUrl = 'https://pkjgcoijtdxhecoihikz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBramdjb2lqdGR4aGVjb2loaWt6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4Mjg1NjIwOCwiZXhwIjoyMDk4NDMyMjA4fQ.U3BxNxtCc5AEw-fkyXv7OtqgKIi_8E9bt-Xo_LrTrc4';
const supabase = createClient(supabaseUrl, supabaseKey);

const logFilePath = path.join(process.cwd(), 'traffic_logs.txt');

// Helper function to format log text uniformly
function formatLogEntry(row) {
    const time = new Date(row.created_at).toLocaleTimeString();
    const date = new Date(row.created_at).toLocaleDateString();
    const platform = row.user_agent ? row.user_agent.split(' ')[0] : 'UNKNOWN';
    
    return `[${date} ${time}] >> ACTION: ${(row.action || 'UNKNOWN').toUpperCase()}
    Location : ${row.city || 'Unknown'}, ${row.state || 'Unknown'}
    IP Addr  : ${row.ip || 'Unknown'}
    Platform : ${platform} | Lang: ${row.selected_lang || 'Unknown'}
--------------------------------------------------\n`;
}

// Print clean console header
console.clear();
console.log("==================================================");
console.log(" SYS_MONITOR // LOG ROUTER LINK ESTABLISHED");
console.log("==================================================");

// Step 1: Fetch historical logs and create/overwrite the text file
async function syncHistoricalLogs() {
    console.log(" Syncing historical logs with database...");
    
    const { data: logs, error } = await supabase
        .from('site_logs')
        .select('*')
        .order('created_at', { ascending: true });

    if (error) {
        console.error(" 🛑 Error fetching historical logs:", error.message);
        return;
    }

    let logContent = "==================================================\n";
    logContent += "               ARCHIVED TRAFFIC LOGS              \n";
    logContent += "==================================================\n\n";

    if (logs && logs.length > 0) {
        logs.forEach(row => {
            logContent += formatLogEntry(row);
        });
    }

    fs.writeFileSync(logFilePath, logContent, 'utf-8');
    console.log(` Saved ${logs.length} historical entries to '${path.basename(logFilePath)}'.`);
    console.log("\n Listening for incoming live traffic...\n");
}

// Step 2: Stream incoming rows live to terminal and append to the text file
function startRealtimeStream() {
    supabase
        .channel('cmd-logs')
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'site_logs' }, payload => {
            const row = payload.new;
            const formattedEntry = formatLogEntry(row);
            
            // Render on console screen
            const time = new Date(row.created_at).toLocaleTimeString();
            console.log(`[${time}] >> ACTION: ${(row.action || '').toUpperCase()}`);
            console.log(`    Location : ${row.city}, ${row.state}`);
            console.log(`    IP Addr  : ${row.ip}`);
            console.log(`    Platform : ${row.user_agent ? row.user_agent.split(' ')[0] : 'UNKNOWN'} | Lang: ${row.selected_lang}`);
            console.log("--------------------------------------------------");

            // Instantly append to file
            fs.appendFileSync(logFilePath, formattedEntry, 'utf-8');
        })
        .subscribe();
}

// Launch application lifecycle
(async () => {
    await syncHistoricalLogs();
    startRealtimeStream();
})();