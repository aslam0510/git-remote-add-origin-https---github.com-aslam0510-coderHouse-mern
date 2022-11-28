import React from 'react';
import styles from './Button.module.css';

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <span>{label}</span>
      <img src='Images/arrow.png' alt='logo' style={{ marginLeft: '10px' }} />
    </button>
  );
};

export default Button;
