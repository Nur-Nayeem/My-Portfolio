interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  menuOpen: boolean;
  toggleMenu: () => void;
  activeSection: string;
  scrollToSection: (section: string) => void;
}

const Navbar = ({
  darkMode,
  toggleDarkMode,
  menuOpen,
  toggleMenu,
  activeSection,
  scrollToSection,
}: NavbarProps) => {
  return (
          <nav
        className={`fixed w-full z-50 ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        } shadow-md transition-colors duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold">Nur Nayeem</span>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className={`${
                  activeSection === "home"
                    ? "text-purple-600 dark:text-purple-400"
                    : ""
                } hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 cursor-pointer whitespace-nowrap`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`${
                  activeSection === "about"
                    ? "text-purple-600 dark:text-purple-400"
                    : ""
                } hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 cursor-pointer whitespace-nowrap`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className={`${
                  activeSection === "projects"
                    ? "text-purple-600 dark:text-purple-400"
                    : ""
                } hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 cursor-pointer whitespace-nowrap`}
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("blog")}
                className={`${
                  activeSection === "blog"
                    ? "text-purple-600 dark:text-purple-400"
                    : ""
                } hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 cursor-pointer whitespace-nowrap`}
              >
                Blog
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`${
                  activeSection === "contact"
                    ? "text-purple-600 dark:text-purple-400"
                    : ""
                } hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 cursor-pointer whitespace-nowrap`}
              >
                Contact
              </button>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full transition-colors duration-200 cursor-pointer"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <i className="fas fa-sun hover:text-purple-400"></i>
                ) : (
                  <i className="fas fa-moon hover:text-purple-600"></i>
                )}
              </button>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleDarkMode}
                className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <i className="fas fa-sun"></i>
                ) : (
                  <i className="fas fa-moon"></i>
                )}
              </button>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <i className="fas fa-times"></i>
                ) : (
                  <i className="fas fa-bars"></i>
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <div
          className={`${menuOpen ? "block" : "hidden"} md:hidden ${
            darkMode ? "bg-gray-900" : "bg-white"
          } transition-colors duration-300`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection("home")}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                activeSection === "home"
                  ? "bg-indigo-600 text-white"
                  : "hover:bg-gray-200 dark:hover:bg-gray-700"
              } transition-colors duration-200 w-full text-left cursor-pointer whitespace-nowrap`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                activeSection === "about"
                  ? "bg-indigo-600 text-white"
                  : "hover:bg-gray-200 dark:hover:bg-gray-700"
              } transition-colors duration-200 w-full text-left cursor-pointer whitespace-nowrap`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                activeSection === "projects"
                  ? "bg-indigo-600 text-white"
                  : "hover:bg-gray-200 dark:hover:bg-gray-700"
              } transition-colors duration-200 w-full text-left cursor-pointer whitespace-nowrap`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("blog")}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                activeSection === "blog"
                  ? "bg-indigo-600 text-white"
                  : "hover:bg-gray-200 dark:hover:bg-gray-700"
              } transition-colors duration-200 w-full text-left cursor-pointer whitespace-nowrap`}
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                activeSection === "contact"
                  ? "bg-indigo-600 text-white"
                  : "hover:bg-gray-200 dark:hover:bg-gray-700"
              } transition-colors duration-200 w-full text-left cursor-pointer whitespace-nowrap`}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
