import React, { useContext, useState } from "react";
import blackIcon from "../../../public/images/nexora-logo-black.png";
import whiteIcon from "../../../public/images/nexora-logo-white.png";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Components", href: "/components" },
    { name: "Docs", href: "/docs" },
  ];

  const enforcedColor = { color: darkMode ? "#ffffff" : "#000000" };

  return (
    <nav
      className="px-6 py-4 h-20 w-full flex items-center justify-between fixed top-0 left-0 z-50 border-b border-zinc-200/40 dark:border-zinc-800/40 backdrop-blur-lg bg-transparent transition-all duration-300"
      style={enforcedColor}
    >
      {/* Left: Logo */}
      <div className="flex items-center">
        <img
          className="w-20 cursor-pointer"
          src={darkMode ? whiteIcon : blackIcon}
          alt="Nexora UI"
        />
      </div>

      {/* Right: All Elements (Links + Search + Theme + GitHub + CTA) */}
      <div className="flex items-center gap-6">

        {/* Nav Links (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              style={enforcedColor}
              className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Search Bar (hidden on mobile) */}
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className={`px-3 py-2 text-sm rounded-md focus:outline-none backdrop-blur-sm
              ${darkMode
                ? "bg-transparent border border-white/20 text-white placeholder-white/60"
                : "bg-white shadow-md text-black placeholder-black/60"
              }`}
            style={enforcedColor}
          />
        </div>

        {/* Theme Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-lg transition-colors duration-300 backdrop-blur-sm"
          style={{ ...enforcedColor, background: "transparent" }}
        >
          {darkMode ? (
            <i className="ri-sun-fill text-lg" style={enforcedColor}></i>
          ) : (
            <i className="ri-moon-fill text-lg" style={enforcedColor}></i>
          )}
        </button>

        {/* GitHub Icon (no hover effect) */}
        <a
          href="https://github.com/nexoraui"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg transition-none backdrop-blur-sm"
          style={enforcedColor}
        >
          <i className="ri-github-fill text-xl" style={enforcedColor}></i>
        </a>

        {/* CTA Button */}
        {/* <a
          href="/docs"
          className="hidden md:inline-block px-4 py-2 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium hover:opacity-80 transition-all duration-300"
        >
          Get Started
        </a> */}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md"
          onClick={() => setMenuOpen(!menuOpen)}
          style={enforcedColor}
        >
          {menuOpen ? (
            <i className="ri-close-line text-2xl" style={enforcedColor}></i>
          ) : (
            <i className="ri-menu-3-line text-2xl" style={enforcedColor}></i>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          className={`absolute top-20 left-0 w-full flex flex-col items-center gap-6 py-6 md:hidden border-t border-zinc-200/40 dark:border-zinc-800/40 backdrop-blur-lg
            ${darkMode ? "bg-[#05060A] text-white" : "bg-white text-black"}
          `}
          style={{ opacity: 1 }}
        >
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="text-lg hover:text-zinc-600 dark:hover:text-zinc-300"
              onClick={() => setMenuOpen(false)}
              style={enforcedColor}
            >
              {link.name}
            </a>
          ))}

          {/* <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 rounded-lg bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100"
          >
            {darkMode ? (
              <i className="ri-sun-fill text-lg"></i>
            ) : (
              <i className="ri-moon-fill text-lg"></i>
            )}
          </button> */}

          {/* <a
            href="/docs"
            className="px-4 py-2 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium hover:opacity-80 transition-all duration-300"
          >
            Get Started
          </a> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
