import {useState, useEffect} from "react";
import { getMostPopulars } from "../functions/getMovies";
import env from "react-dotenv";
export default function Banner(){

    useEffect(() => {
       getMostPopulars();
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