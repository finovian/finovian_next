'use client';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-6 text-3xl font-bold text-foreground">Privacy Policy</h1>
      <p className="mb-4 text-muted-foreground">
        Finovian ("we", "us", or "our") operates the website
        finovian.com (the "Service"). This page informs you of our policies regarding
        the collection, use, and disclosure of personal information.
      </p>

      <h2 className="mt-6 mb-2 text-xl font-semibold text-primary">1. Information We Collect</h2>
      <ul className="mb-4 list-disc space-y-1 pl-6 text-muted-foreground">
        <li>Personal information (email, name) when subscribing</li>
        <li>Usage data (IP address, browser type, time spent)</li>
        <li>Cookies for analytics and ad personalization</li>
      </ul>

      <h2 className="mt-6 mb-2 text-xl font-semibold text-primary">2. How We Use Information</h2>
      <ul className="mb-4 list-disc space-y-1 pl-6 text-muted-foreground">
        <li>To improve content and user experience</li>
        <li>To send newsletters if opted in</li>
        <li>To serve personalized Google Ads (AdSense)</li>
      </ul>

      <h2 className="mt-6 mb-2 text-xl font-semibold text-primary">3. Third-Party Services</h2>
      <p className="mb-4 text-muted-foreground">
        We use Google Analytics and Google AdSense which may collect anonymous data via cookies. You
        can opt out using browser settings or{' '}
        <a
          href="https://adssettings.google.com"
          target="_blank"
          className="text-primary underline hover:text-primary-foreground"
        >
          Google Ads Settings
        </a>
        .
      </p>

      <h2 className="mt-6 mb-2 text-xl font-semibold text-primary">4. Your Rights</h2>
      <ul className="mb-4 list-disc space-y-1 pl-6 text-muted-foreground">
        <li>Request access or deletion of your data</li>
        <li>Unsubscribe from our newsletter anytime</li>
      </ul>

      <h2 className="mt-6 mb-2 text-xl font-semibold text-primary">5. Children's Privacy</h2>
      <p className="mb-4 text-muted-foreground">We do not knowingly collect information from anyone under 13.</p>

      <h2 className="mt-6 mb-2 text-xl font-semibold text-primary">6. Updates</h2>
      <p className="mb-4 text-muted-foreground">We may update this privacy policy. Changes will be posted here.</p>

      <h2 className="mt-6 mb-2 text-xl font-semibold text-primary">7. Contact Us</h2>
      <p className="text-muted-foreground">
        If you have any questions about this policy, email us at:{' '}
        <a href="mailto:hello@finovian.com" className="text-primary underline hover:text-primary-foreground">
          hello@finovian.com
        </a>
      </p>
      </main>
    </div>
  );
}
