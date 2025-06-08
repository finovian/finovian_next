
"use client";

export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-6 text-[#1a1a1a]">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        Finovian (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the website finovian.com (the
        &ldquo;Service&rdquo;). This page informs you of our policies regarding the
        collection, use, and disclosure of personal information.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li>Personal information (email, name) when subscribing</li>
        <li>Usage data (IP address, browser type, time spent)</li>
        <li>Cookies for analytics and ad personalization</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Information</h2>
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li>To improve content and user experience</li>
        <li>To send newsletters if opted in</li>
        <li>To serve personalized Google Ads (AdSense)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Third-Party Services</h2>
      <p className="mb-4">
        We use Google Analytics and Google AdSense which may collect anonymous
        data via cookies. You can opt out using browser settings or{" "}
        <a href="https://adssettings.google.com" target="_blank" className="text-blue-600 underline">
          Google Ads Settings
        </a>.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Your Rights</h2>
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li>Request access or deletion of your data</li>
        <li>Unsubscribe from our newsletter anytime</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Children&apos;s Privacy</h2>
      <p className="mb-4">
        We do not knowingly collect information from anyone under 13.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Updates</h2>
      <p className="mb-4">
        We may update this privacy policy. Changes will be posted here.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Contact Us</h2>
      <p>
        If you have any questions about this policy, email us at:{" "}
        <a href="mailto:hello@finovian.com" className="text-blue-600 underline">
          hello@finovian.com
        </a>
      </p>
    </main>
  );
}
