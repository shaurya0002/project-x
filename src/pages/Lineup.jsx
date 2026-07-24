import { motion } from 'framer-motion';
import { Mic, Music, Disc, Cpu, Volume2, Flame } from 'lucide-react';
import './Lineup.css';

export default function Lineup() {
  // Array of band members with corresponding icons and text
  const members = [
    { name: 'Apoorva Srivastava', role: 'Drums', icon: <Disc size={32} />, quote: 'The heartbeat of chaos.' },
    { name: 'Sanskar Kumar', role: 'Lead Guitar', icon: <Music size={32} />, quote: 'Heavy riffs that command.' },
    { name: 'Shaurya Pandey', role: 'Bass Guitar', icon: <Volume2 size={32} />, quote: 'Driving the low end.' },
    { name: 'Pranjal Agrawal', role: 'Keyboards', icon: <Cpu size={32} />, quote: 'Adding melodic depth.' },
    { name: 'Sathakshi and Shivashish', role: 'Lead Vocals', icon: <Mic size={32} />, quote: 'Screaming the truth.' },
    { name: 'Tulsi Nandan Pandey', role: 'Producer', icon: <Music size={32} />, quote: 'Adding the tracks.'},
    { name: "Anupam Mishra", role: 'On the Tabla', icon: <Music size={32}/>, quote: 'Matching the Taal.'}
  ];

  // Framer Motion: container triggers staggered entries for all children cards
  const containerVariants = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.15 // Delays each card by 0.15 seconds for a wave effect
      }
    }
  };

  // Card slide-up presets
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    whileInView: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="lineup" className="lineup-section">
      <div className="lineup-header">
        <span className="section-subtitle">THE TEAM</span>
        <h2 className="section-title">THE LINEUP</h2>
        <div className="title-underline"></div>
      </div>

      {/* Grid wrapper */}
      <motion.div 
        className="lineup-grid"
        variants={containerVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}
      >
        {members.map((member, index) => (
          <motion.div 
            key={index}
            className="member-card"
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }} // Interactive lift on mouse hover
          >
            {/* The orange bottom volcanic glow visible on hover */}
            <div className="member-glow-effect"></div>
            
            {/* Large watermarked icon rotated in the background */}
            <div className="watermark-icon">
              {member.icon}
            </div>

            <div className="member-info">
              {/* Rounded small icon circle */}
              <div className="member-icon-circle">
                {member.icon}
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-quote">"{member.quote}"</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}