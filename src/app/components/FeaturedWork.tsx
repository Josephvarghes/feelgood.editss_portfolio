import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import id1Image from '../../imports/id_1.jpeg';
import id3Image from '../../imports/id_3.jpeg';
import id5Image from '../../imports/id_5.jpeg';
import id6Image from '../../imports/id_6.jpeg';

const workItems = [
  {
    id: 1,
    type: 'vertical',
    image: id1Image,
    title: 'Munnar',
    category: 'Instagram Reel',
    link: 'https://www.instagram.com/reel/DXMVCDeBt9W/?igsh=ZTBmOGJheDhpZGg1'
  },
  {
    id: 2,
    type: 'horizontal',
    image: 'https://images.unsplash.com/photo-1621701816825-b5abfadae6c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Brand Production',
    category: 'Client Work',
    link: 'https://instagram.com'
  },
  {
    id: 3,
    type: 'vertical',
    image: id3Image,
    title: 'Vagamon',
    category: 'Travel Content',
    link: 'https://www.instagram.com/reel/DV3XfcAk2iU/?igsh=MXRpcm9ibmxrMWJ2cg=='
  },
  {
    id: 4,
    type: 'horizontal',
    image: 'https://images.unsplash.com/photo-1523251239923-9969d2b4f95f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    title: 'Commercial Shoot',
    category: 'Client Work',
    link: 'https://instagram.com'
  },
  {
    id: 5,
    type: 'vertical',
    image: id5Image,
    title: 'Nature Loop',
    category: 'Instagram Reel',
    link: 'https://www.instagram.com/reel/DRW9pRyE0zp/?igsh=OXFnbzAwODhjZjc5'
  },
  {
    id: 6,
    type: 'horizontal',
    image: id6Image,
    title: 'Leave the noise behind',
    category: 'Travel Content',
    link: 'https://www.instagram.com/reel/DM5c0w8T8WI/?igsh=a2RlbDB0ZGt0NQ=='
  }
];

export function FeaturedWork() {
  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="mb-4" style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 700,
            color: '#FAFAFA',
            letterSpacing: '-0.02em'
          }}>
            Featured Work
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#A1A1AA' }}>
            Cinematic stories that captivate and convert
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[300px]">
          {workItems.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer block ${
                item.type === 'vertical'
                  ? 'md:col-span-2 md:row-span-2'
                  : 'md:col-span-4 md:row-span-1'
              }`}
              style={{
                background: '#18181B',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}
            >
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="mb-2 px-3 py-1 rounded-full inline-block self-start" style={{
                  background: 'rgba(168, 85, 247, 0.2)',
                  border: '1px solid rgba(168, 85, 247, 0.4)'
                }}>
                  <span style={{ fontSize: '0.75rem', color: '#E9D5FF', fontWeight: 500 }}>
                    {item.category}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#FAFAFA' }}>
                  {item.title}
                </h3>
              </div>

              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
