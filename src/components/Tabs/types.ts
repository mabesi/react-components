
export type TabsVariant = 'default' | 'minimal' | 'modern' | 'compact';

export interface TabsContextValue {
    activeTab: string;
    setActiveTab: (id: string) => void;
    variant: TabsVariant;
}

export interface TabsProps {
    defaultActiveTab?: string;
    activeTab?: string; // Controlled mode
    onTabChange?: (id: string) => void;
    variant?: TabsVariant;
    className?: string;
    children: React.ReactNode;
}

export interface TabListProps {
    className?: string;
    children: React.ReactNode;
}

export interface TabProps {
    id: string;
    disabled?: boolean;
    className?: string;
    children: React.ReactNode;
}

export interface TabPanelProps {
    id: string;
    className?: string;
    children: React.ReactNode;
}
