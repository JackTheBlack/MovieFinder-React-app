import React ,{useEffect,useState} from "react";
import './Login.css';
import movieFinder from "../images/MOVIEfinder.png"
import LoginForm from "../components/LoginForm";
import { Helmet } from "react-helmet";
//import { getActiveElement } from "@testing-library/user-event/dist/utils";
export default function Login(){

    useEffect(() => {
        document.title = 'Movie Finder Login';
        
      }, []);



      ////// este no se si lo deberia usar//////////// 
      const [hidde,setHidden]=useState(false);


      var email=document.getElementById("email");
      const img=process.env.REACT_APP_POSTER_PATH+JSON.parse(localStorage.getItem('movies'))[1].poster_path;


 
      return(< >
      <Helmet 
>
<link rel="icon" type="image/png" href={img} sizes="32x32" />

</Helmet>
    <div  className="loginBack" >
    <img src={movieFinder} alt="title:MovieFinder"/><br></br>
    <LoginForm/>
    </div>
    



      </>);

}

