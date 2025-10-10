import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "remixicon/fonts/remixicon.css";

const Sidebar = () => {
  const [active, setActive] = useState(null);
  const [menuOpen, setMenuOpen] = useState(true);
  const [isHamburger, setIsHamburger] = useState(false); // <966px
  const [isSmallScreen, setIsSmallScreen] = useState(false); // <640px

  const sidebarRef = useRef(null);
  const indicatorRef = useRef(null);
  const listRefs = useRef({});

  const menuItems = [
    "Text Animations",
    "Animated Components",
    "Backgrounds",
    "Buttons",
    "Loaders",
  ];

  // Detect screen sizes
  useEffect(() => {
    const handleResize = () => {
      const smallScreen = window.innerWidth < 640; // <sm
      const hamburger = window.innerWidth < 966; // <966px
      setIsSmallScreen(smallScreen);
      setIsHamburger(hamburger);
      setMenuOpen(!hamburger); // open on desktop, closed on <966px
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Set initial sidebar position
  useEffect(() => {
    if (!sidebarRef.current) return;
    gsap.set(sidebarRef.current, {
      x: isHamburger ? "-100%" : 0,
      width: isSmallScreen ? "100%" : "16rem",
    });
  }, [isHamburger, isSmallScreen]);

  // Animate sidebar open/close
  useEffect(() => {
    if (!sidebarRef.current) return;
    gsap.to(sidebarRef.current, {
      x: menuOpen ? 0 : "-100%",
      width: isSmallScreen && menuOpen ? "100%" : "16rem",
      duration: 0.45,
      ease: "power3.inOut",
    });
  }, [menuOpen, isSmallScreen]);

  // Indicator initial hidden
  useEffect(() => {
    if (!indicatorRef.current) return;
    gsap.set(indicatorRef.current, { opacity: 0, height: 0, y: 0 });
  }, []);

  // Animate indicator on active change
  useEffect(() => {
    if (!active || !indicatorRef.current) return;
    const el = listRefs.current[active];
    if (!el) return;

    gsap.to(indicatorRef.current, {
      y: el.offsetTop,
      height: el.offsetHeight,
      opacity: 1,
      duration: 0.55,
      ease: "power3.inOut",
    });
  }, [active]);

  return (
    <>
      {/* Hamburger menu <966px */}
      {isHamburger && (
        <button
          className="fixed top-4 left-4 z-[100] text-white text-3xl"
          onClick={() => setMenuOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          <i className={menuOpen ? "ri-close-line" : "ri-menu-line"} />
        </button>
      )}

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className="fixed top-0 left-0 h-screen bg-[#0f172a] text-gray-300 p-2 flex flex-col gap-4 z-50"
        aria-hidden={!menuOpen && isHamburger}
      >
        <h1 className="text-xl font-semibold text-white mb-4">UI Library</h1>

        <div className="relative">
          {/* Animated indicator line */}
          <span
            ref={indicatorRef}
            className="absolute left-0 top-0 w-[2px] bg-white rounded-r-md z-50"
            style={{ willChange: "transform, height, opacity" }}
          />

          <ul className="flex flex-col gap-1 relative z-40">
            {menuItems.map((item) => (
              <li
                key={item}
                ref={(el) => (listRefs.current[item] = el)}
                onClick={() => {
                  setActive(item);
                  if (isHamburger && !isSmallScreen) setMenuOpen(false); // auto close only on <966px
                  if (isSmallScreen && menuOpen) setMenuOpen(false); // close on full screen
                }}
                className={`relative cursor-pointer px-4 py-2 transition-transform duration-200 transform-origin-left
                  ${
                    active === item
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }
                `}
                style={{ background: "transparent" }}
              >
                <span className="inline-block transition-transform duration-200 ease-in-out hover:translate-x-1">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
