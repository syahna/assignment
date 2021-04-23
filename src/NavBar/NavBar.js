import { NavLink } from "react-router-dom";
import './NavBar.css'

function NavBar(){
    return(
        <div className = "nav">
            <NavLink to = "/"> Home </NavLink>
            <NavLink to = "/login">Login</NavLink>
            <NavLink to = "/register">Register</NavLink>
        </div>
    )
}

export default NavBar;