import React from 'react';
import { createRoot } from 'react-dom/client';
import { DynamicForm, ThemeProvider, I18nProvider } from '../src';
import type { FormField } from '../src/components/DynamicForm/types';

const SectionExample: React.FC = () => {
    const [currentTheme, setCurrentTheme] = React.useState<'default' | 'minimal' | 'modern' | 'compact'>('default');
    const [currentLocale, setCurrentLocale] = React.useState<'en' | 'pt-BR'>('pt-BR');

    // Form configuration with sections
    const fields: FormField[] = [
        // Field outside section
        { preset: 'fullName' },

        // Contact Information Section
        {
            type: 'section',
            title: currentLocale === 'pt-BR' ? 'Informações de Contato' : 'Contact Information',
            collapsible: true,
            fields: [
                { preset: 'email' },
                { preset: 'mobile' },
            ]
        },

        // Address Section
        {
            type: 'section',
            title: currentLocale === 'pt-BR' ? 'Endereço' : 'Address',
            collapsible: true,
            fields: [
                { preset: 'zipCode' },
                { preset: 'address' },
                { preset: 'city' },
                { preset: 'state' },
            ]
        },

        // Non-collapsible section
        {
            type: 'section',
            title: currentLocale === 'pt-BR' ? 'Documentos' : 'Documents',
            fields: [
                { preset: 'cpf' },
                { preset: 'rg' },
            ]
        },
    ];

    const handleSubmit = (values: any) => {
        console.log('Form submitted:', values);
        alert(JSON.stringify(values, null, 2));
    };

    return (
        <ThemeProvider defaultTheme={currentTheme}>
            <I18nProvider locale={currentLocale}>
                <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
                    <h1>DynamicForm - Sections Example</h1>

                    <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem' }}>
                        <div>
                            <label>Theme: </label>
                            <select
                                value={currentTheme}
                                onChange={(e) => setCurrentTheme(e.target.value as any)}
                            >
                                <option value="default">Default</option>
                                <option value="minimal">Minimal</option>
                                <option value="modern">Modern</option>
                                <option value="compact">Compact</option>
                            </select>
                        </div>

                        <div>
                            <label>Language: </label>
                            <select
                                value={currentLocale}
                                onChange={(e) => setCurrentLocale(e.target.value as any)}
                            >
                                <option value="pt-BR">Português</option>
                                <option value="en">English</option>
                            </select>
                        </div>
                    </div>

                    <DynamicForm
                        fields={fields}
                        onSubmit={handleSubmit}
                        submitLabel={currentLocale === 'pt-BR' ? 'Enviar' : 'Submit'}
                    />
                </div>
            </I18nProvider>
        </ThemeProvider>
    );
};

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(<SectionExample />);
}
