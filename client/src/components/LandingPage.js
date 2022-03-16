import React from "react";
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
// import Login from "./Login";
// import Signup from "./Signup";
import FunList from "./FunList";

function LandingPage({setIsLoggedIn}) {

    
    return (
        <div className="landingPage header">
            <h1>Welcome to the Task Spot.</h1>
            <p>Please <a href="/login" className="btn">login</a> or <a href='/signup' className="btn">signup</a></p>
        </div>
    )
}
export default LandingPage;