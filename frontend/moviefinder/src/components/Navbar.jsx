
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
        window.localStorage.removeItem("accessToken");
        window.sessionStorage.removeItem("accessToken");
        navigate(constants.PAGE.LOGIN);
    }




  

    return(<>
        <nav >
        <div className="nav-grid">
           <div className="img1" >
                <img className="movie-finder" src={movieFinder}  alt="movie-finder"/>
                </div> 
           <div >
            <input id="search" name="search" onChange={handleInputOnchange} placeholder="Search movies..." type="text" />
        
                  <SearchMovieList/>
           </div>
           
        {/*    <div  className="log">
                <div>
                    <div className="logText" onClick={handleLogOut} id="logout" >LOG OUT</div>
                </div>
               <div className="userIMG">
                {window.localStorage.getItem("accessToken")!==null?
                <>
                    <img className="user-icon" src={JSON.parse(window.localStorage.getItem("accessToken")).user.user_img} alt="user" />
             
                </>:
                <>
                 <img className="user-icon" src={JSON.parse(window.sessionStorage.getItem("accessToken")).user.user_img} alt="user" />
             
                </> }
                    </div>
            </div>      
            
   */}   
        </div>
       
 
   
    
      
    

     </nav>
     
     </>
    )
}