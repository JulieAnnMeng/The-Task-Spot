import React from "react";
import { NavLink } from "react-router-dom";

function Header () {
    return (
        <header>
            <a href="/"><h1 className="site-title">The Task Spot ✓</h1></a>

            <nav className="navbar-links">
                <NavLink className="nav-link" to='/Signup'><button>Sign up</button></NavLink>
                <NavLink className="nav-link" to='/Login'><button>Login</button></NavLink>
            </nav>
        </header>
    )
}

export default Header;