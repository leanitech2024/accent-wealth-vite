import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="shadow-lg bg-white border-b-2 border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          <Link to="https://www.ascentwealth.in/" className="flex-shrink-0">
            <img
              id="imgLogo"
              src="https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/32AscentWealth.jpg"
              alt="logo"
              className="h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-grow justify-end">
            <ul className="flex space-x-6 text-base font-medium items-center">
              <li className="py-2">
                <Link
                  to="https://www.ascentwealth.in/"
                  className="text-gray-700 hover:text-[#8a7208] hover:underline transition duration-300 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li className="py-2">
                <a
                  className="text-gray-700 hover:text-[#8a7208] hover:underline transition duration-300 ease-in-out"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.ascentwealth.in/#feature-22"
                >
                  Planning
                </a>
              </li>
              <li className="py-2">
                <a
                  className="text-gray-700 hover:text-[#8a7208] hover:underline transition duration-300 ease-in-out"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.ascentwealth.in/#title-7"
                >
                  Services
                </a>
              </li>
              <li className="py-2">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-[#8a7208] hover:underline transition duration-300 ease-in-out"
                >
                  Blogs
                </Link>
              </li>
              <li className="py-2">
                <a
                  className="text-gray-700 hover:text-[#8a7208] hover:underline transition duration-300 ease-in-out"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.ascentwealth.in/#calculator-4"
                >
                  Calculators
                </a>
              </li>
              <li className="py-2">
                <a
                  className="text-gray-700 hover:text-[#8a7208] hover:underline transition duration-300 ease-in-out whitespace-nowrap"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfAP8TkzPlCNZsKW7_Hhvt2d0u4QO0kS-QujvASCfZumYua1g/viewform"
                >
                  Free&nbsp;Consultation
                </a>
              </li>
              <li className="py-2">
                <a
                  className="text-gray-700 hover:text-[#8a7208] hover:underline transition duration-300 ease-in-out"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeOhn0bpjY1lcaizRJtJBMlL4i4Sg1F1hPmM8QPYDbD3nW55g/viewform"
                >
                  FAQ
                </a>
              </li>
              <li className="py-2">
                <a
                  className="text-gray-700 hover:text-[#8a7208] hover:underline transition duration-300 ease-in-out whitespace-nowrap"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.ascentwealth.in/#footer-6"
                >
                  Contact&nbsp;Us
                </a>
              </li>
              <li className="py-2">
                <a
                  href="https://m.assetplus.in/#!/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="btnHvn"
                  className="px-6 py-2 rounded-full bg-[#8a7208] hover:bg-[#6b5a06] text-white transition duration-300 ease-in-out"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[#8a7208] focus:outline-none focus:text-[#8a7208] transition duration-300 ease-in-out"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-[#8a7208] hover:bg-gray-50 rounded-md transition duration-300 ease-in-out"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <a
                className="block px-3 py-2 text-gray-700 hover:text-[#8a7208] hover:bg-gray-50 rounded-md transition duration-300 ease-in-out"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.ascentwealth.in/#feature-22"
                onClick={() => setIsMenuOpen(false)}
              >
                Planning
              </a>
              <a
                className="block px-3 py-2 text-gray-700 hover:text-[#8a7208] hover:bg-gray-50 rounded-md transition duration-300 ease-in-out"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.ascentwealth.in/#title-7"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <Link
                to="/blogs"
                className="block px-3 py-2 text-gray-700 hover:text-[#8a7208] hover:bg-gray-50 rounded-md transition duration-300 ease-in-out"
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </Link>
              <a
                className="block px-3 py-2 text-gray-700 hover:text-[#8a7208] hover:bg-gray-50 rounded-md transition duration-300 ease-in-out"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.ascentwealth.in/#calculator-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Calculators
              </a>
              <a
                className="block px-3 py-2 text-gray-700 hover:text-[#8a7208] hover:bg-gray-50 rounded-md transition duration-300 ease-in-out"
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfAP8TkzPlCNZsKW7_Hhvt2d0u4QO0kS-QujvASCfZumYua1g/viewform"
                onClick={() => setIsMenuOpen(false)}
              >
                Free Consultation
              </a>
              <a
                className="block px-3 py-2 text-gray-700 hover:text-[#8a7208] hover:bg-gray-50 rounded-md transition duration-300 ease-in-out"
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.google.com/forms/d/e/1FAIpQLSeOhn0bpjY1lcaizRJtJBMlL4i4Sg1F1hPmM8QPYDbD3nW55g/viewform"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <a
                className="block px-3 py-2 text-gray-700 hover:text-[#8a7208] hover:bg-gray-50 rounded-md transition duration-300 ease-in-out"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.ascentwealth.in/#footer-6"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </a>
              <a
                href="https://m.assetplus.in/#!/login"
                target="_blank"
                rel="noopener noreferrer"
                className="block mx-3 mt-4 px-6 py-2 rounded-full bg-[#8a7208] hover:bg-[#6b5a06] text-white text-center transition duration-300 ease-in-out"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Navbar;
