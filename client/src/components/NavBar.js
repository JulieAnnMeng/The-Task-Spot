import React from "react";
import { NavLink, useHistory } from "react-router-dom";

function NavBar({isLoggedIn, setIsLoggedIn}) {
    let history = useHistory();

    function logOut() {
		fetch("/logout", {
			method: "DELETE",
		}).then(() => {
            localStorage.removeItem("isLoggedIn")
            setIsLoggedIn(false)
            history.push('/')
		});
	}


    return (
        <div className="navbar">
            <NavLink className="site-title block" to="/">The Task Spot ✓</NavLink>

            <nav className="navbar-links block">
                {isLoggedIn ?
                    <>
                        {/* <NavLink className="nav-link" to='/FunList'><button>Fun List</button></NavLink> */}
                        <button className="nav-link" onClick={logOut}>Logout</button>
                    </>
                    :
                    <>
                        <NavLink className="nav-link" to='/Signup'><button>Sign up</button></NavLink>
                        <NavLink className="nav-link" to='/Login'><button>Login</button></NavLink>
                    </>
                }
                
            </nav>
        </div>
    )
}

export default NavBar;