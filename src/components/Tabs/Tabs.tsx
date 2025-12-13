import React, { useState, useEffect } from 'react';
import { TabsContext, useTabsContext } from './TabsContext';
import type { TabsProps, TabListProps, TabProps, TabPanelProps } from './types';
import styles from './styles.module.css';

export const Tabs: React.FC<TabsProps> = ({
    defaultActiveTab,
    activeTab: controlledActiveTab,
    onTabChange,
    variant = 'default',
    className,
    children
}) => {
    const [uncontrolledActiveTab, setUncontrolledActiveTab] = useState(defaultActiveTab || '');

    // Determine the source of truth
    const isControlled = controlledActiveTab !== undefined;
    const activeTab = isControlled ? controlledActiveTab : uncontrolledActiveTab;

    // Initialize first tab if none selected and children exist (naive check)
    useEffect(() => {
        if (!activeTab && React.Children.count(children) > 0) {
            // This is tricky without inspecting children deeper, leaving basic logic for now.
            // Ideally the user should provide defaultActiveTab.
        }
    }, []);

    const setActiveTab = (id: string) => {
        if (!isControlled) {
            setUncontrolledActiveTab(id);
        }
        onTabChange?.(id);
    };

    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab, variant }}>
            <div className={`${styles.tabs} ${styles[variant]} ${className || ''}`}>
                {children}
            </div>
        </TabsContext.Provider>
    );
};

export const TabList: React.FC<TabListProps> = ({ className, children }) => {
    return (
        <div className={`${styles.tabList} ${className || ''}`} role="tablist">
            {children}
        </div>
    );
};

export const Tab: React.FC<TabProps> = ({ id, disabled, className, children }) => {
    const { activeTab, setActiveTab } = useTabsContext();
    const isActive = activeTab === id;

    const handleClick = () => {
        if (!disabled) {
            setActiveTab(id);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick();
        }
    };

    return (
        <button
            role="tab"
            aria-selected={isActive}
            aria-controls={`panel-${id}`}
            id={`tab-${id}`}
            tabIndex={isActive ? 0 : -1}
            className={`${styles.tab} ${isActive ? styles.active : ''} ${disabled ? styles.disabled : ''} ${className || ''}`}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export const TabPanel: React.FC<TabPanelProps> = ({ id, className, children }) => {
    const { activeTab } = useTabsContext();
    const isActive = activeTab === id;

    if (!isActive) return null;

    return (
        <div
            role="tabpanel"
            id={`panel-${id}`}
            aria-labelledby={`tab-${id}`}
            className={`${styles.tabPanel} ${className || ''}`}
        >
            {children}
        </div>
    );
};
