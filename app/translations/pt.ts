const pt = {
  nav: {
    about: 'Sobre',
    projects: 'Projetos',
    skills: 'Habilidades',
    experience: 'Experiência',
    contact: 'Contato',
  },
  header: {
    viewResume: 'Ver Currículo',
    downloadCV: 'Baixar CV',
    switchToLight: 'Alternar para modo claro',
    switchToDark: 'Alternar para modo escuro',
    toggleMenu: 'Alternar menu mobile',
  },
  hero: {
    typewriter: [
      'Olá, sou Alberto Hamuyela',
      'Estudante de Engenharia de Software',
      'Desenvolvedor Full-Stack',
      'Product Builder',
      'Fundador da Cur10usX',
    ],
    available: 'Disponível para oportunidades',
    viewProjects: 'Ver Projetos',
    resume: 'Currículo',
    tagline:
      'Crio produtos full-stack do início ao fim — desde o design da interface até a arquitetura do backend, bancos de dados e deployment. Atualmente estou a construir a Cur10usX, uma plataforma EdTech focada em melhorar a educação através da tecnologia.',
    developer: 'Desenvolvedor',
    scroll: 'Scroll',
  },
  about: {
    heading: '... /Sobre mim ...',
    body: 'Sou um desenvolvedor full-stack autodidata e estudante de engenharia de software na 42 Luanda, onde o aprendizado acontece através da resolução de problemas, colaboração e construção de sistemas reais.\n\nTenho interesse em entender o software como um todo — não apenas peças isoladas. Gosto de trabalhar em toda a stack, desde interfaces frontend até sistemas backend, infraestrutura e arquitetura de produto.\n\nAtualmente, estou a construir a Cur10usX, uma plataforma SaaS EdTech projetada para Angola, focada em gestão escolar, desempenho académico e conectar a educação com oportunidades.\n\nO que mais me motiva é construir produtos úteis, resolver problemas reais e aprender continuamente através da execução.',
    techStack: 'Stack de Tecnologias',
    techStackSub: 'Ferramentas, tecnologias e sistemas com que trabalho',
    all: 'Todos',
  },
  experience: {
    subtitle: 'Algumas das minhas {highlight} e ferramentas que uso',
    work: 'Trabalho',
    totalLabel: 'Experiência total de trabalho',
  },
  projects: {
    title: 'Projetos',
    subtitle: 'Coisas que construí',
    gridView: 'Visualização em grade',
    carouselView: 'Visualização em carrossel',
    grid: 'Grade',
    carousel: 'Carrossel',
    viewDetails: 'Ver Detalhes',
    liveDemo: 'Demo Online',
    code: 'Código',
    previous: 'Projeto anterior',
    next: 'Próximo projeto',
    goTo: 'Ir para projeto {n}',
  },
  footer: {
    heading: 'Vamos trabalhar juntos',
    subtitle:
      'Sempre aberto a estágios, colaborações e projetos ambiciosos.',
    emailPlaceholder: 'Seu email',
    messagePlaceholder: 'Sua mensagem',
    send: 'Enviar Mensagem',
    sent: 'Enviado!',
    email: 'Email',
    copyright: '© {year} Alberto Hamuyela. Todos os direitos reservados.',
  },
  notFound: {
    title: 'Página não encontrada',
    description: 'A página que você procura não existe ou foi movida.',
    backHome: 'Voltar ao início',
  },
  error: {
    title: 'Algo deu errado',
    defaultMessage: 'Ocorreu um erro inesperado.',
    errorId: 'ID do erro: {digest}',
    retry: 'Tentar novamente',
  },
  language: {
    switchTo: 'Mudar para Inglês',
  },
  resumeUrl: '/resume-pt.pdf',

  projectsData: {
    cur10usx: {
      title: 'Cur10usX',
      description: 'Uma plataforma estudantil que transforma dados académicos em portfólios, crescimento e oportunidades de carreira.',
      longDescription: 'Cur10usX é uma plataforma estudantil abrangente projetada para preencher a lacuna entre o desempenho académico e o desenvolvimento de carreira. Transforma automaticamente notas, projetos e conquistas em portfólios profissionais, acompanha métricas de crescimento e conecta alunos com oportunidades relevantes.',
      features: [
        'Geração automática de portfólio a partir de dados académicos',
        'Acompanhamento de crescimento com análises visuais',
        'Correspondência de oportunidades de carreira',
        'Ferramentas de colaboração em tempo real',
      ],
    },
    socialMedia: {
      title: 'App de Redes Sociais Fullstack',
      description: 'Uma aplicação de rede social full stack com autenticação, usando React, Supabase, PostgreSQL, TailwindCSS e TypeScript.',
      longDescription: 'Uma plataforma de rede social rica em recursos construída com tecnologias web modernas. Inclui autenticação de utilizador, publicações em tempo real, mensagens diretas e um feed responsivo com scroll infinito.',
      features: [
        'Autenticação de utilizador com Supabase',
        'Feed em tempo real com scroll infinito',
        'Sistema de mensagens diretas',
        'Personalização de perfil',
      ],
    },
    restApi: {
      title: 'APIs REST com Node.js',
      description: 'APIs REST escaláveis usando Node.js, Express e MongoDB com autenticação e limitação de taxa.',
      longDescription: 'Um boilerplate de API REST pronto para produção com autenticação JWT, limitação de taxa, validação de pedidos e tratamento abrangente de erros. Construído seguindo princípios de arquitetura limpa.',
      features: [
        'Autenticação e autorização baseada em JWT',
        'Limitação de taxa e validação de pedidos',
        'Tratamento abrangente de erros',
        'Documentação de API Swagger',
      ],
    },
    cSystems: {
      title: '42 Common Core — C e Sistemas',
      description: 'Projetos de programação de baixo nível da 42 Luanda — programação de sistemas, gestão de memória e algoritmos em C.',
      longDescription: 'Parte do currículo Common Core da 42 Luanda. Construí projetos fundamentais ao nível do sistema inteiramente em C — desde a implementação de um clone do printf e uma shell (minishell) até a construção de um renderizador de wireframe 3D (FdF). Estes projetos ensinaram-me gestão de memória, controlo de processos, I/O de ficheiros e a disciplina de trabalhar sem um garbage collector.',
      features: [
        'Construí um clone do printf lidando com múltiplos especificadores de formato e flags',
        'Desenvolvi uma shell Unix mínima com pipes, redirecionamentos e built-ins',
        'Criei um renderizador de wireframe 3D usando o algoritmo de linha de Bresenham',
      ],
    },
    cppOop: {
      title: '42 Common Core — C++ e OOP',
      description: 'Projetos orientados a objetos em C++ explorando herança, polimorfismo, templates e STL.',
      longDescription: 'Uma série de módulos e projetos C++ concluídos na 42 Luanda cobrindo todo o espetro de OOP — desde classes e funções membros até templates, smart pointers e contentores STL. Cada módulo adicionou complexidade: alocadores de tamanho fixo, padrões de iteradores, re-implementações de contentores e programação genérica type-safe.',
      features: [
        'Reimplementei contentores STL (vector, map, stack) do zero',
        'Construí um alocador de memória de tamanho fixo com placement new',
        'Explorei herança múltipla, tabelas virtuais e padrões RAII',
      ],
    },
  },

  skillsData: {
    technical: 'Competências Técnicas (Core)',
    software: 'Engenharia de Software (42 / Base sólida)',
    product: 'Produto e Arquitetura',
    frontend: 'Frontend e UX',
    interest: 'Interesse técnico',
    soft: 'Soft Skills',
  },

  experienceData: {
    cur10usx: {
      role: 'Fundador e Lead Developer',
      description: 'Construindo uma plataforma SaaS EdTech do zero para digitalizar a gestão escolar em Angola e capacitar os alunos com ferramentas para acompanhar o seu crescimento académico.',
      highlights: [
        'Arquitetou um sistema multi-tenant com controlo de acesso baseado em funções e fluxos de autenticação complexos',
        'Construiu importação de dados em massa, relatórios exportáveis e um dashboard para encarregados de educação em tempo real',
        'Gerindo todas as decisões de produto e técnicas como único programador',
      ],
    },
    school42: {
      role: 'Estudante (Common Core)',
      description: 'A 42 é uma escola de engenharia global sem professores e sem aulas tradicionais — a aprendizagem acontece inteiramente através de projetos e colaboração entre pares. Classificada entre as melhores escolas de programação em todo o mundo, com mais de 50 campi em mais de 30 países.',
      highlights: [
        'Concluindo o Common Core cobrindo C, algoritmos, OS, gestão de memória, redes e desenvolvimento web',
        'Construiu projetos abrangendo programação de baixo nível, infraestrutura e web full-stack',
        'Desenvolveu fortes competências de resolução de problemas e aprendizagem autónoma sob pressão',
      ],
    },
  },

  projectDetail: {
    backHome: 'Voltar ao início',
    keyFeatures: 'Principais Funcionalidades',
    liveDemo: 'Demo Online',
    sourceCode: 'Código Fonte',
  },
} as const;

export default pt;
