import { useState } from 'react';
import { Switch, Card } from '@mabesi/react-components';

export function SwitchPage() {
    const [checked, setChecked] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [notifications, setNotifications] = useState(true);

    return (
        <div className="page-container">
            <h1>Switch</h1>
            <p className="page-description">
                A toggle component for switching between two states, ON and OFF.
            </p>

            <section className="component-section">
                <h2>Basic Usage</h2>
                <Card>
                    <Switch
                        label="Toggle me"
                        checked={checked}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setChecked(e.target.checked)}
                    />
                    <div style={{ marginTop: '1rem' }}>
                        State: <strong>{checked ? 'ON' : 'OFF'}</strong>
                    </div>
                </Card>
            </section>

            <section className="component-section">
                <h2>Sizes</h2>
                <Card>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <Switch label="Small Switch" size="small" />
                        <Switch label="Medium Switch (Default)" size="medium" defaultChecked />
                        <Switch label="Large Switch" size="large" />
                    </div>
                </Card>
            </section>

            <section className="component-section">
                <h2>Colors</h2>
                <Card>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <Switch label="Primary" color="primary" defaultChecked />
                        <Switch label="Success" color="success" defaultChecked />
                        <Switch label="Danger" color="danger" defaultChecked />
                        <Switch label="Warning" color="warning" defaultChecked />
                        <Switch label="Info" color="info" defaultChecked />
                    </div>
                </Card>
            </section>

            <section className="component-section">
                <h2>States</h2>
                <Card>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <Switch label="Default Unchecked" />
                        <Switch label="Default Checked" defaultChecked />
                        <Switch label="Disabled" disabled />
                        <Switch label="Disabled Checked" disabled defaultChecked />
                        <Switch label="With Error" error defaultChecked helperText="Something went wrong" />
                    </div>
                </Card>
            </section>

            <section className="component-section">
                <h2>With Helper Text</h2>
                <Card>
                    <Switch
                        label="Notifications"
                        helperText="Receive email updates about your account activity."
                        checked={notifications}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNotifications(e.target.checked)}
                    />
                </Card>
            </section>

            <section className="component-section">
                <h2>Interactive Example</h2>
                <Card>
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
                </Card>
            </section>
        </div>
    );
}
