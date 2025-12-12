import type { Theme } from './types';

export const compactTheme: Theme = {
    name: 'compact',
    colors: {
        primary: '#0066cc',
        primaryHover: '#0052a3',
        secondary: '#5c6b7a',
        secondaryHover: '#4a5664',
        success: '#28a745',
        error: '#dc3545',
        warning: '#ffc107',
        info: '#17a2b8',
        text: '#212529',
        textSecondary: '#6c757d',
        background: '#ffffff',
        backgroundSecondary: '#f8f9fa',
        border: '#dee2e6',
        borderFocus: '#80bdff',
        disabled: '#e9ecef',
        disabledText: '#6c757d',
    },
    spacing: {
        xs: '0.125rem',  // 2px - reduced
        sm: '0.25rem',   // 4px - reduced
        md: '0.5rem',    // 8px - reduced
        lg: '0.75rem',   // 12px - reduced
        xl: '1rem',      // 16px - reduced
    },
    typography: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        fontSize: {
            xs: '0.6875rem', // 11px - reduced
            sm: '0.8125rem', // 13px - reduced
            md: '0.875rem',  // 14px - reduced
            lg: '1rem',      // 16px - reduced
            xl: '1.125rem',  // 18px - reduced
        },
        fontWeight: {
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
        },
        lineHeight: {
            tight: 1.2,
            normal: 1.4,
            relaxed: 1.6,
        },
    },
    borders: {
        radius: {
            none: '0',
            sm: '0.125rem',
            md: '0.1875rem',
            lg: '0.25rem',
            full: '9999px',
        },
        width: {
            thin: '1px',
            normal: '1px',
            thick: '2px',
        },
    },
    shadows: {
        none: 'none',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
        lg: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        xl: '0 8px 12px -2px rgba(0, 0, 0, 0.1)',
    },
    transitions: {
        fast: '100ms ease-in-out',
        normal: '200ms ease-in-out',
        slow: '400ms ease-in-out',
    },
};
