import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Box } from 'lucide-react';
import './Services.css';

const Services = () => {
  const servicesData = [
    {
      icon: <Monitor size={40} />,
      title: 'Website Development',
      description: 'We design and develop fast, modern, and responsive websites that elevate your brand and convert visitors into customers. From landing pages to full business websites, we build solutions optimized for performance, SEO, and long-term scalability.'
    },
    {
      icon: <Smartphone size={40} />,
      title: 'App Development',
      description: 'We build high-quality mobile and web applications with smooth UX, robust architecture, and clean code. Whether you need an MVP or a production-ready product, we create apps that are reliable, scalable, and built around your business goals.'
    },
    {
      icon: <Box size={40} />,
      title: '3D Menu Development',
      description: 'We develop interactive 3D menu experiences that make product exploration engaging and intuitive. Ideal for restaurants, product catalogs, and immersive interfaces, our 3D menus are designed for usability, visual impact, and modern customer interaction.'
    }
  ];

  return (
    <section id="services" className="services-section section-padding">
      <div className="container">
        <div className="services-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We specialize in building premium digital products with strong design, clean architecture, and performance-first development. Our solutions are crafted to help businesses launch faster, scale confidently, and deliver excellent user experiences.
          </motion.p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <motion.div 
              key={index} 
              className="service-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
