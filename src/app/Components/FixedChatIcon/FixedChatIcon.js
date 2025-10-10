// src/app/Components/FixedChatIcon/FixedChatIcon.js
import React from 'react';
import styles from './FixedChatIcon.module.css';

const FixedChatIcon = () => {
  return (
    <a 
      href="https://wa.me/9345398449" 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.iconContainer}
    >
      <img src="/sabeen2.png" alt="Sabeena Logo" className={styles.rotatingIcon} />
    </a>
  );
};

export default FixedChatIcon;
