import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Academy", href: "#academy" },
  { label: "Contact", href: "#contact" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isDesktop = windowWidth >= 768;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-30 backdrop-blur-lg bg-black/35 shadow-md"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto flex justify-between items-center py-3 px-6 md:px-16 lg:px-32">
        {/* Logo */}
        <img
          src="/brand-logo.png"
          alt="Logo"
          className="h-12 sm:h-14 drop-shadow-lg select-none"
          draggable={false}
        />

        {/* Hamburger Icon */}
        {!isDesktop && (
          <div
            className="block md:hidden cursor-pointer text-white"
            onClick={toggleMenu}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9"
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
        )}

        {/* Navigation Links */}
        <AnimatePresence>
          {(isMenuOpen || isDesktop) && (
            <motion.ul
              key={isDesktop ? "desktop" : "mobile"}
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`${
                isMenuOpen && !isDesktop
                  ? "flex bg-black/35 md:bg-transparent backdrop-blur-lg z-30"
                  : isDesktop
                  ? "flex"
                  : "hidden"
              } md:flex flex-col md:flex-row gap-6 lg:gap-10 absolute md:static top-20 left-0 w-full md:w-auto md:backdrop-blur-none p-8 md:p-0 items-center rounded-b-2xl md:rounded-none shadow-2xl md:shadow-none transition-all duration-300`}
              style={{
                boxShadow: isDesktop
                  ? "none"
                  : "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                borderTop: isDesktop
                  ? "none"
                  : "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-lg font-medium text-white hover:text-blue-500 transition-all duration-200 px-3 py-2 rounded-md"
                  >
                    {link.label}
                  </a>
                </li>
              ))}

              {!isDesktop && (
                <>
                  <li className="w-full mt-6 flex justify-center">
                    <motion.button
                      whileHover={{ scale: 1.07 }}
                      whileTap={{ scale: 0.97 }}
                      className="text-white bg-gradient-to-r from-blue-500 to-blue-700 px-7 py-2 rounded-full shadow-md hover:from-blue-600 hover:to-blue-800 transition-all duration-200"
                      onClick={toggleMenu}
                    >
                      Recruitment
                    </motion.button>
                  </li>
                  <li className="absolute top-4 right-6">
                    <button
                      className="text-white text-3xl hover:text-blue-400 transition"
                      onClick={toggleMenu}
                      aria-label="Close menu"
                    >
                      <IoMdClose />
                    </button>
                  </li>
                </>
              )}
            </motion.ul>
          )}
        </AnimatePresence>

        {/* Desktop Recruitment Button */}
        {isDesktop && (
          <motion.button
            className="hidden md:block bg-gradient-to-r from-blue-500 to-blue-700 text-white px-7 py-2 text-base rounded-full shadow-md hover:from-blue-600 hover:to-blue-800 transition-all duration-200"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
          >
            Recruitment
          </motion.button>
        )}
      </div>
    </motion.nav>
  );
};

export default NavBar;
