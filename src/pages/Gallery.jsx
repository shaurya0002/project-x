import { motion } from 'framer-motion';
import './Gallery.css';
import adiosImage from '../assets/images/pravah photo.jpeg'
import launchImage from '../assets/images/pravah launch.jpeg'
import backstageImage from '../assets/images/backstage img.jpeg'
import jamImage from '../assets/images/jam img.jpeg'

export default function Gallery() {
  // Mock data representing shows. When you get photos, swap out the bgStyle gradients for actual image paths!
  const galleryItems = [
    {
      title: 'Explosive Launch',
      event: 'Live at UCER Auditorium',
      date: 'Feb 15, 2026',
      sizeClass: 'grid-wide', // Wide block
      bgStyle: { backgroundImage: `url(${launchImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    },
    {
      title: 'Jam Room Sessions',
      event: 'Practice before the chaos',
      date: 'Jan 2026',
      sizeClass: 'grid-tall', // Tall block
      bgStyle: { background: `url(${jamImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    },
    {
      title: 'Magazine Photoshoot',
      event: 'Official photoshoot for Pravah',
      date: 'March 19, 2026',
      sizeClass: 'grid-standard', // Square block
      bgStyle: { backgroundImage: `url(${backstageImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}
    },
    {
      title: 'Adios Amigos Show',
      event: 'Farewell Concert',
      date: 'May 04, 2026',
      sizeClass: 'grid-standard', // Square block
       bgStyle: { backgroundImage: `url(${adiosImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    }
  ];

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-header">
        <span className="section-subtitle">MEMORIES</span>
        <h2 className="section-title">THE SHOWS</h2>
        <div className="title-underline"></div>
      </div>

      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <motion.div 
            key={index} 
            className={`gallery-item ${item.sizeClass}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.015 }}
          >
            {/* Background simulated card. 
                When you have real images, replace this div with:
                <img src={item.imagePath} alt={item.title} className="gallery-img" /> */}
            <div className="gallery-placeholder" style={item.bgStyle}>
              <div className="gallery-vignette"></div>
            </div>

            {/* Hover details overlay */}
            <div className="gallery-overlay">
              <div className="gallery-info">
                <span className="gallery-date">{item.date}</span>
                <h3 className="gallery-item-title">{item.title}</h3>
                <p className="gallery-event">{item.event}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}