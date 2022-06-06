import React from 'react'
import {FiDelete} from 'react-icons/fi'

const TaskList = ({tasks, deleteTask, toggleTask}) => {
    return (
        <div className='container tasks mt-3'>
            <h3 className='head-task'>Your Task To Do</h3>
            {tasks.map((task, index) => {
                return(
                    <div className={`container task-list ${task.reminder ? 'reminder': ''}`} key={index} onDoubleClick={() => toggleTask(task.id)}>
                        <div className='row'>
                            <div className='col-10'>
                                <h5>{task.title}</h5>
                            </div>
                            <div className='col-2'>
                                <button className='btn btn-del' onClick={() => deleteTask(task.id)}><FiDelete /></button>
                            </div>
                        </div>
                        <div className='row'>
                            <p>{task.detail}</p>
                        </div>
                    </div>
                )
            } )}
        </div>
    )
}

export default TaskList
