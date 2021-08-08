import React from "react";
import { Button, Container } from "reactstrap";
import {Link} from "react-router-dom"
import Homenav from "./Homenav";
import EnhancedEncryptionRoundedIcon from '@material-ui/icons/EnhancedEncryptionRounded';
import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded';

const Home = () => {
    return (
        <div style={{height:"100%", backgroundColor:"#426b90" , border:"5px solid black"}}>
          
            <Homenav />
            
            <div  style={{display:"flex" , justifyContent:"center", alignItems:"center" , height:"90vh" }}>
                <div >
                <h1 className='text-center mb-5' style={{color:'white'}}>What do you want to do?</h1>
                    <Container className="m-3">
                    <a className="text-center list-group-item list-group-item-action" href="./Encrypt" style={{width:"40vw",height:"10vh" ,fontSize:"150%",borderRadius:"40px" ,border:"2px solid black",backgroundColor:"#0c3b43",color:"white"}}>
                 <EnhancedEncryptionRoundedIcon /> Click to Encrypt an Image
                </a>
                </Container>
                <Container className="m-3">
                <a className="text-center list-group-item list-group-item-action" href="./Decrypt" style={{width:"40vw",height:"10vh"  ,fontSize:"150%",borderRadius:"40px" ,border:"2px solid black",backgroundColor:"#0c3b43",color:"white"}}>
                 <VpnKeyRoundedIcon/> Click to Decrypt an Image
                </a>
                </Container>
                 </div>
            </div>
        </div>
    )
};

export default Home;