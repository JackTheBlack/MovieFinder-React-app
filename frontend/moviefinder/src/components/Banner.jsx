
import { getMostPopulars } from "../functions/getMovies";
import { useEffectOnce } from "../customHooks/useEffectOnce";
import { useContext,useRef, useEffect } from "react";
import AppContext from "../context/contextApi";
import { getGenres } from "../functions/genres";
import { constants } from "../consts/Consts";
export default function Banner(){


  
  const banner=useRef();
  const {modalShow,setModalShow,movies,setMovies,setSelectedMovie}=useContext(AppContext);
 
  const title=useRef();
 
  const getMovie=async()=>{
    

    // window.sessionStorage.setItem("movies",JSON.stringify(response.results)),
                             //showMostPopular(3)
   
         const options = {
             method: 'GET'
           } 
        try{

        
         await fetch(`${process.env.REACT_APP_MOVIE_FINDER_API}`,options)
             .then(response => response.json())
             .then(response =>(console.log(movies),setMovies(response.results[0]) ))
             .catch(err => (console.log(err)));
     
     }catch(err){

     }
    
 }





   

      
      const handleClick=()=>{
        let dialog=document.getElementById("dialog");
        setSelectedMovie(movies)
        dialog.showModal();
     
      }


useEffectOnce(()=>{
  getMovie()
 
})


const changebanner=()=>{

  
    try{
      if(window.innerWidth<641){
       
        banner.current.style.backgroundImage="url(http://www.themoviedb.org/t/p/original"+movies.poster_path+")";
      
  
      }
   
     
  
      if(window.innerWidth>640){
      
        banner.current.style.backgroundImage="url(http://www.themoviedb.org/t/p/original"+movies.backdrop_path+")";
      
      } 
    }catch(error){

    }
  

  





}

useEffect(()=>{
  if(movies!==undefined){
    
    if(window.innerWidth<641){
     
      banner.current.style.backgroundImage="url(http://www.themoviedb.org/t/p/original"+movies.poster_path+")";
     

    }
  }
  window.addEventListener("resize",changebanner)
  })
 
  
 

    return(
        
        <div id="banner" ref={banner} className="banner">
        <div  id="bannerShadow" className="banner-shadow">
        

        <div className="content" >
                        <div id="genre" className="gender">
                         
                       </div>


                    <div id="starContainer"  className="star-container">

                    </div>


                
                    <div  ref={title} id="title" className="titleBanner">
                  
                    </div>
                
                
                <div id="overview" className="overview">
                

                    </div>
                  
                  
                      
                     

                    <div className="watch">
                            <button id="watchButton" onClick={handleClick} className="action-btn watch-button">Watch now </button> 
                    </div>
              
        </div>
           
  
</div>
</div>
    );
}