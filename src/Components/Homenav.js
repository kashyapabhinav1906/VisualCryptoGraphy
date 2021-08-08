import React ,{useState} from "react";
import {Navbar,NavbarBrand,Nav,NavItem,NavLink, NavbarToggler, Collapse} from 'reactstrap';
import About from "./About"
import firebase from "firebase/app";
import "firebase/auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 


toast.configure()
const alerttoast=(name)=>{
  toast.error(name,{
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
}


function signOut() {
    // [START auth_sign_out]
    firebase.auth().signOut().then(() => {
      alerttoast("Logged-out successfully")
    }).catch((error) => {
      // An error happened.
    });
    // [END auth_sign_out]
  }
  

const Homenav = () => {

    const [isOpen,setIsOpen]=useState(false);
    const toggle=()=>setIsOpen(!isOpen);

    return (
        <div>
            <Navbar style={{padding:"0%",margin:"0%",  backgroundColor: "#0c3b43", border:"5px solid black" }} light expand="md">
                <NavbarBrand style={{ color: "white"}}>VISUAL CRYPTOGRAPHY</NavbarBrand>
                <NavbarToggler onClick={toggle} style={{backgroundColor:"white"}} />
                <Collapse  isOpen={isOpen} navbar>
                <Nav navbar style={{paddingLeft:"30%" }}>
                    <NavItem > <NavLink style={{ color: "white" }} href="./Home" >Home</NavLink> </NavItem>
                    <NavItem > <NavLink style={{ color: "white" }} href="./About">About</NavLink> </NavItem>
                    <NavItem > <NavLink style={{ color: "white" }} href="./Contact" >Contact us</NavLink> </NavItem>
                    </Nav>
                    <Nav navbar style={{paddingLeft:"30%"}}>
                    <NavItem > <NavLink onClick={signOut} style={{ color: "white" }} href="./Login" >LogOut</NavLink> </NavItem>
                    <NavItem > <NavLink style={{ color: "white" }} href="./Profile">Profile</NavLink> </NavItem>
                
                </Nav>
                </Collapse>
            </Navbar>
        </div>
    )

};

export default Homenav;
