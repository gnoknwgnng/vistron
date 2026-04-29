import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import './CallToAction.css';

const CallToAction = () => {
  const [status, setStatus] = useState(''); // '', 'submitting', 'success', 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.target;
    const data = new FormData(form);

    fetch('https://script.google.com/macros/s/AKfycbxjAU5BJ0RL83-ojgc6Jj_7x0PjORjugM6TVCc-huk696_lZrgUQnQ_ql33i5fvFMwO9A/exec', {
      method: 'POST',
      body: data
    })
    .then(res => res.text())
    .then(response => {
      setStatus('success');
      form.reset();
      setTimeout(() => setStatus(''), 5000);
    })
    .catch(error => {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    });
  };

  return (
    <section id="contact" className="cta-section section-padding">
      <div className="container">
        <motion.div 
          className="cta-container glass"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="cta-grid">
            <div className="cta-content">
              <h2>Ready to build something exceptional?</h2>
              <p>
                Contact us today to discover how our website development, app development, 
                and 3D menu development services can help your business grow.
              </p>
            </div>
            
            <div className="cta-form-wrapper">
              <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required placeholder="john@example.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" required placeholder="Tell us about your project..." rows="4"></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary form-submit" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending...' : status === 'success' ? <><CheckCircle size={18} /> Sent Successfully</> : <><Send size={18} /> Send Message</>}
                </button>
                
                {status === 'error' && <p className="form-error">Something went wrong. Please try again.</p>}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
