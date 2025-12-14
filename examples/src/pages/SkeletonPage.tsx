import { Skeleton, Card } from '@mabesi/react-components';

export function SkeletonPage() {
    return (
        <div className="page-container">
            <h1>Skeleton</h1>
            <p className="page-description">
                Display a placeholder preview of your content before the data gets loaded to reduce load-time frustration.
            </p>

            <section className="component-section">
                <h2>Variants</h2>
                <Card>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div>
                            <p>Text</p>
                            <Skeleton variant="text" />
                            <Skeleton variant="text" width="60%" />
                        </div>

                        <div>
                            <p>Circular</p>
                            <Skeleton variant="circular" width={40} height={40} />
                        </div>

                        <div>
                            <p>Rectangular</p>
                            <Skeleton variant="rectangular" width={210} height={118} />
                        </div>

                        <div>
                            <p>Rounded</p>
                            <Skeleton variant="rounded" width={210} height={118} />
                        </div>
                    </div>
                </Card>
            </section>

            <section className="component-section">
                <h2>Animations</h2>
                <Card>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div>
                            <p>Pulse (Default)</p>
                            <Skeleton width="100%" height={100} animation="pulse" />
                        </div>

                        <div>
                            <p>Wave</p>
                            <Skeleton width="100%" height={100} animation="wave" />
                        </div>

                        <div>
                            <p>None</p>
                            <Skeleton width="100%" height={100} animation="none" />
                        </div>
                    </div>
                </Card>
            </section>

            <section className="component-section">
                <h2>Example Usage (Card Loading)</h2>
                <Card>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                        <Skeleton variant="circular" width={40} height={40} style={{ marginRight: '1rem' }} />
                        <div style={{ width: '100%' }}>
                            <Skeleton variant="text" width="40%" style={{ marginBottom: 6 }} />
                            <Skeleton variant="text" width="80%" />
                        </div>
                    </div>
                    <Skeleton variant="rectangular" height={150} style={{ marginBottom: '1rem' }} />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" width="90%" />
                    <Skeleton variant="text" width="60%" />
                </Card>
            </section>
        </div>
    );
}
