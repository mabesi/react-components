
import React from 'react';
import { Link } from 'react-router-dom';
import { Alert, Card, CardBody } from '@mabesi/react-components';
import './ExamplePage.css';

export const AlertPage: React.FC = () => {
    return (
        <div className="example-page">
            <Link to="/" className="back-link">← Back to Examples</Link>

            <header className="page-header">
                <h1>⚠️ Alert Component</h1>
                <p className="subtitle">Feedback messages for user actions.</p>
            </header>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Variants</h2>
                    <p className="section-description">Standard semantic states.</p>
                </div>
                <div className="example-item">
                    <Alert variant="info" title="Information">
                        This is a neutral info alert indicating something of interest.
                    </Alert>
                    <Alert variant="success" title="Success!">
                        Your operation completed successfully without errors.
                    </Alert>
                    <Alert variant="warning" title="Warning">
                        This action has potential side effects. Proceed with caution.
                    </Alert>
                    <Alert variant="error" title="Error">
                        Something went wrong while processing your request.
                    </Alert>
                </div>
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
