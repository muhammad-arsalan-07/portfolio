'use client';

import { useEffect } from 'react';
import AOS from 'aos';

export default function AosInit() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: false,
      offset: 50,
      debounceDelay: 50,
      throttleDelay: 99,
    });
  }, []);

  return null;
}
