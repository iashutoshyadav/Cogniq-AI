const reasons = [
  {
    icon: 'https://cogniqai.ai/HomePage/WhyUsHandshake.svg',
    title: 'High-Trust Engineering',
    desc: 'Research-backed methods with transparent communication.',
  },
  {
    icon: 'https://cogniqai.ai/HomePage/WhyUsScale.svg',
    title: 'Built for Scale',
    desc: 'Your product grows without breaking.',
  },
  {
    icon: 'https://cogniqai.ai/HomePage/WhyUsAI.svg',
    title: 'Gen AI Expertise',
    desc: 'Deep experience with LLMs and custom AI.',
  },
  {
    icon: 'https://cogniqai.ai/HomePage/WhyUsDesign.svg',
    title: 'User-Centered Design',
    desc: 'Every feature is intuitive and purposeful.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-14" style={{ backgroundColor: '#F5F6FF' }}>
      <div className="max-w-[1152px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-14 items-start">

          {/* Left heading */}
          <div className="lg:w-[300px] flex-shrink-0">
            <h2 className="text-[26px] font-bold font-poppins text-[#1C2482] uppercase tracking-[0.04em] leading-tight mb-3 whitespace-nowrap">
              WHY CHOOSE US
            </h2>
            <div className="w-10 h-1 bg-[#4F35D2] rounded-full mb-4" />
            <p className="text-[#4E4E4E] text-[14px] leading-[1.7]">
              Passion for precision, commitment to quality.
            </p>
          </div>

          {/* Right: 2×2 cards */}
          <div className="flex-1 min-w-0 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 flex items-start gap-4 border border-black/[0.06] shadow-[0_1px_6px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(79,53,210,0.12)] hover:-translate-y-0.5"
              >
                {/* Icon box */}
                <div className="w-[52px] h-[52px] flex-shrink-0 bg-[#2D1B8E] rounded-2xl flex items-center justify-center">
                  <img
                    src={r.icon}
                    alt={r.title}
                    className="w-[26px] h-[26px] brightness-0 invert"
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-[#1C2482] font-bold font-poppins text-[15px] mb-1.5">
                    {r.title}
                  </h3>
                  <p className="text-[#666666] font-medium text-[13px] leading-[1.65]">
                    {r.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
