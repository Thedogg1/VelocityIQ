'use client';

import { useEffect } from 'react';

export default function CalendlyInline() {
  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector(
      'script[src*="calendly.com/assets/external/widget.js"]'
    );

    if (existingScript) {
      return; // Script already loaded, Calendly will auto-initialize
    }

    // Load the Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    // Don't remove script on cleanup - Calendly needs it to persist
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/velocityiq/30min"
      style={{ minWidth: '320px', height: '700px' }}
    />
  );
}


