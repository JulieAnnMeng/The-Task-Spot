import Tasks from './Tasks';
import NewTask from './NewTask';
import { useState } from 'react';
import {Link} from "react-router-dom"

function Lists({id, title, description, tasks, getLists}) {

    let taskList = [];
    const [toggle, setToggle] = useState("")

    function handleToggle (title) {
        toggle === title ? setToggle("") : setToggle(title);
    }

    function handleListDelete(id){
        fetch(`/lists/${id}`, {
            method:"DELETE"
        }).then(getLists())
    };

    tasks ? 
        taskList = tasks.map((task, index) => {
            return (
                <Tasks 
                    key={index}
                    id={task.id}
                    task={task}
                    name={task.name}
                    date={task.date}
                    completed={task.completed}
                    priority={task.priority}
                    getLists={getLists}
                />
            )
         })
    : <h2>loading</h2>;

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
                    {toggle === title ? <NewTask id={id} getLists={getLists} /> : null}
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