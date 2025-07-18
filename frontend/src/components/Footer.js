import React from 'react';
import { useEffect, useState } from 'react';
import './Styles/Footer.css';

const Footer = () => {
  const [visible, setVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const year = new Date().getFullYear();
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollBottom = currentScrollY + windowHeight;
      const atBottom = Math.abs(scrollBottom - scrollHeight) < 10;
      if (atBottom) {
        // Scrolling up
        setVisible(true);
      
        // Scrolling down
        // setVisible(true);
      }else{
        setVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <footer className={`footer ${visible? 'show-footer' : 'hide-footer'}`}>
      <div className="footer-container">
        <h2 className="footer-title">Northeast Affairs</h2>
        <p className="footer-tagline">Voices of the region. Stories that matter.</p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#posts">Posts</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <p className="footer-copy">&copy; {year} Bodoland Times. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
