import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Jumbotron, Label } from "reactstrap";
import Loginnav from "./Loginnav";
import firebase from "firebase/app";
import "firebase/auth";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactDOM from 'react-dom';
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 


toast.configure()
const alerttoast=(name)=>{
  toast(name);
}

function sendPasswordReset(Email) {
    const email = Email;
    // [START auth_send_password_reset]
    firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            // Password reset email sent!
            alerttoast("Password reset Email sent", email);
            ReactDOM.render(<Router><Forgotpassword /></Router>, document.getElementById('root'));

            // ..
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
    // [END auth_send_password_reset]
}

const Forgotpassword = () => {

    const [state, setstate] = useState('')

    const inputval = (event) => {
        console.log(event.target.value);
        setstate(event.target.value)
    }

    const onsubmit = (event) => {
        event.preventDefault();
        sendPasswordReset(state)
    }


    function onChange(value) {
        console.log("Captcha value:", value);
      }


    return (
        <div style={{ height: "100vh", backgroundColor: "#4682B4" }}>
            <Loginnav />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "85vh" }}>
                <Jumbotron className="text-center" style={{ width: "400px" }}>
                    <h1>Forgot Password</h1>
                    <p>No Problem! Enter your email and username below and we will send you an email with instruction to reseet your password</p>
                    <Form onSubmit={onsubmit}>
                        <FormGroup>
                            <Input type="text" name="name" id="username" placeholder="Enter your Username" style={{ border: "1px solid black" }} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="email" name="email" id="Email" placeholder="Enter your Email" style={{ border: "1px solid black" }} onChange={inputval} />
                        </FormGroup>
                        <div >
                            <ReCAPTCHA
                                sitekey="6Lc9t9UaAAAAAJm_1uDiINBTYZdsc1GkDrW6W_L0"
                                onChange={onChange}
                            />
                        </div>
                        <Button type='submit' color="success" style={{ width: "100%", border: "1px solid black" ,marginTop:'3%'}}>Send Reset Link</Button>
                        <FormGroup>
                            <Label className="mr-2">Back to</Label>
                            <a href="/">Login</a>
                        </FormGroup>
                    </Form>
                </Jumbotron>
            </div>
        </div>
    )
};

export default Forgotpassword;