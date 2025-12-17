import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Checkbox, Card, CardBody } from '@mabesi/react-components';
import { CodeBlock } from '../components/CodeBlock';
import './Pages.css';

export const CheckboxPage: React.FC = () => {
    const [checked, setChecked] = useState(false);
    const [indeterminate, setIndeterminate] = useState(true);

    return (
        <div className="example-page">
            <Link to="/" className="back-link">← Back to Examples</Link>

            <header className="component-page-header">
                <h1>☑️ Checkbox Component</h1>
                <p className="subtitle">Boolean selection controls.</p>
            </header>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Standard Checkboxes</h2>
                    <p className="section-description">Basic boolean inputs.</p>
                </div>
                <div className="example-item">
                    <Checkbox label="Remember me" />
                    <Checkbox label="Subscribe" defaultChecked helperText="Opt-in to our newsletter." />
                </div>
                <CodeBlock
                    code={`<Checkbox label="Remember me" />
<Checkbox label="Subscribe" defaultChecked helperText="Opt-in to our newsletter." />`}
                    language="tsx"
                />
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">States</h2>
                </div>
                <div className="example-item">
                    <Checkbox
                        label="Error State"
                        error
                        helperText="You must agree to continue."
                    />
                    <Checkbox
                        label="Disabled Unchecked"
                        disabled
                    />
                    <Checkbox
                        label="Disabled Checked"
                        disabled
                        defaultChecked
                    />
                </div>
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Indeterminate & Controlled</h2>
                </div>
                <div className="example-item">
                    <Checkbox
                        label="Controlled Indeterminate"
                        indeterminate={indeterminate}
                        checked={true}
                        onChange={() => setIndeterminate(!indeterminate)}
                        helperText="Click to toggle indeterminate state."
                    />

                    <Checkbox
                        label={`Controlled State: ${checked ? 'ON' : 'OFF'}`}
                        checked={checked}
                        onChange={(e) => setChecked(e.target.checked)}
                    />
                </div>
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Group Layout</h2>
                </div>
                <div className="example-item">
                    <Card variant="outlined">
                        <CardBody>
                            <h3>Permissions</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <Checkbox label="Read Access" defaultChecked />
                                <Checkbox label="Write Access" defaultChecked />
                                <Checkbox label="Delete Access" />
                                <Checkbox label="Admin Access" disabled />
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
};
