import { getMostPopulars } from "../functions/getMovies";
import { useEffectOnce } from "../customHooks/useEffectOnce";
import { useContext,useRef } from "react";
import AppContext from "../context/contextApi";
export default function Banner(){


  

  const {modalShow,setModalShow,movies,setMovies,setSelectedMovie}=useContext(AppContext);

    useEffectOnce(() => {
   
        getMostPopulars(setMovies);
     
      }, []);

      
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


                    <div id="starContainer" className="star-container">
                
                    </div>


                
                    <div  id="title" className="titleBanner">

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