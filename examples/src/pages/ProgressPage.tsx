import { useState, useEffect } from 'react';
import { ProgressBar, Card, Button } from '@mabesi/react-components';

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
        <div className="page-container">
            <h1>ProgressBar</h1>
            <p className="page-description">
                Visualize the completion status of an operation.
            </p>

            <section className="component-section">
                <h2>Basic Usage</h2>
                <Card>
                    <ProgressBar value={50} />
                    <div style={{ marginTop: '1rem' }}>
                        <ProgressBar value={progress} showLabel />
                    </div>
                    <div style={{ marginTop: '1rem' }}>
                        <Button onClick={reset} size="small">Reset Demo</Button>
                    </div>
                </Card>
            </section>

            <section className="component-section">
                <h2>Variants</h2>
                <Card>
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
                </Card>
            </section>

            <section className="component-section">
                <h2>Sizes</h2>
                <Card>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <ProgressBar value={50} size="small" />
                        <ProgressBar value={50} size="medium" />
                        <ProgressBar value={50} size="large" showLabel />
                    </div>
                </Card>
            </section>

            <section className="component-section">
                <h2>Styles</h2>
                <Card>
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
                </Card>
            </section>
        </div>
    );
}
