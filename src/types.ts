import { TranslationSet } from './translations';

export type Language = "pt" | "en" | "es";
export type Channel = "remote" | "home" | "sos";
export type Device = "computer" | "phone" | "both";
export type Issue = "optimization" | "security" | "software" | "crash" | "consult";

export interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  description: string;
  icon: any;
  points: string[];
  gradient: string;
}

export interface DiagnosticsState {
  device: 'computer' | 'phone' | null;
  symptoms: string[];
  method: 'remote' | 'inhome' | 'urgent' | null;
  name: string;
  details: string;
}

export interface TranslationContent extends TranslationSet {}
