import styles from './ToggleSwitch.module.scss';

const ToggleSwitch = ({ activeDuration = '', onToggleHandler = () => {} }) => {
  const onToggle = () => {
    onToggleHandler();
  };
  return (
    <div className={styles.Container}>
      <label
        className={
          activeDuration == 'Monthly' ? styles.Enabled : styles.Disabled
        }
        htmlFor="duration"
      >
        Monthly
      </label>
      <label className={styles.ToggleSwitch}>
        <input type="checkbox" onChange={onToggle} />
        <span className={styles.Switch} />
      </label>
      <label
        className={
          activeDuration == 'Yearly' ? styles.Enabled : styles.Disabled
        }
        htmlFor="duration"
      >
        Yearly
      </label>
    </div>
  );
};

export default ToggleSwitch;
