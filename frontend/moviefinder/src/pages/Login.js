import React ,{useEffect,useState} from "react";
import './Login.css';
import movieFinder from "../images/MOVIEfinder.png"
import LoginForm from "../components/loginForm";
//import { getActiveElement } from "@testing-library/user-event/dist/utils";
export default function Login(){

    useEffect(() => {
        document.title = 'Movie Finder Login';
      }, []);



      ////// este no se si lo deberia usar//////////// 
      const [hidde,setHidden]=useState(false);


      var email=document.getElementById("email");
 


 
      return(< >
    <div  className="loginBack" >
    <img src={movieFinder} alt="title:MovieFinder"/><br></br>
    <LoginForm/>
    </div>
    



      </>);

}

