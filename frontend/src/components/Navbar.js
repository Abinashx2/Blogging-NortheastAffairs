import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/Navbar.css';

const Navbar = () => {
  const navigate=useNavigate();
  const handleLogin = () => {
    navigate('/Login');
  };
  const home=()=>{
    navigate('/');
  }
  const About=()=>{
    navigate('/About');
  }
  const contact=()=>{
    navigate('/Contact');
  }
  const other=()=>{
    navigate('/others');
  }
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-brand">
          <span>Norteast Affairs</span>
        </div>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#home" onClick={()=>{setIsOpen(!setIsOpen); home();}}>Home</a>
          <a href="#facilities" onClick={()=>{setIsOpen(!setIsOpen); other();}}>Other Blogs</a>
          <a href="#gallery" onClick={()=>{setIsOpen(!setIsOpen); About();}}>About Us</a>
          <a href="#rules" onClick={()=>{setIsOpen(!setIsOpen); contact();}}>Contact</a>
          <a href="#contact" onClick={()=>{setIsOpen(!setIsOpen); handleLogin();}}>Create</a>
        </div>
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)} >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;