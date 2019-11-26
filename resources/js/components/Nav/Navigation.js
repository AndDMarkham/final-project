import React, {useState} from 'react';
//import {Link} from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {Link} from "react-router-dom";


const Navigation = props => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);


    return (
        
        <div>
      <Navbar  color="faded" className="navBar" light> 
      
        <NavbarBrand href="/" className="mr-auto">eatAnywhere</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link to="/" className="navLink">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/profile" className="navLink">Profile</Link>
            </NavItem>
            <NavItem>
              <Link to="/logout" className="navLink">Logout</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    );
}

export default Navigation;