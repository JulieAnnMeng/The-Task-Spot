import React, { useState } from "react";
import { NavLink, Switch, Route } from "react-router-dom";
// import Home from "./Home";
// import Login from "./Login";
// import Signup from "./Signup";

function NavBar({isLoggedIn, setIsLoggedIn}) {

    function logOut() {
		fetch("/logout", {
			method: "DELETE",
		}).then(() => {
            localStorage.removeItem("isLoggedIn")
            setIsLoggedIn(false)
		});
	}


    return (
        <div className="navbar">
            <NavLink className="site-title block" to="/">The Task Spot ✓</NavLink>

            <nav className="navbar-links block">
                {isLoggedIn ?
                    <>
                        <NavLink className="nav-link" to='/FunList'><button>Fun List</button></NavLink>
                        <button className="nav-link" onClick={logOut}>Logout</button>
                    </>
                    :
                    <>
                        <NavLink className="nav-link" to='/Signup'><button>Sign up</button></NavLink>
                        <NavLink className="nav-link" to='/Login'><button>Login</button></NavLink>
                    </>
                }
                
            </nav>

            {/* <Switch>
                <Route exact path="/Login">
                    <Login setIsLoggedIn={setIsLoggedIn} setUser={setUser}/>
                </Route>
                <Route exact path="/Signup">
                    <Signup />
                </Route>
            </Switch> */}
        </div>
    )
}

export default NavBar;