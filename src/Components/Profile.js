import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import Homenav from "./Homenav";
import pr from "./Image/pr.jpg";
import firebase, { auth } from "./Firebase";
import "firebase/auth";
import 'firebase/firestore';
import "firebase/storage";
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import Tooltip from '@material-ui/core/Tooltip'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 


toast.configure()
const alerttoast=(name)=>{
  toast(name);
}


const Profile = () => {

    const [form, setform] = useState({
        firstname: '', lastname: '', email: '', about: '', collegename: ''
    });

    const [val, setval] = useState({
        firstval: '', lastval: '', emailval: '', aboutval: '', collegeval: ''
    });

    const [profileimage, setprofileimage] = useState(pr)


    const getuser = () => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                var db = firebase.firestore();
                var docRef = db.collection("Users").doc(user.email);

                docRef.get().then((doc) => {
                    if (doc.exists) {
                        setval(() => {
                            return {
                                firstval: doc.data().Firstname,
                                lastval: doc.data().Lastname,
                                emailval: doc.data().Email,
                                aboutval: doc.data().About,
                                collegeval: doc.data().College



                            }
                        })
                        console.log("Document data:", doc.data());

                    } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document!");
                    }
                }).catch((error) => {
                    alert("Error getting document:", error);
                });
            } else {
                // No user is signed in.
            }
        });
    }

    useEffect(() => {
        getuser()
        updateprofile()
    }, [])


    const updateprofile = () => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                const storageRef = firebase.storage().ref();
                storageRef.child('users/' + user.email + '/profile.jpg').getDownloadURL()
                    .then((url) => {
                        setprofileimage(url)
                    })
                    .catch((error) => {
                        console.log(error)
                    });
            } else {
                // No user is signed in.
            }
        });
    }





    const inputset = (event) => {
        const { value, name } = event.target;
        setform((preval) => {
            if (name === 'firstname') {
                return {
                    firstname: value,
                    lastname: preval.lastname,
                    email: preval.email,
                    about: preval.about,
                    collegename: preval.collegename
                }
            }
            else if (name === 'lastname') {
                return {
                    firstname: preval.firstname,
                    lastname: value,
                    email: preval.email,
                    about: preval.about,
                    collegename: preval.collegename
                }
            }
            else if (name === 'email') {
                return {
                    firstname: preval.firstname,
                    lastname: preval.lastname,
                    email: value,
                    about: preval.about,
                    collegename: preval.collegename
                }

            }
            else if (name === 'about') {
                return {
                    firstname: preval.firstname,
                    lastname: preval.lastname,
                    email: preval.email,
                    about: value,
                    collegename: preval.collegename

                }
            }
            else if (name === 'collegename') {
                return {
                    firstname: preval.firstname,
                    lastname: preval.lastname,
                    email: preval.email,
                    about: preval.about,
                    collegename: value

                }
            }
        }

        )
    }

    const onsubmit = (event) => {
        event.preventDefault();

        var db = firebase.firestore();
        // if((data.Firstname!='' && data.Lastname!='' && data.Email!='' && data.About!='' && data.College!='')){

        var data = {
            Firstname: form.firstname,
            Lastname: form.lastname,
            Email: form.email,
            About: form.about,
            College: form.collegename
        }
        if(data.Firstname==''){
            data.Firstname=val.firstval
        }
        if(data.Lastname==''){
            data.Lastname=val.lastval
        }
        if(data.Email==''){
            data.Email=val.emailval
        }
        if(data.About==''){
            data.About=val.aboutval
        }
        if(data.College==''){
            data.College=val.collegeval
        }
        console.log(data)
        db.collection("Users").doc(data.Email).set(data).then(() => {

            console.log("Document written with ID: ", data.Email);
            alerttoast("Profile Saved")
        });
        // }
        // else if((data.Firstname=='' || data.Lastname=='' || data.Email=='' || data.About=='' || data.College=='')){
        //     alert("Now changes Made")
        // }



    }





    const handleimagechange = (event) => {
        const image = event.target.files[0]

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                firebase.storage().ref('users/' + user.email + '/profile.jpg').put(image).then(function () {
                    console.log('successfully uploaded')
                })


                const storageRef = firebase.storage().ref();
                storageRef.child('users/' + user.email + '/profile.jpg').getDownloadURL()
                    .then((url) => {
                        setprofileimage(url)
                    })
                    .catch((error) => {
                        console.log(error)
                    });
            } else {
                // No user is signed in.
            }
        });




    }

    const handleeditpicture = () => {
        const fileinput = document.getElementById('imageinput')
        fileinput.click()
    }





    return (


        <div style={{ height: "100vh", backgroundColor: "#426b90", border: "5px solid black" }}>
            <Homenav />
            <div style={{ height: "90vh", color: " white", marginTop: "10px" }}>
                <h1 className="text-center">My Profile</h1>

                <Container style={{ marginTop: "40px" }}>
                    <Row>
                        <Col className="text-center" md={6}>

                            <div >
                                <Container style={{ border: "2px solid black", height: "150px", width: "150px", borderRadius: "100%", backgroundImage: `url(${profileimage})`, backgroundSize: "cover", backgroundPosition: "center" }}></Container>
                                <input type='file' id="imageinput" hidden='hidden' className="profile-image" onChange={handleimagechange} />

                                <Tooltip title="Edit profile picture" placement='top'>
                                    <IconButton onClick={handleeditpicture} className="button" style={{ color: 'blue', marginLeft: '20%', marginTop: '-5%' }}>
                                        <EditIcon color='danger' />
                                    </IconButton>
                                </Tooltip>

                            </div>
                            <div  >
                                <Button onClick={onsubmit} style={{ marginLeft: "2%", marginTop: '7%', border: "2px solid black", width: "12vw", height: "50px", backgroundColor: "#0c3b43" }} className="text-center">Save</Button>
                            </div>

                        </Col>
                        <Col md={6}>
                            <Form onSubmit={onsubmit}>
                                <FormGroup style={{ display: "flex" }} >
                                    <FormGroup>
                                        <Label for="name">
                                            First Name
                                </Label>
                                        <Input type="text" name="firstname" id="Name" style={{ border: "2px solid black" }} placeholder={val.firstval} onChange={inputset} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="name">
                                            Last Name
                                </Label>
                                        <Input type="text" name="lastname" id="LastName" style={{ border: "2px solid black" }} placeholder={val.lastval} onChange={inputset} />
                                    </FormGroup>
                                </FormGroup>
                                <FormGroup style={{ display: "flex" }}>
                                    <FormGroup>
                                        <Label for="email">
                                            Email Address
                                </Label>
                                        <Input type="email" name="email" id="Email" style={{ border: "2px solid black" }} placeholder={val.emailval} onChange={inputset} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="name">
                                            College/School
                                </Label>
                                        <Input type="text" name="collegename" id="CollegeName" style={{ border: "2px solid black" }} placeholder={val.collegeval} onChange={inputset} />
                                    </FormGroup>
                                </FormGroup>

                                <FormGroup>
                                    <Label for="message">
                                        About
                                </Label>

                                    <Input type="textarea" name="about" id="Message" style={{ height: "100px", border: "2px solid black" }} placeholder={val.aboutval} onChange={inputset} />

                                </FormGroup>



                            </Form>
                        </Col>
                    </Row>

                </Container>
            </div>
        </div>
    )

};

export default Profile;
