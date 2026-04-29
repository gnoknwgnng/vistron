import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, PenTool, Globe2 } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <DollarSign size={32} />,
      title: 'Cost-Effective Solutions',
      description: 'Our development process is designed to maximize ROI through efficient execution, maintainable code, and future-ready architecture.'
    },
    {
      icon: <PenTool size={32} />,
      title: 'Unmatched Creativity',
      description: 'We do not just build screens; we craft meaningful digital experiences with thoughtful UX and design consistency.'
    },
    {
      icon: <Globe2 size={32} />,
      title: 'Targeted Local Reach',
      description: 'Our solutions are tailored to your audience and business needs, ensuring your product delivers value to the right users.'
    }
  ];

  return (
    <section className="why-choose-us section-padding">
      <div className="container">
        <div className="why-header">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Why Choose Us?
          </motion.h2>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index} 
              className="reason-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="reason-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
