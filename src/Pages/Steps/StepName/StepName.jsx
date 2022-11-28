import React from 'react';
import Button from '../../../Components/Shared/Button/Button';
import styles from './StepName.module.css';

const StepName = ({ onNext }) => {
  return (
    <div>
      <h1>StepName</h1>
      <Button onClick={onNext} label='Next' />
    </div>
  );
};

export default StepName;
