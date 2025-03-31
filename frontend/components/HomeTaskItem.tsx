import { FC } from 'react';
import styles from '../src/styles/HomePage.module.css';

interface TaskItemProps {
  label: string;
  count: number;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const TaskItem: FC<TaskItemProps> = ({
  label,
  count,
  checked = false,
  onChange,
}) => {
  return (
    <div className={styles.taskItem}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        className={styles.checkbox}
      />
      <span className={styles.taskLabel}>{label}</span>
      <div className={styles.countWrapper}>
        <span className={styles.count}>🔥 {count}</span>
      </div>
    </div>
  );
};
