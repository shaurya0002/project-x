import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        {/* LEFT COLUMN: Slides UP vertically (y: 50 to 0) instead of horizontally */}
        <motion.div 
          className="about-left"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            initial: { y: 50, opacity: 0 }, // 👈 Changed from x: -60 to y: 50
            whileInView: { y: 0, opacity: 1 }  // 👈 Changed from x: 0 to y: 0
          }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="section-subtitle">OUR STORY</span>
          <h2 className="section-title">THE SONIC CURRENT</h2>
          <div className="title-underline"></div>
          
          <p className="about-text">
            Born from the heartbeat and raw energy of UCER, <strong className="highlight-text">PRAVAH</strong> is more than just a college rock band—it is an explosive sonic current. Pravah (meaning "Flow") combines heavy progressive riffs, soaring vocals, and raw rhythmic beats to form a sound that commands the stage.
          </p>
          <p className="about-text">
            Our mission is simple: to challenge the boundaries of college fusion music, disrupt the silence, and create live show experiences that linger long after the amps are turned off. Join us on our journey of sonic exploration.
          </p>

          <div className="about-traits">
            <div className="trait-badge">High Voltage</div>
            <div className="trait-badge">Raw Distortion</div>
            <div className="trait-badge">Progressive Fusion</div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Slides UP vertically (y: 50 to 0) with a slight delay */}
        <motion.div 
          className="about-right"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            initial: { y: 50, opacity: 0 }, // 👈 Changed from x: 60 to y: 50
            whileInView: { y: 0, opacity: 1 }  // 👈 Changed from x: 0 to y: 0
          }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="stats-card">
            <div className="card-glow-border"></div>
            
            <div className="stats-header">
              <span className="card-brand">PRAVAH</span>
              <span className="pulse-dot"></span>
            </div>

            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-label">GENRE</span>
                <span className="stat-value">Hard Fusion / Alt Rock</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">ESTD</span>
                <span className="stat-value">2026</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">BASE</span>
                <span className="stat-value">UCER, Allahabad</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">LINEUP SIZE</span>
                <span className="stat-value">8 Members</span>
              </div>
            </div>

            <div className="card-quote">
              "We don't play music. We channel the current."
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}