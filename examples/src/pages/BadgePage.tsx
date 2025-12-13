
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody } from '@mabesi/react-components';
import './ExamplePage.css';

export const BadgePage: React.FC = () => {
    return (
        <div className="example-page">
            <Link to="/" className="back-link">← Back to Examples</Link>

            <header className="page-header">
                <h1>📛 Badge Component</h1>
                <p className="subtitle">Status indicators, labels, and counters.</p>
            </header>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Variants</h2>
                    <p className="section-description">Semantic color variations.</p>
                </div>
                <div className="example-item" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <Badge variant="primary">Primary</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="warning">Warning</Badge>
                    <Badge variant="danger">Danger</Badge>
                    <Badge variant="info">Info</Badge>
                    <Badge variant="light">Light</Badge>
                    <Badge variant="dark">Dark</Badge>
                </div>
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Outlined</h2>
                    <p className="section-description">Badges with transparent backgrounds and borders.</p>
                </div>
                <div className="example-item" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <Badge variant="primary" outlined>Primary</Badge>
                    <Badge variant="success" outlined>Success</Badge>
                    <Badge variant="danger" outlined>Danger</Badge>
                </div>
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Sizes</h2>
                    <p className="section-description">Small, Medium, and Large options.</p>
                </div>
                <div className="example-item" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <Badge size="small">Small</Badge>
                    <Badge size="medium">Medium</Badge>
                    <Badge size="large">Large</Badge>
                </div>
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Dot Variant</h2>
                    <p className="section-description">Useful for notification indicators.</p>
                </div>
                <div className="example-item" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                        <span style={{ fontSize: '24px' }}>🔔</span>
                        <Badge variant="danger" dot style={{ position: 'absolute', top: 0, right: 0 }} />
                    </div>
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                        <span style={{ fontSize: '24px' }}>📧</span>
                        <Badge variant="primary" dot style={{ position: 'absolute', top: 0, right: 0 }} />
                    </div>
                </div>
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Usage in Context</h2>
                </div>
                <div className="example-item">
                    <Card variant="outlined">
                        <CardBody style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <h3 style={{ margin: '0 0 4px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    Order #2584
                                    <Badge variant="warning" size="small">Pending</Badge>
                                </h3>
                                <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>Oct 24, 2024</p>
                            </div>
                            <span style={{ fontWeight: 'bold' }}>$125.00</span>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
};
