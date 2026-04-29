import React from 'react';
import { motion } from 'framer-motion';
import './GlobalPresence.css';

const GlobalPresence = () => {
  return (
    <section className="global-presence section-padding">
      <div className="container">
        <motion.div 
          className="section-header dark"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2>Explore Presence</h2>
        </motion.div>

        <div className="map-container">
          {/* Abstract representation of a map using CSS/HTML for simplicity without external SVG assets */}
          <div className="map-background"></div>
          
          <motion.div 
            className="map-dot dot-1"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="dot-pulse"></div>
          </motion.div>
          <motion.div 
            className="map-dot dot-2"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="dot-pulse"></div>
          </motion.div>
          <motion.div 
            className="map-dot dot-3"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div className="dot-pulse"></div>
          </motion.div>

          <div className="presence-info">
            <motion.div 
              className="presence-card glass"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3>International Offices</h3>
              <p>Strategic locations across the globe.</p>
            </motion.div>
            <motion.div 
              className="presence-card glass"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3>Export Countries</h3>
              <p>Network spanning more than 30 countries.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
