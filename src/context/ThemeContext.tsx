import React, { createContext, useContext, useState, useEffect, useMemo, type ReactNode } from 'react';
import type { ThemeName, ThemeContextValue } from '../themes/types';
import { getTheme } from '../themes';

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export interface ThemeProviderProps {
    children: ReactNode;
    defaultTheme?: ThemeName;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
    children,
    defaultTheme = 'default',
}) => {
    const [themeName, setThemeName] = useState<ThemeName>(defaultTheme);
    const theme = useMemo(() => getTheme(themeName), [themeName]);

    // Apply CSS variables to document root
    useEffect(() => {
        const root = document.documentElement;

        // Colors
        root.style.setProperty('--theme-primary', theme.colors.primary);
        root.style.setProperty('--theme-primary-hover', theme.colors.primaryHover);
        root.style.setProperty('--theme-secondary', theme.colors.secondary);
        root.style.setProperty('--theme-secondary-hover', theme.colors.secondaryHover);
        root.style.setProperty('--theme-success', theme.colors.success);
        root.style.setProperty('--theme-error', theme.colors.error);
        root.style.setProperty('--theme-warning', theme.colors.warning);
        root.style.setProperty('--theme-info', theme.colors.info);
        root.style.setProperty('--theme-text', theme.colors.text);
        root.style.setProperty('--theme-text-secondary', theme.colors.textSecondary);
        root.style.setProperty('--theme-background', theme.colors.background);
        root.style.setProperty('--theme-background-secondary', theme.colors.backgroundSecondary);
        root.style.setProperty('--theme-border', theme.colors.border);
        root.style.setProperty('--theme-border-focus', theme.colors.borderFocus);
        root.style.setProperty('--theme-disabled', theme.colors.disabled);
        root.style.setProperty('--theme-disabled-text', theme.colors.disabledText);

        // Spacing
        root.style.setProperty('--theme-spacing-xs', theme.spacing.xs);
        root.style.setProperty('--theme-spacing-sm', theme.spacing.sm);
        root.style.setProperty('--theme-spacing-md', theme.spacing.md);
        root.style.setProperty('--theme-spacing-lg', theme.spacing.lg);
        root.style.setProperty('--theme-spacing-xl', theme.spacing.xl);

        // Typography
        root.style.setProperty('--theme-font-family', theme.typography.fontFamily);
        root.style.setProperty('--theme-font-size-xs', theme.typography.fontSize.xs);
        root.style.setProperty('--theme-font-size-sm', theme.typography.fontSize.sm);
        root.style.setProperty('--theme-font-size-md', theme.typography.fontSize.md);
        root.style.setProperty('--theme-font-size-lg', theme.typography.fontSize.lg);
        root.style.setProperty('--theme-font-size-xl', theme.typography.fontSize.xl);
        root.style.setProperty('--theme-font-weight-normal', theme.typography.fontWeight.normal.toString());
        root.style.setProperty('--theme-font-weight-medium', theme.typography.fontWeight.medium.toString());
        root.style.setProperty('--theme-font-weight-semibold', theme.typography.fontWeight.semibold.toString());
        root.style.setProperty('--theme-font-weight-bold', theme.typography.fontWeight.bold.toString());
        root.style.setProperty('--theme-line-height-tight', theme.typography.lineHeight.tight.toString());
        root.style.setProperty('--theme-line-height-normal', theme.typography.lineHeight.normal.toString());
        root.style.setProperty('--theme-line-height-relaxed', theme.typography.lineHeight.relaxed.toString());

        // Borders
        root.style.setProperty('--theme-radius-none', theme.borders.radius.none);
        root.style.setProperty('--theme-radius-sm', theme.borders.radius.sm);
        root.style.setProperty('--theme-radius-md', theme.borders.radius.md);
        root.style.setProperty('--theme-radius-lg', theme.borders.radius.lg);
        root.style.setProperty('--theme-radius-full', theme.borders.radius.full);
        root.style.setProperty('--theme-border-thin', theme.borders.width.thin);
        root.style.setProperty('--theme-border-normal', theme.borders.width.normal);
        root.style.setProperty('--theme-border-thick', theme.borders.width.thick);

        // Shadows
        root.style.setProperty('--theme-shadow-none', theme.shadows.none);
        root.style.setProperty('--theme-shadow-sm', theme.shadows.sm);
        root.style.setProperty('--theme-shadow-md', theme.shadows.md);
        root.style.setProperty('--theme-shadow-lg', theme.shadows.lg);
        root.style.setProperty('--theme-shadow-xl', theme.shadows.xl);

        // Transitions
        root.style.setProperty('--theme-transition-fast', theme.transitions.fast);
        root.style.setProperty('--theme-transition-normal', theme.transitions.normal);
        root.style.setProperty('--theme-transition-slow', theme.transitions.slow);
    }, [theme]);

    const value: ThemeContextValue = {
        theme,
        themeName,
        setTheme: setThemeName,
    };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextValue => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
