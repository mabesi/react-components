import type { ReactNode } from 'react';

export type ModalSize = 'small' | 'medium' | 'large' | 'fullscreen';
export type ModalPosition = 'center' | 'top' | 'bottom';
export type FooterAlign = 'left' | 'center' | 'right' | 'space-between';

export interface ModalProps {
    open: boolean;
    onClose: () => void;
    size?: ModalSize;
    position?: ModalPosition;
    closeOnBackdrop?: boolean;
    closeOnEsc?: boolean;
    showCloseButton?: boolean;
    className?: string;
    children: ReactNode;
}

export interface ModalHeaderProps {
    title: string;
    subtitle?: string;
    onClose?: () => void;
    showCloseButton?: boolean;
}

export interface ModalBodyProps {
    children: ReactNode;
    className?: string;
}

export interface ModalFooterProps {
    children: ReactNode;
    align?: FooterAlign;
    className?: string;
}
