import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { DynamicForm } from './DynamicForm';
import { I18nProvider } from '../../context/I18nContext';
import type { FormField } from './types';

const renderWithProvider = (component: React.ReactNode) => {
    return render(<I18nProvider>{component}</I18nProvider>);
};

const mockFields: FormField[] = [
    {
        id: '1',
        name: 'username',
        label: 'Username',
        type: 'text',
        validation: [{ type: 'required', message: 'Username is required' }]
    },
    {
        id: '2',
        name: 'email',
        label: 'Email',
        type: 'email'
    }
];

describe('DynamicForm', () => {
    it('renders fields from config', () => {
        renderWithProvider(
            <DynamicForm
                fields={mockFields}
                onSubmit={() => { }}
            />
        );

        expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    });

    it('accepts initial values', () => {
        renderWithProvider(
            <DynamicForm
                fields={mockFields}
                initialValues={{ username: 'testuser' }}
                onSubmit={() => { }}
            />
        );

        expect(screen.getByDisplayValue('testuser')).toBeInTheDocument();
    });

    it('handles form submission', async () => {
        const handleSubmit = vi.fn();
        renderWithProvider(
            <DynamicForm
                fields={mockFields}
                onSubmit={handleSubmit}
            />
        );

        // Fill required field
        fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'user123' } });

        // Submit
        fireEvent.click(screen.getByRole('button', { name: /submit/i }));

        await waitFor(() => {
            expect(handleSubmit).toHaveBeenCalledTimes(1);
            expect(handleSubmit).toHaveBeenCalledWith(expect.objectContaining({
                username: 'user123'
            }));
        });
    });

    it('validates required fields on submit', async () => {
        const handleSubmit = vi.fn();
        renderWithProvider(
            <DynamicForm
                fields={mockFields}
                onSubmit={handleSubmit}
            />
        );

        // Submit without filling required 'username'
        fireEvent.click(screen.getByRole('button', { name: /submit/i }));

        await waitFor(() => {
            expect(handleSubmit).not.toHaveBeenCalled();
            // Assuming default validation message relates to being required
            // You might need to check how validationValue returns error or how Input displays it
            // Check for error message
            expect(screen.getByText('Username is required')).toBeInTheDocument();
        });
    });

    it('calls onCancel when cancel button is clicked', () => {
        const handleCancel = vi.fn();
        renderWithProvider(
            <DynamicForm
                fields={mockFields}
                onSubmit={() => { }}
                onCancel={handleCancel}
            />
        );

        fireEvent.click(screen.getByRole('button', { name: /cancel/i }));
        expect(handleCancel).toHaveBeenCalledTimes(1);
    });
});
