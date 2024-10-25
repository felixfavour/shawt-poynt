import React from 'react';
import CheckIcon from './CheckIcon';
import type Task from '../types/Task';
import '../App.css';

interface TaskCardProps {
  task: Task,
  setTask: React.Dispatch<React.SetStateAction<Task>>
  setActivePage: React.Dispatch<React.SetStateAction<string>>
  completeTask: (task: Task) => void
}

const TaskCard = ({ task, setTask, setActivePage, completeTask }: TaskCardProps) => {
  return (
    <div className={`task-card ${task.isCompleted ? 'completed' : ''}`}>
      <div className="info">
        <button className="checkbox" onClick={() => completeTask(task)}>
          <CheckIcon />
        </button>
        <div className="task-name">
          {task.name}
        </div>
      </div>
      <button className="outline-btn" onClick={() => {
        setTask(task)
        setActivePage('edit-task')
      }}>
        Edit
      </button>
    </div>
  );
}

export default TaskCard;