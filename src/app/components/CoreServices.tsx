import { motion } from 'motion/react';
import { Film, Image, Video, Briefcase } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Film,
    title: 'Video Editing',
    description: 'Transform raw footage into compelling narratives. Color grading, motion graphics, and seamless transitions.',
    features: ['Color Grading', 'Motion Graphics', 'Sound Design', 'Fast Turnaround']
  },
  {
    id: 2,
    icon: Image,
    title: 'Image Editing',
    description: 'Professional retouching and enhancement. From product photography to travel content, pixel-perfect results.',
    features: ['Retouching', 'Color Correction', 'Compositing', 'Before/After']
  },
  {
    id: 3,
    icon: Video,
    title: 'Full Video Production',
    description: 'End-to-end production services. Concept development, shooting, and post-production all handled.',
    features: ['Pre-Production', 'Professional Shooting', 'Post-Production', 'Delivery']
  },
  {
    id: 4,
    icon: Briefcase,
    title: 'Retainer Work',
    description: 'Ongoing creative partnership. Consistent content creation for brands and agencies on a monthly basis.',
    features: ['Monthly Packages', 'Priority Support', 'Content Strategy', 'Flexible Terms']
  }
];

export function CoreServices() {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4" style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 700,
            color: '#FAFAFA',
            letterSpacing: '-0.02em'
          }}>
            Core Services
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#A1A1AA' }}>
            Comprehensive solutions for every creative need
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative p-8 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #18181B 0%, #27272A 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              >
                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.1) 0%, transparent 70%)'
                  }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(124, 58, 237, 0.2) 100%)',
                      border: '1px solid rgba(168, 85, 247, 0.3)'
                    }}
                  >
                    <Icon className="w-8 h-8" style={{ color: '#C084FC' }} />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3" style={{
                    fontSize: '1.75rem',
                    fontWeight: 600,
                    color: '#FAFAFA'
                  }}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-6" style={{
                    fontSize: '1rem',
                    color: '#A1A1AA',
                    lineHeight: 1.6
                  }}>
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-full"
                        style={{
                          background: 'rgba(34, 197, 94, 0.1)',
                          border: '1px solid rgba(34, 197, 94, 0.2)',
                          fontSize: '0.875rem',
                          color: '#86EFAC',
                          fontWeight: 500
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(circle at top right, #A855F7 0%, transparent 70%)'
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
