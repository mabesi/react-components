import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Card, CardBody } from '@mabesi/react-components';
import './Pages.css';

export function BreadcrumbPage() {
    return (
        <div className="example-page">
            <Link to="/" className="back-link">← Back to Examples</Link>

            <header className="component-page-header">
                <h1>Breadcrumb</h1>
                <p className="subtitle">
                    Indicate the current page's location within a navigational hierarchy.
                </p>
            </header>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Basic Usage</h2>
                </div>
                <div className="example-item">
                    <Card>
                        <CardBody>
                            <Breadcrumb>
                                <BreadcrumbItem href="/">Home</BreadcrumbItem>
                                <BreadcrumbItem href="/components">Components</BreadcrumbItem>
                                <BreadcrumbItem href="/breadcrumb">Breadcrumb</BreadcrumbItem>
                            </Breadcrumb>
                        </CardBody>
                    </Card>
                </div>
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Custom Separator</h2>
                </div>
                <div className="example-item">
                    <Card>
                        <CardBody>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <Breadcrumb separator=">">
                                    <BreadcrumbItem href="#">Home</BreadcrumbItem>
                                    <BreadcrumbItem href="#">Products</BreadcrumbItem>
                                    <BreadcrumbItem href="#">Electronics</BreadcrumbItem>
                                    <BreadcrumbItem>Laptops</BreadcrumbItem>
                                </Breadcrumb>

                                <Breadcrumb separator="-">
                                    <BreadcrumbItem href="#">Admin</BreadcrumbItem>
                                    <BreadcrumbItem href="#">Users</BreadcrumbItem>
                                    <BreadcrumbItem>Edit</BreadcrumbItem>
                                </Breadcrumb>

                                <Breadcrumb separator="→">
                                    <BreadcrumbItem href="#">Checkout</BreadcrumbItem>
                                    <BreadcrumbItem href="#">Shipping</BreadcrumbItem>
                                    <BreadcrumbItem>Payment</BreadcrumbItem>
                                </Breadcrumb>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}
