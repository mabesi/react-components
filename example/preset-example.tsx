import 'react-app-polyfill/ie11';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { DynamicForm, FormField } from '../src';

const PresetExample = () => {
    const fields: FormField[] = [
        // ==================== Personal Information Section ====================
        {
            preset: 'fullName',
        },
        {
            preset: 'email',
        },
        {
            preset: 'password',
        },
        {
            preset: 'confirmPassword',
        },
        {
            preset: 'birthDate',
        },

        // ==================== Contact Information Section ====================
        {
            preset: 'mobile',
            // Example of overriding preset label
            label: 'Celular (WhatsApp)',
        },
        {
            preset: 'phone',
            // Example of making a field optional (removing required validation)
            validation: [],
        },

        // ==================== Address Information Section ====================
        {
            preset: 'zipCode',
        },
        {
            preset: 'address',
        },
        {
            preset: 'addressNumber',
        },
        {
            preset: 'complement',
            // Complement is optional by default, no validation needed
        },
        {
            preset: 'neighborhood',
        },
        {
            preset: 'city',
        },
        {
            preset: 'state',
        },
        {
            preset: 'country',
            // Country has default value 'Brasil' from preset
        },

        // ==================== Documents Section ====================
        {
            preset: 'cpf',
        },
        {
            preset: 'rg',
            // Example of making RG optional
            validation: [],
        },

        // ==================== Custom Field (no preset) ====================
        {
            id: 'terms',
            name: 'terms',
            label: 'Aceito os termos e condições',
            type: 'checkbox',
            validation: [
                {
                    type: 'custom',
                    message: 'Você deve aceitar os termos e condições',
                    validator: (value: any) => value === true,
                },
            ],
        },
    ];

    const handleSubmit = async (values: any) => {
        console.log('Form submitted with values:', values);
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
        alert('Formulário enviado com sucesso!\n\n' + JSON.stringify(values, null, 2));
    };

    return (
        <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            <h1>DynamicForm - Exemplo com Presets</h1>

            <div style={{ marginBottom: '2rem', padding: '1rem', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
                <h2 style={{ marginTop: 0 }}>Como usar os Presets</h2>
                <p>
                    Com o sistema de presets, você não precisa mais definir todos os parâmetros para campos comuns.
                    Basta informar o <code>preset</code> e todos os valores padrão serão aplicados automaticamente:
                </p>
                <ul>
                    <li><strong>id</strong>, <strong>name</strong>, <strong>label</strong> - Configurados automaticamente</li>
                    <li><strong>type</strong> - Tipo de input apropriado</li>
                    <li><strong>placeholder</strong> - Exemplo de preenchimento</li>
                    <li><strong>validation</strong> - Regras de validação padrão</li>
                </ul>
                <p>
                    Você pode sobrescrever qualquer valor padrão simplesmente informando o parâmetro que deseja alterar.
                </p>

                <h3>Presets Disponíveis:</h3>
                <ul style={{ columns: 2, columnGap: '2rem' }}>
                    <li><code>firstName</code>, <code>lastName</code>, <code>fullName</code></li>
                    <li><code>email</code>, <code>password</code>, <code>confirmPassword</code></li>
                    <li><code>birthDate</code>, <code>age</code></li>
                    <li><code>phone</code>, <code>mobile</code></li>
                    <li><code>address</code>, <code>addressNumber</code>, <code>complement</code></li>
                    <li><code>neighborhood</code>, <code>city</code>, <code>state</code>, <code>country</code>, <code>zipCode</code></li>
                    <li><code>cpf</code>, <code>cnpj</code>, <code>rg</code></li>
                </ul>
            </div>

            <h2>Formulário de Cadastro Completo</h2>

            <DynamicForm
                fields={fields}
                onSubmit={handleSubmit}
                submitLabel="Cadastrar"
                validateOnBlur={true}
            />

            <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#e8f5e9', borderRadius: '8px' }}>
                <h3 style={{ marginTop: 0 }}>Exemplos de Código</h3>

                <h4>1. Campo com preset padrão:</h4>
                <pre style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '4px', overflow: 'auto' }}>
                    {`{
  preset: 'email'
}`}
                </pre>

                <h4>2. Campo com preset + override de label:</h4>
                <pre style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '4px', overflow: 'auto' }}>
                    {`{
  preset: 'mobile',
  label: 'Celular (WhatsApp)'
}`}
                </pre>

                <h4>3. Campo com preset + validação customizada:</h4>
                <pre style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '4px', overflow: 'auto' }}>
                    {`{
  preset: 'phone',
  validation: [] // Remove validação obrigatória
}`}
                </pre>

                <h4>4. Campo customizado (sem preset):</h4>
                <pre style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '4px', overflow: 'auto' }}>
                    {`{
  id: 'terms',
  name: 'terms',
  label: 'Aceito os termos',
  type: 'checkbox',
  validation: [...]
}`}
                </pre>
            </div>
        </div>
    );
};

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(<PresetExample />);
}
