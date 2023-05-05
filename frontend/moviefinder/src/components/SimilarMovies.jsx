import { useRef,useState,useEffect,useContext} from "react";
import AppContext from "../context/contextApi";
import ModalCard from "./ModalCard";

export function SimilarMovies({id}){


    const {setSelectedMovie}=useContext(AppContext);

    const cardModalContainer=useRef(null);
    const [similarMovies,setSimilarMovies]=useState(null);




    const getSimilar=async(id)=>{


    
        const options = {
            method: 'GET'
          
        }; 
       
        await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,options)
            .then(response => response.json())
            .then(response =>( setSimilarMovies(response.results.slice(0,3)) 
                            ))
            .catch(err => console.log());
     
       
     }


useEffect(()=>{
getSimilar(id);

})
    return(
<>
<div id="cardModalContainer" ref={cardModalContainer} className="card-modal-container">
                    {((similarMovies!==null)&&(similarMovies!==undefined)) ?
                    
                    <>
                 {similarMovies.map((item)=>
                
                    <div  onClick={()=>setSelectedMovie(item)} key={item.id.toString()}>   <ModalCard item={item}/> </div>
               
             
                  )}
                    </>:<></> }


                    </div>
</>

    )

}