"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#inicio", id: "inicio", label: "Inicio" },
  { href: "#experiencia", id: "experiencia", label: "Experiencia KV" },
  { href: "#proceso", id: "proceso", label: "Proceso" },
  { href: "#sobre-kv", id: "sobre-kv", label: "Sobre KV" },
  { href: "#historias", id: "historias", label: "Historias" },
  { href: "#showrooms", id: "showrooms", label: "Showroom" },
  { href: "#contacto", id: "contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  const headerRef = useRef(null);

  // Helper to compute exact final scroll position for any target ID
  const computeExpectedScrollY = (targetId) => {
    if (typeof window === "undefined" || typeof document === "undefined") return 0;
    if (targetId === "inicio") return 0;

    const targetEl = document.getElementById(targetId);
    if (!targetEl) return 0;

    const root = document.documentElement;
    const headerEl = headerRef.current;
    const headerHeight = headerEl
      ? headerEl.getBoundingClientRect().height
      : (window.innerWidth >= 768 ? 90 : 72);

    const computedScrollPadding = Number.parseFloat(
      window.getComputedStyle(root).scrollPaddingTop
    );
    const scrollPaddingTop = Number.isFinite(computedScrollPadding) && computedScrollPadding > 0
      ? computedScrollPadding
      : headerHeight;

    const targetDocTop = window.scrollY + targetEl.getBoundingClientRect().top;
    const maxScrollY = Math.max(0, root.scrollHeight - window.innerHeight);

    return Math.min(Math.max(0, Math.round(targetDocTop - scrollPaddingTop)), maxScrollY);
  };

  // Deterministic navigation target tracking (no fixed time delays, bidirectional)
  const pendingTargetRef = useRef(null);

  const handleNavClick = (id) => {
    setActiveSection(id);
    const expected = computeExpectedScrollY(id);
    pendingTargetRef.current = {
      id,
      expectedScrollY: expected,
    };
  };

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

  // High-performance, deterministic Scrollspy using requestAnimationFrame and real DOM boundaries
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.id);
    let rafId = null;

    const cancelPending = () => {
      pendingTargetRef.current = null;
    };

    const checkActiveSection = () => {
      const scrollY = window.scrollY;
      const innerHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;
      const maxScrollY = Math.max(0, scrollHeight - innerHeight);
      const isAtBottom = Math.ceil(scrollY + innerHeight) >= scrollHeight - 2;

      // Dynamic activation line at navbar bottom with 3px subpixel tolerance
      const headerEl = headerRef.current;
      const headerHeight = headerEl
        ? headerEl.getBoundingClientRect().height
        : (window.innerWidth >= 768 ? 90 : 72);
      const activationThreshold = headerHeight + 3;

      // If there is a pending user click target, verify if target has reached position in either direction
      if (pendingTargetRef.current) {
        const { id: targetId, expectedScrollY } = pendingTargetRef.current;
        let reached = false;

        // 1. Precise position match within 3px subpixel tolerance (handles both upward and downward travel)
        if (Math.abs(scrollY - expectedScrollY) <= 3) {
          reached = true;
        } else if (targetId === "inicio" && scrollY < 50) {
          reached = true;
        } else if (isAtBottom && expectedScrollY >= maxScrollY - 2) {
          // Bottom reached ONLY when the target's expected coordinate is actually constrained by document bottom
          reached = true;
        }

        if (reached) {
          pendingTargetRef.current = null;
        } else {
          // Keep requested target active while programmatic smooth scroll is underway in either direction
          setActiveSection(targetId);
          return;
        }
      }

      // 1. Explicit top of document
      if (scrollY < 50) {
        setActiveSection("inicio");
        return;
      }

      // 2. Real physical end of document boundary (subpixel tolerance of 2px)
      if (isAtBottom) {
        setActiveSection("contacto");
        return;
      }

      // 3. Evaluate sections in DOM order: pick the last section whose top has reached or passed the activation line
      let currentId = "inicio";
      for (let i = 0; i < sectionIds.length; i++) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top <= activationThreshold) {
          currentId = id;
        } else {
          break;
        }
      }

      setActiveSection(currentId);
    };

    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(checkActiveSection);
    };

    const handleHashChange = () => {
      if (window.location.hash) {
        const hashId = window.location.hash.replace("#", "");
        if (sectionIds.includes(hashId)) {
          setActiveSection(hashId);
          const expected = computeExpectedScrollY(hashId);
          pendingTargetRef.current = {
            id: hashId,
            expectedScrollY: expected,
          };
        }
      }
    };

    // User manual interruption listeners: immediately cancel pending programmatic target
    const handleUserInteraction = () => {
      cancelPending();
      handleScroll();
    };

    const handleNavKeys = (e) => {
      const scrollKeys = ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "];
      if (scrollKeys.includes(e.key)) {
        cancelPending();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("popstate", handleHashChange);
    window.addEventListener("wheel", handleUserInteraction, { passive: true });
    window.addEventListener("touchstart", handleUserInteraction, { passive: true });
    window.addEventListener("pointerdown", handleUserInteraction, { passive: true });
    window.addEventListener("keydown", handleNavKeys, { passive: true });

    // scrollend event when supported by the browser
    if ("onscrollend" in window) {
      window.addEventListener("scrollend", handleUserInteraction, { passive: true });
    }

    // Initial check on mount (handles direct deep-links e.g. /#experiencia)
    if (window.location.hash) {
      const initialHashId = window.location.hash.replace("#", "");
      if (sectionIds.includes(initialHashId)) {
        setActiveSection(initialHashId);
        const expected = computeExpectedScrollY(initialHashId);
        pendingTargetRef.current = {
          id: initialHashId,
          expectedScrollY: expected,
        };
      }
    }
    checkActiveSection();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handleHashChange);
      window.removeEventListener("wheel", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
      window.removeEventListener("pointerdown", handleUserInteraction);
      window.removeEventListener("keydown", handleNavKeys);
      if ("onscrollend" in window) {
        window.removeEventListener("scrollend", handleUserInteraction);
      }
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0b0a09]/60 backdrop-blur-md border-b border-white/[0.05] py-2 sm:py-2.5"
          : "bg-gradient-to-b from-[#0b0a09]/60 via-[#0b0a09]/20 to-transparent py-3 sm:py-3.5"
      }`}
    >
      <nav
        aria-label="Navegación principal"
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between"
      >
        {/* Brand Logo */}
        <Link
          href="#inicio"
          onClick={() => handleNavClick("inicio")}
          className="flex items-center group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a880]"
          aria-label="KV by Juan Carlos Gonzales — Ir al inicio"
        >
          <div className="relative h-[55px] w-[100px] sm:h-[63px] sm:w-[114px] md:h-[68px] md:w-[124px] overflow-hidden">
            <Image
              src="/logo/kv-logo-navbar.png"
              alt=""
              fill
              sizes="(max-width: 640px) 100px, (max-width: 768px) 114px, 124px"
              priority
              className="object-contain transition-opacity duration-300 group-hover:opacity-90"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links - Rendered Sections Only (>= 1280px xl) */}
        <div className="hidden xl:flex items-center gap-6 2xl:gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.id)}
                aria-current={isActive ? "location" : undefined}
                className={`text-[11px] xl:text-[11px] 2xl:text-xs tracking-[0.2em] uppercase font-sans transition-colors duration-300 relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a880] ${
                  isActive
                    ? "text-[#c5a880] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#c5a880]"
                    : "text-[#f5f3ef]/80 hover:text-[#c5a880]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop Right CTA -> Canonical #contacto (>= 1280px xl) */}
        <div className="hidden xl:flex items-center">
          <Link
            href="#contacto"
            onClick={() => handleNavClick("contacto")}
            className="inline-flex items-center justify-center text-[11px] 2xl:text-xs tracking-[0.22em] uppercase font-sans text-[#f5f3ef] border border-[#c5a880]/60 hover:border-[#c5a880] hover:text-[#c5a880] hover:bg-[#c5a880]/10 transition-all duration-300 px-5 py-2.5 rounded-none min-h-[44px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a880]"
          >
            Agenda tu cita
          </Link>
        </div>

        {/* Mobile / Compact Top Controls (< 1280px xl) */}
        <div className="flex items-center gap-3 sm:gap-4 xl:hidden">
          <Link
            href="#contacto"
            onClick={() => handleNavClick("contacto")}
            className="inline-flex items-center justify-center text-[11px] tracking-[0.18em] uppercase font-sans text-[#f5f3ef] border border-[#c5a880]/50 px-3.5 py-2 min-h-[44px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a880]"
          >
            Cita
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            className="p-3 text-[#f5f3ef] hover:text-[#c5a880] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a880] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
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

      {/* Mobile / Compact Drawer (< 1280px xl) */}
      <div
        id="mobile-menu"
        aria-hidden={!mobileMenuOpen}
        className={`xl:hidden fixed inset-0 top-[76px] sm:top-[80px] bg-[#0b0a09] z-50 transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="flex flex-col h-[calc(100svh-76px)] sm:h-[calc(100svh-80px)] px-8 pt-8 pb-12 justify-between border-t border-white/5">
          <div className="flex flex-col gap-6">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880]/70 font-sans">
              Menú Principal
            </p>
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    handleNavClick(link.id);
                    setMobileMenuOpen(false);
                  }}
                  aria-current={isActive ? "location" : undefined}
                  className={`text-lg tracking-[0.15em] uppercase font-serif transition-colors py-1 flex items-center justify-between border-b focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a880] ${
                    isActive
                      ? "text-[#c5a880] border-[#c5a880]/50"
                      : "text-[#f5f3ef] hover:text-[#c5a880] border-white/[0.04]"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[#c5a880]"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="pt-6">
            <Link
              href="#contacto"
              onClick={() => {
                handleNavClick("contacto");
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center text-xs tracking-[0.25em] uppercase font-sans text-center text-[#f5f3ef] border border-[#c5a880] py-3.5 hover:bg-[#c5a880]/10 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a880]"
            >
              Agenda tu cita previa
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
