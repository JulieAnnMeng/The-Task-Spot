import { useState} from 'react';
import FunCard from './FunCard';
import Lists from './Lists';
// import { useParams, useHistory, Link } from 'react-router-dom'

function FunList({lists, funCards, handleFunAdd, handleTaskPatch, handleListDelete, handleFunDelete}) {
    // const funList = lists.find(list => list.title === "Fun");

    const [toggleAdd, setToggleAdd] = useState(false);
    const [funActivity, setFunActivity]= useState("");
    const [activityType, setActivityType] = useState("social");

    const funURL = "https://www.boredapi.com/api/activity";
    const apiFun = "Click 'Get Fun' to see fun ideas!";

    function getFun(){
        fetch(funURL + `?type=${activityType}`)
        .then(r=>r.json())
        .then(activityObj=>setFunActivity( activityObj.activity))
    }

    const blankForm = {date: "", task: ""};
    const [formData, setFormData] = useState(blankForm);

    function addFunForm (){
        setToggleAdd(!toggleAdd);
    }

    function boardAdd (activity) {
        handleFunAdd(activity);
    }
    
    // const funCard = funCards.map(fun => {
    //     return (
    //         <FunCard 
    //             key={fun.id}
    //             id={fun.id}
    //             fun={fun.activity}
    //             tasks={funList.tasks}
    //             handleTaskPatch={handleTaskPatch}
    //             handleFunDelete={handleFunDelete}
    //         /> 
    //     )
    // });

    function handleFormChange(e){
        let name = e.target.name;
        let value = e.target.value;
        setFormData({...formData, [name]: value})
    }

    function handleSubmit(e){
        e.preventDefault();
    //     handleNewTask(formData);
    debugger;
    }
    
    // function handleNewTask(formData){
    //     let newID = funList.tasks.at(-1).id + 1;
    //     const newTask = {id: newID, name: formData.task, date: formData.date, checked: false};
    //     funList.tasks.push(newTask);
    //     handleTaskPatch(funList.id, funList.tasks);
    // }

    function handleActivity (e) {
        setActivityType(e.target.value);
    }

    return (
        <div>
            <h2>Plan fun activities below</h2>
            <button className="funListAdd" onClick={addFunForm}>Add Fun</button>
            {toggleAdd ? 
                <form className="funListAdd" onSubmit={handleSubmit}>
                    <h3>Add to your fun below</h3>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleFormChange}
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="fun task"
                        value={formData.task}
                        onChange={handleFormChange}
                    />
                    <br /><br />
                    <button type="submit">Submit</button>
                </form> 
            : null }
            {/* <form className="apiFunAdd" onSubmit={handleSubmit}> */}
                <h3>Get fun ideas below</h3>
                <label htmlFor="api">Choose an activity: </label>
                <select id="api" name="api" onChange={handleActivity}>
                    <option value="education">Education</option>
                    <option value="recreational">recreational</option>
                    <option value="social" defaultValue>social</option>
                    <option value="diy">diy</option>
                    <option value="charity">charity</option>
                    <option value="cooking">cooking</option>
                    <option value="relaxation">relaxation</option>
                    <option value="music">music</option>
                    <option value="busywork">busywork</option>
                </select>
                <button className="apiFunAdd" onClick={getFun}>Get Fun</button>
                <h5>{funActivity ? funActivity : apiFun} <button onClick={() => boardAdd(funActivity)}>Add Fun!</button></h5>
                {/* <input
                // type="hidden"
                name="name"
                placeholder="fun task"
                value={funActivity ? funActivity : "random fun idea"}
                onChange={handleFormChange}
                />
                <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleFormChange}
                 />
                <br />
                <button type="submit">Submit</button> */}
            {/* </form> */}
            
            <div className="boredBoard">
            {funCards[0] ?
                <span>
                    <h2>Bored Board</h2>
                    {/* <div>{funCard}</div> */}
                </span>
                : <h3>Add fun ideas to the board</h3>}
            {/* {funList ? 
                <Lists 
                    key={funList.id}
                    id={funList.id}
                    title={funList.title}
                    description={funList.description}
                    tasks={funList.tasks}
                    
                    handleTaskPatch={handleTaskPatch}
                    handleListDelete={handleListDelete}
                /> 
                
            : <h2>Loading...</h2> } */}
            
            </div>
            
        </div>
  );
}

export default FunList;