import React, { createContext, useContext, useState, useMemo, type ReactNode } from 'react';
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
}

export const I18nProvider: React.FC<I18nProviderProps> = ({
    children,
    defaultLocale = 'en',
}) => {
    const [locale, setLocale] = useState<Locale>(defaultLocale);
    const t = useMemo(() => translations[locale], [locale]);

    const value: I18nContextValue = {
        locale,
        setLocale,
        t,
    };

    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

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
