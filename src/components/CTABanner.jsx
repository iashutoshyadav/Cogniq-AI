export default function CTABanner() {
  return (
    <>
      {/* ── Full-width "Unlock AI Potential" strip ── */}
      <section style={{ backgroundColor: '#F5F6FF', width: '100%' }}>
        <div
          className="max-w-[1152px] mx-auto px-6 md:px-12"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '20px',
            paddingBottom: '20px',
            gap: '16px',
          }}
        >
          {/* Left: icon + text */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: '#4F35D2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <svg width="20" height="20" fill="none" stroke="#fff" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <p
                style={{
                  fontWeight: '700',
                  fontSize: '17px',
                  color: '#4F35D2',
                  lineHeight: '1.2',
                  margin: 0,
                }}
              >
                Unlock AI Potential
              </p>
              <p
                style={{
                  fontSize: '14px',
                  color: '#6b7280',
                  lineHeight: '1.4',
                  marginTop: '4px',
                  marginBottom: 0,
                }}
              >
                Discover how we can transform your operations
              </p>
            </div>
          </div>

          {/* Right: button */}
          <a
            href="#solutions"
            style={{
              flexShrink: 0,
              fontWeight: '600',
              fontSize: '14px',
              padding: '10px 24px',
              borderRadius: '10px',
              border: '1.5px solid #4F35D2',
              color: '#4F35D2',
              backgroundColor: 'transparent',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(79,53,210,0.07)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            Explore Solutions
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* ── Big CTA card with background image ── */}
      <section className="bg-white py-10">
        <div className="max-w-[1152px] mx-auto px-6 md:px-12">
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl group"
            style={{ height: '380px' }}
          >
            {/* Background image */}
            <img
              src="/ReadyToTransform.jpg"
              alt="Ready to transform"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />

            {/* Dark overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(0,0,0,0.62)',
              }}
            />

            {/* Text content */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '48px 32px',
              }}
            >
              <h2
                className="text-white font-bold font-poppins leading-tight mb-4"
                style={{ fontSize: '30px', maxWidth: '680px' }}
              >
                Ready to transform Your Workflow?
              </h2>
              <p
                className="text-gray-200 font-medium leading-relaxed mb-8"
                style={{ fontSize: '16px', maxWidth: '560px' }}
              >
                Let's build a clear, actionable roadmap to solve your biggest operational challenges with AI.
              </p>
              <a
                href="#contact"
                className="text-white font-bold inline-flex items-center gap-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl no-underline"
                style={{
                  background: 'linear-gradient(to right, #4F35D2, #794CFA)',
                  fontSize: '16px',
                  padding: '14px 40px',
                }}
              >
                Book a Strategy Call
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
