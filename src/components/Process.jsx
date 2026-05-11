const steps = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    desc: 'Understand challenges and design a strategic AI roadmap.',
    img: '/ProcessDiscovery.png',
  },
  {
    num: '02',
    title: 'Design & Prototype',
    desc: 'Detailed wireframes and interactive prototypes.',
    img: '/ProcessDesign.png',
  },
  {
    num: '03',
    title: 'Development & Testing',
    desc: 'Rigorous testing and continuous collaboration.',
    img: '/ProcessDevelopment.png',
  },
  {
    num: '04',
    title: 'Launch & Growth',
    desc: 'Deploy and optimize for continued success.',
    img: '/ProcessLaunch.png',
  },
];

export default function Process() {
  return (
    <section id="lab" className="bg-white py-14">
      <div className="max-w-[1152px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <h2 className="text-[28px] font-extrabold text-[#1a1a4e] uppercase tracking-wider mb-2">
              OUR PROCESS
            </h2>
            <div className="w-10 h-1 bg-primary rounded-full" />
          </div>
          <p className="text-gray-400 text-[15px] italic">From concept to creation, seamlessly.</p>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="group relative rounded-2xl overflow-hidden h-[280px] shadow-sm transition-all duration-500 hover:shadow-xl"
            >
              <img
                src={step.img}
                alt={step.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

              {/* Number badge */}
              <div className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-[12px] font-bold text-primary">{step.num}</span>
              </div>

              {/* Text */}
              <div className="absolute bottom-6 left-6 right-6 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="text-white font-bold text-[20px] mb-1.5">{step.title}</h3>
                <p className="text-gray-300 text-[14px] leading-relaxed opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
