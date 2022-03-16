function Tasks({id, task, name, date, priority, completed, getLists}) {
    
    function handleComplete(e){
        e.preventDefault();
        task = {...task, completed: !completed}
        fetch(`/tasks/${id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(task)
        })
        .then(response => response.json())
        .then(getLists())
        .catch(error => console.error("Patch error: ", error))
    };
    
    const taskStyle = {
        color: priority ? "red" : "black",
        textDecorationLine: completed ? 'line-through' : null
    }

    function handleTaskDelete(e) {
        e.preventDefault();
        fetch(`/tasks/${id}`, {
            method:"DELETE"
        }).then(getLists())
    }
     
    return (
        <tr style={taskStyle}>
            <td><input type="checkbox" name="task" checked={completed} onChange={handleComplete}/></td>
            <td>{name}</td>
            <td>{date}</td>
            <td><button onClick={handleTaskDelete}>X</button></td>
        </tr>
    );
}

export default Tasks;