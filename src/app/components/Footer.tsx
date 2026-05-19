import { motion } from 'motion/react';
import { Instagram, Mail, Youtube, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/feelgood.editss', primary: true },
  { icon: Youtube, label: 'YouTube', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Mail, label: 'Email', href: 'mailto:contact@feelgood.editss' }
];

export function Footer() {
  return (
    <footer id="contact" className="py-20 px-6 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.05)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6" style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 700,
              color: '#FAFAFA',
              letterSpacing: '-0.02em'
            }}>
              Let's Create Something<br />Extraordinary
            </h2>

            <button
              className="group relative px-12 py-5 rounded-full overflow-hidden mb-12 transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                boxShadow: '0 0 40px rgba(16, 185, 129, 0.3)'
              }}
            >
              <span className="relative z-10" style={{
                fontSize: '1.125rem',
                fontWeight: 600,
                color: '#FAFAFA',
                letterSpacing: '0.02em'
              }}>
                Let's Work Together
              </span>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(135deg, #059669 0%, #047857 100%)'
                }}
              />
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-4 mb-12"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="group relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    background: social.primary
                      ? 'linear-gradient(135deg, #A855F7 0%, #7C3AED 100%)'
                      : 'rgba(255, 255, 255, 0.05)',
                    border: social.primary
                      ? '1px solid rgba(168, 85, 247, 0.4)'
                      : '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" style={{ color: '#FAFAFA' }} />

                  {social.primary && (
                    <div
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: 'linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)'
                      }}
                    />
                  )}
                </a>
              );
            })}
          </motion.div>

          {/* Copyright */}
          {/* Logo in Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6"
          >
            <img
              src="/src/imports/WhatsApp_Image_2026-05-18_at_2.43.11_PM.jpeg"
              alt="feelgood.editss"
              className="h-20 w-20 rounded-full mx-auto"
              style={{
                boxShadow: '0 0 30px rgba(168, 85, 247, 0.3)'
              }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ fontSize: '0.875rem', color: '#71717A' }}
          >
            © 2026 feelgood.editss. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
