import styles from './Input.module.scss';

const Input = ({
  label = '',
  placeholder = '',
  type = 'text',
  isError,
  onChange = undefined,
  value = ''
}) => {
  const formControlName = label.toLowerCase();

  return (
    <>
      <label className={styles.Label} htmlFor={formControlName}>
        {label}
        {isError ? (
          <span className={styles.ErrorMessage}>This field is required</span>
        ) : null}
        <input
          onChange={onChange}
          className={isError ? styles.Error : styles.Success}
          placeholder={placeholder}
          id={formControlName}
          type={type}
          name={formControlName}
          value={value}
        />
      </label>
    </>
  );
};

export default Input;
