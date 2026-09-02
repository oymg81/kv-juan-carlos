import { contact } from "@/data/contact";

export default function WhatsAppButton() {
  const { whatsappHref, phoneDisplay } = contact;

  return (
    <aside
      aria-label="Contacto directo por WhatsApp"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 pointer-events-auto"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Contactar a KV por WhatsApp al ${phoneDisplay}`}
        className="inline-flex items-center justify-center gap-2.5 bg-[#171615] hover:bg-[#128C7E] text-[#f5f3ef] border border-[#c5a880]/40 hover:border-[#25D366] p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-xl shadow-black/50 transition-all duration-300 min-w-[48px] min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a880] group"
      >
        <svg
          className="w-5 h-5 fill-[#25D366] group-hover:fill-white transition-colors shrink-0"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.072-2.029-.481-1.636-.677-2.697-2.348-2.779-2.457-.082-.11-1.393-1.854-1.393-3.536 0-1.682.877-2.511 1.189-2.839.296-.312.646-.388.863-.388.216 0 .432.002.621.011.199.01.464-.075.727.558.271.65.923 2.256 1.004 2.421.082.164.137.356.027.574-.11.219-.165.355-.328.547-.164.192-.345.428-.493.574-.165.163-.336.34-.144.669.193.328.857 1.411 1.838 2.285 1.265 1.127 2.33 1.476 2.659 1.64.329.163.521.137.713-.083.192-.219.823-.958 1.042-1.287.219-.328.439-.274.74-.164.301.11 1.903.897 2.231 1.061.328.164.548.246.63.383.082.137.082.793-.062 1.198z" />
        </svg>
        <span className="hidden sm:inline text-xs tracking-[0.18em] uppercase font-sans font-medium text-[#dedad5] group-hover:text-white transition-colors">
          WhatsApp
        </span>
      </a>
    </aside>
  );
}
