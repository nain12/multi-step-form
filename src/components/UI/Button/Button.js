import styles from './Button.module.scss';

const Button = ({ label, type, onClickHandler }) => {
  return (
    <button
      className={type == 'Next' ? styles.Next : styles.Confirm}
      onClick={onClickHandler}
    >
      {label}
    </button>
  );
};

export default Button;
