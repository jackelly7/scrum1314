import { FC, useState } from 'react';
import { TaskItem } from '../components/HomeTaskItem';
import { ActionButton } from '../components/HomeActionButton';
import { WeeklyLayout } from '../components/HomeWeeklyLayout';
import styles from './styles/HomePage.module.css';
import { useNavigate } from 'react-router-dom';

export const HomePage: FC = () => {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, label: 'Go to gym for 60 minutes', count: 0, checked: false },
    { id: 2, label: 'Make my bed', count: 11, checked: true },
    { id: 3, label: "Don't eat sugar", count: 0, checked: false },
    { id: 4, label: 'Read my scriptures', count: 3, checked: false },
    { id: 5, label: 'Say my prayers', count: 4, checked: false },
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
          <ActionButton onClick={() => navigate('/createGoal')}>
            Create Goal
          </ActionButton>
          <ActionButton onClick={() => navigate('/createGoal')}>
            Edit Goals
          </ActionButton>
          <ActionButton onClick={() => navigate('/stats')}>
            Past Goals
          </ActionButton>
        </div>

        <WeeklyLayout />
      </div>
    </div>
  );
};
