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
  }, []);

  // console.log(isLoggedIn)
  // using localStorage to determine if user has logged in. 

  return (
    <div className="App">
      <NavBar isLoggedIn={isLoggedIn} setUser={setUser} setIsLoggedIn={setIsLoggedIn}/>
      <Body />
      {/* <Footer /> 
      Footer issues removed for now*/}
    </div>
  );
}

export default App;