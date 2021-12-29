import React, { useState } from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";

function NavBar({isLoggedIn, setIsLoggedIn, setUser}) {

    return (
        <div className="navbar">
            <NavLink className="site-title" to="/"><h1>The Task Spot ✓</h1></NavLink>

            <nav className="navbar-links">
                <NavLink className="nav-link" to='/Signup'><button>Sign up</button></NavLink>
                <NavLink className="nav-link" to='/Login'><button>Login</button></NavLink>
            </nav>
            <Switch>
                <Route exact path="/Login">
                    <Login setIsLoggedIn={setIsLoggedIn} setUser={setUser}/>
                </Route>
                <Route exact path="/Signup">
                    <Signup />
                </Route>
            </Switch>
        </div>
    )
}

export default NavBar;