function Tasks({task, name, date, priority, checked, handleTaskDelete, handleTaskUpdate}) {
    // props.map to make each list
    
    
        function handleComplete(e){
            task = {...task, checked: !checked}
            handleTaskUpdate(task)
        }
    
        const taskStyle = {
            color: priority ? "red" : "black",
            textDecorationLine: checked ? 'line-through' : null
        }
    
        
        return (
            <tr style={taskStyle}>
                <td><input type="checkbox" name="task" checked={checked} onChange={() => handleComplete(task)}/></td>
                <td>{name}</td>
                <td>{date}</td>
                <td><button onClick={()=>handleTaskDelete(name)}>X</button></td>
            </tr>
        );
    }
    
    export default Tasks;