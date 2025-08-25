import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle dark mode
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme =
      savedTheme === "dark" || (!savedTheme && systemPrefersDark);
    setIsDark(initialTheme);

    if (initialTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white dark:bg-dark opacity-95 shadow-lg py-2"
          : "bg-gradient-to-r from-primary to-secondary py-4"
      }`}
    >
      {/* Logo&judul */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a
              href="https://www.instagram.com/maestro_suspension/#maes"
              className="max-w-[120px] mx-4 py-2 transition duration-500 sm:mx-6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="assets/logoms.webp"
                alt="Maestro Suspension Logo"
                className="w-9 h-9 object-cover rounded-full"
              />
            </a>
            <span
              className={`text-xl font-bold ${
                isScrolled ? "text-gray-800 dark:text-white" : "text-white"
              }`}
            >
              Maestro Suspension
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link
                to="/home"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isScrolled
                    ? "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400"
                    : "text-white dark:text-gray-300 hover:text-blue-200 dark:hover:text-blue-400"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isScrolled
                    ? "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400"
                    : "text-white dark:text-gray-300 hover:text-blue-200 dark:hover:text-blue-400"
                }`}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isScrolled
                    ? "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400"
                    : "text-white dark:text-gray-300 hover:text-blue-200 dark:hover:text-blue-400"
                }`}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isScrolled
                    ? "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400"
                    : "text-white dark:text-gray-300 hover:text-blue-200 dark:hover:text-blue-400"
                }`}
              >
                Contact
              </Link>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="ml-4 p-2 rounded-full focus:outline-none transition-colors duration-200"
                aria-label="Toggle dark mode"
              >
                {isDark ? (
                  // SVG Matahari untuk Light Mode
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-700 dark:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                    />
                  </svg>
                ) : (
                  // SVG Bulan untuk Dark Mode
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-yellow-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <circle cx="12" cy="12" r="5" fill="currentColor" />
                    <path
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            {/* Dark Mode Toggle for mobile */}
            <button
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded-full focus:outline-none transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                // SVG Matahari untuk Light Mode
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-700 dark:text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                  />
                </svg>
              ) : (
                // SVG Bulan untuk Dark Mode
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="5" fill="currentColor" />
                  <path
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                  />
                </svg>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled
                  ? "text-gray-700 dark:text-gray-300 hover:text-primary"
                  : "text-white dark:text-gray-300 hover:text-blue-200"
              } focus:outline-none`}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu as Sidebar */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={() => setIsOpen(false)}
          ></div>
          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-50 transform transition-transform duration-300 translate-x-0">
            <button
              className="absolute top-4 right-4 text-gray-700 dark:text-gray-300"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="px-6 pt-16 pb-3 space-y-2">
              <Link
                to="/home"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 w-full text-left"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 w-full text-left"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 w-full text-left"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 w-full text-left"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
