import React, { useState, useEffect } from 'react';
import { DiagnosticsState, Language, TranslationContent } from '../types';
import { 
  Laptop, 
  Smartphone, 
  AlertTriangle, 
  Wrench, 
  ShieldCheck, 
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  MessageSquare,
  Sparkles,
  PhoneCall,
  ExternalLink,
  FileCheck
} from 'lucide-react';

interface WizardProps {
  translations: TranslationContent;
  lang: Language;
}

export default function Wizard({ translations, lang }: WizardProps) {
  const [step, setStep] = useState<number>(1);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);
  
  const [state, setState] = useState<DiagnosticsState>({
    device: null,
    symptoms: [],
    method: 'remote',
    name: '',
    details: ''
  });

  useEffect(() => {
    if (step > 1) {
      const element = document.getElementById('wizard-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [step]);

  const currencySymbol = lang === 'pt' ? 'R$' : '$';
  
  const handleDeviceSelect = (device: 'computer' | 'phone') => {
    setState(prev => ({ ...prev, device }));
    setStep(2);
  };

  const toggleSymptom = (id: string) => {
    setState(prev => {
      const exists = prev.symptoms.includes(id);
      const newSymptoms = exists 
        ? prev.symptoms.filter(x => x !== id)
        : [...prev.symptoms, id];
      return { ...prev, symptoms: newSymptoms };
    });
  };

  const handleMethodSelect = (method: 'remote' | 'inhome' | 'urgent') => {
    setState(prev => ({ ...prev, method }));
  };

  const calculateEstimateRange = () => {
    if (!state.device) return { min: 0, max: 0 };
    
    // Base Rates
    let baseMin = state.device === 'computer' ? 120 : 90;
    let baseMax = state.device === 'computer' ? 180 : 140;
    
    if (lang !== 'pt') {
      // Scale down to USD/Euro equivalent
      baseMin = Math.round(baseMin / 5);
      baseMax = Math.round(baseMax / 5);
    }

    // Symptom impact
    let symptomFactor = state.symptoms.length * (lang === 'pt' ? 50 : 10);
    
    // Method impact
    let methodCost = 0;
    if (state.method === 'inhome') {
      methodCost = lang === 'pt' ? 100 : 20;
    } else if (state.method === 'urgent') {
      methodCost = lang === 'pt' ? 180 : 35;
    }

    return {
      min: baseMin + symptomFactor + methodCost,
      max: baseMax + symptomFactor + methodCost
    };
  };

  const handleCalculate = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
      setShowResult(true);
      setStep(4);
    }, 1200);
  };

  const generateWhatsAppLink = () => {
    const range = calculateEstimateRange();
    const phoneNum = "5521936180050"; // Replaced with template support number
    
    // Build symptoms text
    const selectedSymptomLabels = state.symptoms.map(id => {
      const match = translations.symptomsList.find(s => s.id === id);
      return match ? `• ${match.label}` : '';
    }).filter(Boolean).join('\n');

    const methodLabel = state.method === 'remote' 
      ? translations.remoteOption 
      : state.method === 'inhome' 
        ? translations.inHomeOption 
        : translations.urgentOption;

    const deviceLabel = state.device === 'computer' ? translations.computer : translations.phone;

    let text = ``;
    if (lang === 'pt') {
      text = `Olá Ernesto Scheffer! Gostaria de um orçamento para suporte técnico:\n\n` +
             `*Aparelho:* ${deviceLabel}\n` +
             `*Sintomas selecionados:*\n${selectedSymptomLabels || '• Não especificado'}\n\n` +
             `*Formato desejado:* ${methodLabel}\n` +
             `*Nome:* ${state.name || 'Cliente'}\n` +
             `*Detalhes:* ${state.details || 'Sem detalhes adicionais.'}\n\n` +
             `*Faixa Estimada:* ${currencySymbol} ${range.min} - ${currencySymbol} ${range.max}\n\n` +
             `Estou pronto para prosseguir com o agendamento!`;
    } else if (lang === 'es') {
      text = `¡Hola Ernesto Scheffer! Quisiera un presupuesto de soporte técnico:\n\n` +
             `*Dispositivo:* ${deviceLabel}\n` +
             `*Síntomas seleccionados:*\n${selectedSymptomLabels || '• No especificado'}\n\n` +
             `*Formato preferido:* ${methodLabel}\n` +
             `*Nombre:* ${state.name || 'Cliente'}\n` +
             `*Detalles:* ${state.details || 'Sin detalles adicionales.'}\n\n` +
             `*Rango Estimado:* ${currencySymbol} ${range.min} - ${currencySymbol} ${range.max}\n\n` +
             `¡Quedo a la espera para coordinar el soporte!`;
    } else {
      text = `Hello Ernesto Scheffer! I would like a technical support estimate:\n\n` +
             `*Device:* ${deviceLabel}\n` +
             `*Selected Symptoms:*\n${selectedSymptomLabels || '• Not specified'}\n\n` +
             `*Support Format:* ${methodLabel}\n` +
             `*Name:* ${state.name || 'Client'}\n` +
             `*Details:* ${state.details || 'No additional details.'}\n\n` +
             `*Estimated Range:* ${currencySymbol} ${range.min} - ${currencySymbol} ${range.max}\n\n` +
             `I'm ready to schedule the service!`;
    }

    return `https://wa.me/${phoneNum}?text=${encodeURIComponent(text)}`;
  };

  const currentRange = calculateEstimateRange();

  return (
    <div className="glass-stepper-wrapper w-full">
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className="w-full glass rounded-3xl p-6 md:p-8 border-white/10 shadow-2xl relative overflow-hidden" id="wizard-section">
        {/* Dynamic light highlight beam behind */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#5ee7df]/10 to-[#b490f5]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Stepper Node Progress Indicator */}
        <div className="glass-stepper mb-8 overflow-x-auto md:overflow-visible py-5 px-4 scrollbar-none" id="stepper-h">
          {[
            { label: translations.step1, id: 1 },
            { label: translations.step2, id: 2 },
            { label: translations.step3, id: 3 },
            { label: translations.step4, id: 4 },
          ].map((stepItem, idx) => {
            const s = idx + 1;
            const isComplete = s < step;
            const isActive = s === step;
            const canClick = s < step || (s === 4 && showResult) || (step === 4 && s <= 4);

            return (
              <div key={stepItem.id} className={`glass-step ${isActive ? 'is-active' : ''} ${isComplete ? 'is-complete' : ''}`}>
                <button
                  onClick={() => {
                    if (canClick) {
                      if (s === 4 && !showResult) return;
                      setStep(s);
                    }
                  }}
                  disabled={!canClick}
                  className="glass-step__inner text-left focus:outline-none focus:ring-0 select-none group border-none bg-transparent p-0 m-0"
                >
                  <div
                    className={`glass-step__node ${canClick ? 'cursor-pointer group-hover:scale-105 active:scale-95' : 'cursor-default'}`}
                    aria-label={`Step ${stepItem.id}: ${stepItem.label} - ${isComplete ? 'complete' : isActive ? 'current' : 'pending'}`}
                  >
                    {isComplete ? '✓' : stepItem.id}
                  </div>
                </button>
                <div className="hidden md:block">
                  <span className="glass-step__label font-mono font-medium tracking-wider">
                    {stepItem.label}
                  </span>
                </div>
                {idx < 3 && (
                  <div className="glass-step__connector" />
                )}
              </div>
            );
          })}
        </div>

      {/* Step Content */}
      <div className="min-h-[260px] flex flex-col justify-between">
        
        {/* STEP 1: DEVICE SELECTION */}
        {step === 1 && (
          <div className="animate-fade-in">
            <h3 className="text-lg font-semibold mb-4 text-center sm:text-left">
              {translations.selectDevice}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => handleDeviceSelect('computer')}
                className={`glass rounded-2xl p-6 text-center flex flex-col items-center justify-center gap-4 border w-full h-full transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${
                  state.device === 'computer' 
                    ? 'border-[#5ee7df] bg-[#5ee7df]/5 shadow-lg' 
                    : 'border-white/10'
                }`}
              >
                <div className="h-16 w-16 rounded-2xl bg-slate-500/10 flex items-center justify-center text-[#5ee7df] shadow-inner">
                  <Laptop className="h-8 w-8" />
                </div>
                <div>
                  <h4 className="font-bold text-base">{translations.computer}</h4>
                  <p className="text-xs opacity-60 mt-1">Mac e Windows</p>
                </div>
              </button>

              <button
                onClick={() => handleDeviceSelect('phone')}
                className={`glass rounded-2xl p-6 text-center flex flex-col items-center justify-center gap-4 border w-full h-full transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${
                  state.device === 'phone' 
                    ? 'border-[#b490f5] bg-[#b490f5]/5 shadow-lg' 
                    : 'border-white/10'
                }`}
              >
                <div className="h-16 w-16 rounded-2xl bg-slate-500/10 flex items-center justify-center text-[#b490f5] shadow-inner">
                  <Smartphone className="h-8 w-8" />
                </div>
                <div>
                  <h4 className="font-bold text-base">{translations.phone}</h4>
                  <p className="text-xs opacity-60 mt-1">iOS e Android</p>
                </div>
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: SYMPTOMS CHECKLIST */}
        {step === 2 && (
          <div className="animate-fade-in">
            <h3 className="text-lg font-semibold mb-3">
              {translations.selectSymptoms}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              {translations.symptomsList.map((sym) => {
                const isSelected = state.symptoms.includes(sym.id);
                return (
                  <button
                    key={sym.id}
                    onClick={() => toggleSymptom(sym.id)}
                    className={`glass-panel rounded-xl px-4 py-3 text-left flex items-center gap-3 border transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] ${
                      isSelected 
                        ? 'border-[#5ee7df] bg-[#5ee7df]/10 text-white shadow-md' 
                        : 'border-white/10 hover:border-white/25 hover:bg-white/5'
                    }`}
                  >
                    <div className={`h-4 w-4 rounded border flex items-center justify-center transition-all ${
                      isSelected ? 'border-[#5ee7df] bg-[#5ee7df]' : 'border-white/30'
                    }`}>
                      {isSelected && <span className="text-[10px] text-slate-900 font-bold">✓</span>}
                    </div>
                    <span className="text-xs font-medium opacity-90">{sym.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 3: METHOD SELECT */}
        {step === 3 && (
          <div className="animate-fade-in">
            <h3 className="text-lg font-semibold mb-4">
              {translations.selectMethod}
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { id: 'remote', label: translations.remoteOption, detail: "Rápido e seguro compartilhamento de tela via AnyDesk ou TeamViewer em qualquer lugar do mundo.", color: "text-[#5ee7df]" },
                { id: 'inhome', label: translations.inHomeOption, detail: "Disponível na Zona Sul do Rio de Janeiro. Consulte disponibilidade.", color: "text-[#b490f5]" },
                { id: 'urgent', label: translations.urgentOption, detail: "Prioridade de atendimento. Suporte expresso SOS via acesso remoto ou presencial para casos críticos e urgentes.", color: "text-rose-400" }
              ].map((m) => {
                const isSelected = state.method === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => handleMethodSelect(m.id as any)}
                    className={`glass-panel rounded-2xl p-4 text-left flex items-start gap-4 border transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                      isSelected 
                        ? 'border-[#5ee7df] bg-[#5ee7df]/5 shadow-md' 
                        : 'border-white/10 hover:bg-white/5'
                    }`}
                  >
                    <div className="pt-0.5">
                      <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${
                        isSelected ? 'border-[#5ee7df]' : 'border-white/30'
                      }`}>
                        {isSelected && <div className="h-2 w-2 rounded-full bg-[#5ee7df]" />}
                      </div>
                    </div>
                    <div>
                      <h4 className={`font-bold text-sm ${m.color}`}>{m.label}</h4>
                      <p className="text-xs opacity-60 mt-1 leading-relaxed">{m.detail}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 4: CONTACT & ESTIMATE SUMMARY */}
        {step === 4 && (
          <div className="animate-fade-in">
            {showResult ? (() => {
              const t = translations;
              const channel = state.method === 'remote' ? 'Acesso Remoto' : state.method === 'inhome' ? 'Em Domicílio' : 'SOS Urgente';
              const device = state.device === 'computer' ? 'Computador' : 'Celular / Tablet';
              const estimationDetails = {
                timeEstimate: state.method === 'urgent' ? 'Alta Prioridade (Resposta Rápida)' : state.method === 'remote' ? 'Até 2 Horas' : 'Agendado'
              };

              return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  {/* Submit & Send Form Inputs */}
                  <div className="flex flex-col gap-4">
                    <div>
                      <label htmlFor="client-name" className="text-xs font-semibold uppercase tracking-wider opacity-60">
                        {translations.yourName}
                      </label>
                      <input
                        id="client-name"
                        type="text"
                        placeholder="ex. Maria Joana"
                        value={state.name}
                        onChange={(e) => setState(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full mt-1 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 focus:bg-white/10 focus:border-[#5ee7df]/50 text-white focus:outline-none transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="client-details" className="text-xs font-semibold uppercase tracking-wider opacity-60">
                        {translations.contactDetails}
                      </label>
                      <textarea
                        id="client-details"
                        rows={3}
                        placeholder={translations.detailsPlaceholder}
                        value={state.details}
                        onChange={(e) => setState(prev => ({ ...prev, details: e.target.value }))}
                        className="w-full mt-1 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 focus:bg-white/10 focus:border-[#5ee7df]/50 text-white focus:outline-none transition-all text-sm resize-none"
                      />
                    </div>
                  </div>

                  {/* Result Column */}
                  <div className="flex flex-col gap-6">
                    {/* Summary Detail Card */}
                    <div className="apple-liquid-glass-card p-5 md:p-10 flex flex-col justify-between w-full relative shadow-2xl">
                      {/* Floating ambient glow specifically inside this card for prime aesthetic */}
                      <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

                      <div className="space-y-4 md:space-y-6">
                        {/* Summary title */}
                        <div className="flex items-center gap-3">
                          <FileCheck className="w-5 h-5 text-emerald-400" />
                          <span className="text-xs uppercase font-mono tracking-widest text-emerald-400">
                            {t.estimator.summary.badge}
                          </span>
                        </div>

                        <h3 className="font-display text-xl md:text-3xl font-normal text-white [data-theme=light]:text-slate-900 leading-snug">
                          {t.estimator.summary.title}
                        </h3>

                        {/* Summary Block */}
                        <div className="space-y-3 md:space-y-4 pt-2">
                          <div className="flex justify-between border-b border-white/5 pb-3">
                            <span className="text-xs text-white/40 [data-theme=light]:text-slate-500 font-mono">
                              {t.estimator.summary.channelLabel}
                            </span>
                            <span className="text-xs text-white font-medium [data-theme=light]:text-slate-800 uppercase font-mono">
                              {channel.toUpperCase()}
                            </span>
                          </div>

                          <div className="flex justify-between border-b border-white/5 pb-3">
                            <span className="text-xs text-white/40 [data-theme=light]:text-slate-500 font-mono">
                              {t.estimator.summary.deviceLabel}
                            </span>
                            <span className="text-xs text-white font-medium [data-theme=light]:text-slate-800 uppercase font-mono">
                              {device.toUpperCase()}
                            </span>
                          </div>

                          <div className="flex justify-between border-b border-white/5 pb-3">
                            <span className="text-xs text-white/40 [data-theme=light]:text-slate-500 font-mono">
                              {t.estimator.summary.arrivalLabel}
                            </span>
                            <span className="text-xs text-cyan-400 font-semibold font-mono">
                              {estimationDetails.timeEstimate}
                            </span>
                          </div>

                          <div className="flex justify-between border-b border-white/5 pb-3">
                            <span className="text-xs text-white/40 [data-theme=light]:text-slate-500 font-mono">
                              {t.estimator.summary.freeDiag}
                            </span>
                            <span className="text-xs text-[#5ee7df] font-semibold font-mono">
                              {currencySymbol} {currentRange.min} a {currencySymbol} {currentRange.max}
                            </span>
                          </div>

                          <div className="pt-2 space-y-3 md:space-y-4">
                            <p className="text-[11px] md:text-xs text-white/70 [data-theme=light]:text-slate-600 leading-relaxed text-center px-1">
                              {t.estimator.summary.footnote}
                            </p>

                            {/* Ultimate Green Glowing WhatsApp Estimator Button moved here */}
                            <a
                              href={generateWhatsAppLink()}
                              target="_blank"
                              rel="noreferrer"
                              className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 md:px-5 md:py-3.5 rounded-full font-bold text-white text-xs md:text-sm whatsapp-btn-glow hover:brightness-110 transform-gpu hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 cursor-pointer shadow-lg"
                            >
                              <MessageSquare className="h-4.5 w-4.5 fill-white/10 shrink-0" />
                              <span className="whitespace-nowrap">{translations.sendWhatsAppEstimate}</span>
                              <ExternalLink className="h-4 w-4 opacity-90 ml-0.5 shrink-0" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })() : (
              <div className="text-center py-12">
                <p>Diagnostic state error. Please reset.</p>
              </div>
            )}
          </div>
        )}

        {/* Buttons / Controls Footer */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/10">
          {step > 1 && (
            <button
              onClick={() => {
                if (step === 4 && showResult) {
                  setShowResult(false);
                }
                setStep(prev => prev - 1);
              }}
              className="glass-btn glass-btn--ghost"
            >
              {lang === 'pt' ? '← Voltar' : lang === 'es' ? '← Volver' : '← Prev'}
            </button>
          )}

          <div className="ml-auto">
            {step === 2 && (
              <button
                onClick={() => setStep(3)}
                className="glass-btn glass-btn--primary"
              >
                {lang === 'pt' ? 'Avançar →' : lang === 'es' ? 'Avanzar →' : 'Next →'}
              </button>
            )}

            {step === 3 && (
              <button
                onClick={handleCalculate}
                disabled={isCalculating}
                className="glass-btn glass-btn--primary relative flex items-center justify-center"
              >
                <span className={`inline-flex items-center gap-1.5 transition-opacity duration-200 ${isCalculating ? 'opacity-0 invisible select-none pointer-events-none' : 'opacity-100'}`}>
                  {lang === 'pt' ? 'Calcular Estimativa' : lang === 'es' ? 'Calcular Estimación' : 'Calculate Estimate'}
                  <Sparkles className="h-3.5 w-3.5 shrink-0" />
                </span>

                {isCalculating && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                  </span>
                )}
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
    </div>
  );
}

const styles = `
.glass-stepper-wrapper {
  /* Surface colors & tints */
  --glass-white: rgba(255, 255, 255, 0.12);
  --glass-white-md: rgba(255, 255, 255, 0.2);
  --glass-border: rgba(255, 255, 255, 0.25);
  --glass-border-subtle: rgba(255, 255, 255, 0.12);
  
  /* Shadows & Reflections */
  --shadow-glass: 0 8px 32px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.3);
  --reflection-top: linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 50%);
  --reflection-inner: inset 0 1px 1px rgba(255, 255, 255, 0.45), inset 0 -1px 1px rgba(0, 0, 0, 0.1);

  /* Micro-spacing */
  --space-2xs: 4px;
  --space-xs: 8px;
  --space-sm: 12px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;

  /* Animation Easings */
  --ease-liquid: cubic-bezier(0.34, 1.56, 0.64, 1);
  --dur-fast: 180ms;
  --dur-mid: 360ms;
}

/* Light theme overrides */
[data-theme="light"] .glass-stepper-wrapper {
  --glass-white: rgba(255, 255, 255, 0.62);
  --glass-white-md: rgba(255, 255, 255, 0.78);
  --glass-border: rgba(15, 23, 42, 0.14);
  --glass-border-subtle: rgba(15, 23, 42, 0.09);
  --shadow-glass: 0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.9);
  --reflection-top: linear-gradient(135deg, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0) 50%);
  --reflection-inner: inset 0 1px 1px rgba(255, 255, 255, 0.95), inset 0 -1px 1px rgba(0, 0, 0, 0.04);
}

/* Stepper Engine Styles */
.glass-stepper {
  display: flex;
  align-items: center;
  gap: 0;
  width: 100%;
}

.glass-step {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  flex: 1;
}

.glass-step:last-child {
  flex: none;
}

.glass-step__inner {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
}

.glass-step__node {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid var(--glass-border);
  background: var(--glass-white);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
  flex-shrink: 0;
  transition: background var(--dur-mid) var(--ease-liquid), border-color var(--dur-mid), box-shadow var(--dur-mid), transform var(--dur-mid);
}

.glass-step__label {
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  transition: opacity var(--dur-mid);
  opacity: 0.4;
}

.glass-step__connector {
  flex: 1;
  height: 1px;
  margin: 0 var(--space-sm);
  background: var(--glass-border-subtle);
  transition: background var(--dur-mid);
}

/* Complete & Active State modifiers */
.glass-step.is-complete .glass-step__connector {
  background: rgba(94, 231, 223, 0.5);
}

.glass-step.is-complete .glass-step__node {
  background: rgba(94, 231, 223, 0.25);
  border-color: rgba(94, 231, 223, 0.65);
  box-shadow: 0 0 16px rgba(94, 231, 223, 0.25);
  transform: scale(1.05);
  color: #5ee7df;
}

.glass-step.is-complete .glass-step__label {
  opacity: 0.7;
}

.glass-step.is-active .glass-step__node {
  background: rgba(180, 144, 245, 0.25);
  border-color: rgba(180, 144, 245, 0.65);
  box-shadow: 0 0 20px rgba(180, 144, 245, 0.3);
  animation: step-pulse 2s ease infinite;
  color: #b490f5;
}

.glass-step.is-active .glass-step__label {
  opacity: 1;
  font-weight: 500;
}

/* Pulsing state visual loop */
@keyframes step-pulse {
  0%, 100% { box-shadow: 0 0 12px rgba(180, 144, 245, 0.25); }
  50% { box-shadow: 0 0 24px rgba(180, 144, 245, 0.5); }
}

/* Liquid Glass buttons styling */
.glass-btn {
  display: inline-flex;
  align-items: center;
  padding: 8px var(--space-md);
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  transition: transform var(--dur-fast) var(--ease-liquid), box-shadow var(--dur-fast), background var(--dur-fast);
  position: relative;
  overflow: hidden;
}

.glass-btn::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: var(--reflection-top);
  pointer-events: none;
}

.glass-btn:active {
  transform: scale(0.96);
}

.glass-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
}

.glass-btn--primary {
  color: #ffffff;
  background: linear-gradient(135deg, rgba(94, 231, 223, 0.5) 0%, rgba(59, 130, 246, 0.5) 100%);
  border: 1px solid rgba(94, 231, 223, 0.45);
  box-shadow: 0 4px 24px rgba(94, 231, 223, 0.3), var(--reflection-inner);
}

.glass-btn--primary:hover {
  background: linear-gradient(135deg, rgba(94, 231, 223, 0.7) 0%, rgba(59, 130, 246, 0.7) 100%);
  box-shadow: 0 8px 36px rgba(94, 231, 223, 0.5), var(--reflection-inner);
  transform: translateY(-2px);
}

.glass-btn--ghost {
  color: inherit;
  background: var(--glass-white);
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow-glass);
}

.glass-btn--ghost:hover {
  background: var(--glass-white-md);
  transform: translateY(-2px);
}

[data-theme="light"] .glass-btn--primary {
  background: linear-gradient(135deg, rgba(8, 145, 178, 0.55) 0%, rgba(37, 99, 235, 0.55) 100%);
  border-color: rgba(8, 145, 178, 0.5);
  color: #ffffff;
}

[data-theme="light"] .glass-btn--primary:hover {
  background: linear-gradient(135deg, rgba(8, 145, 178, 0.75) 0%, rgba(37, 99, 235, 0.75) 100%);
}

[data-theme="light"] .glass-btn--ghost {
  background: rgba(255, 255, 255, 0.65);
  border-color: rgba(15, 23, 42, 0.18);
  color: #0f172a;
}

[data-theme="light"] .glass-btn--ghost:hover {
  background: rgba(255, 255, 255, 0.84);
  border-color: rgba(15, 23, 42, 0.25);
}
`;
