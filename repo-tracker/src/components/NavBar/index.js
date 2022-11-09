import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


const NavBar = () => {

    return (
        <>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink  to="/search">Search</NavLink>
        </nav>
        </>
    );
}

export default NavBar;
