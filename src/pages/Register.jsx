import { useState } from 'react';
import { motion } from 'framer-motion';
import { Music, Award, Loader2, CheckCircle2 } from 'lucide-react';
import './Register.css';

export default function Register() {
  // 1. FORM STATES
  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    yearBranch: '',
    instrument: '',
    email: '',
    performanceLink: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  // Paste your Google Web App URL here:
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzgvPtB22JHIYrghruNm4EtS7wlZFyL8to3EIN4GLydQANcwHHu4eEmogvvrjb-Fv9W/exec";

  // Update form inputs locally
  const handleChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value
    });
  };

  // 2. SUBMIT HANDLER
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Send data to your Google Apps Script
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Prevents CORS blocks on client redirect responses
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify(formData)
      });
      
      // Since mode is no-cors, we assume success if no error is caught
      setStatus('success');
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
    }
  };

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
            We are looking for musicians, vocalists, songwriters, and managers who don't just want to play music—but want to build a legacy. Here is why you belong in Pravah:
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

          <div className="process-box">
            <h3>Registration Flow:</h3>
            <ol>
              <li>Fill out and submit the audition form.</li>
              <li>Instantly receive the WhatsApp community link in your email.</li>
              <li>Wait for your scheduled slot timing announcement on the group.</li>
            </ol>
          </div>
        </motion.div>

        {/* Right Column: Form States */}
        <motion.div 
          className="register-form-container"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {status === 'success' ? (
            /* SUCCESS SCREEN */
            <motion.div 
              className="audition-form success-card"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <CheckCircle2 size={64} className="success-icon" />
              <h3>REGISTRATION COMPLETE!</h3>
              <p>Riffs registered. We've sent a <strong>WhatsApp Community link</strong> to your email address (check your spam folder if you don't see it in 2 minutes).</p>
              <button onClick={() => setStatus('idle')} className="form-submit-btn">Register Another Student</button>
            </motion.div>
          ) : (
            /* FORM DISPLAY */
            <form className="audition-form" onSubmit={handleSubmit}>
              <div className="card-glow-border"></div>
              <h3>REGISTER FOR AUDITIONS</h3>
              
              <div className="input-group">
                <label>FULL NAME</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  required 
                  value={formData.name}
                  onChange={(e) => handleChange(e, 'name')}
                  disabled={status === 'loading'}
                />
              </div>

                <div className="input-group">
                  <label>ROLL NUMBER</label>
                  <input 
                    type="text" 
                    placeholder="26xxxxx" 
                    required 
                    value={formData.rollNumber}
                    onChange={(e) => handleChange(e, 'rollNumber')}
                    disabled={status === 'loading'}
                  />
                </div>
                <div className="input-group">
                  <label>YEAR / BRANCH</label>
                  <input 
                    type="text" 
                    placeholder="1st Yr CSE" 
                    required 
                    value={formData.yearBranch}
                    onChange={(e) => handleChange(e, 'yearBranch')}
                    disabled={status === 'loading'}
                  />
                </div>

              <div className="input-group">
                <label>INSTRUMENT / ROLE</label>
                <select 
                  required 
                  value={formData.instrument}
                  onChange={(e) => handleChange(e, 'instrument')}
                  disabled={status === 'loading'}
                >
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
                <label>EMAIL ADDRESS</label>
                <input 
                  type="email" 
                  placeholder="yourname@gmail.com" 
                  required 
                  value={formData.email}
                  onChange={(e) => handleChange(e, 'email')}
                  disabled={status === 'loading'}
                />
              </div>

              <button 
                type="submit" 
                className="form-submit-btn"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <span className="loading-content">
                    <Loader2 className="spinner" size={16} /> Saving Details...
                  </span>
                ) : (
                  "Submit Application"
                )}
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}