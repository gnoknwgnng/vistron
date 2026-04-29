import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, Zap, CheckCircle2 } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <div className="about-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Our Story
          </motion.h2>
        </div>

        <div className="about-content">
          <div className="story-grid">
            <motion.div 
              className="story-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="icon-wrapper"><Target size={32} /></div>
              <h3>The Vision</h3>
              <p>Vistron was born from a simple idea: every business deserves a high-quality digital presence that truly reflects its value. Founders Akash and Raghu envisioned a more impactful way to help businesses scale through technology.</p>
            </motion.div>

            <motion.div 
              className="story-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="icon-wrapper"><Rocket size={32} /></div>
              <h3>The Mission</h3>
              <p>Our mission is to help businesses create lasting impact through modern websites, powerful applications, and interactive 3D experiences. We believe in clarity, performance, and solutions built for real business outcomes.</p>
            </motion.div>
          </div>

          <motion.div 
            className="innovation-banner"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h2>🚀 Innovation First</h2>
            <p>Transforming business ideas into modern digital products</p>
          </motion.div>

          <div className="team-grid">
            <motion.div 
              className="team-member"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="member-header">
                <CheckCircle2 size={24} className="member-icon" />
                <div>
                  <h4>Akash</h4>
                  <span>Founder & Visionary</span>
                </div>
              </div>
              <p>A visionary with a passion for digital innovation and a keen eye for detail. Akash leads product strategy and creative direction across every project.</p>
            </motion.div>

            <motion.div 
              className="team-member"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="member-header">
                <Zap size={24} className="member-icon" />
                <div>
                  <h4>Raghu</h4>
                  <span>Co-founder & Operations</span>
                </div>
              </div>
              <p>The operational brain behind Vistron. Raghu ensures that every website, app, and 3D solution is delivered flawlessly, on time and on budget.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
