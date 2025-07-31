interface FooterProps {
  darkMode: boolean;
  scrollToSection: (id: string) => void;
}

const Footer = ({ darkMode, scrollToSection }: FooterProps) => {
  return (
    <footer
      className={`py-12 ${darkMode ? "bg-gray-900" : "bg-white"
        } transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main grid container for the footer content */}
        <div className="grid grid-cols-1 gap-12">
          {/* About section - Centered for all screen sizes */}
          <div className="flex flex-col items-center text-center"> {/* Added flex-col and items-center for vertical centering of content */}
            <h1 className="text-2xl font-bold mb-4">NUR NAYEEM</h1>
            <p className={`mb-4  ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              A passionate MERN stack developer focused on creating beautiful,
              functional, and user-centered digital experiences.
            </p>
            <div className="flex space-x-4 justify-center"> {/* Added justify-center to center social icons */}
              <a
                href="https://github.com/nur-nayeem"
                target="_blank"
                rel="noopener noreferrer"
                className={`${!darkMode ? 'text-gray-600 hover:text-purple-600' : 'text-gray-300 hover:text-pink-400'} transition-colors duration-300 cursor-pointer`}
                aria-label="GitHub"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/nur-mohammad-nayeem-803091352/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${!darkMode ? 'text-gray-600 hover:text-purple-600' : 'text-gray-300 hover:text-pink-400'} transition-colors duration-300 cursor-pointer`}
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a
                href="https://www.facebook.com/nur.nayeem614"
                target="_blank"
                rel="noopener noreferrer"
                className={`${!darkMode ? 'text-gray-600 hover:text-purple-600' : 'text-gray-300 hover:text-pink-400'} transition-colors duration-300 cursor-pointer`}
                aria-label="Facebook"
              >
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a
                href="https://twitter.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className={`${!darkMode ? 'text-gray-600 hover:text-purple-600' : 'text-gray-300 hover:text-pink-400'} transition-colors duration-300 cursor-pointer`}
                aria-label="Twitter"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
            </div>

            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-4">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className={`${!darkMode ? 'text-gray-600 hover:text-purple-600' : 'text-gray-300 hover:text-pink-400'} transition-colors duration-300 cursor-pointer`}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className={`${!darkMode ? 'text-gray-600 hover:text-purple-600' : 'text-gray-300 hover:text-pink-400'} transition-colors duration-300 cursor-pointer`}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className={`${!darkMode ? 'text-gray-600 hover:text-purple-600' : 'text-gray-300 hover:text-pink-400'} transition-colors duration-300 cursor-pointer`}
                >
                  Projects
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className={`${!darkMode ? 'text-gray-600 hover:text-purple-600' : 'text-gray-300 hover:text-pink-400'} transition-colors duration-300 cursor-pointer`}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright section - already centered */}
        <div className={`border-t ${!darkMode ? 'border-gray-300' : 'border-gray-700'} mt-12 pt-8 text-center`}>
          <p className={`${!darkMode ? 'text-gray-600' : 'text-gray-300'}`}>
            &copy; {new Date().getFullYear()} Nur Nayeem. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
