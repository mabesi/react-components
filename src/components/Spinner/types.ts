
export type SpinnerSize = 'small' | 'medium' | 'large';
export type SpinnerVariant = 'primary' | 'secondary' | 'white' | 'gray';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * The size of the spinner.
     * @default 'medium'
     */
    size?: SpinnerSize;

    /**
     * The color variant of the spinner.
     * @default 'primary'
     */
    variant?: SpinnerVariant;
}
