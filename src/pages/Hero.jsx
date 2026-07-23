import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      
      {/* 1. VOLCANIC BACKDROP: Dynamic glowing orbs */}
      <div className="fire-backdrop">
        <div className="glow-orb gold-orb"></div>
        <div className="glow-orb orange-orb"></div>
        <div className="glow-orb red-orb"></div>
      </div>
      
      {/* 2. FLOATING EMBERS: Sparks rising from the bottom */}
      <div className="embers-container">
        <span className="ember"></span>
        <span className="ember"></span>
        <span className="ember"></span>
        <span className="ember"></span>
        <span className="ember"></span>
      </div>

      {/* 3. HERO CONTENT */}
      <div className="hero-content">
        
        {/* Logo container with explosion/growth animation */}
        <motion.div 
          className="logo-container"
          initial={{ scale: 0.7, opacity: 0, filter: 'blur(12px)' }}
          animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          {/* Note: When you crop your logo from the poster, save it in src/assets/pravah-logo.png
              and you can swap this text with the <img> tag below! */}
          <h1 className="hero-logo-text fire-glow">PRAVAH</h1>
          
          {/* <img src="/src/assets/pravah-logo.png" alt="Pravah Logo" className="hero-logo-img" /> */}
        </motion.div>

        {/* Subtitle animation (fades in and rises slightly) */}
        <motion.p 
          className="hero-subtitle"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          THE FIRST OFFICIAL ROCK BAND OF UCER
        </motion.p>

        {/* Action buttons animation */}
        <motion.div 
          className="hero-buttons"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <a href="#about" className="hero-btn primary-btn">
            Enter The Chaos
          </a>
          <a href="#lineup" className="hero-btn secondary-btn">
            Meet the Band
          </a>
        </motion.div>
      </div>

      
      
    </section>
  );
}