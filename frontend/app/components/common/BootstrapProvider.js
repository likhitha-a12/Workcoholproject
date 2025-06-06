// app/components/BootstrapProvider.js
'use client'; // Force this file to run on the client only

import { useEffect } from 'react';

export default function BootstrapProvider() {
  useEffect(() => {
    // Dynamically import bootstrap JS in client-side only
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .then(() => {
        console.log('Bootstrap JS loaded!');
      })
      .catch((err) => console.error('Failed to load Bootstrap JS:', err));
  }, []);

  return null; // This is a helper component
}
