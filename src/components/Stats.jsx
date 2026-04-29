import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Stats.css';

const Stats = () => {
  const statsData = [
    { value: '$2bn+', label: 'Consolidated assets' },
    { value: '40+', label: 'Manufacturing facilities' },
    { value: '38,000+', label: 'Employees' },
    { value: '$100m+', label: 'Annual investments in R&D and automation' },
    { value: '30+', label: 'Export markets' }
  ];

  return (
    <section className="stats-section section-padding">
      <div className="container">
        <div className="stats-header">
          <div className="stats-header-content">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              AKFA Holding is one of the largest diversified industrial groups in Central Asia.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The Group integrates its core industries into a unified and sustainable business model that connects all key sectors.
            </motion.p>
          </div>
        </div>

        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <motion.div 
              key={index} 
              className="stat-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
          <motion.div 
            className="stat-card stat-link-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: statsData.length * 0.1 }}
          >
            <div className="stat-link-content">
              <h3>Inside AKFA</h3>
              <a href="#" className="stat-link">
                Learn more <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
