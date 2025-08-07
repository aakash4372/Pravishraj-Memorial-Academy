import React, { useState, useEffect } from "react";
import { Mail, Phone, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/assets/logo.png";
import { EnquiryFormModal } from "../Enquiryform";

const Header = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const topBarLinks = [
    { name: "Gallery", path: "#gallery" },
    { name: "Our Staff", path: "#ourstaff" },
  ];

  const mainNavLinks = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    {
      name: "Courses",
      hasDropdown: true,
      dropdownContent: [
        { name: "Alagappa University", path: "#courses", description: "Centre for Distance Education" },
        { name: "Bharathidasan University", path: "#courses", description: "Centre for Distance Education" },
      ],
    },
    { name: "Testimonials", path: "#testimonials" },
  ];

  const dropdownContentVariants = {
    hidden: { height: 0, opacity: 0, overflow: "hidden" },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.3,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const navigateTo = (e, path, name) => {
    e.preventDefault();
    setActiveLink(name);
    setIsOffcanvasOpen(false);
    setOpenMobileDropdown(null);
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Header Bar */}
      <div
        className={`bg-[#234159] text-gray-300 text-sm transition-all duration-300 overflow-hidden ${
          isScrolled ? "opacity-0 h-0 py-0" : "opacity-100 py-2"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>contact@KUtheme.edu</span>
            </div>
            <div className="hidden sm:flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+1-929-259-222</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-4">
              {topBarLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className={`hover:text-white transition duration-200 ${
                    activeLink === link.name ? "text-white" : ""
                  }`}
                  onClick={(e) => navigateTo(e, link.path, link.name)}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="bg-[#48b06c] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#3d9159] transition duration-200"
              onClick={(e) => {
                e.preventDefault();
                setIsEnquiryModalOpen(true);
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`w-full transition-all duration-300 bg-white shadow-lg py-3`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex justify-between items-center">
          <div className="flex items-center space-x-4 justify-start">
            <img src={Logo} alt="Pravishraj Memorial Academy" className="w-12 h-12" />
            <div className="text-xl font-bold text-center text-[#234159] leading-tight">
              <span className="block text-md">Pravishraj</span>
              <span className="block text-md">Memorial Academy</span>
            </div>
          </div>

          <div className="flex items-center space-x-8">
            <div className="hidden lg:flex items-center space-x-6">
              {mainNavLinks.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.path}
                    className={`flex items-center space-x-1 text-gray-700 font-semibold transition-colors duration-200 ${
                      activeLink === item.name && !item.hasDropdown
                        ? "text-[#48b06c]"
                        : "hover:text-[#48b06c]"
                    }`}
                    onClick={(e) => {
                      if (!item.hasDropdown) navigateTo(e, item.path, item.name);
                    }}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown
                        size={16}
                        className="text-[#48b06c] group-hover:rotate-180 transition-transform duration-200"
                      />
                    )}
                  </a>
                  {item.hasDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                      <div className="p-4 space-y-3">
                        {item.dropdownContent.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.path}
                            className={`block p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 ${
                              activeLink === subItem.name ? "bg-gray-100" : ""
                            }`}
                            onClick={(e) => navigateTo(e, subItem.path, subItem.name)}
                          >
                            <div className="font-medium text-gray-800">{subItem.name}</div>
                            <div className="text-sm text-gray-500">{subItem.description}</div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOffcanvasOpen(true)}
                className="text-gray-500 hover:text-gray-800 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Offcanvas Mobile Menu */}
      <AnimatePresence>
        {isOffcanvasOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setIsOffcanvasOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 120 }}
              className="fixed inset-y-0 right-0 w-64 bg-white shadow-xl p-6 z-50 lg:hidden"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-bold text-gray-800">Menu</span>
                <button
                  onClick={() => setIsOffcanvasOpen(false)}
                  className="text-gray-500 hover:text-gray-800 focus:outline-none"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex flex-col space-y-2">
                {mainNavLinks.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <>
                        <button
                          onClick={() =>
                            setOpenMobileDropdown(
                              openMobileDropdown === item.name ? null : item.name
                            )
                          }
                          className="flex items-center justify-between w-full py-3 text-gray-700 font-semibold hover:text-[#48b06c] transition-colors duration-200"
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            size={16}
                            className={`text-[#48b06c] transition-transform duration-200 ${
                              openMobileDropdown === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {openMobileDropdown === item.name && (
                            <motion.div
                              variants={dropdownContentVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              className="pl-4 space-y-1"
                            >
                              {item.dropdownContent.map((subItem) => (
                                <a
                                  key={subItem.name}
                                  href={subItem.path}
                                  className={`block py-2 text-sm text-gray-600 hover:text-[#48b06c] transition-colors duration-200 ${
                                    activeLink === subItem.name ? "text-[#48b06c]" : ""
                                  }`}
                                  onClick={(e) => navigateTo(e, subItem.path, subItem.name)}
                                >
                                  {subItem.name}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <a
                        href={item.path}
                        className={`text-lg font-semibold transition-colors duration-200 ${
                          activeLink === item.name
                            ? "text-[#48b06c]"
                            : "text-gray-700 hover:text-[#48b06c]"
                        }`}
                        onClick={(e) => navigateTo(e, item.path, item.name)}
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
                <div className="mt-8">
                  <a
                    href="#contact"
                    className="bg-[#48b06c] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#3d9159] transition duration-200 block text-center"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsEnquiryModalOpen(true);
                      setIsOffcanvasOpen(false);
                    }}
                  >
                    Contact Us
                  </a>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Render the EnquiryFormModal and pass state props */}
      <EnquiryFormModal isOpen={isEnquiryModalOpen} onOpenChange={setIsEnquiryModalOpen} />
    </header>
  );
};

export default Header;