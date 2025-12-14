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
