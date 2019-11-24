import React, {useState} from 'react';
//import {Link} from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


const Navv = props => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);


    return (
        // <div style={headerStyle}>
        //     <h2 style={{ marginLeft: '1rem'}} >eatAnywhere</h2>
        //     <div style={navStyle} >
        //         <Link style={linkStyle} to ='/home'><h4>Home</h4></Link>
        //         <Link style={linkStyle} to ='/restaurants'><h4>Restaurants</h4></Link>
        //         <a href="#"><h4>Logout</h4></a>
        //     </div>
        // </div>
    
        <div>
      <Navbar  color="faded" light> 
      
        <NavbarBrand href="/" className="mr-auto">eatAnywhere</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/home">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/restaurants">Restaurants</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    );
}

export default Navv;