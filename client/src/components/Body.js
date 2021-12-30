import React from "react";
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./Home";
import FunList from "./FunList";
import NewList from './NewList';
import Login from "./Login";
import Signup from "./Signup";

function Body({setIsLoggedIn, setUser, user}) {

    const[lists, setLists] = useState([]);
    const [funCards, setFunCards] = useState([]);
    const[update, setUpdate] = useState(false);
  
      function getLists(){
          fetch(`/lists`)
          .then(r=>r.json())
          .then(lists => {
              if(!lists.error){
                 setLists(lists) 
              }
          })
        };
  
      useEffect(()=>{
        // getLists();
        // getFunList();
      },[update]);
  
       function handleListDelete(id){
         fetch(`/lists/${id}`, {
             method:"DELETE"
         }).then(setUpdate(!update))
     };
  
        function handleTaskPatch(id, tasks){
          fetch(`/lists/${id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify ({tasks})
        })
        .then(response => response.json())
        .then(setUpdate(!update))
        .catch(error => console.error("Patch error: ", error))
      };
  
      function handleNewList(newListFormData){
        fetch(`/lists`,{
          method:"POST", 
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify (newListFormData)
          }
        ).then(r=>r.json())
        .then(setUpdate(!update))
        .catch(error => console.error("Post error: ", error))
      };
  
      // Fun Lists
      function getFunList(){
            fetch(`/funCards`)
            .then(r=>r.json())
            .then(funSave => {
                if(!funSave.error){
                    setFunCards(funSave)
                }})
            .catch(error => console.error("Get fun error: ", error))
          };
  
      function handleFunAdd(activity){
        fetch(`/funCards`,{
          method:"POST", 
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify ({activity})
          })
        .then(r=>r.json())
        .then(setUpdate(!update))
        .catch(error => console.error("Post fun error: ", error))
      };
      
      function handleFunDelete(id){
        fetch(`/funCards/${id}`,{
          method:"DELETE"
        })
        .then(setUpdate(!update))
        .catch(error => console.error("Delete fun error: ", error))
      }

    return (
        <div><br />
            {/* <a href='/FunList'><button>Fun List</button></a> */}
            <Switch>
                <Route exact path="/">
                    {lists ?
                        <Home 
                        lists={lists} 
                        handleTaskPatch={handleTaskPatch} 
                        handleListDelete={handleListDelete}
                        handleNewList={handleNewList}
                        />
                    : <h1>Loading</h1>}
                </Route>

                <Route exact path="/FunList">
                    {lists && funCards ? 
                        <FunList 
                        lists={lists}
                        funCards={funCards}
                        handleTaskPatch={handleTaskPatch} 
                        handleFunAdd={handleFunAdd}
                        handleListDelete={handleListDelete}
                        handleFunDelete={handleFunDelete}
                        /> 
                    : undefined}
                </Route>

                <Route exact path="/Login">
                    <Login setIsLoggedIn={setIsLoggedIn} setUser={setUser}/>
                </Route>
                <Route exact path="/Signup">
                    <Signup setIsLoggedIn={setIsLoggedIn} setUser={setUser}/>
                </Route>
            </Switch>
        </div>
    )
}

export default Body;