import Option from '../Option/Option';

import styles from './Options.module.scss';

const Options = ({
  options = [],
  activePlan = '',
  setActivePlan = () => {}
}) => {
  return (
    <ul className={styles.List}>
      {options.map((option) => {
        return (
          <li
            className={
              activePlan && activePlan.title == option.title
                ? `${styles.ListItem} ${styles.Active}`
                : styles.ListItem
            }
            key={option.title}
          >
            <Option
              option={option}
              activePlan={activePlan}
              setActivePlan={setActivePlan}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Options;
