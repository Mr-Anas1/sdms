// src/app/Components/FixedChatIcon/FixedChatIcon.js
import React from 'react';
import styles from './FixedChatIcon.module.css'; // We'll create this CSS file next

const FixedChatIcon = () => {
  return (
    // This link can go to your WhatsApp, contact page, etc.
    <a 
      href="https://wa.me/9345398449" 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.iconContainer}
    >
      {/* You can use any SVG or image here */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.75 3.75A1.5 1.5 0 0 1 2.25 2.25h19.5A1.5 1.5 0 0 1 23.25 3.75v12A1.5 1.5 0 0 1 21.75 17.25h-4.832c-.153 0-.3.062-.415.176L12 21.785l-4.503-4.359a.75.75 0 0 0-.415-.176H2.25A1.5 1.5 0 0 1 .75 15.75v-12Z" />
      </svg>
    </a>
  );
};

export default FixedChatIcon;