import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <p className="text-[#141414] tracking-light text-[32px] font-bold leading-tight min-w-72">
          Privacy Policy
        </p>
      </div>
      <p className="text-[#141414] text-base font-normal leading-normal pb-3 pt-1 px-4">
        This policy explains what personal data we collect, why we collect it,
        and how we protect it. By using this site, you agree to this policy.
      </p>
      <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Information We Collect
      </h2>
      <p className="text-[#141414] text-base font-normal leading-normal pb-3 pt-1 px-4">
        We may collect the following types of information:
      </p>
      <div className="px-4">
        <label className="flex gap-x-3 py-3 flex-row">
          <input
            type="checkbox"
            className="h-5 w-5 rounded border-[#dbdbdb] border-2 bg-transparent text-black checked:bg-black checked:border-black checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dbdbdb] focus:outline-none"
          />
          <p className="text-[#141414] text-base font-normal leading-normal">
            Email addresses (if you subscribe to our newsletter)
          </p>
        </label>
        <label className="flex gap-x-3 py-3 flex-row">
          <input
            type="checkbox"
            className="h-5 w-5 rounded border-[#dbdbdb] border-2 bg-transparent text-black checked:bg-black checked:border-black checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dbdbdb] focus:outline-none"
          />
          <p className="text-[#141414] text-base font-normal leading-normal">
            Analytics data (including IP address, browser information, and
            device information)
          </p>
        </label>
        <label className="flex gap-x-3 py-3 flex-row">
          <input
            type="checkbox"
            className="h-5 w-5 rounded border-[#dbdbdb] border-2 bg-transparent text-black checked:bg-black checked:border-black checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dbdbdb] focus:outline-none"
          />
          <p className="text-[#141414] text-base font-normal leading-normal">
            Cookies (if used, such as for analytics)
          </p>
        </label>
      </div>
      <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        How We Use the Information
      </h2>
      <p className="text-[#141414] text-base font-normal leading-normal pb-3 pt-1 px-4">
        We use the collected information for the following purposes:
      </p>
      <div className="px-4">
        <label className="flex gap-x-3 py-3 flex-row">
          <input
            type="checkbox"
            className="h-5 w-5 rounded border-[#dbdbdb] border-2 bg-transparent text-black checked:bg-black checked:border-black checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dbdbdb] focus:outline-none"
          />
          <p className="text-[#141414] text-base font-normal leading-normal">
            To improve our site content and user experience
          </p>
        </label>
        <label className="flex gap-x-3 py-3 flex-row">
          <input
            type="checkbox"
            className="h-5 w-5 rounded border-[#dbdbdb] border-2 bg-transparent text-black checked:bg-black checked:border-black checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dbdbdb] focus:outline-none"
          />
          <p className="text-[#141414] text-base font-normal leading-normal">
            To respond to your messages and inquiries
          </p>
        </label>
        <label className="flex gap-x-3 py-3 flex-row">
          <input
            type="checkbox"
            className="h-5 w-5 rounded border-[#dbdbdb] border-2 bg-transparent text-black checked:bg-black checked:border-black checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dbdbdb] focus:outline-none"
          />
          <p className="text-[#141414] text-base font-normal leading-normal">
            To send you email updates if you subscribe to our newsletter
          </p>
        </label>
      </div>
      <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Third-Party Services
      </h2>
      <p className="text-[#141414] text-base font-normal leading-normal pb-3 pt-1 px-4">
        We may use third-party services, including:
      </p>
      <div className="px-4">
        <label className="flex gap-x-3 py-3 flex-row">
          <input
            type="checkbox"
            className="h-5 w-5 rounded border-[#dbdbdb] border-2 bg-transparent text-black checked:bg-black checked:border-black checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dbdbdb] focus:outline-none"
          />
          <p className="text-[#141414] text-base font-normal leading-normal">
            Analytics providers (e.g., Google Analytics) to understand site
            usage
          </p>
        </label>
        <label className="flex gap-x-3 py-3 flex-row">
          <input
            type="checkbox"
            className="h-5 w-5 rounded border-[#dbdbdb] border-2 bg-transparent text-black checked:bg-black checked:border-black checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dbdbdb] focus:outline-none"
          />
          <p className="text-[#141414] text-base font-normal leading-normal">
            Newsletter providers (e.g., Buttondown, Mailchimp) to manage email
            subscriptions
          </p>
        </label>
        <label className="flex gap-x-3 py-3 flex-row">
          <input
            type="checkbox"
            className="h-5 w-5 rounded border-[#dbdbdb] border-2 bg-transparent text-black checked:bg-black checked:border-black checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dbdbdb] focus:outline-none"
          />
          <p className="text-[#141414] text-base font-normal leading-normal">
            Affiliate partners (if we use affiliate links in the future)
          </p>
        </label>
      </div>
      <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Cookies
      </h2>
      <p className="text-[#141414] text-base font-normal leading-normal pb-3 pt-1 px-4">
        Cookies are small data files stored on your device. They help us
        understand how you use our site. You may have the option to opt-out of
        cookies through your browser settings.
      </p>
      <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        User Rights
      </h2>
      <p className="text-[#141414] text-base font-normal leading-normal pb-3 pt-1 px-4">
        You have the right to unsubscribe from our newsletter or request the
        deletion of your personal data. Contact us at the email below to
        exercise these rights.
      </p>
      <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Data Security
      </h2>
      <p className="text-[#141414] text-base font-normal leading-normal pb-3 pt-1 px-4">
        We take reasonable steps to protect your data, but no method of
        transmission over the internet is completely secure.
      </p>
      <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Changes to This Policy
      </h2>
      <p className="text-[#141414] text-base font-normal leading-normal pb-3 pt-1 px-4">
        We may update this privacy policy from time to time. Last updated on
        July 26, 2024.
      </p>
      <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Contact
      </h2>
      <p className="text-[#141414] text-base font-normal leading-normal pb-3 pt-1 px-4">
        If you have any questions about this privacy policy, please email us at:
        hello@financiallyfree.com
      </p>
    </>
  );
};

export default PrivacyPolicyPage;
