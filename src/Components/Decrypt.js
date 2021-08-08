import React, { useState } from "react";
import { Button, Container, Input, Jumbotron, NavLink} from "reactstrap";
import Homenav from "./Homenav";
import axios from 'axios'
import EnhancedEncryptionRoundedIcon from '@material-ui/icons/EnhancedEncryptionRounded';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route}  from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';



toast.configure()
const alerttoast=(name)=>{
  toast.success(name,{position: "top-center"});
}
toast.configure()
const alerttoastfail=(name)=>{
  toast.error(name,{position: "top-center"});
}

const Decrypt = () => {

  const [fileBase64String, setFileBase64String] = useState("");
  const [key, setkey] = useState("");
  const [filename,setfilename]=useState("")

  const Getkey = (e) => {
    setkey(e.target.value);
  }

  const onFileChange = (e) => {
    // setFileBase64String(e.target.files[0]);
    
    let data = new FileReader();
    data.readAsText(e.target.files[0]);
    data.onload = function () {
      setFileBase64String(data.result)
      setfilename(e.target.files[0].name)
       document.getElementById('second').style="display:block"
    document.getElementById('first').style="display:none"

    }
  
   



  };


  function download() {

    console.log(fileBase64String)
    var CryptoJS = require("crypto-js");


    // Decrypt
    var bytes = CryptoJS.AES.decrypt(`${fileBase64String}`, `${key}`);
    // console.log("Bytes"+bytes.toString(CryptoJS.enc.Utf8)); 
    
      // console.log("bytes"+bytes.toString(CryptoJS.enc.Utf8))
  
      var originalText = bytes.toString(CryptoJS.enc.Utf8);
   
      
axios({

      url: `${originalText}`, //your url
      method: 'GET',
      responseType: 'blob', // important
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename); //or any other extension
      document.body.appendChild(link);
      link.click();
      alerttoast("Image Successfully Decrypted")
      document.getElementById('second').style="display:none"
document.getElementById('third').style="display:block"
document.getElementById('first').style="display:none"
    })
    // .catch(err => alerttoastfail("Wrong Key Entered"));;

    ReactDOM.render(<Router><Decrypt/></Router>, document.getElementById('root'));
  }
  return (
    <div style={{ height: "100vh", backgroundColor: "#426b90", border: "5px solid black" }}>

      <Homenav />
      <div className="text-center" style={{ color: "white" }}>
        <Container>

          <h1>DECRYPTION</h1>

          <div className="text-center " style={{ height:"90vh", display:"flex",justifyContent:"center",alignItems:"center",marginTop:'-3%'}}>
                           
                           
                           <section id="first" style={{display:"block"}} >
                           <Jumbotron id="first"  style={{backgroundColor:"FFF5EE",border:"2px solid black", height:"400px",width:"600px",color:'black'}}>
                           <h3>Step-1</h3>
                         <h6 style={{marginTop:"30px",marginBottom:"20px"}}>Choose which file to decrypt</h6>
                         <h7>Only files encrypted by this tool are accepted.</h7>
                         <Input className="mt-4 "style={{width:"40%",marginLeft:"30%", marginTop:"5px",border:"2px solid black",backgroundColor:"#32CD32" ,color:'black' }} type='file'   onChange={onFileChange}/>       
                         </Jumbotron>
                         </section>
                         
                        
                         <section id="second" style={{display:"none"}} >
                         <Jumbotron   style={{backgroundColor:"FFF5EE",border:"2px solid black", height:"400px",width:"600px",color:'black'}}>
                         <h3 style={{marginTop:'0%'}}>Step-2</h3>
                         <h6 style={{marginTop:"30px",marginBottom:"20px"}}>Enter a pass phrase</h6>
                         <h7>Enter the pass phrase that was used to encrypt this file. It is not possible to decrypt it without it.</h7>
                         <Input  type="password" name="key" id="Key" placeholder="Enter a key" style={{width:"40%" , marginTop:"5%",marginLeft:"30%" ,height:"7vh" ,border:"2px solid black"}} onChange={Getkey}/>
                         <Button className="mt-4 " style={{width:"30%",backgroundColor: "#32CD32" ,height:"7vh",border:"2px solid black"}} onClick={download}> <EnhancedEncryptionRoundedIcon className="mr-2"/> DECRYPT</Button>
                         </Jumbotron>
                         </section>

                         <section id="third" style={{display:"none"}}>
                         <Jumbotron style={{backgroundColor:"FFF5EE",border:"2px solid black", height:"400px",width:"600px",color:'black'}}>
                         <h4 className="mb-4">You Successfully Decypted Your File  </h4>
                         <InsertEmoticonIcon style={{fontSize:'110px',borderRadius:"100%" ,backgroundColor:"#FFD700", color:'black'}}/>

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

export default Decrypt