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
      title: "Suporte Rápido para Casos Urgentes",
      description: "Enfrentando falhas críticas de inicialização, telas prets, perda de credenciais ou infecção por virus? Ofereço soluções de emergência com alta prioridade.",
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
    calculateEstimate: "Calcular Estimativa de Orçamento"
  },

  en: {
    // ENG
  } as TranslationSet,
  
  es: {
    // ESP
  } as TranslationSet
};
