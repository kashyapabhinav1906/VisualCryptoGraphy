import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Jumbotron, Label } from "reactstrap";
import Loginnav from "./Loginnav.js";
import Home from "./Home";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom"
import { auth, provider } from "./Firebase.js";
import firebase from "firebase/app";
import { Link } from "react-router-dom"
import "firebase/auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 


toast.configure()
const alerttoast=(name)=>{
  toast.success(name);
}


function signUpWithEmailPassword(address) {
    var email = address.email;
    var password = address.password;
    // [START auth_signup_password]
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            
            ReactDOM.render(<Router><Home/></Router>,document.getElementById('root'))
            alerttoast(address.fname + "Logged In ")

            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
            // ..
        });
    // [END auth_signup_password]
}


function googleSignInPopup(provider) {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            
            ReactDOM.render(<Router><Home/></Router>,document.getElementById('root'))
            alert("Welcome "+user.displayName);
            // ...
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            alert(errorMessage);
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
}

const Signup = () => {

    const [form, setform] = useState({
        fname: '', lname: '', email: '', password: ''
    });

    const inputvalue = (event) => {

        const { value, name } = event.target;
        setform((preval) => {
            if (name == 'fname') {
                return {
                    fname: value,
                    lname: preval.lname,
                    email: preval.email,
                    password: preval.password

                }
            }
            else if (name == 'lname') {
                return {
                    fname: preval.fname,
                    lname: value,
                    email: preval.email,
                    password: preval.password

                }
            }
            else if (name == 'email') {
                return {
                    fname: preval.fname,
                    lname: preval.lname,
                    email: value,
                    password: preval.password
                }
            }
            else if (name == 'password') {
                return {
                    fname: preval.fname,
                    lname: preval.lname,
                    email: preval.email,
                    password: value
                }

            }
        })


    }

    const handle = (event) => {
        event.preventDefault();
        signUpWithEmailPassword(form);

    }

    return (
        <div style={{ height: "100vh", backgroundColor: "#4682B4" }}>
            <Loginnav />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

               
                    <Form onSubmit={handle} style={{ backgroundColor: "#f2fff4", width: "33vw", height: "87vh",marginTop:"10px"}}>
                        <FormGroup style={{ marginLeft:"10px",marginRight:"10px",marginTop:"20px"}}>
                            <Label for="firstname">First name</Label>
                            <Input type="text" name="fname" id="Firstname" placeholder="" style={{ border: "1px solid black" }} onChange={inputvalue} />
                        </FormGroup>
                        <FormGroup style={{ marginLeft:"10px",marginRight:"10px"}}>
                            <Label for="lastname">Last name</Label>
                            <Input type="text" name="lname" id="Lastname" placeholder="" style={{ border: "1px solid black" }} onChange={inputvalue} />

                        </FormGroup>
                        <FormGroup style={{ marginLeft:"10px",marginRight:"10px"}}>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="Email" placeholder="" style={{ border: "1px solid black" }} onChange={inputvalue} />

                        </FormGroup>
                        <FormGroup style={{ marginLeft:"10px",marginRight:"10px"}}>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="Password" placeholder="" style={{ border: "1px solid black" }} onChange={inputvalue} />

                        </FormGroup>
                        <FormGroup className="text-center" style={{ marginLeft:"10px",marginRight:"10px"}}><Button type="submit" style={{ width: "100%", backgroundColor: "#003366", color: "white" }}>Sign Up</Button></FormGroup>

                   
                    
                        <FormGroup style={{ marginLeft:"10px",marginRight:"10px"}}><Button onClick={googleSignInPopup} style={{ width: "100%", backgroundColor: "#003366" }}>Continue with Google</Button></FormGroup>
                        <FormGroup className="text-center" style={{ marginLeft:"10px",marginRight:"10px"}}><Label>Already have an account?
                        <a href="/">Login</a></Label>
                        </FormGroup>
                    </Form>
                
                
            </div>
        </div>
    )

};

export default Signup;