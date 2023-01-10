import styles from './Button.module.scss';

const Button = ({
  label = '',
  type = 'Next',
  onClickHandler = () => {},
  disabled = false
}) => {
  return (
    <button
      disabled={disabled}
      className={type == 'Next' ? styles.Next : styles.Confirm}
      onClick={onClickHandler}
    >
      {label}
    </button>
  );
};

export default Button;
