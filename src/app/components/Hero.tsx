import React from 'react';
import Navbar from './Navbar';
import styles from '../styles/hero.module.css';

const Hero = () => {
  return (
    <div id="hero" className={styles.heroContainer}>
      <Navbar />
      <div className={styles.heroContent}>
        <div className={styles.emptyDiv}></div>
        <div className={styles.textContent}>
          <div>
            <p data-aos="fade-down-right">I&apos;m</p>
            <p data-aos="fade-down-left">Mehar</p>
            <p data-aos="fade-down-left">Ali</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
