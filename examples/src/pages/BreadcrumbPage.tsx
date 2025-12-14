import { Breadcrumb, BreadcrumbItem, Card } from '@mabesi/react-components';

export function BreadcrumbPage() {
    return (
        <div className="page-container">
            <h1>Breadcrumb</h1>
            <p className="page-description">
                Indicate the current page's location within a navigational hierarchy.
            </p>

            <section className="component-section">
                <h2>Basic Usage</h2>
                <Card>
                    <Breadcrumb>
                        <BreadcrumbItem href="/">Home</BreadcrumbItem>
                        <BreadcrumbItem href="/components">Components</BreadcrumbItem>
                        <BreadcrumbItem href="/breadcrumb">Breadcrumb</BreadcrumbItem>
                    </Breadcrumb>
                </Card>
            </section>

            <section className="component-section">
                <h2>Custom Separator</h2>
                <Card>
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
                </Card>
            </section>
        </div>
    );
}
