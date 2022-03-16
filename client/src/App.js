import './App.css';
import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
// import Footer from "./components/Footer";

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState();
  
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedIn)
  }, [isLoggedIn]);

  return (
    <div className="App">
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Body isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      {/* <Footer /> 
      Footer issues removed for now*/}
    </div>
  );
}

export default App;