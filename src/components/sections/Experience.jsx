export default function Experience() {
  return (
    <section
      id="experiencia"
      className="relative w-full bg-[#faf8f5] text-[#171615] py-20 sm:py-24 md:py-28 lg:py-32 border-t border-[#171615]/5"
      aria-labelledby="experiencia-heading"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl text-left">
          {/* Eyebrow */}
          <span className="text-xs uppercase tracking-[0.25em] text-[#806b50] font-sans font-medium mb-5 sm:mb-6 block">
            LA EXPERIENCIA KV
          </span>

          {/* Main Editorial Heading (h2) */}
          <h2
            id="experiencia-heading"
            className="font-serif font-light text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] leading-[1.18] text-[#171615] tracking-tight mb-8 sm:mb-10 max-w-3xl"
          >
            Tu traje comienza mucho antes de elegir una tela.
          </h2>

          {/* Short Restrained Divider Line */}
          <div
            className="w-12 sm:w-14 h-px bg-[#8e785c]/40 mb-8 sm:mb-10"
            aria-hidden="true"
          />

          {/* Supporting Copy */}
          <div className="space-y-3.5 sm:space-y-4 text-base sm:text-lg md:text-xl text-[#524e48] font-sans font-light leading-relaxed max-w-2xl">
            <p>Una conversación para entender tu estilo.</p>
            <p>Un diseño a tu medida.</p>
            <p>
              Una propuesta que te haga sentir seguro en uno de los momentos
              más importantes de tu vida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
