import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { supabase } from './supabaseClient';
import App from './App.tsx';
import './index.css';

const logPageView = async () => {
    try {
        const ipResponse = await fetch('https://ipapi.co/json/');
        const geoData = await ipResponse.json();

        await supabase.from('site_logs').insert([
            { 
                action: 'page_view',
                selected_lang: navigator.language,
                user_agent: navigator.userAgent,
                ip: geoData.ip,
                city: geoData.city,
                state: geoData.region_code 
            }
        ]);
    } catch (err) {
        try {
            await supabase.from('site_logs').insert([
                { 
                    action: 'page_view',
                    selected_lang: navigator.language,
                    user_agent: navigator.userAgent
                }
            ]);
        } catch (fallbackErr) {
            console.error("Failed to send log:", fallbackErr);
        }
    }
};

logPageView();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);