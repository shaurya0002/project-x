import { motion } from 'framer-motion';
import './Gallery.css';

export default function Gallery() {
  // Mock data representing shows. When you get photos, swap out the bgStyle gradients for actual image paths!
  const galleryItems = [
    {
      title: 'Explosive Launch',
      event: 'Live at UCER Auditorium',
      date: 'Feb 14, 2026',
      sizeClass: 'grid-wide', // Wide block
      bgStyle: { background: 'linear-gradient(135deg, rgba(255, 85, 0, 0.45), rgba(179, 0, 0, 0.75))' }
    },
    {
      title: 'Jam Room Sessions',
      event: 'Late Night Practices',
      date: 'Jan 2026',
      sizeClass: 'grid-tall', // Tall block
      bgStyle: { background: 'linear-gradient(135deg, rgba(255, 179, 0, 0.45), rgba(255, 85, 0, 0.75))' }
    },
    {
      title: 'Backstage Chaos',
      event: 'Behind the Scenes',
      date: 'May 04, 2026',
      sizeClass: 'grid-standard', // Square block
      bgStyle: { background: 'linear-gradient(135deg, rgba(179, 0, 0, 0.5), rgba(5, 5, 5, 0.95))' }
    },
    {
      title: 'Adios Amigos Show',
      event: 'Farewell Concert',
      date: 'May 04, 2026',
      sizeClass: 'grid-standard', // Square block
      bgStyle: { background: 'linear-gradient(135deg, rgba(255, 85, 0, 0.5), rgba(255, 179, 0, 0.65))' }
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