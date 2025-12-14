
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Select, Card, CardBody } from '@mabesi/react-components';
import './Pages.css';

export const SelectPage: React.FC = () => {
    const [value, setValue] = useState('option1');

    const basicOptions = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
    ];

    return (
        <div className="example-page">
            <Link to="/" className="back-link">← Back to Examples</Link>

            <header className="component-page-header">
                <h1>🔽 Select Component</h1>
                <p className="subtitle">Dropdown menus for selection.</p>
            </header>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Standard Selects</h2>
                    <p className="section-description">Basic dropdowns with labels and options.</p>
                </div>
                <div className="example-item">
                    <Select label="Simple Select">
                        <option value="">Select an option...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Select>

                    <Select
                        label="From Options Array"
                        options={basicOptions}
                        defaultValue="option2"
                        helperText="This select uses an array prop for options."
                    />
                </div>
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">States</h2>
                    <p className="section-description">Error, Disabled, and Controlled states.</p>
                </div>
                <div className="example-item">
                    <Select
                        label="Error State"
                        error
                        helperText="Please make a valid selection."
                    >
                        <option>Invalid Choice</option>
                    </Select>
                    <Select
                        label="Disabled State"
                        disabled
                        defaultValue="locked"
                    >
                        <option value="locked">Locked Option</option>
                    </Select>
                    <Select
                        label="Controlled Select"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        helperText={`Current Value: ${value}`}
                    >
                        <option value="option1">First Option</option>
                        <option value="option2">Second Option</option>
                    </Select>
                </div>
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Sizes</h2>
                </div>
                <div className="example-item">
                    <Select size="small" label="Small">
                        <option>Small</option>
                    </Select>
                    <Select size="medium" label="Medium">
                        <option>Medium</option>
                    </Select>
                    <Select size="large" label="Large">
                        <option>Large</option>
                    </Select>
                </div>
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Inside Cards</h2>
                </div>
                <div className="example-item">
                    <Card variant="outlined">
                        <CardBody>
                            <h3>Filter Results</h3>
                            <Select label="Category" fullWidth>
                                <option>All Categories</option>
                                <option>Electronics</option>
                                <option>Books</option>
                            </Select>
                            <Select label="Sort By" fullWidth>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Newest</option>
                            </Select>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
};
