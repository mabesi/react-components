import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    DynamicForm,
    type FormField,
    type FormValues,
    useTheme,
    useI18n
} from '@mabesi/react-components';
import './ExamplePage.css';

export default function ModalPage() {
    const { themeName, setTheme } = useTheme();
    const { locale, setLocale, t } = useI18n();

    // State for various modals
    const [basicOpen, setBasicOpen] = useState(false);
    const [sizesOpen, setSizesOpen] = useState<'small' | 'medium' | 'large' | 'fullscreen' | null>(null);
    const [positionsOpen, setPositionsOpen] = useState<'center' | 'top' | 'bottom' | null>(null);
    const [formOpen, setFormOpen] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [longContentOpen, setLongContentOpen] = useState(false);

    const userFormFields: FormField[] = [
        {
            name: 'name',
            type: 'text',
            label: 'Full Name',
            placeholder: 'John Doe',
            validation: [
                { type: 'required', message: 'Full Name is required' },
                { type: 'minLength', value: 3, message: 'Must be at least 3 characters' }
            ]
        },
        {
            name: 'email',
            type: 'email',
            label: 'Email Address',
            validation: [
                { type: 'required', message: 'Email is required' },
                { type: 'email', message: 'Invalid email address' }
            ]
        },
        {
            name: 'role',
            type: 'select',
            label: 'Role',
            options: [
                { value: 'admin', label: 'Administrator' },
                { value: 'editor', label: 'Editor' },
                { value: 'viewer', label: 'Viewer' }
            ]
        }
    ];

    const handleFormSubmit = (values: FormValues) => {
        alert(JSON.stringify(values, null, 2));
        setFormOpen(false);
    };

    return (
        <div className="example-page">
            <Link to="/" className="back-link">← Back to Examples</Link>

            <h1>🪟 Modal Component</h1>
            <p className="subtitle">Flexible dialogs, popups, and actionable overlays.</p>

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

                <div className="control-group">
                    <label>Language:</label>
                    <select value={locale} onChange={(e) => setLocale(e.target.value as any)}>
                        <option value="en">English</option>
                        <option value="pt-BR">Português (BR)</option>
                    </select>
                </div>
            </div>

            <div className="content-container">
                <div className="section-header">
                    <h2 className="section-title">Basic Usage</h2>
                    <p className="section-description">Standard modal with header, body, and footer.</p>
                </div>
                <div className="demo-actions">
                    <Button onClick={() => setBasicOpen(true)}>Open Basic Modal</Button>
                    <Button onClick={() => setConfirmOpen(true)} variant="danger">Delete Item (Confirmation)</Button>
                </div>

                <div className="section-header">
                    <h2 className="section-title">Sizes</h2>
                    <p className="section-description">Modals come in 4 standard sizes.</p>
                </div>
                <div className="demo-actions">
                    <Button onClick={() => setSizesOpen('small')}>Small (400px)</Button>
                    <Button onClick={() => setSizesOpen('medium')}>Medium (600px)</Button>
                    <Button onClick={() => setSizesOpen('large')}>Large (900px)</Button>
                    <Button onClick={() => setSizesOpen('fullscreen')}>Fullscreen</Button>
                </div>

                <div className="section-header">
                    <h2 className="section-title">Positions</h2>
                    <p className="section-description">Control where the modal appears on screen.</p>
                </div>
                <div className="demo-actions">
                    <Button onClick={() => setPositionsOpen('top')}>Top Aligned</Button>
                    <Button onClick={() => setPositionsOpen('center')}>Center (Default)</Button>
                    <Button onClick={() => setPositionsOpen('bottom')}>Bottom Aligned</Button>
                </div>

                <div className="section-header">
                    <h2 className="section-title">Advanced Content</h2>
                    <p className="section-description">Modals with forms and long scrollable content.</p>
                </div>
                <div className="demo-actions">
                    <Button onClick={() => setFormOpen(true)}>Modal with Form</Button>
                    <Button onClick={() => setLongContentOpen(true)}>Long Scrollable Content</Button>
                </div>
            </div>

            {/* Basic Modal */}
            <Modal open={basicOpen} onClose={() => setBasicOpen(false)}>
                <ModalHeader
                    title="Welcome to Modals"
                    subtitle="A simple way to present content"
                    onClose={() => setBasicOpen(false)}
                />
                <ModalBody>
                    <p>This is a standard modal dialog. It traps focus, locks body scroll, and overlays the page content.</p>
                    <p>You can close it by knowing the X button, clicking the backdrop, or pressing ESC.</p>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={() => setBasicOpen(false)} variant="secondary">{t.modal.close}</Button>
                    <Button onClick={() => setBasicOpen(false)} variant="primary">{t.modal.ok}</Button>
                </ModalFooter>
            </Modal>

            {/* Size Demos */}
            <Modal
                open={!!sizesOpen}
                onClose={() => setSizesOpen(null)}
                size={sizesOpen || 'medium'}
            >
                <ModalHeader
                    title={`${sizesOpen?.charAt(0).toUpperCase()}${sizesOpen?.slice(1)} Modal`}
                    onClose={() => setSizesOpen(null)}
                />
                <ModalBody>
                    <p>This modal is set to size: <strong>{sizesOpen}</strong>.</p>
                    <p>Resize your browser to see how it responds.</p>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={() => setSizesOpen(null)} variant="secondary">{t.modal.close}</Button>
                </ModalFooter>
            </Modal>

            {/* Position Demos */}
            <Modal
                open={!!positionsOpen}
                onClose={() => setPositionsOpen(null)}
                position={positionsOpen || 'center'}
            >
                <ModalHeader
                    title={`${positionsOpen?.charAt(0).toUpperCase()}${positionsOpen?.slice(1)} Position`}
                    onClose={() => setPositionsOpen(null)}
                />
                <ModalBody>
                    <p>This modal is positioned at the <strong>{positionsOpen}</strong> of the screen.</p>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={() => setPositionsOpen(null)} variant="secondary">{t.modal.close}</Button>
                </ModalFooter>
            </Modal>

            {/* Confirmation Modal */}
            <Modal open={confirmOpen} onClose={() => setConfirmOpen(false)} size="small">
                <ModalHeader title="Delete Item?" showCloseButton={false} />
                <ModalBody>
                    <p>Are you sure you want to delete this item? This action cannot be undone.</p>
                </ModalBody>
                <ModalFooter align="space-between">
                    <Button onClick={() => setConfirmOpen(false)} variant="secondary">{t.modal.cancel}</Button>
                    <Button onClick={() => setConfirmOpen(false)} variant="danger">{t.modal.confirm}</Button>
                </ModalFooter>
            </Modal>

            {/* Form Modal */}
            <Modal open={formOpen} onClose={() => setFormOpen(false)} size="medium">
                <ModalHeader title="Edit User" subtitle="Update user information" onClose={() => setFormOpen(false)} />
                <ModalBody>
                    <DynamicForm
                        fields={userFormFields}
                        onSubmit={handleFormSubmit}
                        submitLabel={t.common.save}
                    />
                </ModalBody>
            </Modal>

            {/* Long Content Modal */}
            <Modal open={longContentOpen} onClose={() => setLongContentOpen(false)}>
                <ModalHeader title="Terms and Conditions" onClose={() => setLongContentOpen(false)} />
                <ModalBody>
                    {Array.from({ length: 15 }).map((_, i) => (
                        <p key={i}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    ))}
                </ModalBody>
                <ModalFooter>
                    <Button onClick={() => setLongContentOpen(false)} variant="primary">{t.modal.ok}</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
