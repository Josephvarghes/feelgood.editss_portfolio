import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import mainVideo from '../../imports/main.mp4';

export function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 pt-32">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="mb-12 tracking-tight" style={{
            fontSize: 'clamp(3rem, 10vw, 8rem)',
            fontWeight: 700,
            lineHeight: 0.95,
            color: '#FAFAFA',
            letterSpacing: '-0.02em'
          }}>
            WE CAPTURE.<br />
            WE CUT.<br />
            YOU GROW.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full max-w-5xl mx-auto mb-12 rounded-3xl overflow-hidden"
          style={{ aspectRatio: '16/9' }}
        >
          {/* Background Video */}
          <div className="absolute inset-0 bg-zinc-900">
            <video
              ref={videoRef}
              src={mainVideo}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover"
            />
            {/* Optional subtle overlay */}
            <div className="absolute inset-0 bg-black/20" />
            
            {/* Unmute Button */}
            <button
              onClick={toggleMute}
              className="absolute bottom-4 right-4 p-3 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md text-white transition-all z-20 flex items-center justify-center"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
              )}
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            className="group relative px-12 py-5 rounded-full overflow-hidden transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #A855F7 0%, #7C3AED 100%)',
              boxShadow: '0 0 40px rgba(168, 85, 247, 0.4)'
            }}
          >
            <span className="relative z-10" style={{
              fontSize: '1.125rem',
              fontWeight: 600,
              color: '#FAFAFA',
              letterSpacing: '0.02em'
            }}>
              Book a Project
            </span>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)'
              }}
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
