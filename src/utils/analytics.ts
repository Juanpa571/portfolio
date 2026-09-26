/**
 * Google Analytics 4 (GA4) Conversion & Event Tracking Utility
 * 
 * Configured for GA4 Measurement ID: G-JFLR4JV7GJ
 * Tracks key conversion actions:
 * 1. WhatsApp Button Clicks (Header, Hero, FAQ, Footer, Pricing, Pages)
 * 2. Form Submissions (Diagnóstico Comercial / Cotizador)
 * 3. Pricing Package Clicks (Landing Page, Sitio Corporativo, Plataforma)
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    clarity?: (...args: any[]) => void;
  }
}

/**
 * Safe wrapper for gtag event dispatch and Microsoft Clarity tagging.
 * Works even if scripts are still loading because placeholders
 * are initialized in index.html.
 */
export const trackEvent = (
  eventName: string,
  params: Record<string, any> = {}
): void => {
  if (typeof window === 'undefined') return;

  try {
    // 1. Google Analytics 4
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    } else if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        ...params,
      });
    }

    // 2. Microsoft Clarity event tagging
    if (typeof window.clarity === 'function') {
      window.clarity('event', eventName);
    }
  } catch (err) {
    // Fail silently in case of adblockers or strict privacy filters
    console.debug('[Analytics] Failed to dispatch event:', eventName, err);
  }
};

/**
 * 1. Tracks WhatsApp Click Conversions
 * Sends both standard 'generate_lead' and specific 'click_whatsapp'.
 */
export const trackWhatsAppClick = (options: {
  location: 'header' | 'header_drawer' | 'hero' | 'pricing' | 'faq' | 'footer' | 'posicionar_web' | 'seo_cali' | 'not_found' | 'floating_cta';
  label?: string;
  subject?: string;
}): void => {
  const { location, label, subject } = options;

  // Granular custom event
  trackEvent('click_whatsapp', {
    event_category: 'Conversion',
    event_label: label || `WhatsApp Click - ${location}`,
    location,
    whatsapp_subject: subject || 'General',
    lead_source: 'whatsapp',
  });

  // Standard GA4 Lead conversion event
  trackEvent('generate_lead', {
    event_category: 'Lead',
    event_label: label || `WhatsApp from ${location}`,
    currency: 'COP',
    lead_type: 'whatsapp',
    placement: location,
  });
};

/**
 * 2. Tracks Diagnóstico Comercial Form Submission
 * Fires when user successfully submits the quote / diagnostic form.
 */
export const trackDiagnosticoSubmit = (options: {
  projectType: string;
  sector: string;
  name?: string;
}): void => {
  const { projectType, sector, name } = options;

  // Custom conversion event
  trackEvent('submit_diagnostico_comercial', {
    event_category: 'Conversion',
    event_label: `${projectType} - ${sector}`,
    project_type: projectType,
    business_sector: sector,
    client_name: name || undefined,
    lead_source: 'cotizador_form',
  });

  // Standard GA4 Lead conversion event
  trackEvent('generate_lead', {
    event_category: 'Lead',
    event_label: `Diagnostico Comercial: ${projectType}`,
    currency: 'COP',
    lead_type: 'commercial_audit_form',
    project_type: projectType,
    sector: sector,
  });
};

/**
 * 3. Tracks Pricing Package Clicks (Tier Selection)
 * Fires when user clicks "Ver detalles" or contacts regarding a specific plan.
 */
export const trackPricingClick = (options: {
  tierId: string;
  tierName: string;
  tierNumber: string;
  priceAmount: string;
  whatsappSubject?: string;
}): void => {
  const { tierId, tierName, tierNumber, priceAmount, whatsappSubject } = options;
  const numericPrice = parseInt(priceAmount.replace(/[^0-9]/g, ''), 10) || 0;

  // Custom conversion event
  trackEvent('click_pricing_package', {
    event_category: 'Conversion',
    event_label: `${tierNumber} - ${tierName}`,
    package_id: tierId,
    package_name: tierName,
    package_number: tierNumber,
    value: numericPrice,
    currency: 'COP',
  });

  // Standard GA4 E-commerce / Lead events
  trackEvent('select_item', {
    item_list_id: 'pricing_packages',
    item_list_name: 'Tarifas y Planes JP Studios',
    items: [
      {
        item_id: tierId,
        item_name: tierName,
        price: numericPrice,
        currency: 'COP',
        item_category: 'Web Design Packages',
      },
    ],
  });

  trackEvent('generate_lead', {
    event_category: 'Lead',
    event_label: `Pricing Package: ${tierName}`,
    value: numericPrice,
    currency: 'COP',
    lead_type: 'pricing_tier_inquiry',
    package_selected: tierName,
  });

  // Also record as a specific WhatsApp conversion with pricing context
  trackWhatsAppClick({
    location: 'pricing',
    label: `Pricing Tier ${tierNumber} (${tierName})`,
    subject: whatsappSubject,
  });
};
