import ReactGA from 'react-ga4';

const MEASUREMENT_ID = 'G-PE9XW2G3PY'; // TODO: Replace with actual Measurement ID

interface TrackingEvent {
    category: string;
    action: string;
    label?: string;
    value?: number;
    [key: string]: any;
}

export const initGA = () => {
    // Only initialize if not already initialized
    // react-ga4 handles this internally usually, but good to be safe or just call it 
    if (typeof window !== 'undefined') {
        console.log('Comparing IDs:', MEASUREMENT_ID);
        ReactGA.initialize(MEASUREMENT_ID);
        console.log('GA4 Initialized');
    }
};

export const trackEvent = ({ category, action, label, value, ...rest }: TrackingEvent) => {
    if (typeof window !== 'undefined') {
        console.log(`GA4 Event: ${category} - ${action}`, { label, value, ...rest });
        ReactGA.event({
            category,
            action,
            label,
            value,
            ...rest
        });
    }
};

export const trackWidgetView = (variant: 'A' | 'B') => {
    trackEvent({
        category: 'Widget',
        action: 'View',
        label: `Variant ${variant}`,
        variant: variant
    });
};

export const trackWidgetOpen = (variant: 'A' | 'B') => {
    trackEvent({
        category: 'Widget',
        action: 'Open',
        label: `Variant ${variant}`,
        variant: variant
    });
};

export const trackWidgetClose = (variant: 'A' | 'B') => {
    trackEvent({
        category: 'Widget',
        action: 'Close',
        label: `Variant ${variant}`,
        variant: variant
    });
};
