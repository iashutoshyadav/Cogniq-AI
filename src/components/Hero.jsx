export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Background SVG — use <img> so filter/clip-path elements render correctly */}
      <img
        src="/HeroSectionBG.svg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-70"
      />

      {/* Floating Icons */}
      {/* Left: Idea/Lightbulb */}
      <div className="absolute left-[8%] top-[38%] bg-white rounded-full p-4 shadow-[0_2px_15px_rgba(0,0,0,0.08)] z-10 hidden lg:block animate-bounce-slow">
        <img src="/IdeaIconHero.svg" alt="" className="w-8 h-8" />
      </div>

      {/* Right: BullsEye */}
      <div className="absolute right-[10%] top-[32%] bg-white rounded-full p-4 shadow-[0_2px_15px_rgba(0,0,0,0.08)] z-10 hidden lg:block animate-pulse-slow">
        <img src="/BullsEyeHero.svg" alt="" className="w-8 h-8" />
      </div>

      {/* Right: Magic Sparkles */}
      <div className="absolute right-[12%] bottom-[12%] bg-white rounded-full p-4 shadow-[0_2px_15px_rgba(0,0,0,0.08)] z-10 hidden lg:block animate-bounce-slow">
        <img src="/MagicSparklesHero.svg" alt="" className="w-8 h-8" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[900px] mx-auto px-6 pt-32 pb-20 text-center">
        <h1 className="text-[40px] md:text-[52px] font-bold font-poppins leading-[1.2] text-[#444343] mb-6 tracking-tight">
          Building <span className="text-accent">Intelligent</span>, scalable AI <br className="hidden md:block" />
          solutions for the <span className="text-accent">Next</span> <br className="hidden md:block" />
          Generation
        </h1>

        <div className="text-[#666666] text-[17px] md:text-[19px] font-medium leading-[1.7] max-w-[600px] mx-auto mb-10 flex flex-col items-center text-center">
          <span className="block">Your premier AI & Software engineering partner - transforming</span>
          <span className="block">ideas into reliable, high-performance products.</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#services"
            className="w-full sm:w-auto border-[0.76px] border-primary text-primary font-medium text-[15px] px-12 py-4 rounded-md no-underline transition-all duration-300 hover:bg-primary/5"
          >
            Explore our services
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent text-white font-medium text-[15px] px-12 py-4 rounded-md no-underline transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
          >
            Book a Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
}
