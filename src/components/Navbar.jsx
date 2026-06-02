import { useState, useCallback, useEffect } from "react";
import { NAV_LINKS, SITE_CONFIG } from "../constants/data";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  
  // Initialize theme tracking
  const [theme, setTheme] = useState(
    typeof window !== "undefined" && document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  // Sync state if script runs before React
  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const toggleTheme = useCallback(() => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  }, [theme]);

  // Track scroll position to update active navbar link
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // offset for the navbar height

      // Case: Check if we are at the bottom of the page (for Contact activation)
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        setActiveSection("contact");
        return;
      }

      // Find which section is currently at the top of the viewport
      NAV_LINKS.forEach((link) => {
        const sectionId = link.href.substring(1);
        const element = document.getElementById(sectionId);

        if (element) {
          const { offsetTop, offsetHeight } = element;
          // More forgiving check: if section has crossed the 120px threshold
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  return (
    <nav
      id="navbar"
      className="sticky top-0 z-50 bg-background dark:bg-[#181818] border-b-4 border-black dark:border-white flex justify-between items-center w-full px-6 py-4 max-w-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-colors"
    >
      {/* Logo */}
      <a
        href="#hero"
        className="text-2xl font-black text-black dark:text-white uppercase font-headline tracking-tighter"
      >
        {SITE_CONFIG.name}
      </a>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-8 items-center font-headline font-bold uppercase tracking-tighter">
        {NAV_LINKS.map((link) => {
          const isActive = activeSection === link.href.substring(1);
          return (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActiveSection(link.href.substring(1))}
              className={
                isActive
                  ? "text-black bg-yellow-400 border-2 border-black px-2 py-1 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all px-2 py-1"
              }
            >
              {link.label}
            </a>
          );
        })}
      </div>

      <div className="flex gap-4 items-center">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="brutalist-border !border-black dark:!border-white p-2 flex items-center justify-center hover:bg-yellow-400 dark:hover:bg-yellow-400 dark:text-white dark:hover:text-black transition-colors bg-background dark:bg-[#181818]"
          aria-label="Toggle dark mode"
        >
          <span className="material-symbols-outlined text-2xl">
            {theme === "light" ? "dark_mode" : "light_mode"}
          </span>
        </button>

        {/* CTA Button */}
        <a
          href="https://wa.me/6283834998685?text=Hi%20Rizky!%20Found%20your%20website%20and%20I'd%20love%20to%20chat%20about%20a%20potential%20project.%20Let's%20collaborate!"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-yellow-400 text-black font-headline font-bold uppercase brutalist-border !border-black px-6 py-2 shadow-[8px_8px_0px_0px_#000000] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[8px] active:translate-y-[8px] active:shadow-none transition-all"
        >
          COLLABORATE
        </a>

        {/* Mobile Hamburger */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden brutalist-border !border-black p-2 bg-yellow-400 text-black"
          onClick={toggleMenu}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-background dark:bg-[#181818] border-b-4 border-black dark:border-white flex flex-col gap-4 p-6 font-headline font-bold uppercase tracking-tighter md:hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  setMobileOpen(false);
                  setActiveSection(link.href.substring(1));
                }}
                className={`text-xl py-2 border-b-2 border-black dark:border-white last:border-b-0 px-2 transition-all hover:bg-yellow-400 hover:text-black dark:hover:text-black ${
                  isActive ? "bg-yellow-400 text-black border-2 border-black" : "text-black dark:text-white"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="https://wa.me/6283834998685?text=Hi%20Rizky!%20Found%20your%20website%20and%20I'd%20love%20to%20chat%20about%20a%20potential%20project.%20Let's%20collaborate!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 text-black text-center brutalist-border !border-black px-6 py-3 shadow-[8px_8px_0px_0px_#000] mt-2"
          >
            COLLABORATE
          </a>
        </div>
      )}
    </nav>
  );
}
