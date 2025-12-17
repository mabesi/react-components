import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mabesi/react-components';
import { CodeBlock } from '../components/CodeBlock';
import './Pages.css';

export const ButtonPage: React.FC = () => {
    return (
        <div className="example-page">
            <Link to="/" className="back-link">← Back to Examples</Link>

            <header className="component-page-header">
                <h1>Button Component</h1>
                <p className="subtitle">Standardized, theme-aware buttons with multiple variants and sizes.</p>
            </header>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Variants</h2>
                    <p className="section-description">Use variants to communicate the importance or type of action.</p>
                </div>
                <div className="example-grid">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="danger">Danger</Button>
                    <Button variant="success">Success</Button>
                    <Button variant="warning">Warning</Button>
                    <Button variant="info">Info</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                </div>
                <CodeBlock
                    code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Danger</Button>
<Button variant="success">Success</Button>
<Button variant="warning">Warning</Button>
<Button variant="info">Info</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}
                    language="tsx"
                />
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Sizes</h2>
                    <p className="section-description">Available in three sizes to fit different contexts.</p>
                </div>
                <div className="example-grid">
                    <Button size="small">Small</Button>
                    <Button size="medium">Medium</Button>
                    <Button size="large">Large</Button>
                </div>
                <CodeBlock
                    code={`<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>`}
                    language="tsx"
                />
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">States</h2>
                    <p className="section-description">Buttons support disabled, loading, and full-width states.</p>
                </div>
                <div className="example-grid">
                    <Button disabled>Disabled</Button>
                    <Button loading>Loading</Button>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <Button fullWidth>Full Width Button</Button>
                </div>
                <CodeBlock
                    code={`<Button disabled>Disabled</Button>
<Button loading>Loading</Button>

<Button fullWidth>Full Width Button</Button>`}
                    language="tsx"
                />
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">With Icons</h2>
                    <p className="section-description">Add icons to the start or end of the button for better visual cues.</p>
                </div>
                <div className="example-grid">
                    <Button startIcon={<span>👈</span>}>Start Icon</Button>
                    <Button endIcon={<span>👉</span>}>End Icon</Button>
                    <Button startIcon={<span>💾</span>} variant="primary">Save</Button>
                    <Button startIcon={<span>🗑️</span>} variant="danger">Delete</Button>
                </div>
                <CodeBlock
                    code={`<Button startIcon={<span>👈</span>}>Start Icon</Button>
<Button endIcon={<span>👉</span>}>End Icon</Button>
<Button startIcon={<span>💾</span>} variant="primary">Save</Button>
<Button startIcon={<span>🗑️</span>} variant="danger">Delete</Button>`}
                    language="tsx"
                />
            </div>
        </div>
    );
};
