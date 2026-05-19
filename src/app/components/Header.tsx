import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

export function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      style={{
        background: 'rgba(11, 11, 12, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center group">
          <img
            src="/src/imports/WhatsApp_Image_2026-05-18_at_2.43.11_PM.jpeg"
            alt="feelgood.editss"
            className="h-16 w-16 rounded-full transition-transform duration-300 group-hover:scale-105"
            style={{
              boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)'
            }}
          />
          <div className="ml-4 hidden sm:block">
            <div style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              color: '#FAFAFA',
              letterSpacing: '-0.01em'
            }}>
              feelgood.editss
            </div>
            <div style={{
              fontSize: '0.75rem',
              color: '#A1A1AA',
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}>
              Explore More • Dream Big
            </div>
          </div>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#work"
            className="transition-colors duration-200"
            style={{
              fontSize: '0.9375rem',
              color: '#D4D4D8',
              fontWeight: 500
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#C084FC'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#D4D4D8'}
          >
            Work
          </a>
          <a
            href="#services"
            className="transition-colors duration-200"
            style={{
              fontSize: '0.9375rem',
              color: '#D4D4D8',
              fontWeight: 500
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#C084FC'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#D4D4D8'}
          >
            Services
          </a>
          <a
            href="#contact"
            className="transition-colors duration-200"
            style={{
              fontSize: '0.9375rem',
              color: '#D4D4D8',
              fontWeight: 500
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#C084FC'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#D4D4D8'}
          >
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com/feelgood.editss"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #A855F7 0%, #7C3AED 100%)',
              boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)'
            }}
          >
            <Instagram className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" style={{ color: '#FAFAFA' }} />
          </a>

          <button
            className="hidden md:block group relative px-6 py-2.5 rounded-full overflow-hidden transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #A855F7 0%, #7C3AED 100%)',
              boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)'
            }}
          >
            <span className="relative z-10" style={{
              fontSize: '0.9375rem',
              fontWeight: 600,
              color: '#FAFAFA'
            }}>
              Get Started
            </span>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)'
              }}
            />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
