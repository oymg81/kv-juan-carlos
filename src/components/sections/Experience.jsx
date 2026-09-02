export default function Experience() {
  return (
    <section
      id="experiencia"
      className="relative w-full bg-[#faf8f5] text-[#171615] py-24 sm:py-32 lg:py-40 border-t border-[#171615]/5"
      aria-labelledby="experiencia-heading"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Column: Editorial Brand Story & Values */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <span className="text-xs uppercase tracking-[0.25em] text-[#8e785c] font-sans font-medium mb-4 block">
              La Experiencia KV
            </span>

            {/* Main Editorial Heading (h2) */}
            <h2
              id="experiencia-heading"
              className="font-serif font-light text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3rem] leading-[1.18] text-[#171615] tracking-tight mb-8 max-w-2xl"
            >
              Tu traje comienza mucho antes de elegir una tela.
            </h2>

            {/* Editorial Body Text */}
            <div className="space-y-6 text-[#524e48] font-sans text-sm sm:text-base leading-relaxed max-w-2xl">
              <p>
                La Experiencia KV comienza con una asesoría personalizada en la
                que conocemos al cliente, su personalidad, el concepto de su
                boda, algunos detalles de alta costura y cómo quiere sentirse y
                verse ese día.
              </p>
              <p>
                A partir de esa conversación, diseñamos su look de manera
                integral: traje, calzado y accesorios, cuidando cada detalle para
                que el resultado represente su estilo y personalidad.
              </p>
            </div>

            {/* Three Value Items */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 sm:pt-12 mt-10 sm:mt-12 border-t border-[#171615]/10">
              {/* Item 1: Atención Personalizada */}
              <div className="flex flex-col items-start">
                <div
                  className="w-10 h-10 flex items-center justify-center text-[#8e785c] mb-3.5"
                  aria-hidden="true"
                >
                  <svg
                    className="w-6 h-6 stroke-current fill-none stroke-[1.25]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
                <h3 className="text-[11px] sm:text-xs uppercase tracking-[0.2em] font-sans font-medium text-[#171615] leading-snug">
                  Atención Personalizada
                </h3>
              </div>

              {/* Item 2: Showroom Privado */}
              <div className="flex flex-col items-start">
                <div
                  className="w-10 h-10 flex items-center justify-center text-[#8e785c] mb-3.5"
                  aria-hidden="true"
                >
                  <svg
                    className="w-6 h-6 stroke-current fill-none stroke-[1.25]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 21h19.5m-18-18v18m16.5-18v18m-13.5 0V9.75A2.25 2.25 0 019 7.5h6a2.25 2.25 0 012.25 2.25V21M9 13.5h.008v.008H9V13.5zm6 0h.008v.008H15V13.5z"
                    />
                  </svg>
                </div>
                <h3 className="text-[11px] sm:text-xs uppercase tracking-[0.2em] font-sans font-medium text-[#171615] leading-snug">
                  Showroom Privado
                </h3>
              </div>

              {/* Item 3: Experiencia Única */}
              <div className="flex flex-col items-start">
                <div
                  className="w-10 h-10 flex items-center justify-center text-[#8e785c] mb-3.5"
                  aria-hidden="true"
                >
                  <svg
                    className="w-6 h-6 stroke-current fill-none stroke-[1.25]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3l2.4 5.7 6.1.5-4.6 4.1 1.4 6-5.3-3.2-5.3 3.2 1.4-6-4.6-4.1 6.1-.5L12 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-[11px] sm:text-xs uppercase tracking-[0.2em] font-sans font-medium text-[#171615] leading-snug">
                  Experiencia Única
                </h3>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Showroom Reserved Media Block */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center w-full">
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] max-w-lg bg-[#f0eae1] border border-[#ded5c9] p-8 sm:p-12 flex flex-col justify-between overflow-hidden shadow-xl shadow-black/[0.04]">
              {/* Refined Framing Border */}
              <div className="absolute inset-4 border border-[#c5a880]/30 pointer-events-none" />

              {/* Top Atelier Brand Monogram Accent */}
              <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.25em] text-[#8e785c] font-sans font-medium">
                <span>Atelier KV</span>
                <span>Miraflores</span>
              </div>

              {/* Center Reserved Area Emblem */}
              <div className="text-center my-auto py-8">
                <span className="font-serif text-3xl sm:text-4xl text-[#8e785c] tracking-widest block mb-3 opacity-80">
                  KV
                </span>
                <div className="w-12 h-px bg-[#c5a880]/60 mx-auto mb-4" />
                <p className="font-serif text-lg sm:text-xl text-[#171615] tracking-wide font-light">
                  Showroom Privado
                </p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#8e785c] font-sans mt-2">
                  Atención Exclusiva con Cita Previa
                </p>
              </div>

              {/* Bottom Editorial Details */}
              <div className="text-center border-t border-[#d8cfc3] pt-4">
                <span className="text-[10px] tracking-[0.22em] uppercase text-[#736e67] font-sans block">
                  Espacio Reservado para Fotografía del Showroom
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
