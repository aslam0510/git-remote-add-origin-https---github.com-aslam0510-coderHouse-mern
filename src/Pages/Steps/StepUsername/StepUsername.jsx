import React from 'react';
import Button from '../../../Components/Shared/Button/Button';
import styles from './StepUsername.module.css';

const StepUsername = ({ onNext }) => {
  return (
    <div>
      <h1>StepUsername</h1>
      <Button onClick={onNext} label='Next' />
    </div>
  );
};

export default StepUsername;
