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

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header: Single visible section heading "Historias", kicker/eyebrow removed */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          <h2
            id="historias-title"
            className="font-serif font-light text-3xl sm:text-4xl lg:text-[2.75rem] text-[#f5f3ef] tracking-tight leading-[1.18]"
          >
            {title}
          </h2>
        </div>

        {/* 3 Editorial Story Rows: Photo on Left / Review on Right (stacked on mobile) */}
        <div className="space-y-6 sm:space-y-8 max-w-5xl mx-auto">
          {items.map((item) => (
            <article
              key={item.id}
              className="relative bg-[var(--bg-dark-elevated)] border border-[var(--gold-accent)]/20 p-5 sm:p-6 lg:p-7 transition-colors duration-300 hover:border-[var(--gold-accent)]/40 shadow-xl shadow-black/40"
            >
              {/* Inner Decorative Hairline Framing */}
              <div
                className="absolute inset-2 sm:inset-2.5 border border-[var(--gold-accent)]/10 pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-center">
                {/* Left Column: Client Wedding Photograph Frame (~4:5 aspect ratio) */}
                <figure className="md:col-span-4 lg:col-span-4 relative w-full aspect-[4/5] max-w-[280px] md:max-w-none mx-auto overflow-hidden border border-white/[0.08] bg-[#0b0a09] m-0">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 240px, 280px"
                    className={`object-cover ${item.objectPosition || "object-center"}`}
                  />
                </figure>

                {/* Right Column: Review Narrative & Attribution */}
                <div className="md:col-span-8 lg:col-span-8 flex flex-col justify-between py-1">
                  <div>
                    {/* Top Metadata: Accessible 5-Star Rating & Source Badge */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-3.5">
                      <div
                        className="flex items-center gap-1 text-[var(--gold-accent)]"
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

                      <span className="text-[10px] uppercase tracking-[0.2em] font-sans text-[var(--gold-accent)]/80 font-medium">
                        Reseña en {item.source}
                      </span>
                    </div>

                    {/* Literal Review Text */}
                    <blockquote className="text-sm sm:text-[15px] lg:text-base text-[#dedad5] font-sans font-light leading-relaxed m-0">
                      <p>&ldquo;{item.text}&rdquo;</p>
                    </blockquote>
                  </div>

                  {/* Author Attribution Footer */}
                  <footer className="pt-3.5 mt-4 border-t border-white/[0.08] flex items-center justify-between">
                    <cite className="not-italic font-serif text-lg sm:text-xl text-[#f5f3ef] tracking-wide font-normal">
                      {item.author}
                    </cite>
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[var(--gold-accent)]"
                      aria-hidden="true"
                    />
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
