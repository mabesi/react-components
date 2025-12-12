import 'react-app-polyfill/ie11';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import {
  DynamicForm,
  FormField,
  ThemeProvider,
  I18nProvider,
  Section,
  useTheme,
  useI18n,
  type ThemeName,
  type Locale
} from '../src';

const ThemeSwitcher = () => {
  const { themeName, setTheme } = useTheme();
  const themes: ThemeName[] = ['default', 'minimal', 'modern', 'compact'];

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label style={{ marginRight: '0.5rem', fontWeight: 'bold' }}>Theme:</label>
      {themes.map(theme => (
        <button
          key={theme}
          onClick={() => setTheme(theme)}
          style={{
            marginRight: '0.5rem',
            padding: '0.5rem 1rem',
            backgroundColor: themeName === theme ? '#007bff' : '#f0f0f0',
            color: themeName === theme ? 'white' : 'black',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          {theme}
        </button>
      ))}
    </div>
  );
};

const LanguageSwitcher = () => {
  const { locale, setLocale } = useI18n();
  const languages: { code: Locale; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'pt-BR', label: 'Português (BR)' },
  ];

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label style={{ marginRight: '0.5rem', fontWeight: 'bold' }}>Language:</label>
      {languages.map(lang => (
        <button
          key={lang.code}
          onClick={() => setLocale(lang.code)}
          style={{
            marginRight: '0.5rem',
            padding: '0.5rem 1rem',
            backgroundColor: locale === lang.code ? '#28a745' : '#f0f0f0',
            color: locale === lang.code ? 'white' : 'black',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

const FormExample = () => {
  const { t } = useI18n();

  const fields: FormField[] = [
    // Personal Information Section
    { preset: 'fullName' },
    { preset: 'email' },
    { preset: 'password' },
    { preset: 'confirmPassword' },
    { preset: 'birthDate' },

    // Contact Information Section
    { preset: 'mobile' },
    { preset: 'phone', validation: [] }, // Optional

    // Address Section
    { preset: 'zipCode' },
    { preset: 'address' },
    { preset: 'addressNumber' },
    { preset: 'complement' },
    { preset: 'neighborhood' },
    { preset: 'city' },
    { preset: 'state' },
    { preset: 'country' }, // Now a select with country list

    // Documents Section
    { preset: 'cpf' },
    { preset: 'rg', validation: [] }, // Optional

    // Terms
    {
      id: 'terms',
      name: 'terms',
      label: t.common.required,
      type: 'checkbox',
      validation: [
        {
          type: 'custom',
          message: t.validation.required,
          validator: (value: any) => value === true,
        },
      ],
    },
  ];

  const handleSubmit = async (values: any) => {
    console.log('Form submitted:', values);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert(t.common.submit + '!\n\n' + JSON.stringify(values, null, 2));
  };

  return (
    <div>
      <Section title={t.fields.fullName + ' & ' + t.fields.email} collapsible defaultExpanded>
        <DynamicForm
          fields={fields.slice(0, 5)}
          onSubmit={handleSubmit}
          submitLabel={t.common.submit}
        />
      </Section>

      <Section title={t.fields.phone + ' & ' + t.fields.mobile} collapsible defaultExpanded>
        <DynamicForm
          fields={fields.slice(5, 7)}
          onSubmit={handleSubmit}
          submitLabel={t.common.submit}
        />
      </Section>

      <Section title={t.fields.address} collapsible defaultExpanded>
        <DynamicForm
          fields={fields.slice(7, 15)}
          onSubmit={handleSubmit}
          submitLabel={t.common.submit}
        />
      </Section>

      <Section title="Documents" collapsible>
        <DynamicForm
          fields={fields.slice(15)}
          onSubmit={handleSubmit}
          submitLabel={t.common.submit}
        />
      </Section>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider defaultTheme="default">
      <I18nProvider defaultLocale="en">
        <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
          <h1>DynamicForm - Complete Example</h1>
          <p>
            Demonstrating: <strong>Themes</strong>, <strong>i18n</strong>, <strong>Field Presets</strong>, and <strong>Section Components</strong>
          </p>

          <ThemeSwitcher />
          <LanguageSwitcher />

          <hr style={{ margin: '2rem 0' }} />

          <FormExample />
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
