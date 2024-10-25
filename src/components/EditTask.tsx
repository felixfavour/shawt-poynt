import React from 'react';
import type Task from '../types/Task';
import '../App.css';
import { generateID } from '../helpers/functions';

interface TaskCardProps {
  task: Task,
  setTask: React.Dispatch<React.SetStateAction<Task>>
  setActivePage: React.Dispatch<React.SetStateAction<string>>
  appendTask: (task: Task) => void,
  deleteTask: (task: Task) => void,
  updateTask: (task: Task) => void
}

const EditTask = ({ task, setTask, setActivePage, appendTask, updateTask, deleteTask }: TaskCardProps) => {
  const [taskName, setTaskName] = React.useState<string>(task.name)

  React.useEffect(() => {
    setTaskName(task.name)
  }, [task])

  const createTask = () => {
    const tempTask: Task = {
      id: generateID(),
      name: taskName,
      createdDate: new Date().toISOString(),
      isCompleted: false
    }
    appendTask(tempTask)
    setTaskName('')
  }

  const updateTaskName = () => {
    const tempTask: Task = {
      ...task,
      name: taskName
    }
    updateTask(tempTask)
    setTaskName('')
    setTask({ id: '', name: '', createdDate: '', isCompleted: false })
  }

  return (
    <div className="edit-task">
      <header>
        <h1>{task.name ? 'Edit Task' : 'Add New Task'}</h1>
      </header>
      <main>
        <form onSubmit={(ev) => {
          ev.preventDefault()
          task.name ? updateTaskName() : createTask()
        }}>
          <div className="form-group">
            <label htmlFor="task-name">Task Name</label>
            <input type="text" value={taskName} id="task-name" placeholder="Task Name" onChange={(ev) => setTaskName(ev.target.value)} />
          </div>
        </form>
        <div className="actions">
          <button disabled={!task.name} className='danger-btn' onClick={() => {
            deleteTask(task)
            setTask({ id: '', name: '', createdDate: '', isCompleted: false })
          }}>Delete</button>
          <button disabled={!taskName} className='primary-btn' onClick={() => task.name ? updateTaskName() : createTask()}>{task.name ? 'Save' : 'Create New Task'}</button>
        </div>
      </main>
    </div>
  );
}

export default EditTask;
