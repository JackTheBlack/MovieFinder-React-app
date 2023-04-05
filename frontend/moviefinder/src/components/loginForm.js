import React,{useState,useEffect, useRef} from "react";
import title from "../images/Title.png";
import {useNavigate} from "react-router-dom";
import { validatePassword, validateMail } from "../functions/validation";
import facebook from "../images/facebookLogo.png"
import google from "../images/googleLogo.png";
import twitter from "../images/twitterLogo.png";
import eye1 from "../images/ellipse.png";
import env from "react-dotenv";

export default function LoginForm(){

  const navigate=useNavigate();
     
   
       

      const passwordRef=useRef();
      const mailInput=document.getElementById("email");
      ///////////////////***Messages Hide States *//////////////////////////////////   
      const [emailErrorHide,setEmailErrorHide]=useState(true);
      const [passwordErrorHide,setPasswordErrorHide]=useState(true);
      const [loginErrorHide,setLoginErrorHide]=useState(true); 
      const [password,setPassword]=useState(""); 
      const [emial,setEmail]=useState("");



    const [inputType,setInputType]=useState("password");

//////functions///////////////////////////////////////////////////

    const handleEyeOnClick=()=>{
     if(inputType==="password"){
       setInputType("text");
 
     }else{
       setInputType("password");
     }
    }

    const validations=()=>{

      
    
      if(!validatePassword(passwordRef.current.value)){
        let passwordError=document.getElementById("error-password");
      
       passwordRef.current.style.border="3px solid rgb(232, 11, 11)";    
  
      setPasswordErrorHide(false);
      }else{
        passwordRef.current.style.border="3px solid ";   
        setPasswordErrorHide(true);
        if (!validateMail(mailInput.value)){
          
       
            setEmailErrorHide(false);
            mailInput.style.border="3px solid rgb(232, 11, 11)";    
      
        }else{
            setEmailErrorHide(true);
            mailInput.style.border="3px solid ";

        }
      }

       
  
  
   }
  

   const handleLogin=async()=>{

    const encodedParams = new URLSearchParams();
   
    encodedParams.append("email",emial);
    encodedParams.append("password", password)
       

    
    const options = {
        method: 'POST',
        body: encodedParams
    };
  

       
        await fetch(`${process.env.REACT_APP_LOGIN_REQUEST}`, options)
        .then(response => response.json())
        .then(response =>navigate("/"))
        .catch(err => console.log(err));
    
    
   

   }

   const handleEmail=(event)=>{
      setEmail(event.target.value);
      
   }
   const handlePassword=(event)=>{
    setPassword(event.target.value);
  
 }


    return(
        <div className="login-form">
        
         <img className="title" src={title} alt="title:MovieFinder"/>

      {/* esto es un comentario*/ }

       <div className="inputs">
        <input id="email" onChange={handleEmail} className="input1" placeholder="Email" type="text" />
        <div className="password">
        <input id="password" onChange={handlePassword}  className="input2"  placeholder="Password" type={inputType} />
      
       <img id="eye2" className="ellipse" onClick={()=>handleEyeOnClick()} src={eye1} alt="icon-eye"  />
       
      
  {/*   
     ************** I dont remember what this does************************ 
  <div hidden={!hidde}>

       <img id="eye" className="ellipse2"  onClick={()=>setHidden(false)} src={eye2} alt="icon-eye" onfocusin="(email.type='teext')"/>
       </div>
      */}   
    </div>     
     
 </div>
        <div className="extra-buttons">
          <div className="remember">
          
          
            <label>   <input className="rememberMe" type="checkbox" id="rememberMe"   value="Remember me"/>  Remeber Me</label>
          </div>
         <div>
          <span className="span2">Forgot your password?</span>
         </div>
           
        </div>
        <div className="login">
            <button  id="login-btn" onClick={handleLogin} className="login-button" >Log in</button>
            <span hidden={passwordErrorHide} id="error-password"> invalid Password  format</span>
            <span hidden={emailErrorHide} id="error-email"> invalid Email format</span>
            <span hidden={loginErrorHide} id="error-response"> Error introducing Email or password </span>
            
        
        </div>
        <div className="register">
          <span id="not-registered">Not registered yet? </span> <span className="register-now"> Register Now</span>
        </div>

      
  
    <div className="cut line1"></div> <div className="cut or">or</div> <div className="cut line2"></div>

    <button className="log-btns facebook" >Login with facebook   </button>
    <img className="facebookLogo" src={facebook}  alt="facebook logo"/>
    <button className="log-btns twitter" >Login with Twitter  </button>
    <img className="twitterLogo" src={twitter}  alt="twitter logo"/>
    <button className="log-btns google" >Login with Google   </button>
    <img className="googleLogo" src={google}  alt="google logo"/>
 
</div>

    )
    

}