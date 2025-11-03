"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 400);
  };

  const baseLinkStyle =
    "relative px-4 py-[4px] font-semibold overflow-hidden transition-colors duration-300";

  const hoverBar = `
    before:content-[''] before:absolute before:left-1/2 before:bottom-0 
    before:w-0 before:h-[2px] before:bg-[#e2841a] 
    before:transition-all before:duration-300 
    hover:before:w-full hover:before:left-0
  `;

  return (
    <header className="fixed top-0 left-0 w-full h-[100px] flex items-center justify-center z-[9999] border-b border-[#333] shadow-lg backdrop-blur-md bg-black/85">
      <div className="flex items-center justify-center w-full px-4 relative">
        {/* Burger Button (Mobile) - accessibility: proper aria labels */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="absolute right-6 top-4 md:hidden text-[#e2841a] focus:outline-none focus:ring-2 focus:ring-[#e2841a] focus:ring-offset-2 focus:ring-offset-black rounded"
        >
          {menuOpen ? <X size={30} aria-hidden="true" /> : <Menu size={30} aria-hidden="true" />}
        </button>

        {/* Navigation - accessibility: semantic nav with proper aria labels */}
        <nav
          id="mobile-menu"
          aria-label="Κύρια πλοήγηση"
          className={`${
            menuOpen
              ? "flex flex-col space-y-4 bg-black/95 absolute top-[100px] left-0 w-full py-8 z-[9999]"
              : "hidden"
          } md:flex md:flex-row md:space-x-14 md:static md:bg-transparent md:space-y-0 text-[1.25rem] items-center justify-center transition-all`}
        >
          {/* Αρχική - accessibility: proper aria-current for active page */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            aria-current={pathname === "/" ? "page" : undefined}
            className={`${baseLinkStyle} ${hoverBar} ${
              pathname === "/"
                ? "text-[#e2841a]"
                : "text-white hover:text-[#e2841a]"
            } focus:outline-none focus:ring-2 focus:ring-[#e2841a] focus:ring-offset-2 focus:ring-offset-black rounded`}
          >
            Αρχική
          </Link>

          {/* Dropdown Περισσότερα */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/perissotera"
              onClick={() => setMenuOpen(false)}
              aria-current={pathname.startsWith("/perissotera") ? "page" : undefined}
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
              className={`${baseLinkStyle} ${hoverBar} ${
                pathname.startsWith("/perissotera")
                  ? "text-[#e2841a]"
                  : "text-white hover:text-[#e2841a]"
              } focus:outline-none focus:ring-2 focus:ring-[#e2841a] focus:ring-offset-2 focus:ring-offset-black rounded`}
            >
              Περισσότερα
            </Link>

            {isDropdownOpen && (
              <div 
                role="menu"
                aria-label="Υπομενού περισσότερα"
                className="absolute left-1/2 -translate-x-1/2 top-full mt-3 bg-black text-[#e2841a] shadow-[0_0_20px_rgba(226,132,26,0.4)] rounded-md text-center w-64 border border-[#2d2d2d] text-[1rem] font-normal hidden md:block"
              >
                <Link
                  href="/perissotera/ofeli-website"
                  role="menuitem"
                  className="block px-4 py-2 hover:bg-[#1a1a1a] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#e2841a] focus:ring-inset"
                >
                  Ωφέλη Δημιουργίας Website
                </Link>
                <Link
                  href="/perissotera/orismoi"
                  role="menuitem"
                  className="block px-4 py-2 hover:bg-[#1a1a1a] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#e2841a] focus:ring-inset"
                >
                  Επεξήγηση Ορισμών
                </Link>
                <Link
                  href="/perissotera/giati-emas"
                  role="menuitem"
                  className="block px-4 py-2 hover:bg-[#1a1a1a] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#e2841a] focus:ring-inset"
                >
                  Γιατί Εμάς
                </Link>
              </div>
            )}
          </div>

          {/* Τιμοκατάλογος */}
          <Link
            href="/timokatalogos"
            onClick={() => setMenuOpen(false)}
            aria-current={pathname === "/timokatalogos" ? "page" : undefined}
            className={`${baseLinkStyle} ${hoverBar} ${
              pathname === "/timokatalogos"
                ? "text-[#e2841a]"
                : "text-white hover:text-[#e2841a]"
            } focus:outline-none focus:ring-2 focus:ring-[#e2841a] focus:ring-offset-2 focus:ring-offset-black rounded`}
          >
            Τιμοκατάλογος
          </Link>

          {/* Εταιρεία */}
          <Link
            href="/etaireia"
            onClick={() => setMenuOpen(false)}
            aria-current={pathname === "/etaireia" ? "page" : undefined}
            className={`${baseLinkStyle} ${hoverBar} ${
              pathname === "/etaireia"
                ? "text-[#e2841a]"
                : "text-white hover:text-[#e2841a]"
            } focus:outline-none focus:ring-2 focus:ring-[#e2841a] focus:ring-offset-2 focus:ring-offset-black rounded`}
          >
            Εταιρεία
          </Link>

          {/* Επικοινωνία */}
          <Link
            href="/epikoinonia"
            onClick={() => setMenuOpen(false)}
            aria-current={pathname === "/epikoinonia" ? "page" : undefined}
            className={`${baseLinkStyle} ${hoverBar} ${
              pathname === "/epikoinonia"
                ? "text-[#e2841a]"
                : "text-white hover:text-[#e2841a]"
            } focus:outline-none focus:ring-2 focus:ring-[#e2841a] focus:ring-offset-2 focus:ring-offset-black rounded`}
          >
            Επικοινωνία
          </Link>
        </nav>
      </div>
    </header>
  );
}
