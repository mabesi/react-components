import type { Theme } from './types';

export const minimalTheme: Theme = {
    name: 'minimal',
    colors: {
        primary: '#000000',
        primaryHover: '#333333',
        secondary: '#666666',
        secondaryHover: '#444444',
        success: '#22c55e',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6',
        text: '#000000',
        textSecondary: '#666666',
        background: '#ffffff',
        backgroundSecondary: '#fafafa',
        border: '#e5e5e5',
        borderFocus: '#000000',
        disabled: '#f5f5f5',
        disabledText: '#a3a3a3',
    },
    spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
    },
    typography: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            md: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
        },
        fontWeight: {
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
        },
        lineHeight: {
            tight: 1.25,
            normal: 1.5,
            relaxed: 1.75,
        },
    },
    borders: {
        radius: {
            none: '0',
            sm: '0',
            md: '0',
            lg: '0',
            full: '0',
        },
        width: {
            thin: '1px',
            normal: '1px',
            thick: '2px',
        },
    },
    shadows: {
        none: 'none',
        sm: 'none',
        md: 'none',
        lg: 'none',
        xl: 'none',
    },
    transitions: {
        fast: '100ms ease-in-out',
        normal: '200ms ease-in-out',
        slow: '300ms ease-in-out',
    },
};
