import type { Theme } from './types';

export const defaultTheme: Theme = {
    name: 'default',
    colors: {
        primary: '#007bff',
        primaryHover: '#0056b3',
        secondary: '#6c757d',
        secondaryHover: '#545b62',
        success: '#28a745',
        error: '#dc3545',
        warning: '#ffc107',
        info: '#17a2b8',
        text: '#212529',
        textSecondary: '#6c757d',
        background: '#ffffff',
        backgroundSecondary: '#f8f9fa',
        border: '#ced4da',
        borderFocus: '#80bdff',
        disabled: '#e9ecef',
        disabledText: '#6c757d',
    },
    spacing: {
        xs: '0.25rem',   // 4px
        sm: '0.5rem',    // 8px
        md: '1rem',      // 16px
        lg: '1.5rem',    // 24px
        xl: '2rem',      // 32px
    },
    typography: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        fontSize: {
            xs: '0.75rem',   // 12px
            sm: '0.875rem',  // 14px
            md: '1rem',      // 16px
            lg: '1.125rem',  // 18px
            xl: '1.25rem',   // 20px
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
            sm: '0.125rem',  // 2px
            md: '0.25rem',   // 4px
            lg: '0.5rem',    // 8px
            full: '9999px',
        },
        width: {
            thin: '1px',
            normal: '2px',
            thick: '4px',
        },
    },
    shadows: {
        none: 'none',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
    transitions: {
        fast: '150ms ease-in-out',
        normal: '300ms ease-in-out',
        slow: '500ms ease-in-out',
    },
};
