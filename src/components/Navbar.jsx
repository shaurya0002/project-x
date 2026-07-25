import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // Import Hamburger and Close icons
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State to open/close mobile drawer

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
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isOpen ? 'open' : ''}`}>
      <div className="nav-container">
        {/* Logo (closes mobile menu when clicked) */}
        <a href="#hero" className="nav-logo glow-text" onClick={() => setIsOpen(false)}>PRAVAH</a>
        
        {/* Mobile Hamburger toggle button */}
        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Links list (shows/hides based on isOpen state) */}
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>About</a>
          <a href="#lineup" className="nav-link" onClick={() => setIsOpen(false)}>Lineup</a>
          <a href="#gallery" className="nav-link" onClick={() => setIsOpen(false)}>Gallery</a>
          
          {/* Mobile CTA (only shown inside drawer) */}
          <a href="#contact" className="nav-cta mobile-cta" onClick={() => setIsOpen(false)}>Book Show</a>
        </div>
        
        {/* Desktop CTA (hidden on mobile) */}
        <a href="#contact" className="nav-cta desktop-cta">Book Show</a>
      </div>
    </nav>
  );
}