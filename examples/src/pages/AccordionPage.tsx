
import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionItem, Card, CardBody } from '@mabesi/react-components';
import './ExamplePage.css';

export const AccordionPage: React.FC = () => {
    return (
        <div className="example-page">
            <Link to="/" className="back-link">← Back to Examples</Link>

            <header className="page-header">
                <h1>Accordion Component</h1>
                <p className="subtitle">Expandable content sections.</p>
            </header>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Single Expand (Default)</h2>
                    <p className="section-description">Only one section can be open at a time.</p>
                </div>
                <div className="example-item">
                    <Card>
                        <CardBody>
                            <Accordion>
                                <AccordionItem id="1" title="What is React?">
                                    React is a JavaScript library for building user interfaces.
                                </AccordionItem>
                                <AccordionItem id="2" title="Why use components?">
                                    Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.
                                </AccordionItem>
                                <AccordionItem id="3" title="What is JSX?">
                                    JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript.
                                </AccordionItem>
                            </Accordion>
                        </CardBody>
                    </Card>
                </div>
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Allow Multiple</h2>
                    <p className="section-description">Multiple sections can be open simultaneously.</p>
                </div>
                <div className="example-item">
                    <Card>
                        <CardBody>
                            <Accordion allowMultiple defaultExpanded={['settings']}>
                                <AccordionItem id="profile" title="Profile Settings">
                                    <div style={{ padding: '8px 0' }}>
                                        User profile configuration forms would go here.
                                    </div>
                                </AccordionItem>
                                <AccordionItem id="notifications" title="Notifications">
                                    <div style={{ padding: '8px 0' }}>
                                        Notification preferences would go here.
                                    </div>
                                </AccordionItem>
                                <AccordionItem id="security" title="Security">
                                    <div style={{ padding: '8px 0' }}>
                                        Password and 2FA settings would go here.
                                    </div>
                                </AccordionItem>
                            </Accordion>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
};
