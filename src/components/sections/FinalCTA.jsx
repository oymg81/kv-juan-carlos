import { contact } from "@/data/contact";

export default function FinalCTA() {
  return (
    <section
      id="contacto"
      className="relative w-full bg-[#faf8f5] text-[#171615] py-24 sm:py-32 lg:py-40 border-t border-[#171615]/5 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Decorative Atelier Hairlines */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <div className="border border-[#ded5c9] p-8 sm:p-14 lg:p-20 bg-[#f0eae1]/40 relative">
          {/* Inner subtle frame */}
          <div
            className="absolute inset-2.5 sm:inset-3 border border-[#c5a880]/20 pointer-events-none"
            aria-hidden="true"
          />

          <span className="text-xs uppercase tracking-[0.25em] text-[#8e785c] font-sans font-medium mb-4 block">
            ASESORÍA PERSONALIZADA
          </span>

          <h2
            id="cta-heading"
            className="font-serif font-light text-3xl sm:text-4xl lg:text-[2.75rem] text-[#171615] tracking-tight leading-[1.18] max-w-3xl mx-auto"
          >
            Diseñemos cómo quieres verte y sentirte el día de tu boda
          </h2>

          <p className="text-sm sm:text-base text-[#524e48] font-sans leading-relaxed mt-6 max-w-2xl mx-auto">
            Conversemos sobre tu estilo, el concepto de tu boda y el look
            integral que quieres construir. La atención se realiza únicamente
            con cita previa.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            {/* Primary Action: WhatsApp */}
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Conversar por WhatsApp con KV by Juan Carlos Gonzales al ${contact.phoneDisplay}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 text-xs tracking-[0.22em] uppercase font-sans font-medium bg-[#171615] text-[#f5f3ef] hover:bg-[#8e785c] transition-all duration-300 px-8 py-4 min-h-[44px] shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#8e785c]"
            >
              <svg
                className="w-4 h-4 fill-current shrink-0"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.072-2.029-.481-1.636-.677-2.697-2.348-2.779-2.457-.082-.11-1.393-1.854-1.393-3.536 0-1.682.877-2.511 1.189-2.839.296-.312.646-.388.863-.388.216 0 .432.002.621.011.199.01.464-.075.727.558.271.65.923 2.256 1.004 2.421.082.164.137.356.027.574-.11.219-.165.355-.328.547-.164.192-.345.428-.493.574-.165.163-.336.34-.144.669.193.328.857 1.411 1.838 2.285 1.265 1.127 2.33 1.476 2.659 1.64.329.163.521.137.713-.083.192-.219.823-.958 1.042-1.287.219-.328.439-.274.74-.164.301.11 1.903.897 2.231 1.061.328.164.548.246.63.383.082.137.082.793-.062 1.198z" />
              </svg>
              <span>Conversar por WhatsApp</span>
            </a>

            {/* Secondary Action: Email */}
            <a
              href={contact.emailHref}
              aria-label={`Escribir por correo a KV by Juan Carlos Gonzales a ${contact.email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 text-xs tracking-[0.22em] uppercase font-sans font-medium border border-[#171615]/25 text-[#171615] hover:border-[#8e785c] hover:text-[#8e785c] hover:bg-white/40 transition-all duration-300 px-8 py-4 min-h-[44px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#8e785c]"
            >
              <svg
                className="w-4 h-4 stroke-current fill-none shrink-0"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <span>Escribir por correo</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
