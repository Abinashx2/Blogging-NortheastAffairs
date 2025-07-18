import { useState, useEffect } from 'react';
import './Styles/Header.css';
// import './logo.png'
const BodolandTimesHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo-container">
          <img 
            src="/logon1.png" 
            alt="Bodoland Times Logo" 
            className="logo"
          />
          <div className="title-container">
            <h1 className="title">Northeast Affairs</h1>
            <p className="tagline">Stories That Matter</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BodolandTimesHeader;