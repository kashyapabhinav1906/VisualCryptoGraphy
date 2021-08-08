import React from "react";
import Homenav from "./Homenav";


const About = () => {
    
    return (
        <div style={{ height: "100vh", backgroundColor: "#426b90", border: "5px solid black" }}>
            <Homenav />
            <div style={{display: "flex", justifyContent: "center", height: "90vh" }}>
                <div className="text-center mt-5" style={{color:"white", width:"70%",height:"60vh" }}>
                <h1 className="mt-5">ABOUT</h1>
                <p>
                    As a part of the curriculum and in order to gain practical knowledge in the field of
                    software and system engineering methods and techniques, we are required to
                    make an overview document of our course project “IMAGE CRYPTOGRAPHY”.
                    </p>

                <p>
                    In this project we will be including various concepts of software engineering and
                    checking out on the effects and implications regarding this.
                    </p>

                <p>
                    Doing this Project will help us in enhancing our knowledge regarding the work in
                    the quality attributes in software engineering.
                    </p>
                
                    
                

               
            </div>
            </div>
        </div>
    )
};

export default About;