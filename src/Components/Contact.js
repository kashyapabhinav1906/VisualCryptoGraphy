import React, { useState } from "react";
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import Homenav from "./Homenav";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si"
import 'firebase/firestore';
import firebase from "./Firebase";
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route}  from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 


toast.configure()
const alerttoast=(name)=>{
  toast.success(name,{
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
}


const Contact = () => {

    const [state, setstate] = useState({
        name: '', email: '', message: ''
    })

    const inputvalue = (event) => {
        const { value, name } = event.target;
        setstate((prev) => {

            if (name == 'name') {
                return {
                    name: value,
                    email: prev.email,
                    message: prev.message
                }

            }
            else if (name == 'email') {
                return {
                    name: prev.name,
                    email: value,
                    message: prev.message
                }

            }
            else if (name == 'message') {
                return {
                    name: prev.name,
                    email: prev.email,
                    message: value
                }

            }

        });


    }

    const onsubmit = (event) => {

        event.preventDefault();

        var db = firebase.firestore();
        var data = {
            Email: state.email,
            Name: state.name,
            Message: state.message
            
        };
        db.collection("Feedback").doc(state.name).set(data).then(() => {

            console.log("Document written with ID: ", state.name);
            
            ReactDOM.render(<Router><Contact/></Router>, document.getElementById('root'));
            alerttoast("Thanks for contacting us we will reach to you as soon as possible")
            
        });
        
    }



    return (

        <div style={{ height: "100vh", backgroundColor: "#426b90", border: "5px solid black" }}>
            <Homenav />
            <div style={{ height: "90vh", color: " white" }}>
                <h1 className="text-center">Contact Us</h1>
                <p className="text-center">
                    Got a problem? we'd love to hear from you
                    Send us a message and we'll respond as soon as possible.
                </p>
                <Container style={{ marginTop: "40px" }}>
                    <Row>
                        <Col md={6}>

                            <Form onSubmit={onsubmit}>
                                <FormGroup  >
                                    <Label for="name">
                                        Name
                                </Label>
                                    <Input type="text" name="name" id="Name" style={{ border: "2px solid black" }} onChange={inputvalue} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">
                                        Email Address
                                </Label>
                                    <Input type="email" name="email" id="Email" style={{ border: "2px solid black" }} onChange={inputvalue} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="message">
                                        Message
                                </Label>

                                    <Input type="textarea" name="message" id="Message" style={{ height: "100px", border: "2px solid black" }} onChange={inputvalue} />

                                </FormGroup>
                                <Button type='submit' style={{ marginLeft: "15%", border: "2px solid black", width: "25vw", height: "50px", backgroundColor: "#0c3b43" }} className="text-center">Send Message</Button>
                            </Form>
                        </Col>
                        <Col md={6}>
                            <h1>

                                <br />
                                <div  >

                                    <h5>Abhinav Kashyap</h5>
                                    <a href="https://github.com/kashyapabhinav1906" > <FaGithub style={{ margin: "5px", color: "white" }} /></a>
                                    <a href="https://www.linkedin.com/in/abhinav-kashyap-4b73721b0/"><FaLinkedin style={{ margin: "5px", color: "white" }} /></a>
                                    <a href="https://www.instagram.com/ak_abhinavk47/"> <FaInstagram style={{ margin: "5px", color: "white" }} /></a>
                                    <a href="https://www.facebook.com/profile.php?id=100006633495839"> <FaFacebookSquare style={{ margin: "5px", color: "white" }} /></a>
                                    <a href="mailto:kashyap.1@iitj.ac.in"> <SiGmail style={{ margin: "5px", color: "white" }} /></a>
                                </div>
                                <br />
                                <div>

                                    <h5>Abhishek Jamhoriya</h5>
                                    <a href="https://github.com/AbhishekJamhoriya" > <FaGithub style={{ margin: "5px", color: "white" }} /> </a>
                                    <a href="https://www.linkedin.com/in/abhishek-jamhoriya-1026121b0/"><FaLinkedin style={{ margin: "5px", color: "white" }} /></a>
                                    <a href="https://www.instagram.com/abhishek_2_1_0_2/"> <FaInstagram style={{ margin: "5px", color: "white" }} /></a>
                                    <a href="https://www.facebook.com/abhi.jamhoria"> <FaFacebookSquare style={{ margin: "5px", color: "white" }} /></a>
                                    <a href="mailto:jamhoriya.1@iitj.ac.in"> <SiGmail style={{ margin: "5px", color: "white" }} /></a>

                                </div>

                            </h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

    )
};

export default Contact;