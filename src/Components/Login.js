import React, { useState } from 'react';
import Loginnav from "./Loginnav.js";
import bgi from "./Image/bg.png";
import {BrowserRouter as Router,Route}  from "react-router-dom";
import {Jumbotron,Button,Form,FormGroup,Label,Input, Container} from "reactstrap";
import {auth} from "./Firebase";
import firebase from "firebase/app";
import "firebase/auth";
import Home from './Home.js';
import ReactDOM from 'react-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 


toast.configure()
const alerttoast=(name)=>{
  toast.success(name);
}

function signInWithEmailPassword(address) {

  var email = address.email;
  var password = address.password;
 
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      ReactDOM.render(<Router><Home/></Router>, document.getElementById('root'));
      console.log(user)
      alerttoast("Logged-in successfully");
      
     
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alerttoast(errorMessage)
    });
 
}


const Login= (props) => {
  const [emailaddress,passwordaddress]=useState({
    email:'',password:''
  });
  
  const handle=(event)=>{

    // const value=event.target.value;
    // const name=event.target.name;

    const {value,name}=event.target;
  
    passwordaddress((preValue)=>{
      if(name=='email'){
        return{
          email:value,
          password:preValue.password

        };}
        else{
          if(name=='password'){
            return{
              email:preValue.email,
              password:value
    
            };
        }
      }
    })
  }
  
  const onSubmit=(event)=>{
    event.preventDefault();
    signInWithEmailPassword(emailaddress);
      
  }
 
  
  return (
    <div style={{backgroundImage:`url(${bgi})`,backgroundSize:"cover"}}>
      <Loginnav/>
      <div className="text-center" style={{ height:"90vh", display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Jumbotron  style={{backgroundColor:"#4682B4",border:"2px solid black", height:"400px",width:"300px",mar:"ginTop0%"}}>
       

     
        <Form style={{color:"white"}} onSubmit={onSubmit}>
          <FormGroup style={{textAlign:"left"}}>
            <Label for="Email">Email</Label>
            <Input type="email" name="email" id="mail" placeholder="Enter Your Email" onChange={handle}/> 
          </FormGroup>
          
          <FormGroup style={{textAlign:"left"}} >
            <Label  for="Password">Password</Label>
            <Input type="password" name="password" id="password" placeholder="Enter Your Password" onChange={handle}/>
          </FormGroup>
          
          <Button  type="submit" style={{backgroundColor:"#003366" , width:"100%", marginTop:"30px",color:"white"}}>
                   Login
                </Button>
          <FormGroup className="m-4"> <a style={{color:"white"}} href="./Forgotpassword">forgot password</a></FormGroup>
         
          
        </Form>

      </Jumbotron>
      
      </div>
      </div>
  
  );
}

export default Login;