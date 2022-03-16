import { useState } from 'react';

function NewTask({id, getLists}) {

    const blankForm = {list_id: id, due_date: "", name: "", priority: false, completed: false};
    const [formData, setFormData] = useState(blankForm);

    function handleFormChange(e){
        let value;
        if(e.target.checked){
            value = e.target.checked
        }else {
            value = e.target.value
        }
        let name = e.target.name;
        setFormData({...formData, [name]: value})
    }

    function handleSubmit(e){
        e.preventDefault();
        fetch(`/tasks`,{
            method:"POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
            })
            .then(r=>r.json())
            .then(getLists)
            .catch(error => console.error("Post fun error: ", error))
        setFormData(blankForm);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>High priority?</label>
            <input
                type="checkbox"
                name="priority"
                checked={formData.priority}
                value={formData.priority}
                onChange={handleFormChange}
             />

            <input
                type="date"
                name="due_date"
                value={formData.date}
                onChange={handleFormChange}
             />

            <input
                type="text"
                name="name"
                placeholder="task"
                value={formData.task}
                onChange={handleFormChange}
             />

            <button type="submit">Submit</button>
        </form>
    );
}

export default NewTask;