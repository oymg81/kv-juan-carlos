import { aboutData } from "@/data/about";

export default function AboutKV() {
  const { eyebrow, title, paragraphs, brand, trustIndicators, cardPillars } =
    aboutData;

  return (
    <section
      id="sobre-kv"
      className="relative w-full bg-[#0b0a09] text-[#f5f3ef] py-24 sm:py-32 lg:py-40 border-t border-white/5 overflow-hidden"
      aria-labelledby="sobre-kv-heading"
    >
      {/* Subtle atmospheric ambient glow */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#c5a880]/[0.03] rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Column: Architectural Editorial Brand Composition */}
          <div className="lg:col-span-5 flex justify-center w-full order-2 lg:order-1">
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] max-w-md lg:max-w-none bg-[#141312] border border-[#c5a880]/25 p-8 sm:p-10 flex flex-col justify-between overflow-hidden shadow-2xl shadow-black/60">
              {/* Inner Hairline Framing */}
              <div
                className="absolute inset-3 sm:inset-4 border border-[#c5a880]/15 pointer-events-none"
                aria-hidden="true"
              />

              {/* Top Atelier Metadata */}
              <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.25em] text-[#c5a880]/80 font-sans font-medium relative z-10">
                <span>Atelier KV</span>
                <span>Sastrería &amp; Imagen</span>
              </div>

              {/* Center Monogram & Brand Insignia */}
              <div className="text-center my-auto py-6 relative z-10">
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 mx-auto border border-[#c5a880]/40 flex items-center justify-center text-[#c5a880] mb-5 bg-[#0b0a09]/60"
                  aria-hidden="true"
                >
                  <span className="font-serif text-2xl sm:text-3xl tracking-widest pl-1">
                    KV
                  </span>
                </div>

                <div className="w-10 h-px bg-[#c5a880]/50 mx-auto mb-4" />

                <p className="font-serif text-xl sm:text-2xl text-[#f5f3ef] tracking-wide font-light">
                  {brand.name}
                </p>

                <p className="text-[11px] uppercase tracking-[0.22em] text-[#c5a880] font-sans mt-1.5 font-medium">
                  {brand.label}
                </p>

                {/* Confirmed Brand Pillars */}
                <div className="pt-6 border-t border-white/[0.08] mt-6 space-y-2.5">
                  {cardPillars.map((pillar) => (
                    <div
                      key={pillar}
                      className="flex items-center justify-center gap-2.5 text-xs tracking-[0.16em] uppercase font-sans text-[#dedad5]/90"
                    >
                      <span
                        className="w-1 h-1 rounded-full bg-[#c5a880]"
                        aria-hidden="true"
                      />
                      <span>{pillar}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Brand Focus */}
              <div className="text-center border-t border-white/[0.08] pt-4 relative z-10">
                <span className="text-[10px] tracking-[0.22em] uppercase text-[#c5a880]/80 font-sans font-medium block">
                  Especialización en Novios
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative, Trust Indicators & Brand Attribution */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
            {/* Eyebrow */}
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-sans font-medium mb-4 block">
              {eyebrow}
            </span>

            {/* Primary Section Heading (h2) */}
            <h2
              id="sobre-kv-heading"
              className="font-serif font-light text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3rem] leading-[1.18] text-[#f5f3ef] tracking-tight mb-8 max-w-2xl"
            >
              {title}
            </h2>

            {/* Main Editorial Copy */}
            <div className="space-y-6 text-[#dedad5] font-sans text-sm sm:text-base leading-relaxed max-w-2xl">
              {paragraphs.map((p, index) => (
                <p key={index}>{p}</p>
              ))}
            </div>

            {/* Trust Indicators: Confirmed Focus, Proposal, and Experience Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 sm:pt-12 mt-10 sm:mt-12 border-t border-white/10">
              {trustIndicators.map((item) => (
                <div key={item.label} className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-[0.22em] font-sans font-medium text-[#c5a880] mb-2">
                    {item.label}
                  </span>
                  <p className="text-xs sm:text-sm text-[#f5f3ef] font-sans font-light leading-snug">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Brand Attribution Footer */}
            <div className="mt-10 sm:mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
              <div>
                <p className="font-serif text-xl sm:text-2xl text-[#f5f3ef] tracking-wide">
                  {brand.name}
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-sans font-medium mt-1">
                  {brand.role}
                </p>
              </div>

              {/* Atelier Insignia Mark */}
              <div
                className="w-12 h-12 border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880] font-serif text-xs tracking-widest select-none"
                aria-hidden="true"
              >
                KV
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
