export default function EditorialStatement() {
  return (
    <section
      className="relative w-full bg-[#faf8f5] text-[#171615] py-28 sm:py-36 md:py-44 lg:py-48 px-6 sm:px-8 flex items-center justify-center border-t border-[#171615]/5"
      aria-label="Declaración editorial KV Experience"
    >
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Uppercase Editorial Serif Heading (h2) */}
        <h2 className="font-serif font-light text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] leading-[1.3] sm:leading-[1.3] md:leading-[1.35] tracking-[0.18em] sm:tracking-[0.22em] text-[#171615] uppercase max-w-3xl">
          Hay una forma diferente
          <br className="hidden sm:inline" /> de vestir para tu boda
        </h2>

        {/* Brand Subsection Tag */}
        <p className="font-sans font-medium text-xs sm:text-[13px] tracking-[0.28em] uppercase text-[#8e785c] mt-8 sm:mt-10">
          KV Experience
        </p>

        {/* Elegant Hairline Divider */}
        <div
          className="w-px h-10 sm:h-12 bg-[#c5a880]/50 mt-8 sm:mt-10 mb-4"
          aria-hidden="true"
        />

        {/* Delicate Downward Arrow */}
        <div
          className="text-[#8e785c] text-sm sm:text-base font-light transition-transform duration-500 hover:translate-y-1 select-none"
          aria-hidden="true"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 stroke-current fill-none stroke-[1.25]"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
