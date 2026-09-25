/**
 * Centralized Analytics Utility for Google Analytics 4 (GA4) and Google Tag Manager (GTM)
 *
 * Configures measurement ID G-1PZXYERJ4D and contact click tracking (WhatsApp, Phone)
 * with the 'contact_click' event and channel parameter.
 * Strictly avoids conversion inflation (no purchase, qualify_lead, or close_convert_lead on simple clicks).
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
 * Avoids multiple script insertions.
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
    // send_page_view is false in config so SPA route listener sends a single page_view per URL transition
    gtag('config', GA_MEASUREMENT_ID, {
      send_page_view: false,
      anonymize_ip: true
    });
  }
}

/**
 * Tracks a single page view on initial load and internal SPA navigation.
 */
export function trackPageView(path?: string, title?: string): void {
  if (typeof window === 'undefined') return;

  const pagePath = path || window.location.pathname;
  const pageTitle = title || document.title;
  const pageLocation = window.location.href;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'page_view',
    page_path: pagePath,
    page_title: pageTitle,
    page_location: pageLocation,
    timestamp: new Date().toISOString()
  });

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: pageTitle,
      page_location: pageLocation
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
 * Records them strictly as contact interaction events ('contact_click'),
 * differentiating by the 'contact_channel' parameter.
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
