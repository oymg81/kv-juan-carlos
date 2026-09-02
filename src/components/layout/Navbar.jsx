"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#experiencia", label: "Experiencia KV" },
  { href: "#proceso", label: "Proceso" },
  { href: "#sobre-kv", label: "Sobre KV" },
  { href: "#historias", label: "Historias" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0b0a09]/60 backdrop-blur-md border-b border-white/[0.05] py-3 sm:py-3.5"
          : "bg-gradient-to-b from-[#0b0a09]/60 via-[#0b0a09]/20 to-transparent py-4 sm:py-5"
      }`}
    >
      <nav
        aria-label="Navegación principal"
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between"
      >
        {/* Brand Logo - Enlarged ~35-40% with clean contrast */}
        <Link
          href="#inicio"
          className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a880]"
          aria-label="KV by Juan Carlos Gonzales - Ir al inicio"
        >
          <div className="relative h-11 sm:h-12 md:h-[50px] w-36 sm:w-44 md:w-48 overflow-hidden">
            <Image
              src="/logo/logo-kv.jpeg"
              alt="KV by Juan Carlos Gonzales"
              fill
              sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, 192px"
              priority
              className="object-contain invert contrast-150 mix-blend-screen transition-opacity duration-300 group-hover:opacity-90"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          {NAV_LINKS.map((link, idx) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[11px] tracking-[0.2em] uppercase font-sans transition-colors duration-300 relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a880] ${
                idx === 0
                  ? "text-[#c5a880] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#c5a880]"
                  : "text-[#f5f3ef]/80 hover:text-[#c5a880]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Right CTA */}
        <div className="hidden lg:flex items-center">
          <Link
            href="#contacto"
            className="inline-flex items-center justify-center text-[11px] tracking-[0.22em] uppercase font-sans text-[#f5f3ef] border border-[#c5a880]/60 hover:border-[#c5a880] hover:text-[#c5a880] hover:bg-[#c5a880]/10 transition-all duration-300 px-5 py-2.5 rounded-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a880]"
          >
            Agenda tu cita
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-4 lg:hidden">
          <Link
            href="#contacto"
            className="text-[10px] tracking-[0.18em] uppercase font-sans text-[#f5f3ef] border border-[#c5a880]/50 px-3.5 py-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a880]"
          >
            Cita
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            className="p-2 text-[#f5f3ef] hover:text-[#c5a880] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a880] transition-colors"
          >
            <span className="sr-only">Menú</span>
            <div className="w-6 h-4 relative flex flex-col justify-between">
              <span
                className={`w-full h-[1.5px] bg-current transition-transform duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`w-full h-[1.5px] bg-current transition-opacity duration-300 ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`w-full h-[1.5px] bg-current transition-transform duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        aria-hidden={!mobileMenuOpen}
        className={`lg:hidden fixed inset-0 top-[60px] bg-[#0b0a09]/98 backdrop-blur-xl transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="flex flex-col h-[calc(100svh-60px)] px-8 pt-8 pb-12 justify-between border-t border-white/5">
          <div className="flex flex-col gap-6">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880]/70 font-sans">
              Menú Principal
            </p>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg tracking-[0.15em] uppercase font-serif text-[#f5f3ef] hover:text-[#c5a880] transition-colors py-1 border-b border-white/[0.04] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a880]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-6">
            <Link
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center text-xs tracking-[0.25em] uppercase font-sans text-center text-[#f5f3ef] border border-[#c5a880] py-3.5 hover:bg-[#c5a880]/10 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a880]"
            >
              Agenda tu cita privada
            </Link>
            <p className="text-[10px] text-[#dedad5] text-center tracking-wider mt-3 font-sans">
              Atención exclusiva con cita previa
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
