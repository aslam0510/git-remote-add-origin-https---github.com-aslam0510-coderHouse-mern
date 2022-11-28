import React from 'react';
import Button from '../../../Components/Shared/Button/Button';

import styles from './StepAvatar.module.css';
const StepAvatar = ({ onNext }) => {
  return (
    <div>
      <h1>StepAvatar</h1>
      <Button onClick={onNext} label='Next' />
    </div>
  );
};

export default StepAvatar;
