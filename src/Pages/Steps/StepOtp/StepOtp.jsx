import React from 'react';
import Button from '../../../Components/Shared/Button/Button';
import styles from './StepOtp.module.css';

const StepOtp = ({ onNext }) => {
  return (
    <div>
      <h1>StepOtp</h1>
      <Button onClick={onNext} label='Next' />
    </div>
  );
};

export default StepOtp;
