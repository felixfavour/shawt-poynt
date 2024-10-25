import React from 'react';
import '../App.css';
import TrophyIcon from '../components/TrophyIcon';
import TaskCard from './TaskCard';
import Task from '../types/Task';

interface TodoProps {
  tasks: Task[]
  setTask: React.Dispatch<React.SetStateAction<Task>>
  setActivePage: React.Dispatch<React.SetStateAction<string>>
  activePage: string
  updateTask: (task: Task) => void
}

const Todo: React.FC<TodoProps> = ({ tasks, setTask, activePage, setActivePage, updateTask }) => {
  const completeTask = (task: Task) => {
    const tempTask: Task = {
      ...task,
      isCompleted: !task.isCompleted
    }
    updateTask(tempTask)
  }
  return (
    <div className={`todo ${activePage === 'todo' ? '' : 'hidden'}`}>
      <header>
        <img src="/images/avatar.png" alt="" />
        <div className="texts">
          <div>Hello, Jhon</div>
          <h3>What are your plans <br /> for today?</h3>
        </div>
      </header>
      <button className="banner">
        <TrophyIcon />
        <p>Go Pro Upgrade Now</p>
        <div className="badge">
          $1
        </div>
      </button>
      <main>
        <div className="tasks">
          {tasks.map((task: Task) => (
            <TaskCard key={task.id} task={task} setTask={setTask} setActivePage={setActivePage} completeTask={completeTask} />
          ))}
        </div>
        <div className="actions">
          <button className='primary-btn' onClick={() => {
            setActivePage('edit-task')
            setTask({ id: '', name: '', createdDate: '', isCompleted: false })
          }}>+</button>
        </div>
      </main>
    </div>
  );
}

export default Todo;
