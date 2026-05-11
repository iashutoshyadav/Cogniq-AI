export default function Footer() {
  const linkStyle = {
    color: 'rgba(255,255,255,0.6)',
    fontSize: '14px',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '12px',
    transition: 'color 0.2s',
  };

  const hoverIn  = (e) => (e.target.style.color = 'rgba(255,255,255,0.85)');
  const hoverOut = (e) => (e.target.style.color = 'rgba(255,255,255,0.6)');

  const col = (heading, links) => (
    <div>
      <h4 style={{
        color: '#fff',
        fontSize: '16px',
        fontWeight: 600,
        margin: '0 0 24px',
        letterSpacing: '0.01em',
      }}>
        {heading}
      </h4>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {links.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href || '#'}
              style={linkStyle}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer style={{ backgroundColor: '#232326' }}>
      <div style={{
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '48px 80px 0',
      }}>

        {/* ── Main row ── */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '64px',
          paddingBottom: '40px',
          borderBottom: '0.76px solid rgba(255,255,255,0.1)',
        }}>

          {/* Brand column */}
          <div style={{ minWidth: '260px', maxWidth: '300px' }}>
            <img
              src="/HeaderCompanyLogo.svg"
              alt="Cogniq AI"
              style={{ height: '32px', width: 'auto', display: 'block', marginBottom: '8px' }}
            />

            <p style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: '12px',
              fontStyle: 'italic',
              margin: '0 0 14px',
            }}>
              A Cogniq Labs Division
            </p>

            <p style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: '14px',
              lineHeight: '1.7',
              margin: '0 0 22px',
            }}>
              Building{' '}
              <span style={{ color: '#fff', fontStyle: 'italic' }}>intelligent</span>{' '}
              AI apps that transform how{' '}
              <span style={{ color: '#fff', fontStyle: 'italic' }}>you</span>{' '}
              interact with technology.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {[
                { src: '/SocialInstagram.svg', label: 'Instagram' },
                { src: '/SocialX.svg',         label: 'X'         },
                { src: '/SocialLinkedin.svg',   label: 'LinkedIn'  },
              ].map(({ src, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  style={{
                    width: '36px',
                    height: '36px',
                    border: '0.76px solid rgba(255,255,255,0.5)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    flexShrink: 0,
                    transition: 'background-color 0.2s, border-color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.borderColor = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
                  }}
                >
                  <img
                    src={src}
                    alt={label}
                    style={{ width: '17px', height: '17px', filter: 'brightness(0) invert(0.8)' }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {col('Company', [
            { label: 'About us' },
            { label: 'Careers'  },
            { label: 'Blogs'    },
          ])}

          {col('AI Solutions', [
            { label: 'Custom AI Agents'    },
            { label: 'Voice AI'            },
            { label: 'Customer Support AI' },
          ])}

          {col('Services', [
            { label: 'Workflow Automation'  },
            { label: 'Predictive Analytics' },
            { label: 'All Services →'       },
          ])}

          {col('Products', [
            { label: 'All Products'  },
            { label: 'JobMail AI'    },
            { label: 'PostGenius AI' },
          ])}
        </div>

        {/* ── Bottom bar ── */}
        <div style={{
          paddingTop: '24px',
          paddingBottom: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', margin: 0 }}>
            © 2026 Cogniq AI. All Rights Reserved.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {['Terms of service', 'Privacy Policy'].map((txt, i) => (
              <>
                {i > 0 && <span key="dot" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px' }}>•</span>}
                <a
                  key={txt}
                  href="#"
                  style={{
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: '14px',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = 'rgba(255,255,255,0.8)')}
                  onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.5)')}
                >
                  {txt}
                </a>
              </>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
