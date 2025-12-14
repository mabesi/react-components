
import React from 'react';
import { Link } from 'react-router-dom';
import { useToast, Button, Card, CardBody } from '@mabesi/react-components';
import './Pages.css';

export const ToastPage: React.FC = () => {
    const { addToast } = useToast();

    return (
        <div className="example-page">
            <Link to="/" className="back-link">← Back to Examples</Link>

            <header className="component-page-header">
                <h1>🍞 Toast Component</h1>
                <p className="subtitle">Dismissible notifications.</p>
            </header>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Variants</h2>
                </div>
                <div className="example-item">
                    <Card>
                        <CardBody>
                            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                <Button onClick={() => addToast('This is an info message', { variant: 'info' })}>
                                    Info
                                </Button>
                                <Button variant="secondary" onClick={() => addToast('Operation successful!', { variant: 'success' })}>
                                    Success
                                </Button>
                                <Button variant="outline" onClick={() => addToast('Warning: Check your input.', { variant: 'warning' })}>
                                    Warning
                                </Button>
                                <Button variant="danger" onClick={() => addToast('Error: Something went wrong.', { variant: 'error' })}>
                                    Error
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Durations</h2>
                </div>
                <div className="example-item">
                    <Card>
                        <CardBody>
                            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                <Button onClick={() => addToast('Short toast (1s)', { duration: 1000 })}>
                                    1 Second
                                </Button>
                                <Button onClick={() => addToast('Long toast (10s)', { duration: 10000 })}>
                                    10 Seconds
                                </Button>
                                <Button onClick={() => addToast('Persistent Toast', { duration: 0 })}>
                                    Persistent (No Auto-Dismiss)
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
};
