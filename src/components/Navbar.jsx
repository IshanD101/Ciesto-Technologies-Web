import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
      <nav className="fixed w-full z-50 top-4">
        <div className="container mx-auto px-4">
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/30">
            <div className="flex justify-between items-center h-16 px-6">
              <NavLink to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Ciesto Technologies
              </NavLink>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-xl transition-all duration-300 ${
                                isActive
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400'
                            }`
                        }
                    >
                      {link.label}
                    </NavLink>
                ))}
                <button
                    onClick={toggleDarkMode}
                    className="p-3 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {darkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
                </button>
              </div>

              {/* Mobile Navigation */}
              <div className="md:hidden flex items-center space-x-2">
                <button
                    onClick={toggleDarkMode}
                    className="p-2 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300"
                >
                  {darkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
                </button>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300"
                >
                  {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t border-gray-200 dark:border-gray-700">
                  <div className="px-6 py-4 space-y-2">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                                    isActive
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400'
                                }`
                            }
                        >
                          {link.label}
                        </NavLink>
                    ))}
                  </div>
                </div>
            )}
          </div>
        </div>
      </nav>
  );
}

export default Navbar;