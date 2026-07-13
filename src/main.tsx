import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { supabase } from './supabaseClient';
import App from './App.tsx';
import './index.css';

const logPageView = async () => {
    try {
        await supabase.from('site_logs').insert([
            { 
                action: 'page_view',
                selected_lang: navigator.language 
            }
        ]);
    } catch (err) {
        console.error("Failed to send log:", err);
    }
};
logPageView();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);