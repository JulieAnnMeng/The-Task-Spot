import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

    return (
        <div>
            <nav className="navbar-links">
                <NavLink className="nav-link" to='/Signup'>Sign up</NavLink>
                <NavLink className="nav-link" to='/Login'>Login</NavLink>
            </nav>
        </div>
    )
}

export default NavBar;