export * from './types';
export { defaultTheme } from './default';
export { minimalTheme } from './minimal';
export { modernTheme } from './modern';
export { compactTheme } from './compact';

import type { Theme, ThemeName } from './types';
import { defaultTheme } from './default';
import { minimalTheme } from './minimal';
import { modernTheme } from './modern';
import { compactTheme } from './compact';

export const themes: Record<ThemeName, Theme> = {
    default: defaultTheme,
    minimal: minimalTheme,
    modern: modernTheme,
    compact: compactTheme,
};

export const getTheme = (themeName: ThemeName): Theme => {
    return themes[themeName] || defaultTheme;
};
