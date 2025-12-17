import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Tabs,
    TabList,
    Tab,
    TabPanel,
    Card,
    CardBody
} from '@mabesi/react-components';
import { CodeBlock } from '../components/CodeBlock';
import './Pages.css';

export const TabsPage: React.FC = () => {
    // Global theme selector removed as per request

    return (
        <div className="example-page">
            <Link to="/" className="back-link">← Back to Examples</Link>

            <header className="component-page-header">
                <h1>📑 Tabs Component</h1>
                <p className="subtitle">Organize content into flexible, theme-aware sections.</p>
            </header>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Default Variant</h2>
                    <p className="section-description">Standard underlined tabs. Perfect for general content organization.</p>
                </div>
                <div className="example-item">
                    <Tabs defaultActiveTab="profile" variant="default">
                        <TabList>
                            <Tab id="profile">Profile</Tab>
                            <Tab id="gallery">Gallery</Tab>
                            <Tab id="settings">Settings</Tab>
                        </TabList>
                        <TabPanel id="profile">
                            <Card variant="outlined">
                                <CardBody style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
                                        👤
                                    </div>
                                    <div>
                                        <h3>John Doe</h3>
                                        <p style={{ margin: '4px 0', color: '#666' }}>Full Stack Developer</p>
                                        <p style={{ fontSize: '0.9rem', color: '#888' }}>San Francisco, CA</p>
                                    </div>
                                </CardBody>
                            </Card>
                        </TabPanel>
                        <TabPanel id="gallery">
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                                {[1, 2, 3].map((i) => (
                                    <div key={i} style={{ aspectRatio: '16/9', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                                        Image {i}
                                    </div>
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel id="settings">
                            <Card variant="outlined">
                                <CardBody>
                                    <h3>Account Preferences</h3>
                                    <div style={{ marginTop: '10px' }}>
                                        <label style={{ display: 'block', marginBottom: '8px' }}>
                                            <input type="checkbox" defaultChecked /> Email Notifications
                                        </label>
                                        <label style={{ display: 'block', marginBottom: '8px' }}>
                                            <input type="checkbox" /> SMS Alerts
                                        </label>
                                        <label style={{ display: 'block' }}>
                                            <input type="checkbox" defaultChecked /> Public Profile
                                        </label>
                                    </div>
                                </CardBody>
                            </Card>
                        </TabPanel>
                    </Tabs>
                </div>
                <CodeBlock
                    code={`<Tabs defaultActiveTab="profile" variant="default">
    <TabList>
        <Tab id="profile">Profile</Tab>
        <Tab id="gallery">Gallery</Tab>
        <Tab id="settings">Settings</Tab>
    </TabList>
    <TabPanel id="profile">
        <p>Profile content here</p>
    </TabPanel>
    <TabPanel id="gallery">
        <p>Gallery content here</p>
    </TabPanel>
    <TabPanel id="settings">
        <p>Settings content here</p>
    </TabPanel>
</Tabs>`}
                    language="tsx"
                />
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Minimal Variant</h2>
                    <p className="section-description">Clean, text-based tabs. Ideal for content-heavy pages where visual noise should be minimized.</p>
                </div>
                <div className="example-item">
                    <Tabs defaultActiveTab="music" variant="minimal">
                        <TabList>
                            <Tab id="music">Music</Tab>
                            <Tab id="podcasts">Podcasts</Tab>
                            <Tab id="audiobooks">Audiobooks</Tab>
                        </TabList>
                        <TabPanel id="music">
                            <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
                                <div style={{ width: '120px', height: '120px', backgroundColor: '#3b82f6', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>Album Art</div>
                                <div>
                                    <h3>Top Hits 2024</h3>
                                    <p>The hottest tracks of the year, all in one place.</p>
                                    <button style={{ marginTop: '8px', padding: '6px 12px', borderRadius: '4px', border: '1px solid #ccc', background: 'white', cursor: 'pointer' }}>Play Now</button>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel id="podcasts">
                            <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
                                <div style={{ width: '120px', height: '120px', backgroundColor: '#8b5cf6', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>Podcast Cover</div>
                                <div>
                                    <h3>Tech Talk Daily</h3>
                                    <p>Deep dives into the latest technology trends and news.</p>
                                    <button style={{ marginTop: '8px', padding: '6px 12px', borderRadius: '4px', border: '1px solid #ccc', background: 'white', cursor: 'pointer' }}>Listen</button>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel id="audiobooks">
                            <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
                                <div style={{ width: '120px', height: '120px', backgroundColor: '#10b981', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>Book Cover</div>
                                <div>
                                    <h3>The Future of AI</h3>
                                    <p>An exploration of artificial intelligence and its impact on society.</p>
                                    <button style={{ marginTop: '8px', padding: '6px 12px', borderRadius: '4px', border: '1px solid #ccc', background: 'white', cursor: 'pointer' }}>Start Listening</button>
                                </div>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Modern Variant</h2>
                    <p className="section-description">Pill-shaped tabs with background colors. Great for dashboards and admin interfaces.</p>
                </div>
                <div className="example-item">
                    <Tabs defaultActiveTab="overview" variant="modern">
                        <TabList>
                            <Tab id="overview">Overview</Tab>
                            <Tab id="analytics">Analytics</Tab>
                            <Tab id="reports">Reports</Tab>
                        </TabList>
                        <div style={{ marginTop: '24px' }}>
                            <TabPanel id="overview">
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                                    <Card variant="elevated">
                                        <CardBody>
                                            <h4 style={{ margin: 0, color: '#666' }}>Total Users</h4>
                                            <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '8px 0 0' }}>12,345</p>
                                        </CardBody>
                                    </Card>
                                    <Card variant="elevated">
                                        <CardBody>
                                            <h4 style={{ margin: 0, color: '#666' }}>Active Sessions</h4>
                                            <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '8px 0 0' }}>842</p>
                                        </CardBody>
                                    </Card>
                                    <Card variant="elevated">
                                        <CardBody>
                                            <h4 style={{ margin: 0, color: '#666' }}>Conversion Rate</h4>
                                            <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '8px 0 0' }}>2.4%</p>
                                        </CardBody>
                                    </Card>
                                </div>
                            </TabPanel>
                            <TabPanel id="analytics">
                                <div style={{ height: '200px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px dashed #cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
                                    Analytics Chart Placeholder
                                </div>
                            </TabPanel>
                            <TabPanel id="reports">
                                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                                    <thead>
                                        <tr style={{ textAlign: 'left', borderBottom: '2px solid #e2e8f0' }}>
                                            <th style={{ padding: '8px' }}>Report Name</th>
                                            <th style={{ padding: '8px' }}>Date</th>
                                            <th style={{ padding: '8px' }}>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                            <td style={{ padding: '8px' }}>Monthly Sales</td>
                                            <td style={{ padding: '8px' }}>Dec 01, 2024</td>
                                            <td style={{ padding: '8px', color: 'green' }}>Completed</td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                                            <td style={{ padding: '8px' }}>User Acquisition</td>
                                            <td style={{ padding: '8px' }}>Nov 30, 2024</td>
                                            <td style={{ padding: '8px', color: 'orange' }}>Processing</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </TabPanel>
                        </div>
                    </Tabs>
                </div>
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Compact Variant</h2>
                    <p className="section-description">Condensed layout for high-density interfaces, like code editors or properties panels.</p>
                </div>
                <div className="example-item">
                    <Tabs defaultActiveTab="file1" variant="compact">
                        <TabList>
                            <Tab id="file1">App.tsx</Tab>
                            <Tab id="file2">Tabs.tsx</Tab>
                            <Tab id="file3">styles.css</Tab>
                        </TabList>
                        <TabPanel id="file1">
                            <pre style={{ background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '4px', fontSize: '0.85rem', overflowX: 'auto', fontFamily: 'monospace' }}>
                                <code>
                                    {`import React from 'react';

export const App = () => {
  return (
    <div className="app">
      <h1>Hello World</h1>
    </div>
  );
};`}
                                </code>
                            </pre>
                        </TabPanel>
                        <TabPanel id="file2">
                            <pre style={{ background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '4px', fontSize: '0.85rem', overflowX: 'auto', fontFamily: 'monospace' }}>
                                <code>
                                    {`export const Tabs = ({ children }) => {
  return <div className="tabs">{children}</div>;
};`}
                                </code>
                            </pre>
                        </TabPanel>
                        <TabPanel id="file3">
                            <pre style={{ background: '#1e293b', color: '#e2e8f0', padding: '16px', borderRadius: '4px', fontSize: '0.85rem', overflowX: 'auto', fontFamily: 'monospace' }}>
                                <code>
                                    {`.app {
  display: flex;
  justify-content: center;
  align-items: center;
}`}
                                </code>
                            </pre>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};
