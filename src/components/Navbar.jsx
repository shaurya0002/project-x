import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Added router utilities
import { Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const location = useLocation(); // Gets current page path (e.g. '/' or '/register')
  const navigate = useNavigate(); // Lets us programmatically change pages

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

  // Smart scrolling function
  const handleNavClick = (e, path, selector) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile drawer

    if (location.pathname === '/') {
      // If we're already on the home page, just scroll smoothly
      const element = document.querySelector(selector);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we are on /register, navigate to home first, then scroll
      navigate(path);
      setTimeout(() => {
        const element = document.querySelector(selector);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150); // Delay slightly to allow the home page to mount
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isOpen ? 'open' : ''}`}>
      <div className="nav-container">
        
        {/* Logo redirecting to top of Home page */}
        <Link to="/" className="nav-logo glow-text" onClick={(e) => handleNavClick(e, '/', '#hero')}>
          PRAVAH
        </Link>
        
        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          {/* Main sections redirecting using our smart scrolling helper */}
          <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, '/', '#about')}>About</a>
          <a href="#lineup" className="nav-link" onClick={(e) => handleNavClick(e, '/', '#lineup')}>Lineup</a>
          <a href="#gallery" className="nav-link" onClick={(e) => handleNavClick(e, '/', '#gallery')}>Gallery</a>
          
          {/* Dedicated Audition link using Router Link */}
          <Link to="/register" className="nav-link highlight-nav-link" onClick={() => setIsOpen(false)}>
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}