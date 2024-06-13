// src/components/Header.js

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { OverFlowScroll } from "../../hooks/scrollHook";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const openMenu = () => {
    setIsMenuOpen(true);
    OverFlowScroll(true)
  };

  // Function to close the mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false);
    OverFlowScroll(false)
  };
  return (
    <header className="sticky top-0 left-0 right-0 z-50 p-4 text-white bg-blue-500 bg-gradient-to-r from-blue-500 via-fuchsia-400 to-purple-700">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* <!-- Mobile Menu Toggle Button --> */}
          <button
            className="block text-white sm:hidden"
            onClick={() => openMenu()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          <a
            onClick={() => navigate("/")}
            className="text-2xl font-semibold text-white cursor-pointer sm:text-3xl md:text-4xl"
          >
            Logo
          </a>
          <nav className="hidden space-x-4 sm:flex">
            <a onClick={() => navigate("/")} className="text-white cursor-pointer md:text-lg">
              Home
            </a>
            <a onClick={() => navigate("/aboutus")} className="text-white cursor-pointer md:text-lg">
              About
            </a>
            <a onClick={() => navigate("/services")} className="text-white cursor-pointer md:text-lg">
              Services
            </a>
            <a
              onClick={() => navigate("/contactus")}
              className="text-white cursor-pointer md:text-lg"
            >
              Contact
            </a>
          </nav>

          {/* <!-- Mobile Menu Container --> */}
          {isMenuOpen && (
            <div className="fixed inset-0 z-50 w-full h-full overflow-y-auto bg-gray-800 bg-opacity-90">
              <div className="w-64 h-screen transition-transform duration-300 ease-in-out transform translate-x-0 bg-white">
                {/* <!-- Close Button --> */}
                <button
                  className="absolute top-0 right-0 mt-4 mr-4 text-gray-600"
                  onClick={() => closeMenu()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>

                {/* <!-- Mobile Menu Links --> */}
                <nav className="pt-8 mx-5 space-y-4">
                  <a
                    onClick={() => navigate("/")}
                    className="block text-lg font-semibold text-black"
                  >
                    Home
                  </a>
                  <a
                    onClick={() => navigate("/aboutus")}
                    className="block text-lg font-semibold text-black"
                  >
                    About
                  </a>
                  <a
                    onClick={() => navigate("/services")}
                    className="block text-lg font-semibold text-black"
                  >
                    Services
                  </a>
                  <a
                    onClick={() => navigate("/contactus")}
                    className="block text-lg font-semibold text-black"
                  >
                    Contact
                  </a>
                </nav>
              </div>
            </div>
          )}

          <button
            className="block sm:hidden"
            onClick={() => openMenu()}
          >
            Cart
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
