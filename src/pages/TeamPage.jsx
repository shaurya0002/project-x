import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, User } from 'lucide-react';
import { teamData } from '../data/teamData';
import './TeamPage.css';

// Custom SVG component for Instagram icon
const InstagramIcon = ({ size = 18 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);


export default function TeamPage() {
  const { teamId } = useParams();
  const team = teamData[teamId];

  // Scroll to top when page opens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [teamId]);

  if (!team) {
    return (
      <div className="team-not-found">
        <h2>Team Not Found</h2>
        <p>The lineup team you are looking for does not exist.</p>
        <Link to="/" className="back-btn">
          <ArrowLeft size={20} />
          Back to Home
        </Link>
      </div>
    );
  }

  // Animation variants
  const containerVariants = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const cardVariants = {
    initial: { y: 40, opacity: 0 },
    whileInView: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section className="team-page-section">
      {/* Background ambient glow */}
      <div className="team-page-backdrop">
        <div className="team-glow-orb"></div>
      </div>

      <div className="team-page-container">
        {/* Back Button */}
        <Link to="/" className="back-btn">
          <ArrowLeft size={18} />
          <span>Back to Home</span>
        </Link>

        {/* Page Header */}
        <div className="team-page-header">
          <span className="team-category-badge">{team.category}</span>
          <h1 className="team-page-title">{team.title}</h1>
          <p className="team-page-description">{team.description}</p>
          <div className="title-underline"></div>
        </div>

        {/* Member Grid */}
        <motion.div 
          className="team-members-grid"
          variants={containerVariants}
          initial="initial"
          animate="whileInView"
        >
          {team.members.map((member) => (
            <motion.div 
              key={member.id} 
              className="member-profile-card"
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.01 }}
            >
              <div className="card-glow"></div>
              
              <div className="member-avatar-circle">
                <User size={32} />
              </div>

              <div className="member-details">
                {/* Clicking on the name opens their Instagram link */}
                <a 
                  href={member.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="member-name-link"
                  title={`Visit ${member.name}'s Instagram`}
                >
                  <h3 className="member-profile-name">{member.name}</h3>
                </a>

                <span className="member-profile-role">{member.role}</span>
                
                {member.quote && (
                  <p className="member-profile-quote">"{member.quote}"</p>
                )}

                {/* Direct Instagram Action Button */}
                <a 
                  href={member.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="instagram-btn"
                >
                  <InstagramIcon size={18} />
                  <span>Instagram</span>
                  <ExternalLink size={14} className="external-icon" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
