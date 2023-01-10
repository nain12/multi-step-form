import Step from '../Step/Step';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <div className={styles.Parent}>
        <Step step={1} title="Your info" />
        <Step step={2} title="Select Plan" />
        <Step step={3} title="Add-ons" />
        <Step step={4} title="Summary" />
      </div>
    </div>
  );
};

export default Sidebar;
