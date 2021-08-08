import React, { useState } from "react";
import { Button, Card, Col, Container, FormGroup, Input, Jumbotron, Label, NavLink, Row } from "reactstrap";
import Homenav from "./Homenav";
import FileSaver from 'file-saver';
import EnhancedEncryptionRoundedIcon from '@material-ui/icons/EnhancedEncryptionRounded';
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';



toast.configure()
const alerttoast=(name)=>{
  toast.success(name,{position: "top-center"});
}

const Encrypt=()=>{
    const [selectetdFile, setSelectedFile] = useState([]);
    const [fileBase64String, setFileBase64String] = useState("");
    const [key,setkey]=useState("");
    const [filename,setfilename]=useState("")

    const Getkey=(e)=>{
    setkey(e.target.value)
      console.log(e.target.value)
    
      
    }
    const onFileChange = (e) => {
      setSelectedFile(e.target.files);
    
      setfilename(e.target.files[0].name)
      console.log(filename)
     
      document.getElementById('second').style="display:block"
      document.getElementById('first').style="display:none"
     
    };
  
    const encodeFileBase64 = (file) => {
      var reader = new FileReader();
      if (file) {
        reader.readAsDataURL(file);
        reader.onload = () => {
          var Base64 = reader.result;
          console.log(Base64);
          setFileBase64String(Base64);
        };
        reader.onerror = (error) => {
          console.log("error: ", error);
        };
      }
    };
  
    encodeFileBase64(selectetdFile[0]);
  
   
  function download(){
    var CryptoJS = require("crypto-js");
 
    // Encrypt
  
   
    var ciphertext = CryptoJS.AES.encrypt(`${fileBase64String}`, `${key}`).toString();
     
    
   
   
      var blob = new Blob([ciphertext], {type: "text/plain;charset=utf-8"});
FileSaver.saveAs(blob, filename);
alerttoast("Your Image is Successfully Encypyed")
document.getElementById('second').style="display:none"
document.getElementById('third').style="display:block"
document.getElementById('first').style="display:none"
// ReactDOM.render(<Router><Encrypt/></Router>,document.getElementById('root'))
  }
    return(
        <div style={{ height: "100%", backgroundColor: "#426b90", border: "5px solid black" }}>
         
            <Homenav/>
            <div className="text-center" style={{color:"white"}}>
           
                <Container >
                   
                        <h1 className="mt-3">ENCRYPTION</h1>
                        
                        <div className="text-center " style={{ height:"90vh", display:"flex",justifyContent:"center",alignItems:"center",marginTop:'-3%'}}>
                           
                           
                              <section id="first" style={{display:"block"}} >
                              <Jumbotron id="first"  style={{backgroundColor:"FFF5EE",border:"2px solid black", height:"400px",width:"600px",color:'black'}}>
                              <h3>Step-1</h3>
                            <h6 style={{marginTop:"30px",marginBottom:"20px"}}>Choose which file to encrypt</h6>
                            <h7>An encrypted copy of the file will be generated. No data is sent to our server.</h7>
                            <Input className="mt-4 "style={{width:"40%",marginLeft:"30%", marginTop:"5px",border:"2px solid black",backgroundColor:"#32CD32" ,color:'black' }} type='file'   onChange={onFileChange}/>       
                            </Jumbotron>
                            </section>
                            
                           
                            <section id="second" style={{display:"none"}}>
                            <Jumbotron   style={{backgroundColor:"FFF5EE",border:"2px solid black", height:"400px",width:"600px",color:'black'}}>
                            <h3 style={{marginTop:'0%'}}>Step-2</h3>
                            <h6 style={{marginTop:"30px",marginBottom:"20px"}}>Enter a pass phrase</h6>
                            <h7>This phrase will be used as an encryption key. Write it down or remember it; you won't be able to restore the file without it.</h7>
                            <Input  type="password" name="key" id="Key" placeholder="Enter a key" style={{width:"40%" , marginTop:"5%",marginLeft:"30%" ,height:"7vh" ,border:"2px solid black"}} onChange={Getkey}/>
                            <Button className="mt-4 " style={{width:"30%",backgroundColor: "#32CD32" ,height:"7vh",border:"2px solid black"}} onClick={download}> <EnhancedEncryptionRoundedIcon className="mr-2"/>     ENCRYPT</Button>
                            </Jumbotron>
                            </section>

                            <section id="third" style={{display:'none'}}>
                            <Jumbotron style={{backgroundColor:"FFF5EE",border:"2px solid black", height:"400px",width:"600px",color:'black'}}>
                            <h4 className="mb-4">You Successfully Encypted Your Image  </h4>
                            <h1 style={{fontSize:"650%"}}> 😎 </h1>

                            <h5 className="mt-5">Click on the below icon to return to the home page</h5>
                           
                            <NavLink href="./Home" style={{color:"white",fontSize:"120%"}}><ArrowBackIcon style={{fontSize:'50px',borderRadius:"100%" ,backgroundColor:"black"}}/></NavLink>
                            
                            </Jumbotron>
                            </section>
                            
                       
                        </div>
                          
                        
                </Container>
          
               
            </div>
           


        </div>
        
    )
    
    
};

export default Encrypt