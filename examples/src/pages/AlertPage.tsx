
import React from 'react';
import { Link } from 'react-router-dom';
import { Alert, Card, CardBody, useI18n } from '@mabesi/react-components';
import { CodeBlock } from '../components/CodeBlock';
import './Pages.css';

export const AlertPage: React.FC = () => {
    const { locale, setLocale } = useI18n();

    return (
        <div className="example-page">
            <Link to="/" className="back-link">← Back to Examples</Link>

            <header className="component-page-header">
                <h1>⚠️ Alert Component</h1>
                <p className="subtitle">Feedback messages for user actions with automatic i18n support.</p>
            </header>

            <div className="controls">
                <div className="control-group">
                    <label>Language:</label>
                    <select value={locale} onChange={(e) => setLocale(e.target.value as any)}>
                        <option value="en">English</option>
                        <option value="pt-BR">Português (BR)</option>
                    </select>
                </div>
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Automatic i18n Titles</h2>
                    <p className="section-description">
                        Alerts automatically display translated titles based on variant and locale.
                        Switch the language above to see the titles change.
                    </p>
                </div>
                <div className="example-item">
                    <Alert variant="info">
                        This is a neutral info alert indicating something of interest.
                    </Alert>
                    <Alert variant="success">
                        Your operation completed successfully without errors.
                    </Alert>
                    <Alert variant="warning">
                        This action has potential side effects. Proceed with caution.
                    </Alert>
                    <Alert variant="error">
                        Something went wrong while processing your request.
                    </Alert>
                </div>
                <CodeBlock
                    code={`<Alert variant="info">
    This is a neutral info alert indicating something of interest.
</Alert>
<Alert variant="success">
    Your operation completed successfully without errors.
</Alert>
<Alert variant="warning">
    This action has potential side effects. Proceed with caution.
</Alert>
<Alert variant="error">
    Something went wrong while processing your request.
</Alert>`}
                    language="tsx"
                />
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Custom Titles</h2>
                    <p className="section-description">
                        You can override the automatic title by providing a custom one.
                    </p>
                </div>
                <div className="example-item">
                    <Alert variant="success" title="Congratulations!">
                        You've successfully completed the tutorial.
                    </Alert>
                    <Alert variant="warning" title="Maintenance Notice">
                        System maintenance scheduled for tonight at 2 AM.
                    </Alert>
                </div>
                <CodeBlock
                    code={`<Alert variant="success" title="Congratulations!">
    You've successfully completed the tutorial.
</Alert>
<Alert variant="warning" title="Maintenance Notice">
    System maintenance scheduled for tonight at 2 AM.
</Alert>`}
                    language="tsx"
                />
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Dismissible</h2>
                    <p className="section-description">Alerts that can be closed by the user.</p>
                </div>
                <div className="example-item">
                    <Alert variant="info" dismissible onDismiss={() => console.log('Dismissed!')}>
                        You can close this alert by clicking the X.
                    </Alert>
                </div>
                <CodeBlock
                    code={`<Alert variant="info" dismissible onDismiss={() => console.log('Dismissed!')}>
    You can close this alert by clicking the X.
</Alert>`}
                    language="tsx"
                />
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Custom Icons & Content</h2>
                </div>
                <div className="example-item">
                    <Alert variant="success" icon="🎉">
                        <strong>Congratulations!</strong> You've leveled up!
                    </Alert>
                    <Alert variant="warning" icon={false}>
                        This alert has no icon.
                    </Alert>
                </div>
                <CodeBlock
                    code={`<Alert variant="success" icon="🎉">
    <strong>Congratulations!</strong> You've leveled up!
</Alert>
<Alert variant="warning" icon={false}>
    This alert has no icon.
</Alert>`}
                    language="tsx"
                />
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Sizes</h2>
                </div>
                <div className="example-item">
                    <Alert variant="info" size="small">
                        Small alert for compact spaces.
                    </Alert>
                    <Alert variant="success" size="medium">
                        Medium alert (default size).
                    </Alert>
                    <Alert variant="warning" size="large">
                        Large alert for important messages.
                    </Alert>
                </div>
                <CodeBlock
                    code={`<Alert variant="info" size="small">
    Small alert for compact spaces.
</Alert>
<Alert variant="success" size="medium">
    Medium alert (default size).
</Alert>
<Alert variant="warning" size="large">
    Large alert for important messages.
</Alert>`}
                    language="tsx"
                />
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Inside Cards</h2>
                </div>
                <div className="example-item">
                    <Card>
                        <CardBody>
                            <h3>Login</h3>
                            <div style={{ marginBottom: '16px' }}>
                                <label style={{ display: 'block' }}>Username</label>
                                <input style={{ width: '100%', padding: '8px', marginBottom: '8px' }} />
                                <label style={{ display: 'block' }}>Password</label>
                                <input type="password" style={{ width: '100%', padding: '8px', marginBottom: '16px' }} />
                                <button style={{ padding: '8px 16px' }}>Login</button>
                            </div>
                            <Alert variant="error" size="small">
                                Invalid username or password.
                            </Alert>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
};
