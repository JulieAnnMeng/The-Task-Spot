import { useState} from 'react';

function FunCard ({id, fun, tasks, handleTaskPatch, handleFunDelete}) {
    // still working on this...
    const [toggle, setToggle] = useState(false)
    const [date, setDate] = useState("");
    
    function handleFormChange (e){
        let value = e.target.value;
        setDate(value);
    }

    function showDate () {
        setToggle(!toggle);
    }

    function handleTaskAdd (fun) {
        let newID;
        if(tasks[0]){
            newID = tasks.at(-1).id + 1;
        } else {
            newID = 1;
        }
        const newTask = {id: newID, name: fun, date: date, priority: false, checked: false};
        tasks.push(newTask);
        handleTaskPatch(1, tasks);
        handleFunDelete(id);
    }

    return(
        <div>
            <h4>{fun}</h4>
            <button onClick={showDate}>+</button>
            {toggle ? 
                <><input
                    type="date"
                    name="date"
                    value={date}
                    onChange={handleFormChange}
                />
                <button onClick={() => handleTaskAdd(fun)}>Add to List</button></>
             : null}
             <br/>
            <button onClick={() => handleFunDelete(id)}>Delete</button>
        </div>
    )
}

export default FunCard;