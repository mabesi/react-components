import { Link } from 'react-router-dom';
import { Drawer, Button, Card, CardBody, type DrawerPlacement } from '@mabesi/react-components';
import { useState } from 'react';
import './Pages.css';

export function DrawerPage() {
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState<DrawerPlacement>('right');
    const [size, setSize] = useState<'default' | 'large' | 'full'>('default');

    const openDrawer = (pos: DrawerPlacement, s: 'default' | 'large' | 'full' = 'default') => {
        setPlacement(pos);
        setSize(s);
        setOpen(true);
    };

    return (
        <div className="example-page">
            <Link to="/" className="back-link">← Back to Examples</Link>

            <header className="component-page-header">
                <h1>Drawer</h1>
                <p className="subtitle">
                    A navigation panel that slides in from the edge of the screen.
                </p>
            </header>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Placements</h2>
                </div>
                <div className="example-item">
                    <Card>
                        <CardBody>
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <Button onClick={() => openDrawer('right')}>Right (Default)</Button>
                                <Button variant="secondary" onClick={() => openDrawer('left')}>Left</Button>
                                <Button variant="secondary" onClick={() => openDrawer('top')}>Top</Button>
                                <Button variant="secondary" onClick={() => openDrawer('bottom')}>Bottom</Button>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Sizes</h2>
                </div>
                <div className="example-item">
                    <Card>
                        <CardBody>
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <Button onClick={() => openDrawer('right', 'default')}>Default Size</Button>
                                <Button variant="secondary" onClick={() => openDrawer('right', 'large')}>Large</Button>
                                <Button variant="outline" onClick={() => openDrawer('right', 'full')}>Full Width</Button>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>

            <Drawer
                open={open}
                onClose={() => setOpen(false)}
                placement={placement}
                size={size}
                title={`Drawer (${placement})`}
            >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <p>
                        This is the drawer content. It can contain any elements like text, forms, or lists.
                    </p>
                    <p>
                        Current settings:
                        <br />
                        <strong>Placement:</strong> {placement}
                        <br />
                        <strong>Size:</strong> {size}
                    </p>

                    <div style={{ marginTop: '2rem' }}>
                        <Button variant="success" fullWidth onClick={() => alert('Action clicked!')}>
                            Perform Action
                        </Button>
                        <div style={{ height: '1rem' }} />
                        <Button variant="danger" fullWidth onClick={() => setOpen(false)}>
                            Close Drawer
                        </Button>
                    </div>

                    {[...Array(5)].map((_, i) => (
                        <p key={i} style={{ color: '#64748b' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    ))}
                </div>
            </Drawer>
        </div>
    );
}
