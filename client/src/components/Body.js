import React from "react";
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import LandingPage from "./LandingPage";
import Home from "./Home";
import FunList from "./FunList";
import Login from "./Login";
import Signup from "./Signup";

function Body({isLoggedIn, setIsLoggedIn}) {
  const [user, setUser] = useState();
  const [lists, setLists] = useState(false);
  const [funCards, setFunCards] = useState([]);
  
  useEffect(()=>{
    if(isLoggedIn){
      getUser();
      // getLists();
      // getFunList();
    }        
  },[isLoggedIn]);

  function getUser() {
    fetch("/me")
    .then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setUser(data);
          getLists()
        })
      } else {
        r.json().then(setUser(null))
      }})
    .catch((error) => console.log(error))
  }

  function getLists(){
    fetch(`/lists`)
    .then(r=>r.json())
    .then(data => {
      if(data === null){
        setLists(false)
      } else {
          setLists(data); 
      }
    })
  };    
  
  //     Fun Lists: to be added later
  //     function getFunList(){
  //           fetch(`/funCards`)
  //           .then(r=>r.json())
  //           .then(funSave => {
  //               if(!funSave.error){
  //                   setFunCards(funSave)
  //               }})
  //           .catch(error => console.error("Get fun error: ", error))
  //         };
  
  //     function handleFunAdd(activity){
  //       fetch(`/funCards`,{
  //         method:"POST", 
  //         headers: {"Content-Type": "application/json"},
  //         body: JSON.stringify ({activity})
  //         })
  //       .then(r=>r.json())
  //       .then(setUpdate(!update))
  //       .catch(error => console.error("Post fun error: ", error))
  //     };
      
  //     function handleFunDelete(id){
  //       fetch(`/funCards/${id}`,{
  //         method:"DELETE"
  //       })
  //       .then(setUpdate(!update))
  //       .catch(error => console.error("Delete fun error: ", error))
  //     }

    return (
      <div><br />
        <Switch>
          <Route exact path="/">
            {
              isLoggedIn ? 
              <Home 
                lists={lists} 
                user={user}
                getLists={getLists}
              />
              :
              <LandingPage setIsLoggedIn={setIsLoggedIn} />
            }
          </Route>

                {/* To add FunList later. Allow all users to see list, whether or not they are logged in
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
                </Route> */}

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