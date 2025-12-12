/**
 * Theme configuration interface
 * Defines the structure for all theme variants
 */
export interface Theme {
    name: string;
    colors: {
        primary: string;
        primaryHover: string;
        secondary: string;
        secondaryHover: string;
        success: string;
        error: string;
        warning: string;
        info: string;
        text: string;
        textSecondary: string;
        background: string;
        backgroundSecondary: string;
        border: string;
        borderFocus: string;
        disabled: string;
        disabledText: string;
    };
    spacing: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    typography: {
        fontFamily: string;
        fontSize: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
        fontWeight: {
            normal: number;
            medium: number;
            semibold: number;
            bold: number;
        };
        lineHeight: {
            tight: number;
            normal: number;
            relaxed: number;
        };
    };
    borders: {
        radius: {
            none: string;
            sm: string;
            md: string;
            lg: string;
            full: string;
        };
        width: {
            thin: string;
            normal: string;
            thick: string;
        };
    };
    shadows: {
        none: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    transitions: {
        fast: string;
        normal: string;
        slow: string;
    };
}

export type ThemeName = 'default' | 'minimal' | 'modern' | 'compact';

export interface ThemeContextValue {
    theme: Theme;
    themeName: ThemeName;
    setTheme: (themeName: ThemeName) => void;
}
