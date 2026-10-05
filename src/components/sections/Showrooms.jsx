import Image from "next/image";
import { showroomsData } from "@/data/showrooms";

export default function Showrooms() {
  const { eyebrow, title, paragraphs, featuredImage, phone, locations } = showroomsData;

  return (
    <section
      id="showrooms"
      className="relative w-full bg-[#faf8f5] text-[#171615] pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24 border-t border-[#171615]/5"
      aria-labelledby="showrooms-heading"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8e785c] font-sans font-medium mb-3 block">
            {eyebrow}
          </span>
          <h2
            id="showrooms-heading"
            className="font-serif font-light text-2xl sm:text-3xl lg:text-4xl text-[#171615] tracking-tight leading-[1.18] mb-6"
          >
            {title}
          </h2>
          {/* Two Approved Semantic Paragraphs */}
          <div className="space-y-4 text-sm sm:text-base text-[#524e48] font-sans leading-relaxed text-center">
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>

        {/* Showrooms Editorial Presentation: Featured Image + 2 Location Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 max-w-6xl mx-auto items-stretch">
          {/* Left Column: Featured Showroom Photograph */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-auto lg:h-full min-h-[340px] sm:min-h-[420px] rounded-none overflow-hidden border border-[#ded5c9] bg-[#f0eae1] shadow-sm">
              <Image
                src={featuredImage.src}
                alt={featuredImage.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 460px"
                className="object-cover object-[center_20%]"
              />
              {/* Inner Decorative Hairline */}
              <div
                className="absolute inset-3 border border-white/25 pointer-events-none"
                aria-hidden="true"
              />
              {/* Subtle Atelier Badge at bottom of image */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0b0a09]/85 via-[#0b0a09]/40 to-transparent p-5 sm:p-6 pt-12 text-white">
                <span className="text-[10px] uppercase tracking-[0.25em] font-sans font-medium text-[#c5a880] block">
                  Showroom Privado KV
                </span>
                <p className="font-serif text-lg sm:text-xl text-[#f5f3ef] tracking-wide mt-0.5">
                  Atención con Cita Previa
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Two Location Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8 justify-between">
            {locations.map((location) => (
              <article
                key={location.id}
                className="relative bg-[#f0eae1]/60 border border-[#ded5c9] p-5 sm:p-6 lg:p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#c5a880]/60 shadow-sm shadow-black/[0.02] group"
              >
                {/* Inner Decorative Hairline Frame */}
                <div
                  className="absolute inset-2 sm:inset-2.5 lg:inset-3 border border-[#c5a880]/15 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Top Meta & Numbering */}
                <div className="relative z-10 flex items-center justify-between pb-3.5 sm:pb-4 border-b border-[#ded5c9]">
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.25em] text-[#8e785c] font-sans font-medium block">
                      {location.tag}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#171615] tracking-wide mt-0.5">
                      {location.name}
                    </h3>
                  </div>
                  <span
                    className="font-serif text-2xl sm:text-3xl text-[#8e785c]/40 font-light select-none"
                    aria-hidden="true"
                  >
                    {location.number}
                  </span>
                </div>

                {/* Story Narratives & Address Details */}
                <div className="relative z-10 py-4 sm:py-5 flex-1 flex flex-col justify-between">
                  {/* Location Narrative Copy */}
                  {location.paragraphs && location.paragraphs.length > 0 && (
                    <div className="space-y-2 text-sm sm:text-[15px] text-[#524e48] font-sans font-light leading-relaxed mb-4">
                      {location.paragraphs.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>
                  )}

                  {/* Postal Address & Condition */}
                  <div className="pt-3.5 sm:pt-4 border-t border-[#ded5c9]/60 space-y-2">
                    <address className="not-italic text-sm sm:text-base text-[#524e48] font-sans leading-relaxed">
                      <p className="text-[#171615] font-medium text-base sm:text-[17px]">
                        {location.address.street}
                      </p>
                      <p className="text-[#6b6761] text-sm sm:text-base mt-0.5">
                        {location.address.city}, {location.address.country}
                      </p>
                    </address>

                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#8e785c] font-sans font-medium pt-0.5">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-[#8e785c] shrink-0"
                        aria-hidden="true"
                      />
                      <span>{location.condition}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="relative z-10 pt-3.5 sm:pt-4 border-t border-[#ded5c9] flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                  <a
                    href={location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Abrir ubicación de ${location.name} en Google Maps`}
                    className="flex-1 inline-flex items-center justify-center gap-2 text-xs tracking-[0.14em] sm:tracking-[0.16em] uppercase font-sans font-medium px-4 py-2.5 border border-[#171615]/20 hover:border-[#8e785c] text-[#171615] hover:text-[#8e785c] hover:bg-white/40 transition-all duration-300 min-h-[44px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#8e785c]"
                  >
                    <span>Abrir en Google Maps</span>
                    <svg
                      className="w-3.5 h-3.5 stroke-current fill-none shrink-0"
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

                  <a
                    href={phone.href}
                    aria-label={`Llamar a KV al ${phone.display} para agendar cita previa en ${location.name}`}
                    className="inline-flex items-center justify-center gap-2 text-xs tracking-[0.14em] sm:tracking-[0.16em] uppercase font-sans font-medium px-4 py-2.5 border border-[#8e785c]/30 hover:border-[#8e785c] text-[#8e785c] hover:text-[#171615] hover:bg-[#8e785c]/10 transition-all duration-300 min-h-[44px] shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#8e785c]"
                  >
                    <svg
                      className="w-3.5 h-3.5 stroke-current fill-none shrink-0"
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
                    <span>Llamar</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
