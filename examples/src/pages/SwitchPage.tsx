import { Link } from 'react-router-dom';
import { Switch, Card, CardBody } from '@mabesi/react-components';
import { CodeBlock } from '../components/CodeBlock';
import { useState } from 'react';
import './Pages.css';

export function SwitchPage() {
    const [checked, setChecked] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [notifications, setNotifications] = useState(true);

    return (
        <div className="example-page">
            <Link to="/" className="back-link">← Back to Examples</Link>

            <header className="component-page-header">
                <h1>Switch</h1>
                <p className="subtitle">
                    A toggle component for switching between two states, ON and OFF.
                </p>
            </header>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Basic Usage</h2>
                </div>
                <div className="example-item">
                    <Card>
                        <CardBody>
                            <Switch
                                label="Toggle me"
                                checked={checked}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setChecked(e.target.checked)}
                            />
                            <div style={{ marginTop: '1rem' }}>
                                State: <strong>{checked ? 'ON' : 'OFF'}</strong>
                            </div>
                        </CardBody>
                    </Card>
                </div>
                <CodeBlock
                    code={`const [checked, setChecked] = useState(false);

<Switch
    label="Toggle me"
    checked={checked}
    onChange={(e) => setChecked(e.target.checked)}
/>`}
                    language="tsx"
                />
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Sizes</h2>
                </div>
                <div className="example-item">
                    <Card>
                        <CardBody>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <Switch label="Small Switch" size="small" />
                                <Switch label="Medium Switch (Default)" size="medium" defaultChecked />
                                <Switch label="Large Switch" size="large" />
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Colors</h2>
                </div>
                <div className="example-item">
                    <Card>
                        <CardBody>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <Switch label="Primary" color="primary" defaultChecked />
                                <Switch label="Success" color="success" defaultChecked />
                                <Switch label="Danger" color="danger" defaultChecked />
                                <Switch label="Warning" color="warning" defaultChecked />
                                <Switch label="Info" color="info" defaultChecked />
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">States</h2>
                </div>
                <div className="example-item">
                    <Card>
                        <CardBody>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <Switch label="Default Unchecked" />
                                <Switch label="Default Checked" defaultChecked />
                                <Switch label="Disabled" disabled />
                                <Switch label="Disabled Checked" disabled defaultChecked />
                                <Switch label="With Error" error defaultChecked helperText="Something went wrong" />
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">With Helper Text</h2>
                </div>
                <div className="example-item">
                    <Card>
                        <CardBody>
                            <Switch
                                label="Notifications"
                                helperText="Receive email updates about your account activity."
                                checked={notifications}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNotifications(e.target.checked)}
                            />
                        </CardBody>
                    </Card>
                </div>
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Interactive Example</h2>
                </div>
                <div className="example-item">
                    <Card>
                        <CardBody>
                            <div style={{
                                padding: '2rem',
                                backgroundColor: darkMode ? '#1e293b' : '#f8fafc',
                                color: darkMode ? '#ffffff' : '#1e293b',
                                borderRadius: '8px',
                                transition: 'all 0.3s ease'
                            }}>
                                <h3>{darkMode ? 'Dark Mode' : 'Light Mode'} Active</h3>
                                <p>Toggle the switch below to change the theme of this card.</p>

                                <div style={{ marginTop: '1.5rem' }}>
                                    <Switch
                                        label="Dark Mode"
                                        checked={darkMode}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDarkMode(e.target.checked)}
                                        color="info"
                                    />
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}
