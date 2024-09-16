import React from 'react';
import styles from './Robot.module.css';

function Robot({ direction }) {
  const getDirectionArrow = (dir) => {
    switch (dir) {
      case 'N': return '↑';
      case 'E': return '→';
      case 'S': return '↓';
      case 'W': return '←';
      default: return '•';
    }
  };

  return <div className={styles.robot}>{getDirectionArrow(direction)}</div>;
}

export default Robot;
