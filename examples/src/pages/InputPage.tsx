
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, Card, CardBody } from '@mabesi/react-components';
import { CodeBlock } from '../components/CodeBlock';
import './Pages.css';

export const InputPage: React.FC = () => {
    const [value, setValue] = useState('');

    return (
        <div className="example-page">
            <Link to="/" className="back-link">← Back to Examples</Link>

            <header className="component-page-header">
                <h1>⌨️ Input Component</h1>
                <p className="subtitle">Text fields for user input.</p>
            </header>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Standard Inputs</h2>
                    <p className="section-description">Basic text input with labels and helper text.</p>
                </div>
                <div className="example-item">
                    <Input label="Name" placeholder="John Doe" />
                    <Input
                        label="Email"
                        type="email"
                        placeholder="john@example.com"
                        helperText="We'll never share your email."
                    />
                </div>
                <CodeBlock
                    code={`<Input label="Name" placeholder="John Doe" />
<Input
    label="Email"
    type="email"
    placeholder="john@example.com"
    helperText="We'll never share your email."
/>`}
                    language="tsx"
                />
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">States</h2>
                    <p className="section-description">Error, Disabled, and Controlled states.</p>
                </div>
                <div className="example-item">
                    <Input
                        label="Error State"
                        defaultValue="Invalid Value"
                        error
                        helperText="This field is required."
                    />
                    <Input
                        label="Disabled State"
                        defaultValue="Cannot change me"
                        disabled
                    />
                    <Input
                        label="Controlled Input"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        helperText={`Current character count: ${value.length}`}
                    />
                </div>
                <CodeBlock
                    code={`<Input
    label="Error State"
    defaultValue="Invalid Value"
    error
    helperText="This field is required."
/>
<Input
    label="Disabled State"
    defaultValue="Cannot change me"
    disabled
/>
<Input
    label="Controlled Input"
    value={value}
    onChange={(e) => setValue(e.target.value)}
    helperText={\`Current character count: \${value.length}\`}
/>`}
                    language="tsx"
                />
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Sizes & Adornments</h2>
                </div>
                <div className="example-item">
                    <Input size="small" label="Small" placeholder="Small input" />
                    <Input size="medium" label="Medium" placeholder="Medium input" />
                    <Input size="large" label="Large" placeholder="Large input" />

                    <Input
                        label="With Icon"
                        placeholder="Search..."
                        startAdornment={<span style={{ fontSize: '1.2rem' }}>🔍</span>}
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Password"
                        endAdornment={<span style={{ fontSize: '1.2rem', cursor: 'pointer' }}>👁️</span>}
                    />
                </div>
                <CodeBlock
                    code={`<Input size="small" label="Small" placeholder="Small input" />
<Input size="medium" label="Medium" placeholder="Medium input" />
<Input size="large" label="Large" placeholder="Large input" />

<Input
    label="With Icon"
    placeholder="Search..."
    startAdornment={<span>🔍</span>}
/>
<Input
    label="Password"
    type="password"
    placeholder="Password"
    endAdornment={<span>👁️</span>}
/>`}
                    language="tsx"
                />
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Inside Cards</h2>
                </div>
                <div className="example-item">
                    <Card variant="outlined">
                        <CardBody>
                            <h3>Contact Form</h3>
                            <Input label="Subject" fullWidth />
                            <Input label="Message" fullWidth />
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
};
