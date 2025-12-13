
import React from 'react';
import { Link } from 'react-router-dom';
import { Tooltip, Button, Card, CardBody } from '@mabesi/react-components';
import './ExamplePage.css';

export const TooltipPage: React.FC = () => {
    return (
        <div className="example-page">
            <Link to="/" className="back-link">← Back to Examples</Link>

            <header className="page-header">
                <h1>💬 Tooltip Component</h1>
                <p className="subtitle">Contextual information on hover and focus.</p>
            </header>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Positions</h2>
                    <p className="section-description">Tooltips can be positioned on any side of the element.</p>
                </div>
                <div className="example-item" style={{ display: 'flex', gap: '20px', justifyContent: 'center', padding: '40px' }}>
                    <Tooltip content="Tooltip on Left" position="left">
                        <Button variant="outline">Left</Button>
                    </Tooltip>
                    <Tooltip content="Tooltip on Top" position="top">
                        <Button variant="outline">Top</Button>
                    </Tooltip>
                    <Tooltip content="Tooltip on Bottom" position="bottom">
                        <Button variant="outline">Bottom</Button>
                    </Tooltip>
                    <Tooltip content="Tooltip on Right" position="right">
                        <Button variant="outline">Right</Button>
                    </Tooltip>
                </div>
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Delays</h2>
                    <p className="section-description">Control how quickly the tooltip appears.</p>
                </div>
                <div className="example-item" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <Tooltip content="Immediate!" delay={0}>
                        <Button>0ms Delay</Button>
                    </Tooltip>
                    <Tooltip content="Wait for it..." delay={1000}>
                        <Button>1s Delay</Button>
                    </Tooltip>
                </div>
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Rich Content</h2>
                    <p className="section-description">Tooltips can contain more than just text.</p>
                </div>
                <div className="example-item" style={{ padding: '20px' }}>
                    <Tooltip content={
                        <div style={{ textAlign: 'center' }}>
                            <strong>User Info</strong><br />
                            <span style={{ fontSize: '0.8rem' }}>Logged in as Admin</span>
                        </div>
                    }>
                        <span style={{ textDecoration: 'underline', cursor: 'help' }}>Hover me for details</span>
                    </Tooltip>
                </div>
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Contextual Help</h2>
                </div>
                <div className="example-item">
                    <Card variant="outlined">
                        <CardBody>
                            <h3>Settings</h3>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px' }}>
                                <label>Enable Notifications</label>
                                <Tooltip content="Receive daily email digest" position="right">
                                    <span style={{ cursor: 'pointer', borderRadius: '50%', background: '#eee', wibth: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', width: '20px' }}>?</span>
                                </Tooltip>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
};
