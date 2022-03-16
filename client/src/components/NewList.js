import { useState } from 'react';
//issue is tasks object within the form 
// to fix the tasks issue so we can add a task to the new list
//import { useParams, useHistory, Link } from 'react-router-dom'



function NewList({user, getLists}) {
    const blankForm = {
        user_id: user.id,
        title: "",
        description: "",
    };
    const [newListFormData, setNewListFormData] = useState(blankForm);

    function handleNewListFormChange(e){
        let name = e.target.name;
        let value = e.target.value;
        setNewListFormData({...newListFormData, [name]: value})
    }

    function handleNewListSubmit(e){
        e.preventDefault();
        fetch(`/lists`,{
            method:"POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify (newListFormData)
            }
            ).then(r=>r.json())
            .then(getLists())
            .catch(error => console.error("Post error: ", error))
    }

    return (
        <div className="newList">
            
            <form onSubmit={handleNewListSubmit}>
                <h2>Add your new list below</h2>
                <br />

                <label htmlFor="title">Name </label>
                <input 
                name="title" 
                placeholder="List name"
                type="text"
                value={newListFormData.title}
                onChange={(e)=>handleNewListFormChange(e)}
                />

                <label htmlFor="description">Description </label>
                <input 
                name="description"
                placeholder="List description"
                type="text"
                value={newListFormData.description}
                onChange={(e)=>handleNewListFormChange(e)}
                />

                {/*<h5>Add your first task below</h5>
                
                <input
                type="date"
                name="date"
                value={newListFormData.tasks}
                onChange={(e)=>handleNewListTask(e)}
                />
                <input
                type="text"
                name="name"
                placeholder="task"
                value={newListFormData.tasks}
                onChange={(e)=>handleNewListTask(e)}
                />*/}
                
                <br /><br />

                <button type="submit">Submit</button>

                
            </form>
            
        </div>
    );
}

export default NewList;