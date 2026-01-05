"use client"
// src/app/Components/FixedChatIcon/FixedChatIcon.js
import {useState} from 'react';
import styles from './FixedChatIcon.module.css';

const FixedChatIcon = () => {

  const [isHover, setIsHover] = useState(false)

  return (
    <a 
      href="https://wa.me/9345398449" 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.iconContainer}
      onMouseOver={()=>{setIsHover(true)}}
      onMouseLeave={()=>{setIsHover(false)}}
    >
     <img style={{filter: "drop-shadow(2px 2px gray)"}} src={isHover?"/whatsapp.png":"/sabeen2.png"} alt="Sabeena Logo" className={styles.rotatingIcon} />
      
    </a>
  );
};

export default FixedChatIcon;
