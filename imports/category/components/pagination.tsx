import React from 'react';

const Pagination = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <a href="#" className="flex size-10 items-center justify-center">
        <div
          className="text-[#141414]"
          data-icon="CaretLeft"
          data-size="18px"
          data-weight="regular"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            height="18px"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z" />
          </svg>
        </div>
      </a>
      <a
        className="flex size-10 items-center justify-center rounded-full bg-[#ededed] text-sm leading-normal font-bold tracking-[0.015em] text-[#141414]"
        href="#"
      >
        1
      </a>
      <a
        className="flex size-10 items-center justify-center rounded-full text-sm leading-normal font-normal text-[#141414]"
        href="#"
      >
        2
      </a>
      <a
        className="flex size-10 items-center justify-center rounded-full text-sm leading-normal font-normal text-[#141414]"
        href="#"
      >
        Next
      </a>
      <a href="#" className="flex size-10 items-center justify-center">
        <div
          className="text-[#141414]"
          data-icon="CaretRight"
          data-size="18px"
          data-weight="regular"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            height="18px"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
          </svg>
        </div>
      </a>
    </div>
  );
};

export default Pagination;
