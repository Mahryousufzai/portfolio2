
import React from 'react';
import styles from '../styles/heading.module.css';

interface PropsType {
  title: string;
}

const Heading: React.FC<PropsType> = ({ title }) => {
  return (
    <div className={styles.headingContainer}>
      <p className={styles.title}>{title}</p>
    </div>
  );
}

export default Heading;