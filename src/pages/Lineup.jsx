import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mic, Music, Sliders, ArrowRight } from 'lucide-react';
import './Lineup.css';

export default function Lineup() {
  // Team categories for the lineup section
  const teams = [
    {
      id: 'vocalists',
      title: 'Our Vocalists',
      category: 'VOCAL TEAM',
      icon: <Mic size={32} />,
      quote: 'Screaming the truth and commanding the stage with power, energy, and raw emotion.'
    },
    {
      id: 'instrumental',
      title: 'The Instrumental Team',
      category: 'MUSIC & RHYTHM',
      icon: <Music size={32} />,
      quote: 'Heavy riffs, thundering beats, and intricate melodies driving the sonic pulse.'
    },
    {
      id: 'working-members',
      title: 'The Working Members',
      category: 'CREW & PRODUCTION',
      icon: <Sliders size={32} />,
      quote: 'The creative backbone powering sound engineering, production, and execution.'
    }
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
        <span className="section-subtitle">THE TEAMS</span>
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
        {teams.map((team) => (
          <motion.div 
            key={team.id}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }} // Interactive lift on mouse hover
          >
            <Link to={`/lineup/${team.id}`} className="member-card team-card-link">
              {/* The orange bottom volcanic glow visible on hover */}
              <div className="member-glow-effect"></div>
              
              {/* Large watermarked icon rotated in the background */}
              <div className="watermark-icon">
                {team.icon}
              </div>

              <div className="member-info">
                {/* Rounded small icon circle */}
                <div className="member-icon-circle">
                  {team.icon}
                </div>
                <span className="member-role">{team.category}</span>
                <h3 className="member-name">{team.title}</h3>
                <p className="member-quote">"{team.quote}"</p>
                <div className="card-action-hint">
                  <span>View Members</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
