import React from 'react';

const ContactPage = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <div className="flex min-w-72 flex-col gap-3">
          <p className="tracking-light text-[32px] leading-tight font-bold text-[#141414]">
            Contact
          </p>
          <p className="text-sm leading-normal font-normal text-neutral-500">
            Want to reach out? I&apos;d love to hear from you.
          </p>
        </div>
      </div>
      <p className="px-4 pt-1 pb-3 text-base leading-normal font-normal text-[#141414]">
        Whether you have feedback, questions, collaboration ideas, or just want to connect — I read
        every message. Please keep it short and respectful.
      </p>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex min-w-40 flex-1 flex-col">
          <p className="pb-2 text-base leading-normal font-medium text-[#141414]">Name</p>
          <input
            placeholder="Your Name"
            className="form-input flex h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl border border-[#dbdbdb] bg-neutral-50 p-[15px] text-base leading-normal font-normal text-[#141414] placeholder:text-neutral-500 focus:border-[#dbdbdb] focus:ring-0 focus:outline-0"
            defaultValue=""
          />
        </label>
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex min-w-40 flex-1 flex-col">
          <p className="pb-2 text-base leading-normal font-medium text-[#141414]">Email</p>
          <input
            placeholder="Your Email"
            className="form-input flex h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl border border-[#dbdbdb] bg-neutral-50 p-[15px] text-base leading-normal font-normal text-[#141414] placeholder:text-neutral-500 focus:border-[#dbdbdb] focus:ring-0 focus:outline-0"
            defaultValue=""
          />
        </label>
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex min-w-40 flex-1 flex-col">
          <p className="pb-2 text-base leading-normal font-medium text-[#141414]">Message</p>
          <textarea
            placeholder="Your Message"
            className="form-input flex min-h-36 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl border border-[#dbdbdb] bg-neutral-50 p-[15px] text-base leading-normal font-normal text-[#141414] placeholder:text-neutral-500 focus:border-[#dbdbdb] focus:ring-0 focus:outline-0"
            defaultValue={''}
          />
        </label>
      </div>
      <div className="flex justify-start px-4 py-3">
        <button className="flex h-10 max-w-[480px] min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-black px-4 text-sm leading-normal font-bold tracking-[0.015em] text-neutral-50">
          <span className="truncate">Send Message</span>
        </button>
      </div>
      <p className="px-4 pt-1 pb-3 text-sm leading-normal font-normal text-neutral-500">
        Or email me directly at: hello@financeblog.com
      </p>
    </>
  );
};

export default ContactPage;
