import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './BusinessAreas.css';

const BusinessAreas = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const areas = [
    {
      title: 'Building Products Industry',
      description: 'The largest producer of aluminum profile systems and PVC profiles in Central Asia. Advanced extrusion technologies and architectural glazing systems.',
      image: 'https://images.unsplash.com/photo-1541888086225-ee59ccbe41ea?q=80&w=2000&auto=format&fit=crop'
    },
    {
      title: 'Electronics & Infrastructure',
      description: 'Modern infrastructure solutions, focusing on electronics manufacturing and systematic development of high-tech production lines.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop'
    },
    {
      title: 'Construction & Development',
      description: 'Large-scale construction projects and real estate development. Building the future of urban infrastructure.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop'
    },
    {
      title: 'Education & Healthcare',
      description: 'Strengthening human capital through improved access to education and cutting-edge healthcare facilities.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop'
    },
    {
      title: 'Tourism & Hospitality',
      description: 'Developing world-class tourism infrastructure and premium hospitality services in the region.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop'
    }
  ];

  return (
    <section className="business-areas section-padding">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2>Business Areas</h2>
          <a href="#" className="view-all-link">
            LEARN MORE <ArrowRight size={16} />
          </a>
        </motion.div>

        <div className="carousel-container">
          <div className="carousel-nav">
            {areas.map((area, index) => (
              <button 
                key={index} 
                className={`carousel-tab ${activeIndex === index ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                {area.title}
              </button>
            ))}
          </div>

          <div className="carousel-content">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeIndex}
                className="carousel-slide"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="slide-image-wrapper">
                  <img src={areas[activeIndex].image} alt={areas[activeIndex].title} className="slide-image" />
                  <div className="slide-overlay">
                    <h3>{areas[activeIndex].title}</h3>
                    <p>{areas[activeIndex].description}</p>
                    <a href="#" className="slide-link">EXPLORE</a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessAreas;
