import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
    return(
        <div>
            <NavLink to = '/smurf-form'>Smurf Form</NavLink>
            <NavLink to = '/'>Home</NavLink>
        </div>
    )
}

export default NavBar;