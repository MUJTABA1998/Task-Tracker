import { useState } from "react"
import Button from "./Button"

const AddTask = ({addEvent}) => {

    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');
    const [reminder, setReminder] = useState(false);


    const callEvent = (e) => {
        e.preventDefault();

        if(title.length <= 5 || detail.length <= 5){
            alert('Enter Valid Information Of Task!')
        }
        else{
            addEvent({title, detail, reminder});
        }

        
        
        setDetail('')
        setTitle('')
        setReminder(false)
    }

    return (
        <div className="container mt-5">
            <form className="add-task">
            <div class="mb-3">
                <label class="form-label">Title of task</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" value={title} placeholder="" onChange={
                    (e) => setTitle(e.target.value)
                }/>
                <span>Title is must of task</span>
            </div>
            <div class="mb-3">
                <label class="form-label">Details of task</label>
                <input type="text" class="form-control" value={detail} id="exampleFormControlInput1" placeholder="" onChange={
                    (e) => setDetail(e.target.value)
                }/>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="flexCheckDefault" value={reminder} onChange={
                    (e) => setReminder(e.currentTarget.checked)
                }/>
                <label class="form-check-label" for="flexCheckDefault">
                    Set Reminder
                </label>
            </div>
            <div className="mt-5">
                <Button title={'Add Task'} type={'submit'} onEventCall={callEvent}/>
            </div>
        </form>
        </div>
    )
}

export default AddTask
