import React from "react";

const ContactPage = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <div className="flex min-w-72 flex-col gap-3">
          <p className="text-[#141414] tracking-light text-[32px] font-bold leading-tight">
            Contact
          </p>
          <p className="text-neutral-500 text-sm font-normal leading-normal">
            Want to reach out? I&apos;d love to hear from you.
          </p>
        </div>
      </div>
      <p className="text-[#141414] text-base font-normal leading-normal pb-3 pt-1 px-4">
        Whether you have feedback, questions, collaboration ideas, or just want
        to connect — I read every message. Please keep it short and respectful.
      </p>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#141414] text-base font-medium leading-normal pb-2">
            Name
          </p>
          <input
            placeholder="Your Name"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border border-[#dbdbdb] bg-neutral-50 focus:border-[#dbdbdb] h-14 placeholder:text-neutral-500 p-[15px] text-base font-normal leading-normal"
            defaultValue=""
          />
        </label>
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#141414] text-base font-medium leading-normal pb-2">
            Email
          </p>
          <input
            placeholder="Your Email"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border border-[#dbdbdb] bg-neutral-50 focus:border-[#dbdbdb] h-14 placeholder:text-neutral-500 p-[15px] text-base font-normal leading-normal"
            defaultValue=""
          />
        </label>
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#141414] text-base font-medium leading-normal pb-2">
            Message
          </p>
          <textarea
            placeholder="Your Message"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border border-[#dbdbdb] bg-neutral-50 focus:border-[#dbdbdb] min-h-36 placeholder:text-neutral-500 p-[15px] text-base font-normal leading-normal"
            defaultValue={""}
          />
        </label>
      </div>
      <div className="flex px-4 py-3 justify-start">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-black text-neutral-50 text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Send Message</span>
        </button>
      </div>
      <p className="text-neutral-500 text-sm font-normal leading-normal pb-3 pt-1 px-4">
        Or email me directly at: hello@financeblog.com
      </p>
    </>
  );
};

export default ContactPage;
