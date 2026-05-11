const services = [
  {
    icon: '/OurServicesCustomer.svg',
    title: 'AI-Powered Customer Service',
    desc: 'Automate 80% of routine queries and turn your support center into a revenue driver.',
  },
  {
    icon: '/OurServicesScheduling.svg',
    title: 'Automated Scheduling & Operations',
    desc: 'Eliminate no-shows and recover thousands in lost revenue with intelligent automation.',
  },
  {
    icon: '/OurServicesInventory.svg',
    title: 'Intelligent Inventory Management',
    desc: 'Prevent stockouts and make data-driven decisions with predictive forecasting.',
  },
  {
    icon: '/OurServicesTools.svg',
    title: 'Micro Tools & Extensions',
    desc: 'Lightweight tools powered by AI to boost productivity.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-14">
      <div className="max-w-[1152px] mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-[26px] font-bold font-poppins text-[#1C2482] uppercase tracking-wider mb-2">
            OUR SERVICES
          </h2>
          <div className="w-10 h-1 bg-primary rounded-full mb-4" />
          <p className="text-[#4E4E4E] text-[15px]">Solve your biggest challenges with end-to-end AI solutions.</p>
        </div>

        {/* 2×2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((svc, i) => (
            <div
              key={i}
              style={{ backgroundColor: '#F5F6FF', borderRadius: '14px', padding: '32px', transition: 'box-shadow 0.3s', cursor: 'default' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 30px rgba(79,53,210,0.08)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
            >
              <div style={{ width: '52px', height: '52px', backgroundColor: '#4F35D2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', flexShrink: 0 }}>
                <img src={svc.icon} alt={svc.title} style={{ width: '24px', height: '24px', filter: 'brightness(0) invert(1)' }} />
              </div>
              <h3 className="text-[#4636B9] font-bold font-poppins text-[16px] mb-2">{svc.title}</h3>
              <p className="text-[#3D3D3D] font-medium text-[14px] leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <a
            href="#all-services"
            className="text-primary font-semibold text-[15px] no-underline inline-flex items-center gap-2 transition-transform duration-200 hover:translate-x-1"
          >
            View all Services
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
