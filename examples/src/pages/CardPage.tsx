
import React from 'react';
import { Link } from 'react-router-dom';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardImage,
    Button,
    useTheme
} from '@mabesi/react-components';
import { CodeBlock } from '../components/CodeBlock';
import './Pages.css';

export const CardPage: React.FC = () => {
    const { themeName, setTheme } = useTheme();
    const [clickCount, setClickCount] = React.useState(0);

    return (
        <div className="example-page">
            <Link to="/" className="back-link">← Back to Examples</Link>

            <header className="component-page-header">
                <h1>🎴 Card Component</h1>
                <p className="subtitle">Flexible content container with transparent, theme-aware styling.</p>
            </header>

            <div className="controls">
                <div className="control-group">
                    <label>Theme:</label>
                    <select value={themeName} onChange={(e) => setTheme(e.target.value as any)}>
                        <option value="default">Default</option>
                        <option value="minimal">Minimal</option>
                        <option value="modern">Modern</option>
                        <option value="compact">Compact</option>
                    </select>
                </div>
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Variants</h2>
                    <p className="section-description">Cards come in three main variants: elevated, outlined, and filled.</p>
                </div>
                <div className="example-grid">
                    <div className="example-item">
                        <Card variant="elevated" style={{ width: 300 }}>
                            <CardHeader title="Elevated" subtitle="Default variation" />
                            <CardBody>
                                <p>Standard card with a subtle shadow. Good for separating content from the background.</p>
                            </CardBody>
                            <CardFooter>
                                <Button size="small">Action</Button>
                            </CardFooter>
                        </Card>
                    </div>

                    <div className="example-item">
                        <Card variant="outlined" style={{ width: 300 }}>
                            <CardHeader title="Outlined" subtitle="Bordered variation" />
                            <CardBody>
                                <p>Card with a border and no shadow. Ideal for minimal or content-heavy layouts.</p>
                            </CardBody>
                            <CardFooter>
                                <Button size="small" variant="outline">Action</Button>
                            </CardFooter>
                        </Card>
                    </div>

                    <div className="example-item">
                        <Card variant="filled" style={{ width: 300 }}>
                            <CardHeader title="Filled" subtitle="Background variation" />
                            <CardBody>
                                <p>Card with a distinct background color. Useful for highlighting specific sections.</p>
                            </CardBody>
                            <CardFooter>
                                <Button size="small" variant="ghost">Action</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
                <CodeBlock
                    code={`<Card variant="elevated">
    <CardHeader title="Elevated" subtitle="Default variation" />
    <CardBody>
        <p>Standard card with a subtle shadow.</p>
    </CardBody>
    <CardFooter>
        <Button size="small">Action</Button>
    </CardFooter>
</Card>`}
                    language="tsx"
                />
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">With Images</h2>
                    <p className="section-description">Cards can include full-width images at the top or bottom.</p>
                </div>
                <div className="example-grid">
                    <div className="example-item">
                        <Card style={{ width: 300 }}>
                            <CardImage src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22300%22%20height%3D%22150%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20300%20150%22%20preserveAspectRatio%3D%22none%22%3E%3Crect%20width%3D%22300%22%20height%3D%22150%22%20fill%3D%22%23e2e8f0%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20fill%3D%22%23718096%22%3EImage%20Placeholder%3C%2Ftext%3E%3C%2Fsvg%3E" alt="Placeholder" />
                            <CardHeader title="Image Top" subtitle="With descriptive text" />
                            <CardBody>
                                <p>A common pattern for blog posts, news articles, or product cards.</p>
                            </CardBody>
                            <CardFooter align="end">
                                <Button size="small" variant="link">Read More</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Interactive</h2>
                    <p className="section-description">Cards can be made clickable with hover effects.</p>
                </div>
                <div className="example-grid">
                    <div className="example-item">
                        <Card
                            interactive
                            style={{ width: 300, userSelect: 'none' }}
                            onClick={() => setClickCount(prev => prev + 1)}
                        >
                            <CardBody>
                                <h3>Click Me!</h3>
                                <p>I have a nice hover effect and I am clickable.</p>
                                <div style={{
                                    marginTop: '16px',
                                    padding: '8px',
                                    backgroundColor: clickCount > 0 ? '#e6fffa' : '#edf2f7',
                                    borderRadius: '4px',
                                    color: clickCount > 0 ? '#2c7a7b' : '#718096',
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    transition: 'all 0.2s'
                                }}>
                                    {clickCount === 0 ? 'Not clicked yet' : `Clicked ${clickCount} times!`}
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};
