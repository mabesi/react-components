import React from 'react';
import { createRoot } from 'react-dom/client';
import { DynamicForm, ThemeProvider, I18nProvider, useTheme, useI18n } from '../src';
import type { FormField } from '../src/components/DynamicForm/types';

const FormExample: React.FC = () => {
  const { themeName, setTheme } = useTheme();
  const { locale, setLocale } = useI18n();

  // Form configuration with sections
  const fields: FormField[] = [
    // Field outside section
    { preset: 'fullName' },

    // Contact Information Section (collapsible)
    {
      type: 'section',
      title: locale === 'pt-BR' ? 'Informações de Contato' : 'Contact Information',
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
      title: locale === 'pt-BR' ? 'Endereço' : 'Address',
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
      title: locale === 'pt-BR' ? 'Documentos' : 'Documents',
      fields: [
        { preset: 'cpf' },
        { preset: 'rg' },
      ]
    },

    // Terms checkbox outside section
    {
      id: 'terms',
      name: 'terms',
      label: locale === 'pt-BR' ? 'Aceito os termos e condições' : 'I accept the terms and conditions',
      type: 'checkbox',
      validation: [
        {
          type: 'required',
          message: locale === 'pt-BR' ? 'Você deve aceitar os termos' : 'You must accept the terms'
        }
      ]
    }
  ];

  const handleSubmit = (values: any) => {
    console.log('Form submitted:', values);
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ marginBottom: '0.5rem' }}>DynamicForm - Sections Example</h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        {locale === 'pt-BR'
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
            {locale === 'pt-BR' ? 'Tema:' : 'Theme:'}
          </label>
          <select
            value={themeName}
            onChange={(e) => setTheme(e.target.value as any)}
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
            {locale === 'pt-BR' ? 'Idioma:' : 'Language:'}
          </label>
          <select
            value={locale}
            onChange={(e) => setLocale(e.target.value as any)}
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
        submitLabel={locale === 'pt-BR' ? 'Enviar Formulário' : 'Submit Form'}
        cancelLabel={locale === 'pt-BR' ? 'Cancelar' : 'Cancel'}
        onCancel={() => alert(locale === 'pt-BR' ? 'Cancelado!' : 'Cancelled!')}
      />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="default">
      <I18nProvider locale="pt-BR">
        <FormExample />
      </I18nProvider>
    </ThemeProvider>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
