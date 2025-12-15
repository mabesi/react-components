import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Input } from './Input';

describe('Input', () => {
    it('renders label correctly', () => {
        render(<Input label="Username" />);
        expect(screen.getByLabelText('Username')).toBeInTheDocument();
    });

    it('renders helper text', () => {
        render(<Input helperText="Enter your username" />);
        expect(screen.getByText('Enter your username')).toBeInTheDocument();
    });

    it('handles text input', () => {
        render(<Input placeholder="Type here" />);
        const input = screen.getByPlaceholderText('Type here') as HTMLInputElement;

        fireEvent.change(input, { target: { value: 'Hello' } });
        expect(input.value).toBe('Hello');
    });

    it('shows error state', () => {
        render(<Input error helperText="Error message" />);
        const input = screen.getByRole('textbox');
        expect(input).toHaveAttribute('aria-invalid', 'true');
        expect(screen.getByText('Error message')).toHaveClass(/error/);
    });

    it('is disabled when disabled prop is true', () => {
        render(<Input disabled />);
        expect(screen.getByRole('textbox')).toBeDisabled();
    });
});
