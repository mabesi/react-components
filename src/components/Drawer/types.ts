import type { ReactNode, HTMLAttributes } from 'react';

export type DrawerPlacement = 'left' | 'right' | 'top' | 'bottom';
export type DrawerSize = 'default' | 'large' | 'full';

export interface DrawerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    /**
     * Whether the drawer is open
     */
    open: boolean;

    /**
     * Callback fired when the drawer should close
     */
    onClose: () => void;

    /**
     * The placement of the drawer
     * @default 'right'
     */
    placement?: DrawerPlacement;

    /**
     * The title of the drawer
     */
    title?: ReactNode;

    /**
     * The size of the drawer
     * @default 'default'
     */
    size?: DrawerSize;

    /**
     * Whether to show the close button
     * @default true
     */
    showCloseButton?: boolean;

    /**
     * Whether to show the backdrop
     * @default true
     */
    backdrop?: boolean;

    /**
     * Whether clicking the backdrop closes the drawer
     * @default true
     */
    closeOnBackdrop?: boolean;
}
