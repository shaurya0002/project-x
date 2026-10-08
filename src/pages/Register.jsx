import { motion } from 'framer-motion';
import { Music, Award, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Register.css';

export default function Register() {
  return (
    <section className="register-page">
      <div className="register-container">
        
        {/* Left Column Info */}
        <motion.div 
          className="register-info"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-subtitle">JOIN THE CHAOS</span>
          <h1 className="register-title">PRAVAH AUDITIONS</h1>
          <div className="title-underline"></div>
          
          <p className="register-description">
            We are looking for musicians, vocalists, songwriters, and managers who don't just want to play music—but want to build a legacy. Thank you for the overwhelming interest!
          </p>

          <div className="perks-list">
            <div className="perk-item">
              <Award className="perk-icon" size={24} />
              <div>
                <h4>Live Stage Experience</h4>
                <p>Perform at major fests and lock down massive college events.</p>
              </div>
            </div>
            <div className="perk-item">
              <Music className="perk-icon" size={24} />
              <div>
                <h4>Creative Freedom</h4>
                <p>Compose original tracks, jam in our dedicated room, and experiment with fusion.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Closed Notice Card */}
        <motion.div 
          className="register-form-container"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="audition-form closed-card">
            <div className="closed-icon-wrapper">
              <Lock size={56} className="closed-icon" />
            </div>
            <h3 className="closed-title">REGISTRATION CLOSED</h3>
            <p className="closed-message">Auditions for Pravah is closed</p>
            <p className="closed-subtext">
              We have received an incredible response! Thank you to everyone who applied. Follow us on social media for upcoming slot announcements and performance updates.
            </p>
            <Link to="/" className="form-submit-btn link-btn">
              Return to Home
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}