import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b-[0.76px] border-[#f0f0f4]' : 'bg-white/95 backdrop-blur-md border-b-[0.76px] border-[#f0f0f4]'
      }`}>
      <div className="w-full max-w-[1440px] mx-auto px-10 lg:px-20 flex items-center justify-between h-20">

        {/* Logo */}
        <a href="#home" className="flex items-center no-underline select-none">
          <img
            src="/HeaderCompanyLogo.svg"
            alt="Cogniq AI"
            className="h-[28px] w-auto"
            draggable={false}
            style={{ border: 'none', outline: 'none', boxShadow: 'none', display: 'block' }}
          />
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-10">
          {[
            { label: 'Home', href: '#home', active: true },
            { label: 'About Us', href: '#about', active: false },
            { label: 'Services', href: '#services', active: false },
            { label: 'Our Lab', href: '#lab', active: false },
            { label: 'Blogs', href: '#blogs', active: false },
          ].map(({ label, href, active }) => (
            <a
              key={label}
              href={href}
              className={`text-[15px] transition-colors duration-200 no-underline ${active ? 'text-[#794CFA] font-medium' : 'text-[#4E4E4E] font-medium hover:text-[#794CFA]'
                }`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Contact Us CTA */}
        <a
          href="#contact"
          className="bg-gradient-to-r from-[#1C2482] to-[#794CFA] text-white font-semibold text-[14px] px-[20px] py-[10px] rounded-[6px] no-underline transition-all duration-300 hover:shadow-lg hover:opacity-90"
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
}
