import styles from './Input.module.scss';

const Input = ({
  label = '',
  placeholder = '',
  type = 'text',
  required = false
}) => {
  const formControlName = label.toLowerCase();

  return (
    <>
      <label className={styles.Label} htmlFor={formControlName}>
        {label}
        <input
          className={styles.Input}
          placeholder={placeholder}
          id={formControlName}
          type={type}
          name={formControlName}
          required={required}
        />
      </label>
    </>
  );
};

export default Input;
