import Image from "next/image";
import { testimonialsData } from "@/data/testimonials";

export default function Testimonials() {
  const { title, items } = testimonialsData;

  return (
    <section
      id="historias"
      className="relative w-full bg-[#0b0a09] text-[#f5f3ef] pt-12 sm:pt-14 lg:pt-16 pb-14 sm:pb-16 lg:pb-20 border-t border-white/5 overflow-x-clip"
      aria-labelledby="historias-title"
    >
      {/* Subtle atmospheric ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[28rem] bg-[var(--gold-accent)]/[0.025] rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-8 2xl:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          <h2
            id="historias-title"
            className="font-serif font-light text-3xl sm:text-4xl lg:text-[2.75rem] text-[#f5f3ef] tracking-tight leading-[1.18]"
          >
            {title}
          </h2>
        </div>

        {/* 3 Columns from 1280px (xl:grid-cols-3), Stacked on Tablet/Mobile */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 xl:gap-5 2xl:gap-7 items-stretch">
          {items.map((item) => (
            <article
              key={item.id}
              className="relative bg-[var(--bg-dark-elevated)] border border-[var(--gold-accent)]/20 p-4 sm:p-5 lg:p-5 2xl:p-6 transition-colors duration-300 hover:border-[var(--gold-accent)]/40 shadow-xl shadow-black/40 flex flex-col h-full max-w-2xl xl:max-w-none mx-auto w-full"
            >
              {/* Inner Decorative Hairline Framing */}
              <div
                className="absolute inset-2 sm:inset-2.5 border border-[var(--gold-accent)]/10 pointer-events-none"
                aria-hidden="true"
              />

              {/* Internal 2-Column Grid: Photo on Left (~38-40%), Content on Right (~60-62%) from 768px (md) */}
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-4 lg:gap-5 items-start h-full">
                {/* Left Column: Photograph (4:5 Ratio, Preserves Framing, Never Stretched) */}
                <figure className="md:col-span-5 relative w-full aspect-[4/5] max-w-[260px] md:max-w-none mx-auto overflow-hidden border border-white/[0.08] bg-[#0b0a09] m-0 shrink-0 self-start">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 35vw, (max-width: 1536px) 190px, 230px"
                    className={`object-cover ${item.objectPosition || "object-center"}`}
                  />
                </figure>

                {/* Right Column: Stars, Google Attribution, Full Review & Author */}
                <div className="md:col-span-7 flex flex-col justify-between h-full min-h-full py-0.5">
                  <div>
                    {/* Stars Rating & Google Attribution */}
                    <div className="flex flex-wrap items-center justify-between gap-1.5 pb-2.5 border-b border-white/[0.08] mb-3">
                      <div
                        className="flex items-center gap-0.5 text-[var(--gold-accent)]"
                        role="img"
                        aria-label={`${item.rating} de 5 estrellas`}
                      >
                        {[...Array(item.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-3.5 h-3.5 fill-current shrink-0"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.14em] font-sans text-[var(--gold-accent)]/85 font-medium">
                        Reseña en {item.source}
                      </span>
                    </div>

                    {/* Full Review Narrative (16px text-base) */}
                    <blockquote className="text-base text-[#dedad5] font-sans font-light leading-relaxed m-0 italic mb-4">
                      <p>&ldquo;{item.text}&rdquo;</p>
                    </blockquote>
                  </div>

                  {/* Client Name Footer Aligned to Bottom */}
                  <footer className="pt-3 border-t border-white/[0.08] mt-auto">
                    <cite className="not-italic font-sans text-xs sm:text-sm uppercase tracking-[0.16em] text-[#f5f3ef] font-semibold block">
                      {item.author}
                    </cite>
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#c5a880] font-sans block mt-0.5">
                      Novio KV
                    </span>
                  </footer>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
