// import React from "react";
import React, { useState } from 'react';
import {Navbar,NavbarBrand,Nav,NavItem,NavLink, Collapse,NavbarToggler} from 'reactstrap';


const Loginnav=()=>{

    const [isOpen,setIsOpen]=useState(false);
    const toggle=()=>setIsOpen(!isOpen);

    return(
        <div>
          <Navbar style={{backgroundColor:"MidnightBlue" }} light expand="md">
            <NavbarBrand style={{color:"white"}}>VISUAL CRYPTOGRAPHY</NavbarBrand>
            <NavbarToggler onClick={toggle} style={{backgroundColor:"white"}} />
            <Collapse isOpen={isOpen} navbar>
            <Nav  navbar style={{paddingLeft:"88%"}}>
            <NavItem > <NavLink style={{color:"white"}} href="/" >Login</NavLink> </NavItem>
            <NavItem> <NavLink style={{color:"white"}} href="./Signup">SignUp</NavLink> </NavItem>
            </Nav>
            </Collapse>
          </Navbar>
    </div>
    );
};

export default Loginnav;