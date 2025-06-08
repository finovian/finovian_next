import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-700">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Finovian</h2>
            <p className="mt-4 text-sm text-gray-600">
              We bring you the best solutions with simplicity and trust.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-black">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/author" className="hover:text-black">
                  Author
                </Link>
              </li>

              <li>
                <Link href="/category/stocks" className="hover:text-black">
                  Stocks
                </Link>
              </li>
              <li>
                <Link href="/category/strategy" className="hover:text-black">
                  Strategy
                </Link>
              </li>

            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/help" className="hover:text-black">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-black">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-black">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-black">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info / Social */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Contact Us
            </h3>
            <p className="text-sm">info@finovian.com</p>


            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" className="text-gray-500 hover:text-black transition" aria-label="Follow us on Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.773-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="https://twitter.com" className="text-gray-500 hover:text-black transition" aria-label="Follow us on Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4.36a9.86 9.86 0 0 1-3.13 1.2A4.92 4.92 0 0 0 16.8 0c-2.73 0-4.94 2.18-4.94 4.87 0 .39.05.76.13 1.12A13.94 13.94 0 0 1 1.67 1.12a4.82 4.82 0 0 0-.67 2.45 4.87 4.87 0 0 0 2.18 4.06 4.9 4.9 0 0 1-2.23-.6v.06c0 2.4 1.73 4.4 4.02 4.85a4.97 4.97 0 0 1-2.22.08 4.9 4.9 0 0 0 4.6 3.37A9.86 9.86 0 0 1 0 19.53 13.93 13.93 0 0 0 7.55 21.9c9.05 0 14-7.25 14-13.54 0-.21-.01-.42-.02-.63A9.84 9.84 0 0 0 23 3z" />
                </svg>
              </a>
              <a href="https://github.com" className="text-gray-500 hover:text-black transition" aria-label="Follow us on GitHub">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.04c-5.52 0-10 4.48-10 10.01 0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.72c-2.78.61-3.37-1.34-3.37-1.34-.46-1.17-1.12-1.48-1.12-1.48-.92-.62.07-.61.07-.61 1.01.07 1.54 1.03 1.54 1.03.9 1.52 2.37 1.08 2.95.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.12-4.55-4.98 0-1.1.39-2.01 1.02-2.72-.1-.25-.44-1.27.1-2.65 0 0 .83-.27 2.75 1.02a9.49 9.49 0 0 1 5 0c1.92-1.29 2.75-1.02 2.75-1.02.54 1.38.2 2.4.1 2.65.64.71 1.02 1.62 1.02 2.72 0 3.87-2.33 4.73-4.56 4.97.36.31.69.92.69 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 22 12.05c0-5.53-4.48-10.01-10-10.01z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 border-t border-gray-200 pt-6 text-sm text-gray-500 text-center">
          &copy; {new Date().getFullYear()} Finovian. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
