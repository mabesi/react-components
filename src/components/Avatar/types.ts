
import type { ImgHTMLAttributes } from 'react';

export type AvatarVariant = 'circle' | 'square' | 'rounded';
export type AvatarSize = 'small' | 'medium' | 'large' | 'xlarge';
export type AvatarStatus = 'online' | 'offline' | 'busy' | 'away';

export interface AvatarProps extends ImgHTMLAttributes<HTMLDivElement> {
    /**
     * Source of the image.
     */
    src?: string;

    /**
     * Alt text for the image.
     */
    alt?: string;

    /**
     * Name of the user (used for initials generation).
     */
    name?: string;

    /**
     * Shape of the avatar.
     * @default 'circle'
     */
    variant?: AvatarVariant;

    /**
     * Size of the avatar.
     * @default 'medium'
     */
    size?: AvatarSize;

    /**
     * Status indicator to show.
     */
    status?: AvatarStatus;
}
