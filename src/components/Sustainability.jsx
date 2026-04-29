import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Recycle, Users, Shield } from 'lucide-react';
import './Sustainability.css';

const Sustainability = () => {
  const cards = [
    {
      icon: <Leaf size={32} />,
      title: 'Energy Efficiency & Resource Management',
      description: 'Implementation of technologies that reduce energy consumption and emissions, alongside the optimization of resource use.'
    },
    {
      icon: <Recycle size={32} />,
      title: 'Recycling & Circular Processes',
      description: 'Systematic development of recycling, material reuse, and waste-reduction practices across integrated production cycles.'
    },
    {
      icon: <Users size={32} />,
      title: 'Social Development',
      description: 'Strengthening human capital through improved access to education and healthcare, as well as supporting local community initiatives.'
    },
    {
      icon: <Shield size={32} />,
      title: 'Corporate Governance',
      description: 'Ensuring transparency in management processes, robust risk control, and alignment with international ESG standards across the entire corporate structure.'
    }
  ];

  return (
    <section className="sustainability section-padding">
      <div className="container">
        <div className="sustainability-header">
          <motion.div 
            className="sustainability-title-area"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2>Sustainability</h2>
            <p>
              Sustainability is a fundamental principle of AKFA Holding's corporate model.
              We integrate environmental, social, and governance standards into our work, 
              creating long-term value for the region's industry and its communities.
            </p>
            <a href="#" className="sustainability-link">
              Explore sustainability <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>

        <div className="sustainability-grid">
          {cards.map((card, index) => (
            <motion.div 
              key={index} 
              className="sustainability-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
