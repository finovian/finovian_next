'use client';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-6 text-3xl font-bold text-foreground">Terms and Conditions</h1>

      <p className="mb-4 text-muted-foreground">
        Welcome to Finovian. By accessing our website at finovian.com, you agree to be bound by
        these Terms and Conditions and all applicable laws and regulations.
      </p>

      <h2 className="mt-6 mb-2 text-xl font-semibold text-primary">1. Use License</h2>
      <p className="mb-4 text-muted-foreground">
        Permission is granted to temporarily download one copy of the materials (information or
        software) on Finovian's website for personal, non-commercial use only. This is the grant of
        a license, not a transfer of title.
      </p>

      <h2 className="mt-6 mb-2 text-xl font-semibold text-primary">2. Disclaimer</h2>
      <p className="mb-4 text-muted-foreground">
        The materials on Finovian's website are provided on an "as is" basis. Finovian makes no
        warranties, expressed or implied, and hereby disclaims all other warranties including,
        without limitation, implied warranties of merchantability or fitness for a particular
        purpose.
      </p>

      <h2 className="mt-6 mb-2 text-xl font-semibold text-primary">3. Financial Advice Disclaimer</h2>
      <p className="mb-4 text-muted-foreground">
        All content provided on Finovian is for informational purposes only and does not constitute
        financial advice. We recommend consulting with a certified financial advisor before making
        any investment decisions.
      </p>

      <h2 className="mt-6 mb-2 text-xl font-semibold text-primary">4. Limitations</h2>
      <p className="mb-4 text-muted-foreground">
        In no event shall Finovian or its suppliers be liable for any damages (including, without
        limitation, damages for loss of data or profit, or due to business interruption).
      </p>

      <h2 className="mt-6 mb-2 text-xl font-semibold text-primary">5. Accuracy of Content</h2>
      <p className="mb-4 text-muted-foreground">
        The content on Finovian could include technical, typographical, or photographic errors. We
        do not warrant that any of the content is accurate, complete, or current.
      </p>

      <h2 className="mt-6 mb-2 text-xl font-semibold text-primary">6. Affiliate Links</h2>
      <p className="mb-4 text-muted-foreground">
        Some articles may contain affiliate links. If you use these links, we may earn a commission
        at no extra cost to you. This supports our work and helps keep the site running.
      </p>

      <h2 className="mt-6 mb-2 text-xl font-semibold text-primary">7. Modifications</h2>
      <p className="mb-4 text-muted-foreground">
        Finovian may revise these Terms and Conditions at any time. By using this website, you are
        agreeing to be bound by the current version.
      </p>

      <h2 className="mt-6 mb-2 text-xl font-semibold text-primary">8. Governing Law</h2>
      <p className="mb-4 text-muted-foreground">
        These terms are governed by and construed in accordance with the laws of the United States,
        and you irrevocably submit to the jurisdiction of the courts in that location.
      </p>

      <h2 className="mt-6 mb-2 text-xl font-semibold text-primary">9. Contact Us</h2>
      <p className="text-muted-foreground">
        If you have any questions about these Terms, please contact us at:{' '}
        <a href="mailto:hello@finovian.com" className="text-primary underline hover:text-primary-foreground">
          hello@finovian.com
        </a>
      </p>
      </main>
    </div>
  );
}
