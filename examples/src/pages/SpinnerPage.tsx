
import React from 'react';
import { Link } from 'react-router-dom';
import { Spinner, Card, CardBody, Button } from '@mabesi/react-components';
import './ExamplePage.css';

export const SpinnerPage: React.FC = () => {
    return (
        <div className="example-page">
            <Link to="/" className="back-link">← Back to Examples</Link>

            <header className="page-header">
                <h1>↻ Spinner Component</h1>
                <p className="subtitle">Loading indicators for async operations.</p>
            </header>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Sizes</h2>
                </div>
                <div className="example-item">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <Spinner size="small" />
                        <Spinner size="medium" />
                        <Spinner size="large" />
                    </div>
                </div>
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Variants</h2>
                </div>
                <div className="example-item">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', background: '#f5f5f5', padding: '16px', borderRadius: '8px' }}>
                        <Spinner variant="primary" />
                        <Spinner variant="secondary" />
                        <Spinner variant="gray" />
                        <div style={{ background: '#333', padding: '8px', borderRadius: '4px' }}>
                            <Spinner variant="white" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">In Context</h2>
                </div>
                <div className="example-item">
                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                        <Button>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Spinner size="small" variant="white" />
                                Loading...
                            </span>
                        </Button>

                        <Card style={{ width: '300px' }}>
                            <CardBody style={{ display: 'flex', justifyContent: 'center', padding: '40px' }}>
                                <Spinner size="large" />
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};
