/**
 * Centralized Analytics Utility for Google Analytics 4 (GA4) and Google Tag Manager (GTM)
 *
 * Configures measurement ID G-1PZXYERJ4D using GA4 standard tag initialization.
 * Page views (initial load and browser history changes) are measured automatically by GA4 Enhanced Measurement.
 *
 * Contact clicks (WhatsApp, Phone) are tracked via 'contact_click' with 'contact_channel'.
 * Strictly avoids conversion inflation (no purchase, qualify_lead, or close_convert_lead).
 */

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

// Measurement ID from env or verified production default
export const GA_MEASUREMENT_ID =
  (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_GA4_MEASUREMENT_ID) ||
  'G-1PZXYERJ4D';

/**
 * Initializes Google Analytics 4 tag cleanly and only once.
 * Does not suppress initial page_view; relies on GA4 Enhanced Measurement for automatic page & history tracking.
 */
export function initAnalytics(): void {
  if (typeof window === 'undefined') return;

  // Initialize dataLayer safely
  window.dataLayer = window.dataLayer || [];

  // Check if GA4 script is already present in DOM to prevent duplicate tags
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
    // GA4 standard config: initial page_view and browser history changes are handled automatically by Enhanced Measurement
    gtag('config', GA_MEASUREMENT_ID, {
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
 * Tracks real user contact actions (WhatsApp or Phone link clicks).
 * Fired exclusively when the user actually engages a direct contact channel.
 * Opening booking/modal dialogs is not treated as a contact click.
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
      event_category: 'Contact',
      contact_channel: params.channel,
      contact_location: params.location,
      page_location: window.location.href,
      page_path: window.location.pathname,
      target_url: params.target || ''
    });
  }
}
