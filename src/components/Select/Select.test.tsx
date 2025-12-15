import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Select } from './Select';

describe('Select', () => {
    const options = [
        { value: 'opt1', label: 'Option 1' },
        { value: 'opt2', label: 'Option 2' },
        { value: 'opt3', label: 'Option 3', disabled: true },
    ];

    it('renders label correctly', () => {
        render(<Select label="Choose an option" options={options} />);
        expect(screen.getByLabelText('Choose an option')).toBeInTheDocument();
    });

    it('renders options from prop', () => {
        render(<Select options={options} />);
        const select = screen.getByRole('combobox');
        expect(select).toBeInTheDocument();
        expect(screen.getByRole('option', { name: 'Option 1' })).toBeInTheDocument();
        expect(screen.getByRole('option', { name: 'Option 2' })).toBeInTheDocument();
    });

    it('renders children options', () => {
        render(
            <Select>
                <option value="1">One</option>
                <option value="2">Two</option>
            </Select>
        );
        expect(screen.getByRole('option', { name: 'One' })).toBeInTheDocument();
    });

    it('handles selection change', () => {
        const handleChange = vi.fn();
        render(<Select options={options} onChange={handleChange} />);
        const select = screen.getByRole('combobox');

        fireEvent.change(select, { target: { value: 'opt2' } });
        expect(handleChange).toHaveBeenCalledTimes(1);
        expect(handleChange).toHaveBeenCalledWith(expect.anything()); // Event object
        expect((select as HTMLSelectElement).value).toBe('opt2');
    });

    it('handles disabled option', () => {
        render(<Select options={options} />);
        expect(screen.getByRole('option', { name: 'Option 3' })).toBeDisabled();
    });
});
