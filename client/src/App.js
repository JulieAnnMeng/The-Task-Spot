import './App.css';
import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
// import Footer from "./components/Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    // console.log(loggedIn)
    setIsLoggedIn(loggedIn)
     if(isLoggedIn) {
      getUser()
    } else {setUser(null)}
  }, [isLoggedIn]);

 

  function getUser() {
    fetch("/me")
    .then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setUser(data);
        })
      } else {
        r.json().then(setUser(null))
      }})
    .catch((error) => console.log(error))
  }

  // console.log(user, isLoggedIn)

  return (
    <div className="App">
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Body setIsLoggedIn={setIsLoggedIn} setUser={setUser} user={user}/>
      {/* <Footer /> 
      Footer issues removed for now*/}
    </div>
  );
}

export default App;