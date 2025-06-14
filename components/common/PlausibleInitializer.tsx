'use client';

import { useEffect } from 'react';
import { initializePlausible } from '@/lib/plausible';

export default function PlausibleInitializer() {
  useEffect(() => {
    initializePlausible();
  }, []);

  return null;
} 