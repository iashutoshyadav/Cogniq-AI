export default function About() {
  return (
    <section id="about" className="bg-[#F5F6FF] py-[56px] overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start">

          {/* Left side: Purple Bar + Image */}
          <div className="flex items-center gap-8 justify-center lg:justify-start mb-10 lg:mb-0">
            {/* Vertical Bar - Exact dimensions and gradient */}
            <div
              className="hidden md:block w-[56px] h-[342px] rounded-sm flex-shrink-0 shadow-sm"
              style={{
                background: 'linear-gradient(to bottom right, #794CFA, #1C2482)'
              }}
            />

            {/* Robotic Hand Image */}
            <div className="relative w-full max-w-[420px]">
              <img
                src="https://cogniqai.ai/HomePage/HomeAboutUsRobotHandImage.png"
                alt="Cogniq AI Robot Hand"
                className="w-full h-auto rounded-[14px] shadow-2xl block"
              />
            </div>
          </div>

          {/* Right side: Text content */}
          <div className="flex-1 lg:ml-12 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 bg-[#E0E7FF] text-[#1C2482] rounded-full text-[12px] font-bold uppercase tracking-wider mb-6">
              ABOUT US
            </div>

            <h2 className="text-[18px] md:text-[26px] font-semibold font-poppins mb-4 leading-tight">
              <span className="text-[#1C2482]">Engineering Trust.</span>{' '}
              <span className="text-[#794CFA]">Delivering Intelligence.</span>
            </h2>

            <h3 className="text-[22px] md:text-[26px] font-semibold font-poppins text-black mb-6 leading-[1.25]">
              At Cogniq AI
            </h3>

            <p className="text-[#4E4E4E] text-[17px] font-medium leading-[1.625] mb-8 max-w-[600px] mx-auto lg:mx-0">
              we don't just develop features, we build <span className="text-[#794CFA] font-bold">full-scale</span> AI systems
              designed for clarity, transparency, and long-term growth. From startups to enterprises,
              we partner with teams that want to innovate without compromising on <span className="text-[#1C2482] font-bold">quality</span>.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 bg-[#1C2482] text-white font-bold text-[15px] px-8 py-3.5 rounded-[6px] shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-[#1a206a] whitespace-nowrap group"
            >
              Know more about Us
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
