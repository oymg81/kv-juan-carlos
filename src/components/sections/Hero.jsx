import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] w-full bg-[#0b0a09] flex items-center overflow-hidden"
    >
      {/* Visual Presentation / Groom Hero Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
        {/* Desktop Framing: Right-side with breathing room from right viewport edge */}
        <div className="relative w-full h-full lg:left-auto lg:right-0 lg:ml-auto lg:w-[66%] xl:w-[60%] lg:pr-8 xl:pr-14">
          <Image
            src="/images/hero/hero-kv.png"
            alt="Novio en smoking de sastrería a medida KV por Juan Carlos Gonzales"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-[62%_top] sm:object-[58%_top] lg:object-[48%_top] xl:object-[46%_top]"
          />

          {/* Left-edge smooth feathering into dark background on desktop */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-48 xl:w-64 bg-gradient-to-r from-[#0b0a09] via-[#0b0a09]/75 to-transparent z-10" />
        </div>

        {/* Top & bottom subtle vignetting for clean integration */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0b0a09]/70 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0b0a09] to-transparent z-10 pointer-events-none" />

        {/* Mobile / Tablet dark scrim overlay for crisp typography contrast */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-[#0b0a09] via-[#0b0a09]/80 to-[#0b0a09]/30 z-10" />
      </div>

      {/* Main Content Area - Shifted slightly upward on desktop for better editorial integration */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 pb-14 sm:pt-32 sm:pb-16 lg:py-0 flex flex-col justify-end lg:justify-center min-h-[100svh] lg:-translate-y-8 xl:-translate-y-12">
        <div className="max-w-xl xl:max-w-2xl">
          {/* Primary Editorial Headline (h1) */}
          <h1 className="font-serif font-light text-[2.5rem] leading-[1.12] sm:text-5xl sm:leading-[1.12] md:text-6xl md:leading-[1.08] lg:text-[3.5rem] xl:text-[4rem] text-[#f5f3ef] tracking-tight">
            Diseñamos cómo
            <br />
            quieres sentirte
            <br />
            el día de tu boda.
          </h1>

          {/* Primary CTA & High-Contrast Microcopy */}
          <div className="mt-8 sm:mt-10 flex flex-col items-start">
            <Link
              href="#agenda"
              className="inline-flex items-center justify-center bg-[#967751] hover:bg-[#a6855b] text-[#f5f3ef] text-xs tracking-[0.2em] uppercase font-sans font-medium px-7 sm:px-8 py-3.5 border border-[#c5a880]/40 hover:border-[#c5a880]/70 shadow-md shadow-black/30 hover:shadow-black/50 transition-all duration-300 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a880]"
            >
              AGENDA TU CITA PRIVADA
            </Link>
            <p className="text-xs sm:text-[13px] text-[#dedad5] tracking-wider mt-3 font-sans font-light">
              Atención exclusiva con cita previa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
