import { useContext } from 'react';
import ActiveStepContext from '../../../context/ActiveStepContext';
import styles from './Summary.module.scss';

const Summary = ({
  activePlan = {},
  activePlanDuration = '',
  selectedAddOns = []
}) => {
  // eslint-disable-next-line no-unused-vars
  const { activeStep, setActiveStep } = useContext(ActiveStepContext);
  let totalSelectedAddOns = 0;
  let priceSuffix = activePlanDuration == 'Monthly' ? '/mo' : '/yr';

  const onChangeClickHandler = (event) => {
    event.preventDefault();
    setActiveStep(2);
  };
  return (
    <>
      <div className={styles.Container}>
        <ul className={styles.List}>
          <li className={styles.ListItem}>
            <div className={styles.PlanInfo}>
              <div className={styles.Plan}>
                <span>
                  {activePlan.title}({activePlanDuration})
                </span>
                <a
                  className={styles.ChangeLink}
                  href="/"
                  onClick={onChangeClickHandler}
                >
                  Change
                </a>
              </div>
              <div className={styles.Price}>
                ${activePlan.price}
                {priceSuffix}
              </div>
            </div>
          </li>
          <div className={styles.Divider}></div>
          {selectedAddOns.map((selectedAddOn) => {
            totalSelectedAddOns = totalSelectedAddOns + selectedAddOn.price;
            return (
              <li
                className={`${styles.ListItem} ${styles.AddOn}`}
                key={selectedAddOn.title}
              >
                <span className={styles.AddOnTitle}>{selectedAddOn.title}</span>
                <span className={styles.AddOnPrice}>
                  +${selectedAddOn.price}
                  {priceSuffix}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.TotalInfo}>
        <span className={styles.TotalText}>
          Total(per {activePlanDuration == 'Monthly' ? 'month' : 'year'})
        </span>
        <span className={styles.TotalPrice}>
          +${activePlan.price + totalSelectedAddOns}
          {priceSuffix}
        </span>
      </div>
    </>
  );
};

export default Summary;
