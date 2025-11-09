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
    }, 300);
  };

  const closeMenu = () => setMenuOpen(false);

  const baseLink =
    "relative px-3 py-[6px] font-medium text-lg transition-colors";
  const hoverLine = `
    before:content-[''] before:absolute before:left-1/2 before:bottom-0
    before:h-[2px] before:w-0 before:bg-[#e2841a]
    before:transition-all before:duration-300
    hover:before:w-full hover:before:left-0
  `;

  return (
    <>
      {menuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] transition-opacity"
        />
      )}

      <header
        className={`fixed top-0 left-0 w-full h-[90px] z-[9999] bg-black/85 border-b border-[#222] backdrop-blur-md flex items-center justify-center transition-transform duration-300 ${
          menuOpen ? "translate-x-[200px]" : ""
        }`}
      >
        <div className="w-full max-w-6xl px-6 flex items-center justify-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="absolute left-4 top-5 md:hidden text-[#e2841a]"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <nav className="hidden md:flex md:gap-10 md:items-center md:justify-center">
            <Link href="/" className={`${baseLink} ${hoverLine}`}>
              Αρχική
            </Link>

            <div
              className="relative hidden md:block"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/perissotera"
                className={`${baseLink} ${hoverLine} cursor-pointer`}
              >
                Περισσότερα
              </Link>

              {isDropdownOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 bg-black border border-[#333] shadow-lg rounded-md py-2 w-48 text-center">
                  <Link
                    href="/perissotera/ofeli-website"
                    className={`relative block py-2 ${hoverLine} hover:text-[#e2841a]`}
                  >
                    Ωφέλη Website
                  </Link>
                  <Link
                    href="/perissotera/orismoi"
                    className={`relative block py-2 ${hoverLine} hover:text-[#e2841a]`}
                  >
                    Ορισμοί
                  </Link>
                  <Link
                    href="/perissotera/giati-emas"
                    className={`relative block py-2 ${hoverLine} hover:text-[#e2841a]`}
                  >
                    Γιατί Εμάς
                  </Link>
                </div>
              )}
            </div>

            <Link href="/timokatalogos" className={`${baseLink} ${hoverLine}`}>
              Τιμοκατάλογος
            </Link>

            <Link href="/etaireia" className={`${baseLink} ${hoverLine}`}>
              Εταιρεία
            </Link>

            <Link href="/epikoinonia" className={`${baseLink} ${hoverLine}`}>
              Επικοινωνία
            </Link>
          </nav>
        </div>
      </header>

      <div
        className={`fixed top-0 left-0 h-full w-[200px] bg-black border-r border-[#333] z-[10000] pt-24 px-6 flex flex-col gap-6 text-lg transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link href="/" onClick={closeMenu} className={`${baseLink} ${hoverLine}`}>
          Αρχική
        </Link>

        <div className="flex flex-col space-y-2">
          <Link
            href="/perissotera/ofeli-website"
            onClick={closeMenu}
            className={`${hoverLine} py-1 hover:text-[#e2841a]`}
          >
            Ωφέλη Website
          </Link>
          <Link
            href="/perissotera/orismoi"
            onClick={closeMenu}
            className={`${hoverLine} py-1 hover:text-[#e2841a]`}
          >
            Ορισμοί
          </Link>
          <Link
            href="/perissotera/giati-emas"
            onClick={closeMenu}
            className={`${hoverLine} py-1 hover:text-[#e2841a]`}
          >
            Γιατί Εμάς
          </Link>
        </div>

        <Link
          href="/timokatalogos"
          onClick={closeMenu}
          className={`${baseLink} ${hoverLine}`}
        >
          Τιμοκατάλογος
        </Link>

        <Link
          href="/etaireia"
          onClick={closeMenu}
          className={`${baseLink} ${hoverLine}`}
        >
          Εταιρεία
        </Link>

        <Link
          href="/epikoinonia"
          onClick={closeMenu}
          className={`${baseLink} ${hoverLine}`}
        >
          Επικοινωνία
        </Link>
      </div>
    </>
  );
}
