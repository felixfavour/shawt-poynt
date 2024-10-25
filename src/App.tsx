import React from 'react';
import './App.css';
import EditTask from './components/EditTask';
import Todo from './components/Todo';
import { generateID } from './helpers/functions';
import type Task from './types/Task';

function App() {
  const [allTasks, setAllTasks] = React.useState<Task[]>([
    {
      id: generateID(),
      name: 'Training at the Gym',
      createdDate: '2022-04-01',
      isCompleted: true,
    },
    {
      id: generateID(),
      name: 'Play Paddle with friends',
      createdDate: '2022-04-02',
      isCompleted: false,
    },
    {
      id: generateID(),
      name: 'Burger BBQ with family',
      createdDate: '2022-04-03',
      isCompleted: false,
    },
  ])

  const appendTask = (task: Task) => {
    const tempTasks = [...allTasks]
    tempTasks.push(task)
    setAllTasks(tempTasks)
    setActivePage('todo')
  }

  const deleteTask = (task: Task) => {
    console.log(task)
    const tempTasks = [...allTasks]
    setAllTasks(tempTasks.filter(t => t.id !== task.id))
    setActivePage('todo')
  }

  const updateTask = (task: Task) => {
    const tempTasks = [...allTasks]
    const taskIndex = tempTasks.findIndex(t => t.id === task.id)
    tempTasks.splice(taskIndex, 1, task)
    setAllTasks(tempTasks)
    setActivePage('todo')
  }

  const [activePage, setActivePage] = React.useState<string>('todo'); // todo, edit-task
  const [task, setTask] = React.useState<Task>({
    id: generateID(),
    name: '',
    createdDate: '',
    isCompleted: false,
  })
  return (
    <div className="app">
      <div className="wrapper">
        <Todo tasks={allTasks} setTask={setTask} activePage={activePage} setActivePage={setActivePage} updateTask={updateTask} />
        <EditTask task={task} setTask={setTask} activePage={activePage} setActivePage={setActivePage} appendTask={appendTask} updateTask={updateTask} deleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default App;
