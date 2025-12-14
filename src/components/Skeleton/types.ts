import type { HTMLAttributes } from 'react';

export type SkeletonVariant = 'text' | 'circular' | 'rectangular' | 'rounded';
export type SkeletonAnimation = 'pulse' | 'wave' | 'none';

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * The variant to use
     * @default 'text'
     */
    variant?: SkeletonVariant;

    /**
     * The animation to use
     * @default 'pulse'
     */
    animation?: SkeletonAnimation;

    /**
     * Width of the skeleton
     */
    width?: string | number;

    /**
     * Height of the skeleton
     */
    height?: string | number;
}
