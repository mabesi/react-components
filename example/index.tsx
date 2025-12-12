import React from 'react';
import { createRoot } from 'react-dom/client';
import { DynamicForm, ThemeProvider, I18nProvider } from '../src';
import type { FormField } from '../src/components/DynamicForm/types';

const App: React.FC = () => {
  const [currentTheme, setCurrentTheme] = React.useState<'default' | 'minimal' | 'modern' | 'compact'>('default');
  const [currentLocale, setCurrentLocale] = React.useState<'en' | 'pt-BR'>('pt-BR');

  // Form configuration with sections
  const fields: FormField[] = [
    // Field outside section
    { preset: 'fullName' },

    // Contact Information Section (collapsible)
    {
      type: 'section',
      title: currentLocale === 'pt-BR' ? 'Informações de Contato' : 'Contact Information',
      collapsible: true,
      fields: [
        { preset: 'email' },
        { preset: 'mobile' },
        { preset: 'phone', validation: [] }, // Override to remove validation
      ]
    },

    // Address Section (collapsible)
    {
      type: 'section',
      title: currentLocale === 'pt-BR' ? 'Endereço' : 'Address',
      collapsible: true,
      defaultExpanded: false, // Start collapsed
      fields: [
        { preset: 'zipCode' },
        { preset: 'address' },
        { preset: 'addressNumber' },
        { preset: 'complement' },
        { preset: 'neighborhood' },
        { preset: 'city' },
        { preset: 'state' },
      ]
    },

    // Documents Section (non-collapsible)
    {
      type: 'section',
      title: currentLocale === 'pt-BR' ? 'Documentos' : 'Documents',
      fields: [
        { preset: 'cpf' },
        { preset: 'rg' },
      ]
    },

    // Terms checkbox outside section
    {
      id: 'terms',
      name: 'terms',
      label: currentLocale === 'pt-BR' ? 'Aceito os termos e condições' : 'I accept the terms and conditions',
      type: 'checkbox',
      validation: [
        {
          type: 'required',
          message: currentLocale === 'pt-BR' ? 'Você deve aceitar os termos' : 'You must accept the terms'
        }
      ]
    }
  ];

  const handleSubmit = (values: any) => {
    console.log('Form submitted:', values);
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <I18nProvider locale={currentLocale}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
          <h1 style={{ marginBottom: '0.5rem' }}>DynamicForm - Sections Example</h1>
          <p style={{ color: '#666', marginBottom: '2rem' }}>
            {currentLocale === 'pt-BR'
              ? 'Demonstração de seções em JSON com campos colapsáveis e não-colapsáveis'
              : 'Demonstration of JSON-based sections with collapsible and non-collapsible fields'}
          </p>

          <div style={{
            marginBottom: '2rem',
            display: 'flex',
            gap: '1rem',
            padding: '1rem',
            backgroundColor: '#f5f5f5',
            borderRadius: '8px'
          }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
                {currentLocale === 'pt-BR' ? 'Tema:' : 'Theme:'}
              </label>
              <select
                value={currentTheme}
                onChange={(e) => setCurrentTheme(e.target.value as any)}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  borderRadius: '4px',
                  border: '1px solid #ddd'
                }}
              >
                <option value="default">Default</option>
                <option value="minimal">Minimal</option>
                <option value="modern">Modern</option>
                <option value="compact">Compact</option>
              </select>
            </div>

            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
                {currentLocale === 'pt-BR' ? 'Idioma:' : 'Language:'}
              </label>
              <select
                value={currentLocale}
                onChange={(e) => setCurrentLocale(e.target.value as any)}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  borderRadius: '4px',
                  border: '1px solid #ddd'
                }}
              >
                <option value="pt-BR">Português (Brasil)</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>

          <DynamicForm
            fields={fields}
            onSubmit={handleSubmit}
            submitLabel={currentLocale === 'pt-BR' ? 'Enviar Formulário' : 'Submit Form'}
            cancelLabel={currentLocale === 'pt-BR' ? 'Cancelar' : 'Cancel'}
            onCancel={() => alert(currentLocale === 'pt-BR' ? 'Cancelado!' : 'Cancelled!')}
          />
        </div>
      </I18nProvider>
    </ThemeProvider>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
