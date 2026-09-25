/**
 * Centralized Analytics Utility for Google Analytics 4 (GA4) and Google Tag Manager (GTM)
 *
 * Configures contact click measurement (WhatsApp, Phone) as contact interaction events
 * without fabricating false measurement IDs or classifying them as completed sales.
 */

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

// Check for Measurement ID provided by environment or configuration
const GA_MEASUREMENT_ID = (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_GA4_MEASUREMENT_ID) || '';

/**
 * Initializes Google Analytics 4 if a valid Measurement ID is supplied.
 * Safe to call multiple times (checks for existing scripts to avoid duplication).
 */
export function initAnalytics(): void {
  if (typeof window === 'undefined') return;

  // Initialize dataLayer safely
  window.dataLayer = window.dataLayer || [];

  // Check if GA4 script is already loaded to avoid duplication
  const existingGtagScript = document.querySelector('script[src*="googletagmanager.com/gtag/js"]');

  if (GA_MEASUREMENT_ID && !existingGtagScript) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    function gtag(...args: any[]) {
      window.dataLayer?.push(arguments);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
      send_page_view: true,
      anonymize_ip: true
    });
  }
}

export interface ContactClickEventParams {
  channel: 'whatsapp' | 'phone';
  location: string;
  label?: string;
  target?: string;
}

/**
 * Tracks user contact actions (WhatsApp or Phone clicks).
 * Records them strictly as contact interaction events (e.g. 'contact_click' / 'contact'),
 * avoiding misclassification as confirmed sales or transactions.
 */
export function trackContactClick(params: ContactClickEventParams): void {
  if (typeof window === 'undefined') return;

  const eventPayload = {
    event: 'contact_click',
    contact_channel: params.channel,
    contact_location: params.location,
    contact_label: params.label || `${params.channel} click`,
    target_url: params.target || '',
    page_path: window.location.pathname,
    page_title: document.title,
    timestamp: new Date().toISOString()
  };

  // Push to GTM dataLayer if available
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(eventPayload);

  // Dispatch to GA4 via gtag if available
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'contact_click', {
      event_category: 'Engagement',
      event_label: params.location,
      contact_channel: params.channel,
      page_location: window.location.href,
      page_path: window.location.pathname
    });
  }
}
