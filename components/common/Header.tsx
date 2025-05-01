import Link from "next/link";
import MobileMenu from "../home/MobileMenu";

const Header = () => {
  return (
    <header className="w-full  text-white p-4">
      {/* <div className="container mx-auto max-w-[920px] flex justify-between items-center">
        <h1 className="text-xl font-bold">My Website</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#hero" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#explore" className="hover:text-gray-400">
                Explore
              </a>
            </li>
            <li>
              <a href="#abc" className="hover:text-gray-400">
                ABC
              </a>
            </li>
          </ul>
        </nav>
      </div> */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-red-600 font-serif font-bold text-3xl"
            >
              fs
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Newsletter
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Books
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Podcast
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Articles
            </Link>
            <button
              aria-label="Search"
              className="text-gray-700 hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <Link
              href="#"
              className="text-sm font-medium text-white bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition-colors"
            >
              Become a Member
            </Link>
          </nav>
          <MobileMenu />
        </div>
      </header>
    </header>
  );
};

export default Header;
