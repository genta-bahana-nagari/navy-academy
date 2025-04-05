import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      className="absolute top-0 left-0 w-full z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        {/* Logo */}
        <img src="/brand-logo.png" alt="Logo" className="h-10 sm:h-15" />

        {/* Hamburger Icon */}
        <div
          className="block md:hidden cursor-pointer text-white"
          onClick={toggleMenu}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </motion.svg>
        </div>

        {/* Navigation Links */}
        <AnimatePresence>
          {(isMenuOpen || window.innerWidth >= 768) && (
            <motion.ul
              variants={menuVariants}
              animate="visible"
              exit="exit"
              className={`${
                isMenuOpen ? "flex" : "hidden"
              } md:flex flex-col md:flex-row gap-5 lg:gap-7 absolute md:static top-0 left-0 w-full md:w-auto bg-gray-500 md:bg-transparent bg-opacity-80 p-5 md:p-0 items-center`}
            >
              {["Home", "About", "Academy", "Contact"].map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-lg cursor-pointer text-white hover:text-gray transition-all delay-200 hover:drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]"
                  >
                    {link}
                  </a>
                </li>
              ))}
              <li className="md:hidden">
                <button
                  className="bg-white px-6 py-2 text-lg rounded-full transition-all delay-200 hover:drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)]"
                  onClick={toggleMenu}
                >
                  Recruitment
                </button>
              </li>
              <li className="md:hidden">
                <a
                  href="#"
                  className="cursor-pointer text-white hover:text-gray transition-all delay-200 hover:drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]"
                  onClick={toggleMenu}
                >
                  <IoMdClose />
                </a>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>

        {/* Recruitment Button (Desktop only) */}
        <motion.button
          className="hidden md:block bg-white px-6 py-2 text-sm rounded-full hover:drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Recruitment
        </motion.button>
      </div>
    </motion.div>
  );
};

export default NavBar;
