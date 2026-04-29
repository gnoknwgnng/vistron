import React from 'react';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-icon"></div>
              <span className="logo-text" style={{textTransform: 'none'}}>Vistron</span>
            </div>
            <p>Crafting unforgettable digital experiences.</p>
          </div>
          
          <div className="footer-links-grid">
            <div className="footer-col contacts">
              <h4>Our Information</h4>
              <div className="contact-item">
                <span>Phone</span>
                <a href="tel:+917416777662">+91 741 677 76 62</a>
              </div>
              <div className="contact-item">
                <span>Email</span>
                <a href="mailto:somavarapuakash26@gmail.com">somavarapuakash26@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">&copy; {new Date().getFullYear()} Vistron. All rights reserved.</p>
          <button className="back-to-top" onClick={scrollToTop}>
            Back to top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
