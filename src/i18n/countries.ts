import type { Locale } from './types';

export interface Country {
    code: string;
    name: Record<Locale, string>;
}

// Top 50 most common countries with translations
export const countries: Country[] = [
    { code: 'US', name: { 'en': 'United States', 'pt-BR': 'Estados Unidos' } },
    { code: 'BR', name: { 'en': 'Brazil', 'pt-BR': 'Brasil' } },
    { code: 'GB', name: { 'en': 'United Kingdom', 'pt-BR': 'Reino Unido' } },
    { code: 'CA', name: { 'en': 'Canada', 'pt-BR': 'Canadá' } },
    { code: 'AU', name: { 'en': 'Australia', 'pt-BR': 'Austrália' } },
    { code: 'DE', name: { 'en': 'Germany', 'pt-BR': 'Alemanha' } },
    { code: 'FR', name: { 'en': 'France', 'pt-BR': 'França' } },
    { code: 'IT', name: { 'en': 'Italy', 'pt-BR': 'Itália' } },
    { code: 'ES', name: { 'en': 'Spain', 'pt-BR': 'Espanha' } },
    { code: 'MX', name: { 'en': 'Mexico', 'pt-BR': 'México' } },
    { code: 'AR', name: { 'en': 'Argentina', 'pt-BR': 'Argentina' } },
    { code: 'CL', name: { 'en': 'Chile', 'pt-BR': 'Chile' } },
    { code: 'CO', name: { 'en': 'Colombia', 'pt-BR': 'Colômbia' } },
    { code: 'PE', name: { 'en': 'Peru', 'pt-BR': 'Peru' } },
    { code: 'VE', name: { 'en': 'Venezuela', 'pt-BR': 'Venezuela' } },
    { code: 'PT', name: { 'en': 'Portugal', 'pt-BR': 'Portugal' } },
    { code: 'NL', name: { 'en': 'Netherlands', 'pt-BR': 'Holanda' } },
    { code: 'BE', name: { 'en': 'Belgium', 'pt-BR': 'Bélgica' } },
    { code: 'CH', name: { 'en': 'Switzerland', 'pt-BR': 'Suíça' } },
    { code: 'AT', name: { 'en': 'Austria', 'pt-BR': 'Áustria' } },
    { code: 'SE', name: { 'en': 'Sweden', 'pt-BR': 'Suécia' } },
    { code: 'NO', name: { 'en': 'Norway', 'pt-BR': 'Noruega' } },
    { code: 'DK', name: { 'en': 'Denmark', 'pt-BR': 'Dinamarca' } },
    { code: 'FI', name: { 'en': 'Finland', 'pt-BR': 'Finlândia' } },
    { code: 'PL', name: { 'en': 'Poland', 'pt-BR': 'Polônia' } },
    { code: 'CZ', name: { 'en': 'Czech Republic', 'pt-BR': 'República Tcheca' } },
    { code: 'HU', name: { 'en': 'Hungary', 'pt-BR': 'Hungria' } },
    { code: 'RO', name: { 'en': 'Romania', 'pt-BR': 'Romênia' } },
    { code: 'GR', name: { 'en': 'Greece', 'pt-BR': 'Grécia' } },
    { code: 'TR', name: { 'en': 'Turkey', 'pt-BR': 'Turquia' } },
    { code: 'RU', name: { 'en': 'Russia', 'pt-BR': 'Rússia' } },
    { code: 'UA', name: { 'en': 'Ukraine', 'pt-BR': 'Ucrânia' } },
    { code: 'CN', name: { 'en': 'China', 'pt-BR': 'China' } },
    { code: 'JP', name: { 'en': 'Japan', 'pt-BR': 'Japão' } },
    { code: 'KR', name: { 'en': 'South Korea', 'pt-BR': 'Coreia do Sul' } },
    { code: 'IN', name: { 'en': 'India', 'pt-BR': 'Índia' } },
    { code: 'ID', name: { 'en': 'Indonesia', 'pt-BR': 'Indonésia' } },
    { code: 'TH', name: { 'en': 'Thailand', 'pt-BR': 'Tailândia' } },
    { code: 'VN', name: { 'en': 'Vietnam', 'pt-BR': 'Vietnã' } },
    { code: 'PH', name: { 'en': 'Philippines', 'pt-BR': 'Filipinas' } },
    { code: 'MY', name: { 'en': 'Malaysia', 'pt-BR': 'Malásia' } },
    { code: 'SG', name: { 'en': 'Singapore', 'pt-BR': 'Singapura' } },
    { code: 'NZ', name: { 'en': 'New Zealand', 'pt-BR': 'Nova Zelândia' } },
    { code: 'ZA', name: { 'en': 'South Africa', 'pt-BR': 'África do Sul' } },
    { code: 'EG', name: { 'en': 'Egypt', 'pt-BR': 'Egito' } },
    { code: 'NG', name: { 'en': 'Nigeria', 'pt-BR': 'Nigéria' } },
    { code: 'KE', name: { 'en': 'Kenya', 'pt-BR': 'Quênia' } },
    { code: 'IL', name: { 'en': 'Israel', 'pt-BR': 'Israel' } },
    { code: 'SA', name: { 'en': 'Saudi Arabia', 'pt-BR': 'Arábia Saudita' } },
    { code: 'AE', name: { 'en': 'United Arab Emirates', 'pt-BR': 'Emirados Árabes Unidos' } },
];

export const getCountryOptions = (locale: Locale) => {
    return countries
        .map(country => ({
            value: country.code,
            label: country.name[locale],
        }))
        .sort((a, b) => a.label.localeCompare(b.label, locale));
};

export const getCountryName = (code: string, locale: Locale): string => {
    const country = countries.find(c => c.code === code);
    return country ? country.name[locale] : code;
};
