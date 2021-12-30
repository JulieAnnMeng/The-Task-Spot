import { useState, useEffect } from 'react';
import {Switch, Route} from 'react-router-dom';

import NewList from './NewList';
import ListLists from './ListLists';

function Home({lists, handleTaskPatch, handleListDelete, handleNewList}) {

    return (
        <div className="home">
            <h2>Welcome to the Task Spot.</h2>
            
            <a href='/NewList'><button>Add a new List</button></a>
            {/* button to hide list form */}
            <div>
                <NewList lists={lists} handleNewList={handleNewList}/>
            </div>
            

            {/* Change logic below to: if logged in so lists, if not show message */}
            {lists[0] ? <ListLists lists={lists} handleTaskPatch={handleTaskPatch} handleListDelete={handleListDelete}/>
            : <h2>Loading Lists...</h2>}

        </div>
    )
}

export default Home;