import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DynamicForm, useTheme, useI18n } from '@mabesi/react-components';
import './ExamplePage.css';

export default function DynamicFormPage() {
    const { themeName, setTheme } = useTheme();
    const { locale, setLocale } = useI18n();
    const [submittedData, setSubmittedData] = useState<any>(null);

    const fields = [
        { preset: 'fullName' },
        { preset: 'email' },

        {
            type: 'section',
            title: 'Contact Information',
            collapsible: true,
            defaultExpanded: true,
            fields: [
                { preset: 'mobile' },
                { preset: 'phone' }
            ]
        },

        {
            type: 'section',
            title: 'Address',
            collapsible: true,
            defaultExpanded: false,
            fields: [
                { preset: 'zipCode' },
                { preset: 'address' },
                { preset: 'city' },
                { preset: 'state' },
                { preset: 'country' }
            ]
        },

        { preset: 'password' },
        { preset: 'confirmPassword' }
    ];

    const handleSubmit = (values: any) => {
        console.log('Form submitted:', values);
        setSubmittedData(values);
    };

    const handleCancel = () => {
        console.log('Form cancelled');
        setSubmittedData(null);
    };

    return (
        <div className="example-page">
            <Link to="/" className="back-link">← Back to Examples</Link>

            <h1>📝 DynamicForm Component</h1>
            <p className="subtitle">Build complex forms from simple JSON configurations</p>

            <div className="controls">
                <div className="control-group">
                    <label>Theme:</label>
                    <select value={themeName} onChange={(e) => setTheme(e.target.value as any)}>
                        <option value="default">Default</option>
                        <option value="minimal">Minimal</option>
                        <option value="modern">Modern</option>
                        <option value="compact">Compact</option>
                    </select>
                </div>

                <div className="control-group">
                    <label>Language:</label>
                    <select value={locale} onChange={(e) => setLocale(e.target.value as any)}>
                        <option value="en">English</option>
                        <option value="pt-BR">Português (BR)</option>
                    </select>
                </div>
            </div>

            <div className="content-container">
                <DynamicForm
                    fields={fields as any}
                    onSubmit={handleSubmit}
                    onCancel={handleCancel}
                />
            </div>

            {submittedData && (
                <div className="result">
                    <h3>✅ Form Submitted Successfully!</h3>
                    <pre>{JSON.stringify(submittedData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}
