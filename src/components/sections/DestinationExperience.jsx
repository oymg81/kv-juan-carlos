import { destinationExperienceData } from "@/data/destinationExperience";

export default function DestinationExperience() {
  const { eyebrow, title, body, badge, condition, action } =
    destinationExperienceData;

  return (
    <section
      id="destino"
      className="relative w-full bg-[#0b0a09] text-[#f5f3ef] py-24 sm:py-32 lg:py-40 border-t border-white/5 overflow-hidden"
      aria-labelledby="destino-heading"
    >
      {/* Subtle Ambient Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[28rem] bg-[#c5a880]/[0.025] rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative Typographic Watermark */}
      <div
        className="absolute right-0 sm:right-6 lg:right-16 top-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span className="font-serif font-light text-[6.5rem] sm:text-[11rem] md:text-[14rem] lg:text-[17rem] tracking-[0.18em] text-[#c5a880]/[0.035] leading-none uppercase block pr-4">
          PERÚ
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-sans font-medium mb-4 block">
            {eyebrow}
          </span>

          {/* Primary Section Heading (h2) */}
          <h2
            id="destino-heading"
            className="font-serif font-light text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] text-[#f5f3ef] tracking-tight leading-[1.18]"
          >
            {title}
          </h2>

          {/* Main Editorial Copy */}
          <p className="text-sm sm:text-base text-[#dedad5] font-sans leading-relaxed mt-6 max-w-2xl">
            {body}
          </p>

          {/* Editorial Indicators */}
          <div className="flex flex-wrap items-center gap-y-3 gap-x-6 sm:gap-x-8 pt-8 mt-8 border-t border-white/10">
            <div className="flex items-center gap-2.5 text-xs sm:text-[13px] uppercase tracking-[0.16em] text-[#f5f3ef] font-sans font-medium">
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#c5a880]"
                aria-hidden="true"
              />
              <span>{badge}</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs sm:text-[13px] uppercase tracking-[0.16em] text-[#c5a880] font-sans font-medium">
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#c5a880]"
                aria-hidden="true"
              />
              <span>{condition}</span>
            </div>
          </div>

          {/* Phone Availability Action */}
          <div className="mt-10 sm:mt-12 flex items-center">
            <a
              href={action.href}
              aria-label={`Consultar disponibilidad de la Experiencia KV en Destino al ${action.display}`}
              className="inline-flex items-center justify-center gap-3 text-xs tracking-[0.22em] uppercase font-sans font-medium text-[#f5f3ef] border border-[#c5a880]/60 hover:border-[#c5a880] hover:text-[#c5a880] hover:bg-[#c5a880]/10 transition-all duration-300 px-7 sm:px-8 py-4 min-h-[44px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a880]"
            >
              <span>{action.label}</span>
              <svg
                className="w-4 h-4 stroke-current fill-none shrink-0"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
