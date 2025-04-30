// Header.tsx
const Header = () => {
  return (
    <header className="w-full bg-gray-800 text-white p-4">
      <div className="container mx-auto max-w-[920px] flex justify-between items-center">
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
      </div>
    </header>
  );
};

export default Header;
