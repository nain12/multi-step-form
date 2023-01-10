import styles from './Step.module.scss';

const Step = ({ title = 'Your Info', step = 1, activeStep = 1 }) => {
  return (
    <div className={styles.Container}>
      <div className={activeStep == step ? styles.Active : styles.InActive}>
        {step}
      </div>
      <div className={styles.Info}>
        <span className={styles.Number}>Step {step}</span>
        <span className={styles.Name}>{title}</span>
      </div>
    </div>
  );
};

export default Step;
