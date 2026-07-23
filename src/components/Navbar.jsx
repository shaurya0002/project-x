import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scrolling to turn navbar background solid/translucent when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo link back to Hero top */}
        <a href="#hero" className="nav-logo glow-text">PRAVAH</a>
        
        {/* Navigation links targeting the IDs of each section */}
        <div className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#lineup" className="nav-link">Lineup</a>
          <a href="#gallery" className="nav-link">Gallery</a>
          <a href="/events" className="nav-link hightlight-link">Upcoming Events</a>
        </div>
        
        {/* Call to action button */}
        <a href="#contact" className="nav-cta">Book Us</a>
      </div>
    </nav>
  );
}