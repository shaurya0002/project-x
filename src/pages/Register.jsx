import { motion } from 'framer-motion';
import { Music, ShieldAlert, Award, FileVideo } from 'lucide-react';
import './Register.css';

export default function Register() {
  return (
    <section className="register-page">
      <div className="register-container">
        
        {/* LEFT COLUMN: Why Join & Process */}
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
            We are looking for musicians, vocalists, songwriters, and managers who don't just want to play music—but want to build a legacy. Here is why you belong in Pravah:
          </p>

          <div className="perks-list">
            <div className="perk-item">
              <Award className="perk-icon" size={24} />
              <div>
                <h4>Live Stage Experience</h4>
                <p>Perform at major state-level college fests and concert venues.</p>
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

          <div className="process-box">
            <h3>The Audition Process:</h3>
            <ol>
              <li>Fill out the form on the right.</li>
              <li>Provide a link to a raw performance clip (Drive/YouTube).</li>
              <li>Get shortlisted for a live jam callback.</li>
            </ol>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: The Audition Form */}
        <motion.div 
          className="register-form-container"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form className="audition-form" onSubmit={(e) => e.preventDefault()}>
            <div className="card-glow-border"></div>
            <h3>REGISTER FOR AUDITIONS</h3>
            
            <div className="input-group">
              <label>FULL NAME</label>
              <input type="text" placeholder="" required />
            </div>

           
              <div className="input-group">
                <label>ROLL NUMBER</label>
                <input type="text" placeholder="XXXXXXXX" required />
              </div>
              <div className="input-group">
                <label>YEAR / BRANCH</label>
                <input type="text" placeholder="CSE-YR1" required />
              </div>
            

            <div className="input-group">
              <label>INSTRUMENT / ROLE</label>
              <select required>
                <option value="">Select your role</option>
                <option value="vocals">Lead/Backing Vocals</option>
                <option value="guitar">Lead/Rhythm Guitar</option>
                <option value="bass">Bass Guitar</option>
                <option value="drums">Drums & Percussion</option>
                <option value="keys">Keyboards / Synthesizer</option>
                <option value="other">Violin / Fusion Instruments</option>
                <option value="management">Band Manager / Sound Engineer</option>
              </select>
            </div>

            <div className="input-group">
              <label>PERFORMANCE CLIP LINK (Drive/YouTube)</label>
              <input type="url" placeholder="https://drive.google.com/..." required />
              <span className="input-hint">Make sure sharing permissions are public!</span>
            </div>

            <button type="submit" className="form-submit-btn">Submit Application</button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}