
import {useState,useContext} from "react";
import movieFinder from "../images/movieFinderIndex.png";
import userIMG from "../images/user-icon.jpg";
import { useNavigate } from "react-router-dom";
import { getMovieList, removeList } from "../functions/list";
import AppContext from "../context/contextApi";
import SearchMovieList from "./searchList";


export default function Navbar(){

    const {modalShow,setModalShow}=useContext(AppContext);
    const [inputSearch,setInputSearch]=useState()
    const navigate=useNavigate();
    
  
    
    
    
   


   const handleInputOnchange=(event)=>{
    
    setInputSearch(event.target.value);

    if (inputSearch!==undefined){
        if(inputSearch.length>=3){
         
            getMovieList(inputSearch,setModalShow);
        }else{
            removeList();
            console.log(modalShow)
        }
        
    }
   }


 

    const handleLogOut=()=>{

        navigate("/login");
    }




  

    return(<>
        <nav  id="nav">
        <div className="nav-grid">
           <div className="img1" >
           <img className="movie-finder" src={movieFinder}  alt="userPin"/>
           </div> 
           <div>
            <input id="search" name="search" onChange={handleInputOnchange} placeholder="Search movies..." type="text" />
        
           <SearchMovieList/>
           </div>
           
            <div id="logPin" className="log">
                <div>
                    <span onClick={handleLogOut} id="logout" >LOG OUT</span>
                </div>
               <div>
                  <img className="user-icon" src={userIMG} alt="user" />
               </div>
            </div>      
            

        </div>
       
    
   
    
      
    

     </nav>
     
     </>
    )
}