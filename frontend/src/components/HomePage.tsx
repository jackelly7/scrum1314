import { FC, useState } from 'react';
import { TaskItem } from './TaskItem';
import { ActionButton } from './ActionButton';
import { WeeklyLayout } from './WeeklyLayout';
import styles from '../styles/HomePage.module.css';

export const HomePage: FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, label: 'Read my scriptures', count: 28, checked: false },
    { id: 2, label: 'Exercise for 30 minutes', count: 2, checked: false },
    { id: 3, label: 'Say hi to 5 people', count: 6, checked: false },
    { id: 4, label: 'Eat one extra vegetable', count: 4, checked: false },
    { id: 5, label: 'Say my prayers', count: 82, checked: false },
  ]);

  const handleTaskCheck = (id: number, checked: boolean) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, checked } : task))
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.welcome}>Welcome!</h1>

        <div className={styles.taskList}>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              label={task.label}
              count={task.count}
              checked={task.checked}
              onChange={(checked) => handleTaskCheck(task.id, checked)}
            />
          ))}
        </div>

        <div className={styles.actions}>
          <ActionButton>Create Goal</ActionButton>
          <ActionButton>Edit Goals</ActionButton>
          <ActionButton>Past Goals</ActionButton>
        </div>

        <WeeklyLayout />
      </div>
    </div>
  );
};
