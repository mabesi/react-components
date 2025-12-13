import { createContext, useContext, useState, useMemo, type ReactNode } from 'react';
import type { Locale, Translations, I18nContextValue } from '../i18n/types';
import { en } from '../i18n/en';
import { ptBR } from '../i18n/pt-BR';

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

const translations: Record<Locale, Translations> = {
    'en': en,
    'pt-BR': ptBR,
};

export interface I18nProviderProps {
    children: ReactNode;
    defaultLocale?: Locale;
    locale?: Locale;
}

export function I18nProvider({
    children,
    defaultLocale = 'en',
    locale: controlledLocale,
}: I18nProviderProps) {
    const [internalLocale, setInternalLocale] = useState<Locale>(defaultLocale);

    // Use controlled locale if provided, otherwise use internal state
    const locale = controlledLocale ?? internalLocale;
    const setLocale = controlledLocale !== undefined ? () => { } : setInternalLocale;

    const t = useMemo(() => translations[locale], [locale]);

    const value: I18nContextValue = {
        locale,
        setLocale,
        t,
    };

    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export const useI18n = (): I18nContextValue => {
    const context = useContext(I18nContext);
    if (!context) {
        throw new Error('useI18n must be used within an I18nProvider');
    }
    return context;
};

export const useTranslation = () => {
    const { t } = useI18n();
    return t;
};
