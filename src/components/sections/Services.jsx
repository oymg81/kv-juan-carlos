import { servicesData } from "@/data/services";

export default function Services() {
  const { eyebrow, title, intro, integralAdvisory, services } = servicesData;

  return (
    <section
      id="servicios"
      className="relative w-full bg-[#0b0a09] text-[#f5f3ef] py-24 sm:py-32 lg:py-40 border-t border-white/[0.06]"
      aria-labelledby="servicios-heading"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-sans font-medium mb-4 block">
            {eyebrow}
          </span>
          <h2
            id="servicios-heading"
            className="font-serif font-light text-3xl sm:text-4xl lg:text-[2.75rem] text-[#f5f3ef] tracking-tight leading-tight mb-5"
          >
            {title}
          </h2>
          <p className="text-sm sm:text-base text-[#a39f97] font-sans font-light leading-relaxed max-w-2xl">
            {intro}
          </p>
        </div>

        {/* Integral Advisory Feature Banner (Service 4) */}
        <div className="border-y border-white/[0.08] py-6 sm:py-7 my-10 sm:my-12 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/[0.01]">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-[#c5a880] rounded-full" />
            <h3 className="text-xs sm:text-sm tracking-[0.22em] uppercase font-sans font-medium text-[#f5f3ef]">
              {integralAdvisory.title}
            </h3>
          </div>
          <p className="text-xs sm:text-[13px] text-[#a39f97] font-sans font-light md:max-w-md">
            {integralAdvisory.description}
          </p>
        </div>

        {/* 3 Editorial Service Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {services.map((item) => (
            <article
              key={item.id}
              className="group bg-[#121110] border border-white/[0.08] hover:border-[#c5a880]/40 transition-colors duration-500 flex flex-col justify-between"
            >
              {/* Image-First Reserved Media Container */}
              <div
                className={`relative w-full ${item.aspectRatio} bg-[#171615] border-b border-white/[0.06] flex flex-col items-center justify-center p-6 overflow-hidden`}
              >
                {/* Subtle Inner Accent Border */}
                <div className="absolute inset-3 border border-white/[0.04] group-hover:border-[#c5a880]/20 transition-colors duration-500 pointer-events-none" />

                {/* Reserved Photography Graphic Placeholder */}
                <div className="text-center z-10 px-4">
                  <span className="text-[10px] tracking-[0.28em] uppercase text-[#c5a880]/70 font-sans block mb-2">
                    {item.number} / Fotografía
                  </span>
                  <p className="font-serif text-lg sm:text-xl text-[#f5f3ef]/80 tracking-wide font-light">
                    {item.title}
                  </p>
                </div>
              </div>

              {/* Editorial Card Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                <div>
                  <span className="text-[10px] tracking-[0.24em] uppercase text-[#c5a880] font-sans font-medium block mb-2">
                    {item.tag}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#f5f3ef] font-normal tracking-wide mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#a39f97] font-sans font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.05] flex items-center justify-between text-[10px] tracking-[0.22em] uppercase text-[#8e785c] font-sans">
                  <span>Confección Exclusiva</span>
                  <span className="text-sm font-serif text-[#c5a880]/60">KV</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
