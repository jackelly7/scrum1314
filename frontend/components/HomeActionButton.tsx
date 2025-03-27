import { FC, ReactNode } from 'react';
import styles from '../styles/HomePage.module.css';

interface ActionButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

export const ActionButton: FC<ActionButtonProps> = ({ children, onClick }) => {
  return (
    <button className={styles.actionButton} onClick={onClick}>
      {children}
    </button>
  );
};
