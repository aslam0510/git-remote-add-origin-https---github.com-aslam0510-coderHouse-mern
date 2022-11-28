import React from 'react';
import Button from '../../../Components/Shared/Button/Button';
import styles from './StepPhoneEmail.module.css';
const StepPhoneEmail = ({ onNext }) => {
  return (
    <div>
      <h1>Phone Email</h1>
      <Button onClick={onNext} label='Next' />
    </div>
  );
};

export default StepPhoneEmail;
