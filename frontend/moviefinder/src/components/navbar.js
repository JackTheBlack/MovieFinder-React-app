

import movieFinder from "../images/movieFinderIndex.png";
import userIMG from "../images/userPin.png";
export default function Navbar(){


    return(<>
        <nav id="nav">
        <div className="nav-grid">
           <div className="img1" >
           <img className="movie-finder" src={movieFinder}  alt="userPin"/>
           </div> 
           <div>
            <input id="search" name="search"   placeholder="Search movies..." type="text" >
        
              

        </input><br></br>
           </div>
           
            <div id="logPin" className="log">
                <div>
                    <span id="logout" >LOG OUT</span>
                </div>
               <div>
                  <img src={userIMG} alt="user" />
               </div>
            </div>      
            

        </div>
       
    
   
    
      
    

     </nav>
     
     </>
    )
}