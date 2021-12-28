import { useState } from 'react';

function NewTask({handleNewTask}) {
// props.map to make each list
    const blankForm = {date: "", task: "", priority: false};
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
        handleNewTask(formData);
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
            name="date"
            value={formData.date}
            onChange={handleFormChange}
             />

            <input
            type="text"
            name="task"
            placeholder="task"
            value={formData.task}
            onChange={handleFormChange}
             />

            <button type="submit">Submit</button>
        </form>
    );
}

export default NewTask;