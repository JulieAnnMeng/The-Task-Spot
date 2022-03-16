import { useState, useEffect } from 'react';
import NewList from './NewList';
import Lists from './Lists';

function Home({lists, user, getLists}) {

    const [toggle, setToggle] = useState(false);

    function handleToggle(){
        setToggle(!toggle)
    }

    return (
        <div className="home">
            <div className="header">
                <h2>Welcome to the Task Spot.</h2>
                <p>One application to track your tasks, whether it is work, grocery shopping, or finding something fun to do.</p>
                <button onClick={handleToggle}>Add a new List</button>
            </div>
            {
                toggle ?
                <NewList user={user} getLists={getLists} />
                :
                null
            }
            {
                lists ? 
                <Lists 
                    lists={lists} 
                    getLists={getLists}
                />
                : 
                null
            }
        </div>
    )
}

export default Home;