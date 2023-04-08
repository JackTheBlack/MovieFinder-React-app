import {useState, useEffect} from "react";
import { getMostPopulars } from "../functions/getMovies";
import { useEffectOnce } from "../customHooks/useEffectOnce";
import env from "react-dotenv";
import { removeList } from "../functions/list";
export default function Banner(){


 

    useEffectOnce(() => {
   
        getMostPopulars();
        console.log('i firsdsdsde once');
       
   
      
      }, []);


    return(
        
        <div id="banner" className="banner">
        <div className="banner-shadow">
          <div  className="banner-content">

        <div className="content" >
                  <div id="genre" className="content gender">
                      <span></span> 
             </div>


              <div id="starContainer" className="star-container">
           
              
              </div>


              <div>
              <div  id="title" className="content title">
           
            
           </div>
           <div id="overview" className="content overview">


              </div>
            
            
                
              </div>

              <div className="content watch">
                      <button id="watchButton" className="action-btn watch-button">Watch now </button> 
              </div>
              
        </div>
           
  </div>
</div>
</div>
    );
}