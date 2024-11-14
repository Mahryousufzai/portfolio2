import React, { useState } from 'react';
import { LuMenu } from "react-icons/lu";
import styles from '../styles/Nav.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
  };

  return (
    <div className={`container ${styles.main}`}>
      <div className="flex justify-between items-left py-4">
        {/* Logo or Name */}
        <div className="text-xl font-medium">Mahr Ali</div>
        
        {/* Desktop Menu (Hidden on mobile) */}
        <ul className="gap-10 lg:gap-16 hidden md:flex">
          <li className="menuLink"><a href="#hero">Home</a></li>
          <li className="menuLink"><a href="#about">About</a></li>
          <li className="menuLink"><a href="#projects">Projects</a></li>
          <li className="menuLink"><a href="#skills">Skills</a></li>
          <li className="menuLink"><a href="#contact">Contact</a></li>
        </ul>

        {/* Hamburger Menu Icon (Visible only on mobile) */}
        <div className="md:hidden" onClick={toggleMenu}>
          <LuMenu size={25} />
        </div>
      </div>

      {/* Mobile Menu (Shown when isMenuOpen is true) */}
      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden relative top-0 left-0 right-0  text-white text-left shadow-md py-4 z-50`}
      >
        <li className="menuLink py-2"><a href="#hero" onClick={() => setIsMenuOpen(false)}>Home</a></li>
        <li className="menuLink py-2"><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
        <li className="menuLink py-2"><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
        <li className="menuLink py-2"><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
        <li className="menuLink py-2"><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
      </ul>
    </div>
  );
};

export default Navbar;