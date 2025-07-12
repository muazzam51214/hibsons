import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiPhone,
  FiMail,
  FiClock,
} from "react-icons/fi";

const Topbar = () => {
  return (
    <div className="bg-indigo-800 text-white text-sm">
      <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-4 mb-2 md:mb-0">
          <div className="flex items-center">
            <FiPhone className="mr-1" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center">
            <FiMail className="mr-1" />
            <span>Info@hibsons.com</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:block bg-indigo-700 px-3 py-1 rounded-full text-xs font-medium animate-pulse">
            🚀 Special Offer: 20% off
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeAll = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  return (
    <>
      <Topbar />
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md py-2 top-0"
            : "bg-white/90 backdrop-blur-sm py-4 top-10"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Hibsons
              </span>
              <span className="ml-2 text-xs font-medium bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                Digital Staffing
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/careers"
                className="font-medium text-gray-700 hover:text-indigo-600 transition-colors"
              >
                Careers
              </Link>
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("solutions")}
                  className="flex items-center font-medium text-gray-700 hover:text-indigo-600 transition-colors"
                >
                  Our Roles
                  <FiChevronDown
                    className={`ml-1 transition-transform ${
                      openDropdown === "solutions" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === "solutions" && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                      onClick={closeAll}
                    >
                      Executive Assistant
                    </Link>
                    <Link
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                      onClick={closeAll}
                    >
                      Account Manager
                    </Link>
                    <Link
                      href="/solutions/agencies"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                      onClick={closeAll}
                    >
                      Sales Development Rep
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/eor"
                className="font-medium text-gray-700 hover:text-indigo-600 transition-colors"
              >
                EOR
              </Link>

              <Link
                href="/about"
                className="font-medium text-gray-700 hover:text-indigo-600 transition-colors"
              >
                About Us
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/get-started"
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-md hover:from-blue-700 hover:to-indigo-700 transition-all shadow-sm hover:shadow-md"
              >
                Book A Discovery Call
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              <Link
                href="/careers"
                className="block font-medium text-gray-700 py-2 border-t border-gray-200 pt-4"
                onClick={closeAll}
              >
                Careers
              </Link>
              <div className="border-t border-gray-200 pt-4">
                <button
                  onClick={() => toggleDropdown("mobile-solutions")}
                  className="flex w-full justify-between items-center font-medium text-gray-700 py-2"
                >
                  Our Roles
                  <FiChevronDown
                    className={`transition-transform ${
                      openDropdown === "mobile-solutions" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === "mobile-solutions" && (
                  <div className="pl-4 space-y-2 mt-2">
                    <Link
                      href="/"
                      className="block py-2 text-gray-600 hover:text-indigo-600"
                      onClick={closeAll}
                    >
                      Executive Assistant
                    </Link>
                    <Link
                      href="/"
                      className="block py-2 text-gray-600 hover:text-indigo-600"
                      onClick={closeAll}
                    >
                      Account Manager
                    </Link>
                    <Link
                      href="/"
                      className="block py-2 text-gray-600 hover:text-indigo-600"
                      onClick={closeAll}
                    >
                      Sales Development Rep
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/eor"
                className="block font-medium text-gray-700 py-2 border-t border-gray-200 pt-4"
                onClick={closeAll}
              >
                EOR
              </Link>

              <Link
                href="/about"
                className="block font-medium text-gray-700 py-2 border-t border-gray-200 pt-4"
                onClick={closeAll}
              >
                About Us
              </Link>

              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <Link
                  href="/get-started"
                  className="w-full text-center px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-md hover:from-blue-700 hover:to-indigo-700 transition-all"
                  onClick={closeAll}
                >
                  Get Started
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
