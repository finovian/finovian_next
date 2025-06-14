export function initializePlausible() {
  if (typeof window !== 'undefined') {
    window.plausible =
      window.plausible ||
      function (...args: any[]) {
        (window.plausible.q = window.plausible.q || []).push(...args);
      };
  }
}
