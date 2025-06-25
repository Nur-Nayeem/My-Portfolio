import React from "react";

interface FooterProps {
  darkMode: boolean;
  scrollToSection: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ darkMode, scrollToSection }) => {
  return (
          <footer
        className={`py-12 ${
          darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
        } transition-colors duration-300`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Nur Nayeem</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                A passionate MERN stack developer focused on creating beautiful,
                functional, and user-centered digital experiences.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/nur-nayeem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-pink-400 transition-colors duration-300 cursor-pointer"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/nur-mohammad-nayeem-803091352/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-pink-400 transition-colors duration-300 cursor-pointer"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>
                <a
                  href="https://www.facebook.com/nur.nayeem614"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-pink-400 transition-colors duration-300 cursor-pointer"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a
                  href="https://twitter.com/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-pink-400 transition-colors duration-300 cursor-pointer"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-pink-400 transition-colors duration-300 cursor-pointer"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-pink-400 transition-colors duration-300 cursor-pointer"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-pink-400 transition-colors duration-300 cursor-pointer"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("blog")}
                    className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-pink-400 transition-colors duration-300 cursor-pointer"
                  >
                    Blog
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-pink-400 transition-colors duration-300 cursor-pointer"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Subscribe to my newsletter for the latest articles and updates.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className={`flex-1 px-4 py-2 rounded-l-lg border-none text-sm ${
                    darkMode
                      ? "bg-gray-700 text-white"
                      : "bg-white text-gray-900"
                  }`}
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-r-lg transition-colors duration-300 !rounded-button cursor-pointer whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              <div className="mt-6">
                <h4 className="font-bold mb-2">Payment Methods</h4>
                <div className="flex space-x-3">
                  <i className="fab fa-cc-visa text-2xl"></i>
                  <i className="fab fa-cc-mastercard text-2xl"></i>
                  <i className="fab fa-cc-paypal text-2xl"></i>
                  <i className="fab fa-cc-stripe text-2xl"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-300 dark:border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-600 dark:text-gray-300">
              &copy; {new Date().getFullYear()} Nur Nayeem. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
  );
};
export default Footer;