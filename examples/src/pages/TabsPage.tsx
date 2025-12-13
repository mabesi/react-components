
import React from 'react';
import { Link } from 'react-router-dom';
import {
    Tabs,
    TabList,
    Tab,
    TabPanel,
    useTheme,
    Card,
    CardBody
} from '@mabesi/react-components';
import './ExamplePage.css';

export const TabsPage: React.FC = () => {
    const { themeName, setTheme } = useTheme();

    return (
        <div className="example-page">
            <Link to="/" className="back-link">← Back to Examples</Link>

            <header className="page-header">
                <h1>📑 Tabs Component</h1>
                <p className="subtitle">Organize content into flexible, theme-aware sections.</p>
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
                    <h2 className="section-title">Default Variant</h2>
                    <p className="section-description">Standard underlined tabs.</p>
                </div>
                <div className="example-item">
                    <Tabs defaultActiveTab="account" variant="default">
                        <TabList>
                            <Tab id="account">Account</Tab>
                            <Tab id="password">Password</Tab>
                            <Tab id="notifications">Notifications</Tab>
                            <Tab id="disabled" disabled>Disabled</Tab>
                        </TabList>
                        <TabPanel id="account">
                            <Card variant="outlined">
                                <CardBody>
                                    <h3>Account Settings</h3>
                                    <p>Manage your account details and preferences here.</p>
                                </CardBody>
                            </Card>
                        </TabPanel>
                        <TabPanel id="password">
                            <Card variant="outlined">
                                <CardBody>
                                    <h3>Password</h3>
                                    <p>Update your security credentials.</p>
                                </CardBody>
                            </Card>
                        </TabPanel>
                        <TabPanel id="notifications">
                            <Card variant="outlined">
                                <CardBody>
                                    <h3>Notifications</h3>
                                    <p>Configure how you want to be notified.</p>
                                </CardBody>
                            </Card>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Minimal Variant</h2>
                    <p className="section-description">Clean, text-based tabs.</p>
                </div>
                <div className="example-item">
                    <Tabs defaultActiveTab="music" variant="minimal">
                        <TabList>
                            <Tab id="music">Music</Tab>
                            <Tab id="podcasts">Podcasts</Tab>
                            <Tab id="live">Live Radio</Tab>
                        </TabList>
                        <TabPanel id="music">
                            <p>Discover new tracks and albums tailored to your taste.</p>
                        </TabPanel>
                        <TabPanel id="podcasts">
                            <p>Catch up on the latest episodes from your favorite creators.</p>
                        </TabPanel>
                        <TabPanel id="live">
                            <p>Tune in to live broadcasts from around the world.</p>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Modern Variant</h2>
                    <p className="section-description">Pill-shaped tabs with background colors.</p>
                </div>
                <div className="example-item">
                    <Tabs defaultActiveTab="daily" variant="modern">
                        <TabList>
                            <Tab id="daily">Daily</Tab>
                            <Tab id="weekly">Weekly</Tab>
                            <Tab id="monthly">Monthly</Tab>
                        </TabList>
                        <div style={{ marginTop: '16px' }}>
                            <TabPanel id="daily">
                                <div className="stat-card">Daily Views: <strong>1,234</strong></div>
                            </TabPanel>
                            <TabPanel id="weekly">
                                <div className="stat-card">Weekly Views: <strong>8,567</strong></div>
                            </TabPanel>
                            <TabPanel id="monthly">
                                <div className="stat-card">Monthly Views: <strong>34,901</strong></div>
                            </TabPanel>
                        </div>
                    </Tabs>
                </div>
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Compact Variant</h2>
                    <p className="section-description">Condensed layout for high-density interfaces.</p>
                </div>
                <div className="example-item">
                    <Tabs defaultActiveTab="file1" variant="compact">
                        <TabList>
                            <Tab id="file1">index.tsx</Tab>
                            <Tab id="file2">styles.css</Tab>
                            <Tab id="file3">package.json</Tab>
                        </TabList>
                        <TabPanel id="file1">
                            <pre style={{ background: '#f7fafc', padding: '12px', borderRadius: '4px', fontSize: '0.85rem' }}>
                                <code>export const App = () {`=>`} ...</code>
                            </pre>
                        </TabPanel>
                        <TabPanel id="file2">
                            <pre style={{ background: '#f7fafc', padding: '12px', borderRadius: '4px', fontSize: '0.85rem' }}>
                                <code>.app &#123; display: flex; &#125;</code>
                            </pre>
                        </TabPanel>
                        <TabPanel id="file3">
                            <pre style={{ background: '#f7fafc', padding: '12px', borderRadius: '4px', fontSize: '0.85rem' }}>
                                <code>&#123; "name": "app" &#125;</code>
                            </pre>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};
