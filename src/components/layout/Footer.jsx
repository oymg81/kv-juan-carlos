import Image from "next/image";
import Link from "next/link";
import { contact } from "@/data/contact";
import { showroomsData } from "@/data/showrooms";

const FOOTER_NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#experiencia", label: "Experiencia KV" },
  { href: "#proceso", label: "Proceso" },
  { href: "#sobre-kv", label: "Sobre KV" },
  { href: "#showrooms", label: "Showrooms" },
  { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
  const { brandName, brandTagline, phoneDisplay, phoneHref, whatsappHref, email, emailHref, availability, socialLinks } = contact;
  const { locations } = showroomsData;

  return (
    <footer
      className="relative w-full bg-[#0b0a09] text-[#f5f3ef] border-t border-white/10 pt-16 pb-12 sm:pt-20 sm:pb-16"
      aria-label="Pie de página"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand Identity & Tagline */}
          <div className="lg:col-span-4 space-y-6">
            <Link
              href="#inicio"
              className="inline-block group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a880]"
              aria-label={`${brandName} - Ir al inicio`}
            >
              <div className="relative h-11 sm:h-12 w-44 sm:w-48 overflow-hidden">
                <Image
                  src="/logo/logo-kv.jpeg"
                  alt={brandName}
                  fill
                  sizes="(max-width: 640px) 176px, 192px"
                  className="object-contain invert contrast-150 mix-blend-screen transition-opacity duration-300 group-hover:opacity-90"
                />
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[#dedad5] font-sans leading-relaxed max-w-sm">
              {brandTagline}
            </p>

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-sans font-medium block mb-3">
                Síguenos
              </span>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Seguir a KV by Juan Carlos Gonzales en ${social.label}`}
                    className="inline-flex items-center justify-center w-11 h-11 border border-white/15 text-[#f5f3ef] hover:text-[#c5a880] hover:border-[#c5a880] hover:bg-[#c5a880]/10 transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a880]"
                  >
                    {social.id === "instagram" ? (
                      <svg
                        className="w-4 h-4 fill-current shrink-0"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    ) : (
                      <svg
                        className="w-4 h-4 fill-current shrink-0"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                      </svg>
                    )}
                    <span className="sr-only">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-sans font-medium block">
              Navegación
            </span>
            <ul className="space-y-2.5">
              {FOOTER_NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-[13px] tracking-wider uppercase font-sans text-[#dedad5] hover:text-[#c5a880] transition-colors py-1 inline-block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a880]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-sans font-medium block">
              Contacto
            </span>
            <div className="space-y-3 text-xs sm:text-[13px] text-[#dedad5] font-sans">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#dedad5]/60 block mb-0.5">
                  WhatsApp
                </span>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Escribir por WhatsApp a KV al ${phoneDisplay}`}
                  className="hover:text-[#c5a880] transition-colors inline-block py-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a880]"
                >
                  {phoneDisplay}
                </a>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#dedad5]/60 block mb-0.5">
                  Teléfono
                </span>
                <a
                  href={phoneHref}
                  aria-label={`Llamar a KV al ${phoneDisplay}`}
                  className="hover:text-[#c5a880] transition-colors inline-block py-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a880]"
                >
                  {phoneDisplay}
                </a>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#dedad5]/60 block mb-0.5">
                  Correo
                </span>
                <a
                  href={emailHref}
                  aria-label={`Enviar correo a ${email}`}
                  className="hover:text-[#c5a880] transition-colors break-all inline-block py-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a880]"
                >
                  {email}
                </a>
              </div>

              <div className="pt-1">
                <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider text-[#c5a880] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" aria-hidden="true" />
                  <span>{availability}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Showrooms Column */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-sans font-medium block">
              Showrooms
            </span>
            <div className="space-y-4">
              {locations.map((loc) => (
                <div key={loc.id} className="text-xs sm:text-[13px] font-sans">
                  <p className="text-[#f5f3ef] font-medium tracking-wide">
                    {loc.name}
                  </p>
                  <p className="text-[#dedad5]/80 mt-0.5">
                    {loc.address.street}
                  </p>
                  <p className="text-[#dedad5]/60">
                    {loc.address.city}, {loc.address.country}
                  </p>
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Abrir ubicación de Showroom ${loc.name} en Google Maps`}
                    className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-[#c5a880] hover:text-white transition-colors mt-1.5 py-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a880]"
                  >
                    <span>Ver en Google Maps</span>
                    <svg
                      className="w-3 h-3 stroke-current fill-none"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legal Closure */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#dedad5]/60 font-sans text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p>© 2026 KV by Juan Carlos Gonzales. Todos los derechos reservados.</p>
            <span className="hidden sm:inline text-white/20" aria-hidden="true">·</span>
            <p className="text-[11px] tracking-wider uppercase text-[#c5a880]/70">
              Sastrería y diseño integral para novios
            </p>
          </div>

          <div>
            <a
              href="https://codingsoft.tech/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar el sitio web de CodingSoft (se abre en una pestaña nueva)"
              className="footer-credit-link inline-flex items-center min-h-11 px-2.5 text-xs underline underline-offset-4 transition-colors"
            >
              Desarrollado por CodingSoft
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
