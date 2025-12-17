import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'pt' | 'en' | 'es';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface Translations {
    [key: string]: {
        pt: string;
        en: string;
        es: string;
    };
}

const translations: Translations = {
    // Header
    'header.title': {
        pt: 'Mabesi React Components',
        en: 'Mabesi React Components',
        es: 'Mabesi React Components',
    },
    'header.github': {
        pt: 'GitHub',
        en: 'GitHub',
        es: 'GitHub',
    },
    'header.npm': {
        pt: 'NPM',
        en: 'NPM',
        es: 'NPM',
    },

    // Library Description
    'library.description': {
        pt: 'Uma biblioteca moderna e completa de componentes React, desenvolvida com TypeScript para garantir máxima segurança de tipos e produtividade. Oferece mais de 20 componentes prontos para uso, totalmente customizáveis através de temas, com suporte nativo a internacionalização e acessibilidade. Perfeita para acelerar o desenvolvimento de aplicações web profissionais.',
        en: 'A modern and complete React component library, built with TypeScript to ensure maximum type safety and productivity. Offers over 20 ready-to-use components, fully customizable through themes, with native support for internationalization and accessibility. Perfect for accelerating the development of professional web applications.',
        es: 'Una biblioteca moderna y completa de componentes React, desarrollada con TypeScript para garantizar máxima seguridad de tipos y productividad. Ofrece más de 20 componentes listos para usar, totalmente personalizables a través de temas, con soporte nativo para internacionalización y accesibilidad. Perfecta para acelerar el desarrollo de aplicaciones web profesionales.',
    },

    // Features Section
    'features.modern.title': {
        pt: 'Componentes Modernos',
        en: 'Modern Components',
        es: 'Componentes Modernos',
    },
    'features.modern.item1': {
        pt: '20+ componentes prontos para uso',
        en: '20+ ready-to-use components',
        es: '20+ componentes listos para usar',
    },
    'features.modern.item2': {
        pt: 'Design responsivo e acessível',
        en: 'Responsive and accessible design',
        es: 'Diseño responsivo y accesible',
    },
    'features.modern.item3': {
        pt: 'Animações suaves e interativas',
        en: 'Smooth and interactive animations',
        es: 'Animaciones suaves e interactivas',
    },
    'features.modern.item4': {
        pt: 'Otimizado para performance',
        en: 'Performance optimized',
        es: 'Optimizado para rendimiento',
    },

    'features.typescript.title': {
        pt: 'TypeScript First',
        en: 'TypeScript First',
        es: 'TypeScript First',
    },
    'features.typescript.item1': {
        pt: 'Totalmente tipado com TypeScript',
        en: 'Fully typed with TypeScript',
        es: 'Totalmente tipado con TypeScript',
    },
    'features.typescript.item2': {
        pt: 'IntelliSense completo na IDE',
        en: 'Full IntelliSense in IDE',
        es: 'IntelliSense completo en IDE',
    },
    'features.typescript.item3': {
        pt: 'Validação em tempo de desenvolvimento',
        en: 'Development-time validation',
        es: 'Validación en tiempo de desarrollo',
    },
    'features.typescript.item4': {
        pt: 'Documentação inline automática',
        en: 'Automatic inline documentation',
        es: 'Documentación inline automática',
    },

    'features.themes.title': {
        pt: 'Temas Customizáveis',
        en: 'Customizable Themes',
        es: 'Temas Personalizables',
    },
    'features.themes.item1': {
        pt: '4 temas pré-configurados',
        en: '4 pre-configured themes',
        es: '4 temas preconfigurados',
    },
    'features.themes.item2': {
        pt: 'Sistema de theming flexível',
        en: 'Flexible theming system',
        es: 'Sistema de temas flexible',
    },
    'features.themes.item3': {
        pt: 'CSS variables para customização',
        en: 'CSS variables for customization',
        es: 'Variables CSS para personalización',
    },
    'features.themes.item4': {
        pt: 'Suporte a modo escuro',
        en: 'Dark mode support',
        es: 'Soporte para modo oscuro',
    },

    'features.i18n.title': {
        pt: 'Internacionalização',
        en: 'Internationalization',
        es: 'Internacionalización',
    },
    'features.i18n.item1': {
        pt: 'Sistema i18n integrado',
        en: 'Integrated i18n system',
        es: 'Sistema i18n integrado',
    },
    'features.i18n.item2': {
        pt: 'Suporte a múltiplos idiomas',
        en: 'Multiple language support',
        es: 'Soporte para múltiples idiomas',
    },
    'features.i18n.item3': {
        pt: 'Traduções automáticas em forms',
        en: 'Automatic form translations',
        es: 'Traducciones automáticas en formularios',
    },
    'features.i18n.item4': {
        pt: 'Fácil adição de novos idiomas',
        en: 'Easy addition of new languages',
        es: 'Fácil adición de nuevos idiomas',
    },

    // Gallery Section
    'gallery.title': {
        pt: 'Galeria de Componentes',
        en: 'Components Gallery',
        es: 'Galería de Componentes',
    },
    'gallery.viewExamples': {
        pt: 'Ver Exemplos →',
        en: 'View Examples →',
        es: 'Ver Ejemplos →',
    },

    // Component descriptions
    'component.accordion.description': {
        pt: 'Seções de conteúdo expansíveis.',
        en: 'Expandable content sections.',
        es: 'Secciones de contenido expandibles.',
    },
    'component.alert.description': {
        pt: 'Mensagens de feedback.',
        en: 'Feedback messages.',
        es: 'Mensajes de retroalimentación.',
    },
    'component.avatar.description': {
        pt: 'Imagens de perfil de usuário.',
        en: 'User profile images.',
        es: 'Imágenes de perfil de usuario.',
    },
    'component.badge.description': {
        pt: 'Indicadores de status.',
        en: 'Status indicators.',
        es: 'Indicadores de estado.',
    },
    'component.breadcrumb.description': {
        pt: 'Hierarquia de navegação.',
        en: 'Navigation hierarchy.',
        es: 'Jerarquía de navegación.',
    },
    'component.button.description': {
        pt: 'Botões padronizados e temáticos.',
        en: 'Standardized, theme-aware buttons.',
        es: 'Botones estandarizados y temáticos.',
    },
    'component.card.description': {
        pt: 'Contêineres de conteúdo flexíveis.',
        en: 'Flexible content containers.',
        es: 'Contenedores de contenido flexibles.',
    },
    'component.checkbox.description': {
        pt: 'Seleções booleanas.',
        en: 'Boolean selections.',
        es: 'Selecciones booleanas.',
    },
    'component.datatable.description': {
        pt: 'Exiba e interaja com dados tabulares com ordenação, paginação e design responsivo.',
        en: 'Display and interact with tabular data featuring sorting, pagination, and responsive design.',
        es: 'Muestre e interactúe con datos tabulares con ordenación, paginación y diseño responsivo.',
    },
    'component.drawer.description': {
        pt: 'Painéis laterais deslizantes.',
        en: 'Sliding side panels.',
        es: 'Paneles laterales deslizantes.',
    },
    'component.dynamicform.description': {
        pt: 'Construa formulários complexos a partir de configurações JSON simples com validação automática e suporte i18n.',
        en: 'Build complex forms from simple JSON configurations with automatic validation and i18n support.',
        es: 'Construya formularios complejos desde configuraciones JSON simples con validación automática y soporte i18n.',
    },
    'component.input.description': {
        pt: 'Campos de texto e entradas.',
        en: 'Text fields & entries.',
        es: 'Campos de texto y entradas.',
    },
    'component.modal.description': {
        pt: 'Diálogos acessíveis, popups e sobreposições acionáveis.',
        en: 'Accessible dialogs, popups, and actionable overlays.',
        es: 'Diálogos accesibles, ventanas emergentes y superposiciones accionables.',
    },
    'component.progress.description': {
        pt: 'Visuais de conclusão.',
        en: 'Completion visuals.',
        es: 'Visuales de finalización.',
    },
    'component.select.description': {
        pt: 'Menus suspensos.',
        en: 'Dropdown menus.',
        es: 'Menús desplegables.',
    },
    'component.skeleton.description': {
        pt: 'Placeholders de carregamento.',
        en: 'Loading placeholders.',
        es: 'Marcadores de carga.',
    },
    'component.spinner.description': {
        pt: 'Indicadores de carregamento.',
        en: 'Loading indicators.',
        es: 'Indicadores de carga.',
    },
    'component.switch.description': {
        pt: 'Interruptores de alternância.',
        en: 'Toggle switches.',
        es: 'Interruptores de alternancia.',
    },
    'component.tabs.description': {
        pt: 'Organize conteúdo em seções.',
        en: 'Organize content into sections.',
        es: 'Organice contenido en secciones.',
    },
    'component.toast.description': {
        pt: 'Mensagens de notificação.',
        en: 'Notification messages.',
        es: 'Mensajes de notificación.',
    },
    'component.tooltip.description': {
        pt: 'Informações contextuais flutuantes.',
        en: 'Floating contextual info.',
        es: 'Información contextual flotante.',
    },

    // Component features
    'component.accordion.feature1': {
        pt: 'Permitir Múltiplos',
        en: 'Allow Multiple',
        es: 'Permitir Múltiples',
    },
    'component.accordion.feature2': {
        pt: 'Acessível',
        en: 'Accessible',
        es: 'Accesible',
    },
    'component.accordion.feature3': {
        pt: 'Animação Suave',
        en: 'Smooth Animation',
        es: 'Animación Suave',
    },
    'component.accordion.feature4': {
        pt: 'Customizável',
        en: 'Customizable',
        es: 'Personalizable',
    },

    'component.alert.feature1': {
        pt: '4 Variantes Semânticas',
        en: '4 Semantic Variants',
        es: '4 Variantes Semánticas',
    },
    'component.alert.feature2': {
        pt: 'Dispensável',
        en: 'Dismissible',
        es: 'Descartable',
    },
    'component.alert.feature3': {
        pt: 'Ícones Personalizados',
        en: 'Custom Icons',
        es: 'Iconos Personalizados',
    },
    'component.alert.feature4': {
        pt: 'Títulos',
        en: 'Titles',
        es: 'Títulos',
    },

    'component.avatar.feature1': {
        pt: 'Imagem/Iniciais',
        en: 'Image/Initials',
        es: 'Imagen/Iniciales',
    },
    'component.avatar.feature2': {
        pt: 'Pontos de Status',
        en: 'Status Dots',
        es: 'Puntos de Estado',
    },
    'component.avatar.feature3': {
        pt: 'Formas',
        en: 'Shapes',
        es: 'Formas',
    },
    'component.avatar.feature4': {
        pt: 'Tamanhos',
        en: 'Sizes',
        es: 'Tamaños',
    },

    'component.badge.feature1': {
        pt: 'Cores e Variantes',
        en: 'Colors & Variants',
        es: 'Colores y Variantes',
    },
    'component.badge.feature2': {
        pt: 'Modo Contornado',
        en: 'Outlined Mode',
        es: 'Modo Contorneado',
    },
    'component.badge.feature3': {
        pt: 'Modo Ponto',
        en: 'Dot Mode',
        es: 'Modo Punto',
    },
    'component.badge.feature4': {
        pt: 'Tamanhos',
        en: 'Sizes',
        es: 'Tamaños',
    },

    'component.breadcrumb.feature1': {
        pt: 'Separadores Automáticos',
        en: 'Auto Separators',
        es: 'Separadores Automáticos',
    },
    'component.breadcrumb.feature2': {
        pt: 'Estado Ativo',
        en: 'Active State',
        es: 'Estado Activo',
    },
    'component.breadcrumb.feature3': {
        pt: 'Acessível',
        en: 'Accessible',
        es: 'Accesible',
    },
    'component.breadcrumb.feature4': {
        pt: 'Customizável',
        en: 'Customizable',
        es: 'Personalizable',
    },

    'component.button.feature1': {
        pt: 'Múltiplas Variantes',
        en: 'Multiple Variants',
        es: 'Múltiples Variantes',
    },
    'component.button.feature2': {
        pt: 'Opções de Tamanho',
        en: 'Size Options',
        es: 'Opciones de Tamaño',
    },
    'component.button.feature3': {
        pt: 'Suporte a Ícones',
        en: 'Icon Support',
        es: 'Soporte de Iconos',
    },
    'component.button.feature4': {
        pt: 'Estado de Carregamento',
        en: 'Loading State',
        es: 'Estado de Carga',
    },

    'component.card.feature1': {
        pt: 'Cabeçalhos e Rodapés',
        en: 'Headers & Footers',
        es: 'Encabezados y Pies',
    },
    'component.card.feature2': {
        pt: 'Suporte a Imagens',
        en: 'Image Support',
        es: 'Soporte de Imágenes',
    },
    'component.card.feature3': {
        pt: 'Consciente de Tema',
        en: 'Theme Aware',
        es: 'Consciente del Tema',
    },
    'component.card.feature4': {
        pt: 'Interativo',
        en: 'Interactive',
        es: 'Interactivo',
    },

    'component.checkbox.feature1': {
        pt: 'Indeterminado',
        en: 'Indeterminate',
        es: 'Indeterminado',
    },
    'component.checkbox.feature2': {
        pt: 'Estados de Erro',
        en: 'Error States',
        es: 'Estados de Error',
    },
    'component.checkbox.feature3': {
        pt: 'SVG Personalizado',
        en: 'Custom SVG',
        es: 'SVG Personalizado',
    },
    'component.checkbox.feature4': {
        pt: 'Totalmente Acessível',
        en: 'Fully Accessible',
        es: 'Totalmente Accesible',
    },

    'component.datatable.feature1': {
        pt: 'Colunas Ordenáveis',
        en: 'Sortable Columns',
        es: 'Columnas Ordenables',
    },
    'component.datatable.feature2': {
        pt: 'Controles de Paginação',
        en: 'Pagination Controls',
        es: 'Controles de Paginación',
    },
    'component.datatable.feature3': {
        pt: 'Seleção de Linhas',
        en: 'Row Selection',
        es: 'Selección de Filas',
    },
    'component.datatable.feature4': {
        pt: 'Responsivo Mobile',
        en: 'Mobile Responsive',
        es: 'Responsivo Móvil',
    },

    'component.drawer.feature1': {
        pt: '4 Posicionamentos',
        en: '4 Placements',
        es: '4 Posicionamientos',
    },
    'component.drawer.feature2': {
        pt: 'Suporte a Backdrop',
        en: 'Backdrop Support',
        es: 'Soporte de Fondo',
    },
    'component.drawer.feature3': {
        pt: 'Tamanhos',
        en: 'Sizes',
        es: 'Tamaños',
    },
    'component.drawer.feature4': {
        pt: 'Captura de Foco',
        en: 'Focus Trap',
        es: 'Trampa de Foco',
    },

    'component.dynamicform.feature1': {
        pt: '30+ Presets de Campos',
        en: '30+ Field Presets',
        es: '30+ Presets de Campos',
    },
    'component.dynamicform.feature2': {
        pt: 'Auto-Tradução',
        en: 'Auto-Translation',
        es: 'Auto-Traducción',
    },
    'component.dynamicform.feature3': {
        pt: 'Seções Recolhíveis',
        en: 'Collapsible Sections',
        es: 'Secciones Plegables',
    },
    'component.dynamicform.feature4': {
        pt: 'Validação Personalizada',
        en: 'Custom Validation',
        es: 'Validación Personalizada',
    },

    'component.input.feature1': {
        pt: 'Labels e Helpers',
        en: 'Labels & Helpers',
        es: 'Etiquetas y Ayudas',
    },
    'component.input.feature2': {
        pt: 'Estados de Validação',
        en: 'Validation States',
        es: 'Estados de Validación',
    },
    'component.input.feature3': {
        pt: 'Adornos',
        en: 'Adornments',
        es: 'Adornos',
    },
    'component.input.feature4': {
        pt: 'Tamanhos',
        en: 'Sizes',
        es: 'Tamaños',
    },

    'component.modal.feature1': {
        pt: 'Navegação por Teclado',
        en: 'Keyboard Navigation',
        es: 'Navegación por Teclado',
    },
    'component.modal.feature2': {
        pt: 'Captura de Foco',
        en: 'Focus Trapping',
        es: 'Trampa de Foco',
    },
    'component.modal.feature3': {
        pt: 'Conteúdo Customizável',
        en: 'Customizable Content',
        es: 'Contenido Personalizable',
    },
    'component.modal.feature4': {
        pt: 'Empilhável',
        en: 'Stackable',
        es: 'Apilable',
    },

    'component.progress.feature1': {
        pt: 'Listrado / Animado',
        en: 'Striped / Animated',
        es: 'Rayado / Animado',
    },
    'component.progress.feature2': {
        pt: 'Cores e Tamanhos',
        en: 'Colors & Sizes',
        es: 'Colores y Tamaños',
    },
    'component.progress.feature3': {
        pt: 'Indeterminado',
        en: 'Indeterminate',
        es: 'Indeterminado',
    },
    'component.progress.feature4': {
        pt: 'Labels',
        en: 'Labels',
        es: 'Etiquetas',
    },

    'component.select.feature1': {
        pt: 'Controles Nativos',
        en: 'Native Controls',
        es: 'Controles Nativos',
    },
    'component.select.feature2': {
        pt: 'Estilização Personalizada',
        en: 'Custom Styling',
        es: 'Estilización Personalizada',
    },
    'component.select.feature3': {
        pt: 'Arrays de Opções',
        en: 'Option Arrays',
        es: 'Arrays de Opciones',
    },
    'component.select.feature4': {
        pt: 'Validação',
        en: 'Validation',
        es: 'Validación',
    },

    'component.skeleton.feature1': {
        pt: 'Texto e Formas',
        en: 'Text & Shapes',
        es: 'Texto y Formas',
    },
    'component.skeleton.feature2': {
        pt: 'Animações',
        en: 'Animations',
        es: 'Animaciones',
    },
    'component.skeleton.feature3': {
        pt: 'Responsivo',
        en: 'Responsive',
        es: 'Responsivo',
    },
    'component.skeleton.feature4': {
        pt: 'Tematizável',
        en: 'Themable',
        es: 'Tematizable',
    },

    'component.spinner.feature1': {
        pt: 'Tamanhos',
        en: 'Sizes',
        es: 'Tamaños',
    },
    'component.spinner.feature2': {
        pt: 'Variantes de Cor',
        en: 'Color Variants',
        es: 'Variantes de Color',
    },
    'component.spinner.feature3': {
        pt: 'Customizável',
        en: 'Customizable',
        es: 'Personalizable',
    },
    'component.spinner.feature4': {
        pt: 'Leve',
        en: 'Lightweight',
        es: 'Ligero',
    },

    'component.switch.feature1': {
        pt: 'Tamanhos',
        en: 'Sizes',
        es: 'Tamaños',
    },
    'component.switch.feature2': {
        pt: 'Cores',
        en: 'Colors',
        es: 'Colores',
    },
    'component.switch.feature3': {
        pt: 'Labels',
        en: 'Labels',
        es: 'Etiquetas',
    },
    'component.switch.feature4': {
        pt: 'Estados',
        en: 'States',
        es: 'Estados',
    },

    'component.tabs.feature1': {
        pt: 'Variantes de Tema',
        en: 'Theme Variants',
        es: 'Variantes de Tema',
    },
    'component.tabs.feature2': {
        pt: 'Modo Controlado',
        en: 'Controlled Mode',
        es: 'Modo Controlado',
    },
    'component.tabs.feature3': {
        pt: 'Acessível',
        en: 'Accessible',
        es: 'Accesible',
    },
    'component.tabs.feature4': {
        pt: 'Responsivo',
        en: 'Responsive',
        es: 'Responsivo',
    },

    'component.toast.feature1': {
        pt: 'Auto Dispensar',
        en: 'Auto Dismiss',
        es: 'Auto Descartar',
    },
    'component.toast.feature2': {
        pt: 'Variantes',
        en: 'Variants',
        es: 'Variantes',
    },
    'component.toast.feature3': {
        pt: 'Posicionamento',
        en: 'Positioning',
        es: 'Posicionamiento',
    },
    'component.toast.feature4': {
        pt: 'Hook Global',
        en: 'Global Hook',
        es: 'Hook Global',
    },

    'component.tooltip.feature1': {
        pt: '4 Posições',
        en: '4 Positions',
        es: '4 Posiciones',
    },
    'component.tooltip.feature2': {
        pt: 'Delays Personalizados',
        en: 'Custom Delays',
        es: 'Retrasos Personalizados',
    },
    'component.tooltip.feature3': {
        pt: 'Acesso por Teclado',
        en: 'Keyboard Access',
        es: 'Acceso por Teclado',
    },
    'component.tooltip.feature4': {
        pt: 'Conteúdo Rico',
        en: 'Rich Content',
        es: 'Contenido Rico',
    },

    // Footer
    'footer.support': {
        pt: 'Apoiar Projetos',
        en: 'Support Projects',
        es: 'Apoyar Proyectos',
    },
    'footer.contact': {
        pt: 'Contato',
        en: 'Contact',
        es: 'Contacto',
    },
    'footer.madeWith': {
        pt: 'Feito com',
        en: 'Made with',
        es: 'Hecho con',
    },
    'footer.by': {
        pt: 'por',
        en: 'by',
        es: 'por',
    },
    'footer.license': {
        pt: 'Licenciado sob',
        en: 'Licensed under',
        es: 'Licenciado bajo',
    },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('pt');

    const t = (key: string): string => {
        return translations[key]?.[language] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
