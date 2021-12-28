import Tasks from './Tasks';
import NewTask from './NewTask';
import { useState } from 'react';
import {Link} from "react-router-dom"

function Lists({id, title, description, tasks, handleTaskPatch, handleListDelete}) {
    let taskList = [];
    const [toggle, setToggle] = useState("")

    function handleToggle (title) {
        toggle === title ? setToggle("") : setToggle(title);
    }

    function handleTaskDelete (name) {
        const newTasksList = tasks.filter(task => task.name !== name);
        handleTaskPatch(id, newTasksList);
    }


    function handleNewTask(formData){
        let newID;
        if(tasks[0]){
            newID = tasks.at(-1).id + 1;
        } else {
            newID = 1;
        }
        const newTask = {id: newID, name: formData.task, date: formData.date, priority: formData.priority, checked: false};
        tasks.push(newTask);
        handleTaskPatch(id, tasks);
    }

    function handleTaskUpdate (updatedTask) {
        tasks.map(task => task.id === updatedTask.id ? task.checked = updatedTask.checked : false)
        handleTaskPatch(id, tasks);
    }

    tasks ? 
        taskList = tasks.map((task, index) => {
            return (
                <Tasks 
                key={index}
                task={task}
                name={task.name}
                date={task.date}
                checked={task.checked}
                priority={task.priority}
                handleTaskDelete={handleTaskDelete}
                handleTaskUpdate={handleTaskUpdate}
                />
            )
         })
    : <h2>loading</h2>;


    //below is the list card, each list will be created with the table below. 
    //need to add a border to table
    return (
        <div className="listCardsDiv">
            <table className="listCards">
                <caption className='listCardsCaption'>
                        
                    <p>{title}</p>
                    {
                    title === "Fun" ? 
                    <Link to={`/funlist`}><button>Add Fun</button></Link>
                    : <button onClick={()=>handleListDelete(id)}> Delete List </button>
                    }
                    <span> {description} </span>
                    {
                    toggle === title ? 
                        <button onClick={() => handleToggle(title)}>hide</button> 
                        : <button onClick={() => handleToggle(title)}>Add</button>
                    }
                    {toggle === title ? <NewTask handleNewTask={handleNewTask}/> : null}
                </caption>
                <tbody>
                    <tr>
                        <th>
                            <h4>Done?</h4>
                        </th>
                        <th>
                            <h4>Task</h4>
                        </th>
                        <th>
                            <h4>Date</h4>
                        </th>
                        <th>
                            <h4>Delete</h4>
                        </th>
                    </tr>

                    {taskList}
                    
                </tbody>
            </table>
        </div>
    );
}

export default Lists;