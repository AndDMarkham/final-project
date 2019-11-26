import React, {useState} from 'react';
//import {Link} from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
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
              <Link to="/search" className="navLink">Search</Link>
            </NavItem>
            <NavItem>
              <Button>Logout</Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    );
}

export default Navigation;