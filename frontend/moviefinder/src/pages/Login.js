import React ,{useEffect,useState} from "react";
import './Login.css';
import title from "../images/Title.png";
import movieFinder from "../images/MOVIEfinder.png"
import facebook from "../images/facebookLogo.png"
import eye1 from "../images/ellipse.png";
import eye2 from "../images/ellipse2.png";
import { getActiveElement } from "@testing-library/user-event/dist/utils";
export default function Login(){

    useEffect(() => {
        document.title = 'Movie Finder Login';
      }, []);


   ///////////////////***REGULAR EXPRESIONS***////////////////////////////////   
      const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      const passFormat=/^([a-zA-Z0-9_-]){8,20}$/;
      
   ///////////////////***Messages Hide States *//////////////////////////////////   
      const [emailErrorHide,setEmailErrorHide]=useState(true);
      const [passwordErrorHide,setPasswordErrorHide]=useState(true);
      const [loginErrorHide,setLoginErrorHide]=useState(true); 
      
      
      
      ////// este no se si lo deberia usar//////////// 
      const [hidde,setHidden]=useState(false);


      var email=document.getElementById("email");
      const [inputType,setInputType]=useState("password");

 const handleEyeOnClick=()=>{
  if(inputType==="password"){
    setInputType("text");
  }else{
    setInputType("password");
  }
 }


 const validations=()=>{

      let passwordError=document.getElementById("error-password");
      let passwordInput=document.getElementById("password");

      passwordInput.style.border="3px solid rgb(232, 11, 11)";    

    setPasswordErrorHide(false);


 }

      return(<>
    
<img className="moviefinder" src={movieFinder} alt="title:MovieFinder"/>

<div className="login-form">
        
         <img className="title" src={title} alt="title:MovieFinder"/>

      

       <div className="inputs">
        <input id="email" className="input1" placeholder="Email" type="text" />
        <div className="password">
        <input id="password" className="input2" placeholder="Password" type={inputType} />
      
       <img id="eye2" className="ellipse" onClick={()=>handleEyeOnClick()} src={eye1} alt="icon-eye" onMouseEnter={()=>console.log("hola")} />
       
      
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
            <button  id="login-btn" onClick={()=>validations()} className="login-button" >Log in</button>
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
    <img className="twitterLogo" src="../images/twitterLogo.png"  alt="twitter logo"/>
    <button className="log-btns google" >Login with Google   </button>
    <img className="googleLogo" src="../images/googleLogo.png"  alt="google logo"/>
 
</div>

      </>);

}

