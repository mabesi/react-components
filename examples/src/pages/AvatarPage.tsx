
import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Card, CardBody } from '@mabesi/react-components';
import { CodeBlock } from '../components/CodeBlock';
import './Pages.css';

export const AvatarPage: React.FC = () => {
    return (
        <div className="example-page">
            <Link to="/" className="back-link">← Back to Examples</Link>

            <header className="component-page-header">
                <h1>👤 Avatar Component</h1>
                <p className="subtitle">User profiles, entities, and status awareness.</p>
            </header>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Image, Initials, and Fallback</h2>
                    <p className="section-description">Graceful degradation logic.</p>
                </div>
                <div className="example-item" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <div style={{ textAlign: 'center' }}>
                        <Avatar src="https://i.pravatar.cc/150?u=1" size="large" />
                        <p style={{ marginTop: '8px', fontSize: '0.9rem' }}>Image</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <Avatar name="Jane Doe" size="large" />
                        <p style={{ marginTop: '8px', fontSize: '0.9rem' }}>Initials</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <Avatar size="large" />
                        <p style={{ marginTop: '8px', fontSize: '0.9rem' }}>Fallback</p>
                    </div>
                </div>
                <CodeBlock
                    code={`<Avatar src="https://i.pravatar.cc/150?u=1" size="large" />
<Avatar name="Jane Doe" size="large" />
<Avatar size="large" />`}
                    language="tsx"
                />
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Sizes</h2>
                </div>
                <div className="example-item" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <Avatar name="S" size="small" />
                    <Avatar name="M" size="medium" />
                    <Avatar name="L" size="large" />
                    <Avatar name="XL" size="xlarge" />
                </div>
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Variants</h2>
                </div>
                <div className="example-item" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <Avatar name="Circle" variant="circle" />
                    <Avatar name="Rounded" variant="rounded" />
                    <Avatar name="Square" variant="square" />
                </div>
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Status Indicators</h2>
                </div>
                <div className="example-item" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <Avatar src="https://i.pravatar.cc/150?u=3" status="online" />
                    <Avatar src="https://i.pravatar.cc/150?u=4" status="busy" />
                    <Avatar src="https://i.pravatar.cc/150?u=5" status="away" />
                    <Avatar src="https://i.pravatar.cc/150?u=6" status="offline" />
                </div>
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Usage in Context</h2>
                </div>
                <div className="example-item">
                    <Card variant="outlined">
                        <CardBody style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                            <Avatar src="https://i.pravatar.cc/150?u=8" size="large" status="online" />
                            <div>
                                <h3 style={{ margin: '0 0 4px 0' }}>Sarah Connor</h3>
                                <p style={{ margin: 0, color: '#666' }}>Lead Designer</p>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
};
