
export type CardVariant = 'elevated' | 'outlined' | 'filled';
export type CardPadding = 'none' | 'small' | 'medium' | 'large';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: CardVariant;
    padding?: CardPadding;
    interactive?: boolean;
    children: React.ReactNode;
}

export interface CardHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    action?: React.ReactNode;
}

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    align?: 'start' | 'center' | 'end' | 'space-between';
}

export interface CardImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    position?: 'top' | 'bottom';
}
