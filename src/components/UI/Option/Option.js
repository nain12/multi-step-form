import arcadeIcon from '../../../assets/images/icon-arcade.svg';
import advancedIcon from '../../../assets/images/icon-advanced.svg';
import proIcon from '../../../assets/images/icon-pro.svg';
import styles from './Option.module.scss';
import { useEffect } from 'react';

const Option = ({ option, activePlan = {}, setActivePlan = () => {} }) => {
  const { title = '', price = 0, monthsFree = 0 } = option;

  const getIcon = (title) => {
    if (title == 'Arcade') {
      return arcadeIcon;
    } else if (title == 'Advanced') {
      return advancedIcon;
    } else if (title == 'Pro') {
      return proIcon;
    }
  };

  const updateSelectedPlanPrices = () => {
    setActivePlan(activePlan);
  };

  useEffect(() => {
    updateSelectedPlanPrices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <button className={styles.Wrapper} onClick={() => setActivePlan(option)}>
      <img src={getIcon(title)} alt="icon" />
      <div className={styles.Info}>
        <span className={styles.Title}>{title}</span>
        <span className={styles.Price}>${price}/mo</span>
        {monthsFree > 0 && (
          <span className={styles.Months}>{monthsFree} months free</span>
        )}
      </div>
    </button>
  );
};

export default Option;
