import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-video-wrapper">
        <div className="hero-abstract-bg"></div>
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content container">
        <motion.div 
          className="hero-text-box"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
        >
          <h1 className="hero-title">
            Vistron
          </h1>
          <p className="hero-subtitle">
            Crafting unforgettable digital experiences.
          </p>
          
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Book a Consultation
            </a>
            <a href="#about" className="btn btn-secondary">
              Learn More <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
