import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Modal } from './Modal';
import { I18nProvider } from '../../context/I18nContext';

// Helper to render with provider
const renderWithProvider = (component: React.ReactNode) => {
    return render(<I18nProvider>{component}</I18nProvider>);
};

describe('Modal', () => {
    it('renders when open is true', () => {
        renderWithProvider(
            <Modal open onClose={() => { }}>
                <div data-testid="modal-content">Modal Content</div>
            </Modal>
        );
        expect(screen.getByRole('dialog')).toBeInTheDocument();
        expect(screen.getByTestId('modal-content')).toBeInTheDocument();
    });

    it('does not render when open is false', () => {
        renderWithProvider(
            <Modal open={false} onClose={() => { }}>
                <div>Modal Content</div>
            </Modal>
        );
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('calls onClose when close button is clicked', () => {
        const handleClose = vi.fn();
        renderWithProvider(
            <Modal open onClose={handleClose} showCloseButton>
                <div>Content</div>
            </Modal>
        );

        fireEvent.click(screen.getByRole('button', { name: /close/i }));
        expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('calls onClose on improper key press (Escape)', () => {
        const handleClose = vi.fn();
        renderWithProvider(
            <Modal open onClose={handleClose} closeOnEsc>
                <div>Content</div>
            </Modal>
        );

        fireEvent.keyDown(document, { key: 'Escape' });
        expect(handleClose).toHaveBeenCalledTimes(1);
    });
});
