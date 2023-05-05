
import {useState,useContext} from "react";
import movieFinder from "../images/movieFinderIndex.png";
import userIMG from "../images/user-icon.jpg";
import { useNavigate } from "react-router-dom";
import { getMovieList, removeList } from "../functions/list";
import AppContext from "../context/contextApi";
import SearchMovieList from "./SearchList";
import { constants } from "../consts/Consts";


export default function Navbar(){

    const {modalShow,setModalShow,selectedMovie,setSelectedMovie}=useContext(AppContext);
    const [inputSearch,setInputSearch]=useState()
    const [movieList,setMovieList]=useState()
    const navigate=useNavigate();
    
  
    
    
    
   


   const handleInputOnchange=(event)=>{
    
    setInputSearch(event.target.value);
   

    if (inputSearch!==undefined){
        if(inputSearch.length>=3){
           

            console.log(selectedMovie)
          removeList()
            getMovieList(event.target.value,setModalShow,setSelectedMovie);
            
        }else{
            removeList();
        
        }
        
    }
   }


 

    const handleLogOut=()=>{

        navigate(constants.PAGE.LOGIN);
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
                  <img className="user-icon" src={JSON.parse(window.localStorage.getItem("accessToken")).user.user_img} alt="user" />
               </div>
            </div>      
            

        </div>
       
    
   
    
      
    

     </nav>
     
     </>
    )
}