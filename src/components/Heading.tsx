export default function Heading({ setFormVisbility }) {
  return (
    <header
      id="main-header"
      className="bg-gray-800 text-white fixed w-full top-0 z-50 transition-all duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/50"
              alt="Logo"
              className="w-10 h-10 mr-2 rounded"
            />
            <h1 className="text-xl font-bold">NotePad</h1>
          </div>
          <button
            id="menu-toggle"
            className="md:hidden focus:outline-none z-50"
          >
            <svg
              id="menu-icon"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
            <svg
              id="close-icon"
              className="w-6 h-6 hidden"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <nav
            id="main-nav"
            className="fixed inset-y-0 right-0 transform translate-x-full md:relative md:translate-x-0 bg-gray-800 md:bg-transparent w-64 md:w-auto h-full md:h-auto overflow-y-auto md:overflow-visible transition-transform duration-300 ease-in-out md:transition-none"
          >
            <ul className="pt-16 md:pt-0 px-4 md:px-0 md:flex space-y-2 md:space-y-0 md:space-x-4">
              <li>
                <button
                  className="block py-2 md:py-0 hover:text-gray-300 transition duration-200"
                  onClick={() => setFormVisbility(true)}
                >
                  New Note
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 md:py-0 hover:text-gray-300 transition duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="https://www.github.com/shaswat-satyam"
                  target="_blank"
                  className="block py-2 md:py-0 hover:text-gray-300 transition duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
