import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import {useState} from 'react'
import TaskList from './components/TaskList';

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'task one',
      detail: 'details of task one',
      reminder: true
    },
    {
      id: 2,
      title: 'task two',
      detail: 'details of task two',
      reminder: true
    },
    {
      id: 3,
      title: 'task three',
      detail: 'details of task three',
      reminder: false
    },
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const toggleTask = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))}

  const addTask = (task) => {
    const id = Math.floor(Math.random() *100) + 1;
    const newTask = {id, ...task};
    setTasks([...tasks, newTask]);
  }

  return (
    <>
    <Header title={'Tasks Tracker'}/>
    <div className='container'>
    <div className='row'>
      <div className='col-5 task-form'>
        <AddTask addEvent={addTask}/>
      </div>
      <div className='col-7'>
        <TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask}/>
      </div>
    </div>
    </div>
    </>
  );
}

export default App;
