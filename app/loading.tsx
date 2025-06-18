import { Mosaic } from 'react-loading-indicators';

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] m-0 flex h-screen items-center justify-center overflow-hidden bg-[var(--bgColor)] p-4 transition duration-300 ease-in-out dark:bg-[var(--bgColor)]">
      <div className="border-opacity-50 h-8 w-8 animate-spin rounded-full border-t-2 border-[var(--textColor)]"></div>
      <Mosaic color="#3168cc" size="large" text="" textColor="#NaNNaNNaN" />
    </div>
  );
};

export default Loading;
