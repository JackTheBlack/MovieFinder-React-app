import { getMostPopulars } from "../functions/getMovies";
import { useEffectOnce } from "../customHooks/useEffectOnce";
import { useContext,useRef } from "react";
import AppContext from "../context/contextApi";
import { getGenres } from "../functions/genres";
export default function Banner(){


  

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
             .then(response =>(title.current.value=(response.results[0]),setMovies(response.results[0]) ))
             .catch(err => (console.log(err)));
     
     }catch(err){

     }
    
 }





    useEffectOnce(() => {

        getMostPopulars(setMovies);
        
      });

      
      const handleClick=()=>{
        let dialog=document.getElementById("dialog");
        setSelectedMovie(movies)
        dialog.showModal();
     
      }


    return(
        
        <div id="banner" className="banner">
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