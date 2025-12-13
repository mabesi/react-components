
import { createContext, useContext } from 'react';
import type { TabsContextValue } from './types';

export const TabsContext = createContext<TabsContextValue | undefined>(undefined);

export const useTabsContext = () => {
    const context = useContext(TabsContext);
    if (!context) {
        throw new Error('Tabs components must be used within a Tabs provider');
    }
    return context;
};
