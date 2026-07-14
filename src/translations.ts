export interface TranslationSet {
  nav: {
    title: string;
    techSupport: string;
    services: string;
    sosZones: string;
    freeEstimate: string;
  };
  hero: {
    badge: string;
    title: string;
    techSupportSub: string;
    description: string;
    estimateDiagnostic: string;
    exploreOfferings: string;
    dataSecure: string;
    multilingual: string;
    urgentArea: string;
  };
  portal: {
    systemIdentity: string;
    supportTitle: string;
    securePortal: string;
    inHomeAssist: string;
    remoteDiag: string;
    noAttachment: string;
    clarityStatus: string;
    onlineStatus: string;
  };
  capabilities: {
    kicker: string;
    title: string;
    description: string;
    activeText: string;
    selectText: string;
    requestEstimate: string;
    services: {
      remote: {
        title: string;
        subtitle: string;
        tag: string;
        description: string;
        points: string[];
      };
      sos: {
        title: string;
        subtitle: string;
        tag: string;
        description: string;
        points: string[];
      };
      home: {
        title: string;
        subtitle: string;
        tag: string;
        description: string;
        points: string[];
      };
      multilingual: {
        title: string;
        subtitle: string;
        tag: string;
        description: string;
        points: string[];
      };
      estimate: {
        title: string;
        subtitle: string;
        tag: string;
        description: string;
        points: string[];
      };
    };
  };
  sos: {
    kicker: string;
    title: string;
    description: string;
    coverageHeader: string;
    neighborhoods: string;
    coverageDesc: string;
    cards: {
      security: {
        title: string;
        desc: string;
      };
      restore: {
        title: string;
        desc: string;
      };
      wifi: {
        title: string;
        desc: string;
      };
      performance: {
        title: string;
        desc: string;
      };
    };
  };
  estimator: {
    kicker: string;
    title: string;
    description: string;
    step1: string;
    step2: string;
    step3: string;
    channels: {
      remote: { title: string; desc: string };
      home: { title: string; desc: string };
      sos: { title: string; desc: string };
    };
    devices: {
      computer: { title: string; desc: string };
      phone: { title: string; desc: string };
      both: { title: string; desc: string };
    };
    issues: {
      optimization: string;
      security: string;
      software: string;
      crash: string;
      consult: string;
    };
    summary: {
      title: string;
      badge: string;
      channelLabel: string;
      deviceLabel: string;
      arrivalLabel: string;
      costLabel: string;
      freeDiag: string;
      footnote: string;
      whatsappCta: string;
      copyCta: string;
      copiedSuccess: string;
      footnoteForm: string;
    };
  };
  faqs: {
    kicker: string;
    title: string;
    description: string;
    items: { q: string; a: string }[];
  };
  footer: {
    text: string;
  };
  step1: string;
  step2: string;
  step3: string;
  step4: string;
  selectDevice: string;
  computer: string;
  phone: string;
  selectSymptoms: string;
  symptomsList: { id: string; label: string }[];
  selectMethod: string;
  remoteOption: string;
  inHomeOption: string;
  urgentOption: string;
  yourName: string;
  contactDetails: string;
  detailsPlaceholder: string;
  sendWhatsAppEstimate: string;
  calculating: string;
  calculateEstimate: string;
  notFound: {
    title: string;
    description: string;
    homeButton: string;
    errorCode: string;
  };
}

export const translations: Record<"pt" | "en" | "es", TranslationSet> = {
  pt: {
    nav: {
      title: "Ernesto Scheffer",
      techSupport: "Técnico em Software",
      services: "Serviços",
      sosZones: "SOS",
      freeEstimate: "Orçamento Grátis",
    },
    hero: {
      badge: "Operações Presenciais e Remotas Ativas",
      title: "Assistência Técnica Personalizada",
      techSupportSub: "Computadores e Celulares",
      description: "Soluções personalizadas com foco em otimização de desempenho, proteção digital e configurações gerais. \nConfira a página de serviços e faça uma estimativa rápida aqui mesmo! \nSe preferir, fale direto comigo por WhatsApp.\nO orçamento é gratuito e sem compromisso!",
      estimateDiagnostic: "Estimar Orçamento",
      exploreOfferings: "Explorar Serviços",
      dataSecure: "100% Dados Seguros",
      multilingual: "Suporte em Português",
      urgentArea: "Zona SOS Leblon",
    },
    portal: {
      systemIdentity: "Serviços Exclusivos",
      supportTitle: "Ernesto Scheffer",
      securePortal: "PORTAL SEGURO V2.4 // RJ",
      inHomeAssist: "Atendimento Presencial na Zona Sul",
      remoteDiag: "Diagnóstico Remoto Global Certificado",
      noAttachment: "Garantia de Orçamento sem Compromisso",
      clarityStatus: "ESTADO DE DISPONIBILIDADE",
      onlineStatus: "100% ATIVO",
    },
    capabilities: {
      kicker: "Capacidades de Negócio",
      title: "Serviços Técnicos Principais",
      description: "Explore como entregamos suporte, diagnósticos otimizados e atendimento focado para clientes localmente no Rio e em todo o mundo.",
      activeText: "ATIVO // ✦",
      selectText: "SELECIONAR",
      requestEstimate: "Solicitar Orçamento Grátis",
      services: {
        remote: {
          title: "Suporte Remoto",
          subtitle: "Brasil & Exterior",
          tag: "Conexão Segura",
          description: "Assistência segura e imediata via ferramentas remotas em qualquer lugar do mundo. Ideal para otimização, diagnósticos e instalações de software.",
          points: [
            "Sessões visuais criptografadas",
            "Atendimento especializado em Português, Inglês e Espanhol",
            "Configuração de backup seguro",
          ],
        },
        sos: {
          title: "SOS - Suporte Urgente",
          subtitle: "Leblon · Ipanema · Copacabana",
          tag: "Resposta Imediata",
          description: "Recuperação de alta prioridade para falhas de sistema e emergências de segurança. Seja qual for o imprevisto, não fique sem seu aparelho, mesmo fora de casa! Atendimento presencial no coração da Zona Sul do Rio de Janeiro.",
          points: [
            "Agendamento prioritário",
            "Atendimento remoto ou local",
            "Contenção e remoção de vírus",
            "Diagnóstico e reparo imediatos",
          ],
        },
        home: {
          title: "Atendimento em Domicílio",
          subtitle: "Zona Sul do Rio de Janeiro",
          tag: "Cuidado Personalizado",           // <-- nao to vendo essas tag no site
          description: "Reparo conveniente no local, configurações e limpezas gerais para o seu aparelho. Perfeito para revisões detalhadas do sistema no conforto da sua casa ou escritório.",
          points: [
            "Serviço em sua residência ou escritório",
            "Configuração de Wi-Fi e rede doméstica",
            "Verificação de integração hardware-software",
            "Sem a necessidade de transportar dispositivos",
          ],
        },
        multilingual: {
          title: "Atendimento Especializado",
          subtitle: "Português · Espanhol · Inglês",
          tag: "Padrões de Excelência",
          description: "Assistência clara, fluente e sem jargões para garantir que você entenda cada etapa do diagnóstico e reparo do seu sistema.",
          points: [
            "Conversas técnicas simplificadas",
            "Documentação e relatórios na lingua de preferencia",
            "Explicações claras e acessíveis",
            "Experiência de serviço com qualidade",
          ],
        },
        estimate: {
          title: "Orçamento Grátis",
          subtitle: "Sem Vínculo ou Anexos",
          tag: "Preço Justo",
          description: "Diagnósticos completos e transparentes antes do início de qualquer reparo. Livre de taxas surpresa, pré-compromissos ou anexos técnicos complicados.",
          points: [
            "Atendimento personalizado",
            "Clareza no acerto dos valores",
            "Sem compromisso de fechar negócio",
          ],
        },
      },
    },
    sos: {
      kicker: "SOS - Contato Imediato",
      title: "Suporte Rápido para Emergências",
      description: "Enfrentando falhas críticas de inicialização, telas pretas, perda de credenciais ou infecção por virus? Ofereço soluções de emergência com alta prioridade.",
      coverageHeader: "Cobertura Presencial nos Bairros",
      neighborhoods: "Leblon · Ipanema · Copacabana",
      coverageDesc: "Chegada rápida e atendimento veloz para situações de emergência.",
      cards: {
        security: {
          title: "Limpeza de Segurança",
          desc: "Remoção completa de softwares maliciosos, spywares, keyloggers e correção de configurações de segurança para proteger seus arquivos confidenciais.",
        },
        restore: {
          title: "Restauração de Sistema",
          desc: "Reinstalação rápida do sistema operacional, reparo de software dinâmico e recuperação de inicialização para computadores travados.",
        },
        wifi: {
          title: "Configuração de Wi-Fi & Rede",
          desc: "Configuração de ambientes de rede altamente seguros para evitar interceptações ou adulterações de arquivos em conexões domésticas ou públicas.",
        },
        performance: {
          title: "Otimização de Performance",
          desc: "Limpeza profunda de inicializadores ocultos, desativação de processos pesados na memória e ajuste fino do sistema para recuperar a velocidade máxima.",
        },
      },
    },
    estimator: {
      kicker: "Análise de Orçamento Prévio",
      title: "Estimativa Rápida",
      description: "Selecione os sintomas do seu aparelho para gerar uma estimativa de custo e entrar em contato.",
      step1: "1. Canal de Atendimento",
      step2: "2. Categoria do Dispositivo",
      step3: "3. Problema Principal de Software",
      channels: {
        remote: { title: "Sessão Remota", desc: "Assistência Global" },
        home: { title: "Em Domicílio", desc: "Zona Sul do Rio" },
        sos: { title: "SOS Urgente", desc: "Resposta Prioritária" },
      },
      devices: {
        computer: { title: "PC / Mac", desc: "Computador" },
        phone: { title: "Smartphone", desc: "Celular iPhone/Android" },
        both: { title: "Ambos os Dispositivos", desc: "Combo de Suporte" },
      },
      issues: {
        optimization: "Otimização de sistema, lentidão, limpeza de disco",
        security: "Auditoria de segurança, remoção de vírus e malware",
        software: "Instalação de softwares especiais, backup e nuvem",
        crash: "Reinstalação do Sistema Operacional, restauração de sistema travado",
        consult: "Consultoria geral, migração completa e segura de dados",
      },
      summary: {
        title: "Resumo do Atendimento",
        badge: "Estimativa de Orçamento",
        channelLabel: "CANAL",
        deviceLabel: "DISPOSITIVO",
        arrivalLabel: "PREVISÃO DE ATENDIMENTO",
        costLabel: "CUSTO ESTIMADO DO SERVIÇO",
        freeDiag: "Diagnóstico Grátis",
        footnote: "Estimativas calculadas com base nos sintomas e preferências de atendimento selecionadas.",
        whatsappCta: "Solicitar Orçamento via WhatsApp",
        copyCta: "Copiar Texto da Mensagem",
        copiedSuccess: "Texto Copiado com Sucesso!",
        footnoteForm: "* Todas as estimativas e diagnósticos iniciais são totalmente gratuitos e sem qualquer compromisso.",
      },
    },
    faqs: {
      kicker: "Esclarecimentos & Diretrizes",
      title: "Perguntas Frequentes",
      description: "Entenda a mecânica de suporte, protocolo de ferramentas remotas e padrões de segurança de dados.",
      items: [
        {
          q: "Como funciona o Suporte Técnico Remoto?",
          a: "O suporte remoto é feito através de aplicativos certificados como AnyDesk ou TeamViewer. Você baixa a ferramenta, compartilha o código de acesso temporário e acompanha todo o procedimento de reparo em tempo real na tela. A conexão só é possível com sua autorização explícita e é encerrada permanentemente assim que a janela é fechada.",
        },
        {
          q: "O que é a garantia de 'Orçamento Grátis e sem Compromisso'?",
          a: "Diferente de assistências técnicas tradicionais, oferecço diagnóstico preliminar 100% gratuito. Nenhum contrato, dados de pagamento ou termos complexos são necessários. Você recebe o diagnóstico primeiro e só autoriza o serviço se concordar com a solução e valor propostos.",
        },
        {
          q: "Meus dados pessoais estarão seguros durante o atendimento?",
          a: "Completamente. Utilizo ferramentas de acesso remoto criptografadas de ponta a ponta (TeamViewer). Você tem total controle, acompanhando o que faço pela tela e podendo encerrar a conexão a qualquer momento. Nenhum arquivo pessoal é visualizado, exceto se solicitado explicitamente por você para recuperação de dados.",
        },
        {
          q: "Quais bairros são atendidos pelo suporte de emergência SOS?",
          a: "O suporte presencial prioritário atende os bairros do Leblon, Ipanema e Copacabana na Zona Sul do Rio de Janeiro, garantindo tempo de resposta rápido para casos urgentes.",
        },
        {
          q: "Em quais idiomas o suporte é oferecido?",
          a: "O suporte técnico e atendimento são oferecidos em Português, Inglês e Espanhol, garantindo uma comunicação clara e precisa.",
        }
      ],
    },
    footer: {
      text: "Ernesto Scheffer · Rio de Janeiro, Brasil",
    },
    step1: "Aparelho",
    step2: "Sintomas",
    step3: "Formato",
    step4: "Resultado",
    selectDevice: "Selecione o dispositivo que precisa de suporte",
    computer: "Computador / Notebook",
    phone: "Celular / Tablet",
    selectSymptoms: "Quais problemas você está enfrentando?",
    symptomsList: [
      { id: "slow", label: "Sistema lento / Travando" },
      { id: "virus", label: "Vírus / Anúncios invasivos" },
      { id: "startup", label: "Sistema / Aplicativo não inicia" },
      { id: "network", label: "Problemas com Wi-Fi / Conectividade" },
      { id: "backup", label: "Recuperação de dados / Backup" },
      { id: "install", label: "Instalação de programas / Configurações" }
    ],
    selectMethod: "Como deseja receber o atendimento?",
    remoteOption: "Suporte Remoto (Brasil e Exterior)",
    inHomeOption: "Atendimento em Domicílio (Zona Sul - Rio de Janeiro)",
    urgentOption: "SOS Prioritário (Atendimento Urgente)",
    yourName: "Seu Nome Completo",
    contactDetails: "Detalhes do problema ou contato",
    detailsPlaceholder: "Explique brevemente o problema",
    sendWhatsAppEstimate: "Enviar Orçamento por WhatsApp",
    calculating: "Calculando estimativa...",
    calculateEstimate: "Calcular Estimativa de Orçamento",
    notFound: {
      title: "Página Não Encontrada",
      description: "Ops! O Gato Profissional procurou por todos os lados, mas este link não existe ou foi movido.",
      homeButton: "Voltar para o Início",
      errorCode: "CÓDIGO DE ERRO: 404 // CONEXÃO REJEITADA"
    }
  },

  en: {
    nav: {
      title: "Ernesto Scheffer",
      techSupport: "Software Technician",
      services: "Services",
      sosZones: "SOS",
      freeEstimate: "Free Estimate",
    },
    hero: {
      badge: "In-Person and Remote Support Active",
      title: "Personalized Tech Support",
      techSupportSub: "Computers and Smartphones",
      description: "Customized software solutions focusing on performance optimization, digital security, and system configuration.\nExplore our services and get a quick estimate right here!\nIf you prefer, contact me directly via WhatsApp.\nThe estimate is free and with no obligation!",
      estimateDiagnostic: "Get Estimate",
      exploreOfferings: "Explore Services",
      dataSecure: "100% Data Secured",
      multilingual: "English, Portuguese & Spanish",
      urgentArea: "SOS Zona Sul Rio",
    },
    portal: {
      systemIdentity: "Exclusive Services",
      supportTitle: "Ernesto Scheffer",
      securePortal: "SECURE PORTAL V2.4 // GLOBAL",
      inHomeAssist: "In-Person Support in Zona Sul, Rio",
      remoteDiag: "Certified Global Remote Diagnostics",
      noAttachment: "No-Obligation Estimate Guarantee",
      clarityStatus: "AVAILABILITY STATUS",
      onlineStatus: "100% ACTIVE",
    },
    capabilities: {
      kicker: "Business Capabilities",
      title: "Core Technical Services",
      description: "Discover how we deliver technical support, optimized diagnostics, and focused assistance locally in Rio and worldwide.",
      activeText: "ACTIVE // ✦",
      selectText: "SELECT",
      requestEstimate: "Request Free Estimate",
      services: {
        remote: {
          title: "Remote Support",
          subtitle: "Global Assistance",
          tag: "Secure Connection",
          description: "Secure and immediate assistance via certified remote tools anywhere in the world. Ideal for optimization, diagnostics, and software installations.",
          points: [
            "Encrypted visual sessions",
            "Support in English, Spanish, and Portuguese",
            "Secure backup configuration",
          ],
        },
        sos: {
          title: "SOS - Urgent Support",
          subtitle: "Leblon · Ipanema · Copacabana",
          tag: "Immediate Response",
          description: "High-priority software recovery for urgent system crashes, boot loops, or security breaches. Don't go without your device, even when away from home! In-person support in Rio's Zona Sul.",
          points: [
            "Priority emergency booking",
            "Malware and virus containment",
            "Critical system restoration",
            "Immediate diagnosis and repair",
          ],
        },
        home: {
          title: "In-Home Support",
          subtitle: "Zona Sul, Rio de Janeiro",
          tag: "Personalized Care",
          description: "Convenient on-site software repair, configurations, and system checkups. Perfect for detailed system overhauls in the comfort of your home or office.",
          points: [
            "Service at your home or office",
            "Wi-Fi and home network setup",
            "Hardware-software integration check",
            "No need to carry your devices around",
          ],
        },
        multilingual: {
          title: "Specialized Care",
          subtitle: "English · Spanish · Portuguese",
          tag: "Excellence Standards",
          description: "Clear, fluent, jargon-free support to ensure you understand every step of your system's diagnosis and repair.",
          points: [
            "Simplified technical talk",
            "Reports in your preferred language",
            "Clear and accessible explanations",
            "High-quality service experience",
          ],
        },
        estimate: {
          title: "Free Estimate",
          subtitle: "No Strings Attached",
          tag: "Fair Pricing",
          description: "Transparent and complete diagnostics before any work begins. Absolutely zero hidden fees, pre-commitments, or complicated technical lock-ins.",
          points: [
            "Personalized assistance",
            "Clear upfront pricing",
            "No obligation to close the deal",
          ],
        },
      },
    },
    sos: {
      kicker: "SOS - Immediate Contact",
      title: "Fast Support for Urgent Cases",
      description: "Experiencing critical boot failures, black screens, lost credentials, or virus infections? I offer high-priority emergency software solutions.",
      coverageHeader: "In-Person Local Coverage",
      neighborhoods: "Leblon · Ipanema · Copacabana",
      coverageDesc: "Fast arrival and rapid assistance for emergency situations.",
      cards: {
        security: {
          title: "Security Clean",
          desc: "Complete removal of malicious software, spyware, keyloggers, and security configuration fixes to safeguard your confidential files.",
        },
        restore: {
          title: "System Restore",
          desc: "Fast operating system reinstallation, dynamic software repair, and boot recovery for frozen computers.",
        },
        wifi: {
          title: "Wi-Fi & Network Setup",
          desc: "Highly secure network configuration to prevent data interception or file tampering on home or public connections.",
        },
        performance: {
          title: "Performance Optimization",
          desc: "Deep cleaning of hidden startup items, disabling heavy background processes, and system fine-tuning to recover peak speed.",
        },
      },
    },
    estimator: {
      kicker: "Pre-estimate Analysis",
      title: "Quick Estimate",
      description: "Select your device's symptoms to generate a cost estimate and contact me.",
      step1: "1. Service Channel",
      step2: "2. Device Category",
      step3: "3. Main Software Issue",
      channels: {
        remote: { title: "Remote Session", desc: "Global Support" },
        home: { title: "In-Home", desc: "Rio's Zona Sul" },
        sos: { title: "Urgent SOS", desc: "Priority Response" },
      },
      devices: {
        computer: { title: "PC / Mac", desc: "Computer" },
        phone: { title: "Smartphone", desc: "iPhone/Android Phone" },
        both: { title: "Both Devices", desc: "Support Combo" },
      },
      issues: {
        optimization: "System optimization, slowness, disk cleanup",
        security: "Security audit, virus and malware removal",
        software: "Specialized software installation, backup & cloud",
        crash: "OS reinstallation, locked/frozen system restoration",
        consult: "General consulting, safe and complete data migration",
      },
      summary: {
        title: "Service Summary",
        badge: "Estimated Cost",
        channelLabel: "CHANNEL",
        deviceLabel: "DEVICE",
        arrivalLabel: "ESTIMATED ARRIVAL",
        costLabel: "ESTIMATED SERVICE COST",
        freeDiag: "Free Diagnostics",
        footnote: "Estimates are calculated based on selected symptoms and support channel preferences.",
        whatsappCta: "Request Estimate via WhatsApp",
        copyCta: "Copy Message Text",
        copiedSuccess: "Message Text Copied!",
        footnoteForm: "* All initial estimates and diagnostics are completely free and without any obligation.",
      },
    },
    faqs: {
      kicker: "Guidelines & Clarifications",
      title: "Frequently Asked Questions",
      description: "Understand support mechanics, remote tool protocols, and data safety standards.",
      items: [
        {
          q: "How does Remote Technical Support work?",
          a: "Remote support is performed through certified applications like AnyDesk or TeamViewer. You download the tool, share the temporary access code, and watch the entire process on your screen in real time. The connection is only possible with your explicit permission and terminates permanently when you close the app.",
        },
        {
          q: "What is the 'Free Estimate with No Obligation' guarantee?",
          a: "Unlike traditional repair shops, I offer a 100% free preliminary diagnosis. No contract, payment information, or complex terms are required. You get the diagnosis first, and only authorize the service if you agree with the proposed solution and cost.",
        },
        {
          q: "Are my personal files safe during support?",
          a: "Absolutely. I use end-to-end encrypted remote access software (TeamViewer). You remain in control, watching every mouse click, and can end the session at any time. No personal files are opened unless explicitly requested by you for data recovery.",
        },
        {
          q: "Which neighborhoods are covered by SOS emergency support?",
          a: "Priority on-site support covers Leblon, Ipanema, and Copacabana in Rio de Janeiro's Zona Sul, ensuring rapid response times for urgent cases.",
        },
        {
          q: "What languages is support offered in?",
          a: "Technical support and customer service are offered fluently in English, Spanish, and Portuguese, ensuring clear and precise communication.",
        }
      ],
    },
    footer: {
      text: "Ernesto Scheffer · Rio de Janeiro, Brazil",
    },
    step1: "Device",
    step2: "Symptoms",
    step3: "Method",
    step4: "Result",
    selectDevice: "Select the device needing support",
    computer: "Computer / Laptop",
    phone: "Smartphone / Tablet",
    selectSymptoms: "What symptoms are you experiencing?",
    symptomsList: [
      { id: "slow", label: "Slow system / Freezing" },
      { id: "virus", label: "Viruses / Invasive popups" },
      { id: "startup", label: "System / App won't start" },
      { id: "network", label: "Wi-Fi / Connectivity issues" },
      { id: "backup", label: "Data recovery / Backup" },
      { id: "install", label: "Software installation / Settings" }
    ],
    selectMethod: "How would you like to receive support?",
    remoteOption: "Remote Support (Global)",
    inHomeOption: "In-Home Support (Zona Sul, Rio de Janeiro)",
    urgentOption: "Priority SOS (Urgent Support)",
    yourName: "Your Full Name",
    contactDetails: "Issue or contact details",
    detailsPlaceholder: "Briefly explain the issue",
    sendWhatsAppEstimate: "Send Estimate via WhatsApp",
    calculating: "Calculating estimate...",
    calculateEstimate: "Calculate Price Estimate",
    notFound: {
      title: "Page Not Found",
      description: "Oops! The Technical Cat searched everywhere, but this link does not exist or has been moved.",
      homeButton: "Back Home",
      errorCode: "ERROR CODE: 404 // CONNECTION REFUSED"
    }
  },
  
  es: {
    nav: {
      title: "Ernesto Scheffer",
      techSupport: "Técnico en Software",
      services: "Servicios",
      sosZones: "SOS",
      freeEstimate: "Presupuesto Gratis",
    },
    hero: {
      badge: "Soporte Presencial y Remoto Activo",
      title: "Asistencia Técnica Personalizada",
      techSupportSub: "Computadoras y Celulares",
      description: "Soluciones personalizadas con enfoque en optimización del rendimiento, seguridad digital y configuración del sistema.\n¡Explore nuestros servicios y obtenga una estimación rápida aquí mismo!\nSi lo prefiere, contácteme directamente por WhatsApp.\n¡El presupuesto es gratuito y sin compromiso!",
      estimateDiagnostic: "Estimar Presupuesto",
      exploreOfferings: "Explorar Servicios",
      dataSecure: "100% Datos Protegidos",
      multilingual: "Soporte en Español, Inglés y Portugués",
      urgentArea: "SOS Zona Sul Rio",
    },
    portal: {
      systemIdentity: "Servicios Exclusivos",
      supportTitle: "Ernesto Scheffer",
      securePortal: "PORTAL SEGURO V2.4 // GLOBAL",
      inHomeAssist: "Soporte Presencial en la Zona Sur de Río",
      remoteDiag: "Diagnóstico Remoto Global Certificado",
      noAttachment: "Garantía de Presupuesto Sin Compromiso",
      clarityStatus: "ESTADO DE DISPONIBILIDAD",
      onlineStatus: "100% ACTIVO",
    },
    capabilities: {
      kicker: "Capacidades de Negocio",
      title: "Servicios Técnicos Principais",
      description: "Descubra cómo brindamos soporte técnico, diagnósticos optimizados y asistencia enfocada localmente en Río y en todo el mundo.",
      activeText: "ACTIVO // ✦",
      selectText: "SELECCIONAR",
      requestEstimate: "Solicitar Presupuesto Gratis",
      services: {
        remote: {
          title: "Soporte Remoto",
          subtitle: "Asistencia Global",
          tag: "Conexión Segura",
          description: "Asistencia segura e inmediata a través de herramientas remotas certificadas en cualquier parte del mundo. Ideal para optimización, diagnósticos e instalación de software.",
          points: [
            "Sesiones visuales encriptadas",
            "Soporte en Español, Inglés y Portugués",
            "Configuración de backup seguro",
          ],
        },
        sos: {
          title: "SOS - Soporte Urgente",
          subtitle: "Leblon · Ipanema · Copacabana",
          tag: "Respuesta Inmediata",
          description: "Recuperación de software de alta prioridad para fallas de sistema urgentes, bucles de inicio o brechas de seguridad en la Zona Sur de Río.",
          points: [
            "Reserva de emergencia prioritaria",
            "Contención y eliminación de virus",
            "Restauración crítica del sistema",
            "Diagnóstico y reparación inmediatos",
          ],
        },
        home: {
          title: "Soporte a Domicilio",
          subtitle: "Zona Sur, Río de Janeiro",
          tag: "Cuidado Personalizado",
          description: "Conveniente reparación de software en el lugar, configuraciones y limpiezas del sistema. Perfecto para revisiones detalladas en la comodidad de su hogar u oficina.",
          points: [
            "Servicio en su hogar u oficina",
            "Configuración de Wi-Fi y red doméstica",
            "Control de integración de hardware y software",
            "Sin necesidad de trasladar sus dispositivos",
          ],
        },
        multilingual: {
          title: "Atención Especializada",
          subtitle: "Español · Inglés · Portugués",
          tag: "Estándares de Excelencia",
          description: "Asistencia clara, fluida y sin tecnicismos complicados para garantizar que entienda cada paso del diagnóstico y reparación de su sistema.",
          points: [
            "Charla técnica simplificada",
            "Informes en su idioma de preferencia",
            "Explicaciones claras y accesibles",
            "Experiencia de servicio de alta calidad",
          ],
        },
        estimate: {
          title: "Presupuesto Gratis",
          subtitle: "Sin Ataduras",
          tag: "Precio Justo",
          description: "Diagnósticos completos y transparentes antes de comenzar cualquier reparación. Absolutamente cero tarifas ocultas o compromisos técnicos.",
          points: [
            "Asistencia personalizada",
            "Claridad en el acuerdo de precios",
            "Sin compromiso de cerrar el trato",
          ],
        },
      },
    },
    sos: {
      kicker: "SOS - Contacto Inmediato",
      title: "Soporte Rápido para Casos Urgentes",
      description: "¿Sufre de fallas críticas de inicio, pantallas negras, pérdida de credenciales o infecciones de virus? Ofrezco soluciones de emergencia de alta prioridad.",
      coverageHeader: "Cobertura Presencial Local",
      neighborhoods: "Leblon · Ipanema · Copacabana",
      coverageDesc: "Llegada rápida y atención veloz para situaciones de emergencia.",
      cards: {
        security: {
          title: "Limpieza de Seguridad",
          desc: "Eliminación completa de software malicioso, spyware, keyloggers y corrección de configuraciones para proteger sus archivos confidenciales.",
        },
        restore: {
          title: "Restauración de Sistema",
          desc: "Reinstalación rápida del sistema operativo, reparación de software dinámico y recuperación de inicio para computadoras congeladas.",
        },
        wifi: {
          title: "Configuración de Wi-Fi y Red",
          desc: "Configuración de red altamente segura para evitar la interceptación o alteración de datos en conexiones domésticas o públicas.",
        },
        performance: {
          title: "Optimización de Rendimiento",
          desc: "Limpieza profunda de programas de inicio ocultos, desactivación de procesos pesados en memoria y ajuste del sistema para recuperar la velocidad máxima.",
        },
      },
    },
    estimator: {
      kicker: "Análisis de Presupuesto Previo",
      title: "Estimación Rápida",
      description: "Seleccione los síntomas de su dispositivo para generar una estimación de costo y contactarme.",
      step1: "1. Canal de Servicio",
      step2: "2. Categoría de Dispositivo",
      step3: "3. Problema Principal de Software",
      channels: {
        remote: { title: "Sesión Remota", desc: "Soporte Global" },
        home: { title: "A Domicilio", desc: "Zona Sur de Río" },
        sos: { title: "SOS Urgente", desc: "Respuesta Prioritaria" },
      },
      devices: {
        computer: { title: "PC / Mac", desc: "Computadora" },
        phone: { title: "Smartphone", desc: "Celular iPhone/Android" },
        both: { title: "Ambos Dispositivos", desc: "Combo de Soporte" },
      },
      issues: {
        optimization: "Optimización de sistema, lentitud, limpieza de disco",
        security: "Auditoría de seguridad, eliminación de virus y malware",
        software: "Instalación de software especializado, copia de seguridad y nube",
        crash: "Reinstalación de SO, restauración de sistema bloqueado/congelado",
        consult: "Consultoría general, migración completa y segura de datos",
      },
      summary: {
        title: "Resumen del Servicio",
        badge: "Costo Estimado",
        channelLabel: "CANAL",
        deviceLabel: "DISPOSITIVO",
        arrivalLabel: "LLEGADA ESTIMADA",
        costLabel: "COSTO ESTIMADO DEL SERVICIO",
        freeDiag: "Diagnóstico Gratis",
        footnote: "Las estimaciones se calculan en base a los síntomas seleccionados y las preferencias del canal de soporte.",
        whatsappCta: "Solicitar Presupuesto por WhatsApp",
        copyCta: "Copiar Texto del Mensaje",
        copiedSuccess: "¡Texto de mensaje copiado!",
        footnoteForm: "* Todos los diagnósticos y estimaciones iniciales son totalmente gratuitos y sin compromiso.",
      },
    },
    faqs: {
      kicker: "Pautas y Aclaraciones",
      title: "Preguntas Frecuentes",
      description: "Entenda la mecánica del soporte, protocolos de herramientas remotas y estándares de seguridad de datos.",
      items: [
        {
          q: "¿Cómo funciona el Soporte Técnico Remoto?",
          a: "El soporte remoto se realiza a través de aplicaciones certificadas como AnyDesk o TeamViewer. Descarga la herramienta, comparte el código de acceso temporal y observa todo el proceso en tu pantalla en tiempo real. La conexión solo es posible con su autorización explícita y se cierra permanentemente al cerrar la app.",
        },
        {
          q: "¿Qué es la garantía de 'Presupuesto Gratis sin Compromiso'?",
          a: "A diferencia de los talleres tradicionales, ofrezco un diagnóstico preliminar 100% gratuito. No se requieren contratos, datos de pago ni términos complejos. Primero recibe el diagnóstico y solo autoriza el servicio si está de acuerdo con la solución y el costo propuestos.",
        },
        {
          q: "¿Están seguros mis datos personales durante el soporte?",
          a: "Totalmente. Utilizo software de acceso remoto cifrado de extremo a extremo (TeamViewer). Usted mantiene el control, viendo cada clic del mouse, y puede finalizar la sesión en cualquier momento. No se visualizan archivos personales a menos que lo solicite explícitamente para la recuperación de datos.",
        },
        {
          q: "¿Qué barrios están cubiertos por el soporte de emergencia SOS?",
          a: "El soporte presencial prioritario cubre Leblon, Ipanema y Copacabana en la Zona Sur de Río de Janeiro, garantizando tiempos de respuesta rápidos para casos urgentes.",
        },
        {
          q: "¿En qué idiomas se ofrece el soporte?",
          a: "El soporte técnico y la atención al cliente se ofrecen con fluidez en español, inglés y portugués, lo que garantiza una comunicación clara y precisa.",
        }
      ],
    },
    footer: {
      text: "Ernesto Scheffer · Río de Janeiro, Brasil",
    },
    step1: "Dispositivo",
    step2: "Síntomas",
    step3: "Formato",
    step4: "Resultado",
    selectDevice: "Seleccione el dispositivo que necesita soporte",
    computer: "Computadora / Portátil",
    phone: "Teléfono / Tableta",
    selectSymptoms: "¿Qué problemas está experimentando?",
    symptomsList: [
      { id: "slow", label: "Síntomas lentos / Congelamiento" },
      { id: "virus", label: "Virus / Ventanas emergentes invasivas" },
      { id: "startup", label: "El sistema o aplicación no inicia" },
      { id: "network", label: "Problemas de Wi-Fi / Conectividad" },
      { id: "backup", label: "Recuperación de datos / Respaldo" },
      { id: "install", label: "Instalación de software / Ajustes" }
    ],
    selectMethod: "¿Cómo desea recibir el soporte?",
    remoteOption: "Soporte Remoto (Global)",
    inHomeOption: "Soporte a Domicilio (Zona Sur, Río de Janeiro)",
    urgentOption: "SOS Prioritario (Atención Urgente)",
    yourName: "Su Nombre Completo",
    contactDetails: "Detalles del problema o contacto",
    detailsPlaceholder: "Explique brevemente el problema",
    sendWhatsAppEstimate: "Enviar Presupuesto por WhatsApp",
    calculating: "Calculando estimación...",
    calculateEstimate: "Calcular Estimación de Presupuesto",
    notFound: {
      title: "Página no encontrada",
      description: "¡Oops! El Gato Técnico buscó por todas partes, pero este enlace no existe o fue movido.",
      homeButton: "Volver al Inicio",
      errorCode: "CÓDIGO DE ERROR: 404 // CONEXIÓN RECHAZADA"
    }
  }
};
