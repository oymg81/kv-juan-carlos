import { testimonialsData } from "@/data/testimonials";

export default function Testimonials() {
  const { eyebrow, title, items } = testimonialsData;

  return (
    <section
      id="historias"
      className="relative w-full bg-[#0b0a09] text-[#f5f3ef] pt-8 sm:pt-10 lg:pt-14 pb-16 sm:pb-20 lg:pb-24 border-t border-white/5 overflow-x-clip"
      aria-labelledby="historias-title"
    >
      {/* Subtle atmospheric ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[28rem] bg-[var(--gold-accent)]/[0.025] rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold-accent)] font-sans font-medium mb-3 block">
            {eyebrow}
          </span>
          <h2
            id="historias-title"
            className="font-serif font-light text-3xl sm:text-4xl lg:text-[2.75rem] text-[#f5f3ef] tracking-tight leading-[1.18]"
          >
            {title}
          </h2>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {items.map((item) => (
            <article
              key={item.id}
              className="relative bg-[var(--bg-dark-elevated)] border border-[var(--gold-accent)]/20 p-8 sm:p-10 flex flex-col justify-between transition-colors duration-300 hover:border-[var(--gold-accent)]/40 shadow-xl shadow-black/40"
            >
              {/* Inner Decorative Hairline Framing */}
              <div
                className="absolute inset-3 sm:inset-4 border border-[var(--gold-accent)]/10 pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative z-10 flex flex-col flex-1 justify-between">
                <div>
                  {/* Top Metadata: Accessible 5-Star Rating & Discrete Google Review Badge */}
                  <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-6">
                    <div
                      className="flex items-center gap-1 text-[var(--gold-accent)]"
                      role="img"
                      aria-label={`${item.rating} de 5 estrellas`}
                    >
                      {[...Array(item.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 fill-current shrink-0"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <span className="text-[10px] uppercase tracking-[0.2em] font-sans text-[var(--gold-accent)]/80 font-medium">
                      Reseña en Google
                    </span>
                  </div>

                  {/* Literal Review Text */}
                  <blockquote className="text-sm sm:text-[15px] text-[#dedad5] font-sans font-light leading-relaxed m-0">
                    <p>&ldquo;{item.text}&rdquo;</p>
                  </blockquote>
                </div>

                {/* Author Attribution Footer */}
                <footer className="pt-6 mt-8 border-t border-white/[0.08] flex items-center justify-between">
                  <cite className="not-italic font-serif text-lg sm:text-xl text-[#f5f3ef] tracking-wide font-normal">
                    {item.author}
                  </cite>
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[var(--gold-accent)]"
                    aria-hidden="true"
                  />
                </footer>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
