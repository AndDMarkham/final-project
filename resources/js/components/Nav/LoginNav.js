import React, {useState} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {Link} from "react-router-dom";


const LoginNav = props => {
    return (
    <div>
        <Navbar  color="faded" className="navBar" light> 
            <NavbarBrand href="/" className="mr-auto">eatAnywhere</NavbarBrand>
            <Nav navbar>
                <NavItem>
                    <Link to="/" className="navLink">Login</Link>
                </NavItem>
                <NavItem>
                    <Link to="/register" className="navLink">Register</Link>
                </NavItem>
            </Nav>
        </Navbar>
    </div>
    );
}

export default LoginNav;