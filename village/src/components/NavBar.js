import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const NavStyled = styled.div`
    a{
        padding: 20px;
        text-decoration: none;
        color: blue;
    }
    .active {
        color:green;
        text-decoration: underline;
    }
`;

const NavBar = (props) => {
    return(
        <NavStyled>
            <NavLink exact to = '/'>Home</NavLink>
            <NavLink to = '/smurf-form'>Smurf Form</NavLink>
        </NavStyled>
    )
}

export default NavBar;