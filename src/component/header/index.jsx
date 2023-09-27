// src/components/Header.js

import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    console.log("Opening menu");
    setIsMenuOpen(true);
  };

  // Function to close the mobile menu
  const closeMenu = () => {
    console.log("Closing menu");
    setIsMenuOpen(false);
  };
  return (
    // <header className="bg-gradient-to-r from-blue-500 via-fuchsia-400 to-purple-700 text-white p-4 sticky top-0">
    //   <div className="container mx-auto flex justify-between">
    //     <h1 className="text-3xl self-center font-semibold cursor-pointer">
    //       Your Website Name
    //     </h1>
    //     <nav className="m-3">
    //       <ul className="flex space-x-2 h-8">
    //         <li className="text-white h-7 self-center hover:bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 rounded-xl text-white">
    //           <a href="#" className="m-7">
    //             Home
    //           </a>
    //         </li>
    //         <li className="text-white h-7 self-center hover:bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 rounded-xl text-white">
    //           <a href="#" className="m-7">
    //             About
    //           </a>
    //         </li>
    //         <li className="text-white h-7 self-center hover:bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 rounded-xl text-white">
    //           <a href="#" className="m-7">
    //             Service
    //           </a>
    //         </li>
    //         <li className="text-white h-7 self-center hover:bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 rounded-xl text-white">
    //           <a href="#" className="m-7">
    //           Contact
    //           </a>
    //         </li>
    //       </ul>
    //     </nav>
    //     <button className="h-10 self-center bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 rounded-xl text-white px-5">Save Changes</button>
    //   </div>
    // </header>
    <header className="bg-blue-500 p-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold"
          >
            Logo
          </a>
          <nav className="hidden sm:flex space-x-4">
            <a href="#" className="text-white  md:text-lg">
              Home
            </a>
            <a href="#" className="text-white  md:text-lg">
              About
            </a>
            <a href="#" className="text-white  md:text-lg">
              Services
            </a>
            <a href="#" className="text-white  md:text-lg">
              Contact
            </a>
          </nav>

          {/* <!-- Mobile Menu Container --> */}
          {isMenuOpen && (
            <div className="fixed inset-0 z-50 w-full h-full bg-gray-800 bg-opacity-90 overflow-y-auto">
              <div className="w-64 h-screen bg-white transform translate-x-0 transition-transform ease-in-out duration-300">
                {/* <!-- Close Button --> */}
                <button
                  className="text-gray-600 mt-4 mr-4 absolute top-0 right-0"
                  onClick={() => closeMenu()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
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
                  <a href="#" className="block text-2xl font-semibold">
                    Home
                  </a>
                  <a href="#" className="block text-2xl font-semibold">
                    About
                  </a>
                  <a href="#" className="block text-2xl font-semibold">
                    Services
                  </a>
                  <a href="#" className="block text-2xl font-semibold">
                    Contact
                  </a>
                </nav>
              </div>
            </div>
          )}

          {/* <!-- Mobile Menu Toggle Button --> */}
          <button
            className="block sm:hidden text-white"
            onClick={() => openMenu()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          {/* <script>
  document.getElementById('open-mobile-menu').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.remove('hidden');
  });

  document.getElementById('close-mobile-menu').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.add('hidden');
  });
</script> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
