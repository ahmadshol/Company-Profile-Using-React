import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white opacity-95 shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="https://www.instagram.com/maestro_suspension/#maes" className="max-w-[120px] mx-4 py-2 transition duration-500 sm:mx-6" target="_blank">
                <img src="assets/logoms.webp" alt="" className="w-9 h-9 object-cover rounded-full"/>
            </a>
            <span
              className={`text-xl font-bold ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Maestro Suspension
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection("home")}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isScrolled
                    ? "text-gray-700 hover:text-primary"
                    : "text-white hover:text-blue-200"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isScrolled
                    ? "text-gray-700 hover:text-primary"
                    : "text-white hover:text-blue-200"
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isScrolled
                    ? "text-gray-700 hover:text-primary"
                    : "text-white hover:text-blue-200"
                }`}
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isScrolled
                    ? "text-gray-700 hover:text-primary"
                    : "text-white hover:text-blue-200"
                }`}
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isScrolled
                    ? "text-gray-700 hover:text-primary"
                    : "text-white hover:text-blue-200"
                }`}
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isScrolled
                    ? "text-gray-700 hover:text-primary"
                    : "text-white hover:text-blue-200"
                }`}
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled
                  ? "text-gray-700 hover:text-primary"
                  : "text-white hover:text-blue-200"
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection("home")}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary w-full text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary w-full text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary w-full text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary w-full text-left"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary w-full text-left"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary w-full text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
