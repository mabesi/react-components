import React from 'react';
import { Link } from 'react-router-dom';
import { ProgressBar, Card, CardBody, Button } from '@mabesi/react-components';
import { useState, useEffect } from 'react';
import { CodeBlock } from '../components/CodeBlock';
import './Pages.css';

export function ProgressPage() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 800);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const reset = () => setProgress(0);

    return (
        <div className="example-page">
            <Link to="/" className="back-link">← Back to Examples</Link>

            <header className="component-page-header">
                <h1>ProgressBar</h1>
                <p className="subtitle">
                    Visualize the completion status of an operation.
                </p>
            </header>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Basic Usage</h2>
                </div>
                <div className="example-item">
                    <Card>
                        <CardBody>
                            <ProgressBar value={50} />
                            <div style={{ marginTop: '1rem' }}>
                                <ProgressBar value={progress} showLabel />
                            </div>
                            <div style={{ marginTop: '1rem' }}>
                                <Button onClick={reset} size="small">Reset Demo</Button>
                            </div>
                        </CardBody>
                    </Card>
                </div>
                <CodeBlock
                    code={`<ProgressBar value={50} />
<ProgressBar value={progress} showLabel />`}
                    language="tsx"
                />
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Variants</h2>
                </div>
                <div className="example-item">
                    <Card>
                        <CardBody>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div>
                                    <p>Default</p>
                                    <ProgressBar value={40} variant="default" />
                                </div>
                                <div>
                                    <p>Success</p>
                                    <ProgressBar value={60} variant="success" />
                                </div>
                                <div>
                                    <p>Warning</p>
                                    <ProgressBar value={80} variant="warning" />
                                </div>
                                <div>
                                    <p>Danger</p>
                                    <ProgressBar value={90} variant="danger" />
                                </div>
                                <div>
                                    <p>Info</p>
                                    <ProgressBar value={30} variant="info" />
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Sizes</h2>
                </div>
                <div className="example-item">
                    <Card>
                        <CardBody>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <ProgressBar value={50} size="small" />
                                <ProgressBar value={50} size="medium" />
                                <ProgressBar value={50} size="large" showLabel />
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Styles</h2>
                </div>
                <div className="example-item">
                    <Card>
                        <CardBody>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div>
                                    <p>Striped</p>
                                    <ProgressBar value={50} striped />
                                </div>
                                <div>
                                    <p>Animated Stripes</p>
                                    <ProgressBar value={75} striped animated variant="success" />
                                </div>
                                <div>
                                    <p>Indeterminate</p>
                                    <ProgressBar indeterminate />
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}
