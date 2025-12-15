import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Alert } from './Alert';
import { I18nProvider } from '../../context/I18nContext';

const renderWithProvider = (component: React.ReactNode) => {
    return render(<I18nProvider>{component}</I18nProvider>);
};

describe('Alert', () => {
    it('renders default info variant correctly', () => {
        renderWithProvider(<Alert>Alert message</Alert>);
        expect(screen.getByRole('alert')).toBeInTheDocument();
        expect(screen.getByText('Alert message')).toBeInTheDocument();
        // Check for default info icon if possible, or just class
    });

    it('renders specific variant', () => {
        renderWithProvider(<Alert variant="success">Success message</Alert>);
        expect(screen.getByRole('alert')).toHaveClass(/success/);
    });

    it('renders with custom title', () => {
        renderWithProvider(<Alert title="Custom Title">Message</Alert>);
        expect(screen.getByText('Custom Title')).toBeInTheDocument();
    });

    it('can be dismissed', () => {
        const handleDismiss = vi.fn();
        renderWithProvider(<Alert dismissible onDismiss={handleDismiss}>Dismiss me</Alert>);

        const closeButton = screen.getByRole('button', { name: /close/i });
        fireEvent.click(closeButton);

        expect(handleDismiss).toHaveBeenCalledTimes(1);
        expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    });
});
