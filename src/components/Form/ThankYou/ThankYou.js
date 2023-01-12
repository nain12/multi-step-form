import ThankYouIcon from '../../../assets/images/icon-thank-you.svg';
import styles from './ThankYou.module.scss';

const ThankYou = () => {
  return (
    <div className={styles.Container}>
      <img className={styles.Icon} src={ThankYouIcon} alt="Thank you icon" />
      <h1 className={styles.Heading}>Thank you!</h1>
      <p className={styles.Text}>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default ThankYou;
