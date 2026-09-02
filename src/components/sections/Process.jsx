import { processData } from "@/data/process";

function ProcessIcon({ type }) {
  const iconClasses = "w-5 h-5 stroke-current fill-none stroke-[1.25]";

  switch (type) {
    case "dialogue":
      // Conversational consultation
      return (
        <svg className={iconClasses} viewBox="0 0 24 24" aria-hidden="true">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a.75.75 0 01-1.074-.865 5.247 5.247 0 001.058-2.604A8.17 8.17 0 013 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
          />
        </svg>
      );
    case "measure":
      // Tailor's measuring tape / precision rule
      return (
        <svg className={iconClasses} viewBox="0 0 24 24" aria-hidden="true">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12M6 6.75v3m4-3v2m4-2v3m4-3v2M6 12v3m4-3v2"
          />
        </svg>
      );
    case "posture":
      // Posture and silhouette analysis
      return (
        <svg className={iconClasses} viewBox="0 0 24 24" aria-hidden="true">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM12 10.5v10.5m-4.5-6h9"
          />
        </svg>
      );
    case "tailoring":
      // Needle & thread / craft tailoring
      return (
        <svg className={iconClasses} viewBox="0 0 24 24" aria-hidden="true">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5m10.5-9.75L20.25 9.5m-6.75 7.5l4.5 4.5m-9-3l-4.5 4.5M12 21a9 9 0 100-18 9 9 0 000 18z"
          />
        </svg>
      );
    case "fitting":
      // Tailoring hanger / jacket adjustment
      return (
        <svg className={iconClasses} viewBox="0 0 24 24" aria-hidden="true">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5a2.25 2.25 0 00-2.25 2.25c0 1.242 1.008 2.25 2.25 2.25M12 9l8.25 6.75H3.75L12 9zm0 6.75v4.5"
          />
        </svg>
      );
    case "delivery":
      // Presentation package / wedding handover
      return (
        <svg className={iconClasses} viewBox="0 0 24 24" aria-hidden="true">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H4.5a1.5 1.5 0 01-1.5-1.5v-8.25M3 11.25h18M3 11.25l2.25-6.75h13.5L21 11.25M12 11.25v9.75"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default function Process() {
  const { title, eyebrow, steps } = processData;

  return (
    <section
      id="proceso"
      className="relative w-full bg-[#faf8f5] text-[#171615] py-24 sm:py-32 lg:py-40 border-t border-[#171615]/5"
      aria-labelledby="proceso-heading"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8e785c] font-sans font-medium mb-3 block">
            {eyebrow}
          </span>
          <h2
            id="proceso-heading"
            className="font-serif font-light text-2xl sm:text-3xl lg:text-[2.65rem] tracking-[0.16em] sm:tracking-[0.2em] uppercase text-[#171615] leading-tight"
          >
            {title}
          </h2>
        </div>

        {/* 6-Step Process Grid */}
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-3 xl:gap-4 relative list-none p-0 m-0">
          {steps.map((item, idx) => {
            const isLast = idx === steps.length - 1;

            return (
              <li
                key={item.number}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Desktop Connector Arrow between steps */}
                {!isLast && (
                  <div
                    className="hidden lg:flex absolute top-5 -right-2 xl:-right-2.5 z-10 text-[#c5a880]/70 pointer-events-none select-none"
                    aria-hidden="true"
                  >
                    <svg
                      className="w-3.5 h-3.5 stroke-current fill-none stroke-[1.5]"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                )}

                {/* Minimal Bespoke Icon */}
                <div
                  className="w-10 h-10 rounded-none flex items-center justify-center text-[#8e785c] mb-3.5"
                  aria-hidden="true"
                >
                  <ProcessIcon type={item.icon} />
                </div>

                {/* Step Number */}
                <span className="font-serif text-lg sm:text-xl text-[#8e785c] tracking-widest block font-light">
                  {item.number}
                </span>

                {/* Step Title */}
                <h3 className="text-xs tracking-[0.18em] uppercase font-sans font-medium text-[#171615] mt-2 mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs text-[#6b6761] font-sans font-light leading-relaxed px-1 sm:px-2">
                  {item.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
