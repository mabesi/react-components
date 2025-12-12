import type { Theme } from './types';

export const modernTheme: Theme = {
    name: 'modern',
    colors: {
        primary: '#6366f1',
        primaryHover: '#4f46e5',
        secondary: '#8b5cf6',
        secondaryHover: '#7c3aed',
        success: '#10b981',
        error: '#f43f5e',
        warning: '#f59e0b',
        info: '#06b6d4',
        text: '#1f2937',
        textSecondary: '#6b7280',
        background: '#ffffff',
        backgroundSecondary: '#f9fafb',
        border: '#e5e7eb',
        borderFocus: '#a5b4fc',
        disabled: '#f3f4f6',
        disabledText: '#9ca3af',
    },
    spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
    },
    typography: {
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
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
            sm: '0.25rem',
            md: '0.5rem',
            lg: '0.75rem',
            full: '9999px',
        },
        width: {
            thin: '1px',
            normal: '2px',
            thick: '3px',
        },
    },
    shadows: {
        none: 'none',
        sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
    transitions: {
        fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
        normal: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
        slow: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
};
