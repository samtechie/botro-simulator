import React from 'react';
import styles from './Controls.module.css';

function Controls({ moveForward, rotateLeft, rotateRight }) {
  return (
    <div className={styles.controls}>
      <button onClick={moveForward}>Move Forward</button>
      <button onClick={rotateLeft}>Rotate Left</button>
      <button onClick={rotateRight}>Rotate Right</button>
    </div>
  );
}

export default Controls;
