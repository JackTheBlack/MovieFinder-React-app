import Button from 'react-bootstrap/Button';
import { SimilarMovies } from './SimilarMovies';
import { Genres, getGenres } from '../functions/genres';
import  {useEffect,useContext,useRef,useState} from "react"
import AppContext from '../context/contextApi';
import { formatDate } from '../functions/formatDate';
import { bringVideos } from '../functions/videos';
import { constants } from '../consts/Consts';
import cross from "../images/cross.png"
export default function MovieDetails() {


  const banner=useRef(null)
 const genero=useRef(null);
const iframe=useRef(null);
const iframeContainer=useRef(null);
  const languaje=useRef(null);
  const [titleModal,setTitleModal]=useState();
  const [popularityModal,setPopularityModal]=useState();
  const[languageModal,setLanguageModal]=useState();
  const[overviewModal,SetOverviewModal]=useState();
  const[dateModal,setDateModal]=useState();
  const [genreModal,setGenreModal]=useState();
  const [id,setId]=useState(null);


 const{selectedMovie,setSelectedMovie}=useContext(AppContext)
 const [videoArray,setVideoArray]=useState([]);
 
 const genre=JSON.parse(window.localStorage.getItem("genres"));
  
 const languages=JSON.parse(window.localStorage.getItem("languajes")) 
  
 

useEffect(() => {


  if (selectedMovie!==""){
  console.log(selectedMovie)
    setVideoArray(bringVideos(selectedMovie.id));
    setId(selectedMovie.id);
    setDateModal(formatDate(selectedMovie.release_date));
    SetOverviewModal(selectedMovie.overview);
setLanguageModal(movieLanguage()) ; 
setGenreModal(movieGenre);
   setTitleModal(selectedMovie.title);
   setPopularityModal(selectedMovie.vote_average/2+"/5") 
  }
 
  let banner =document.getElementById("modalBanner"); 
  banner.style.backgroundImage=`url(${process.env.REACT_APP_POSTER_PATH+selectedMovie.backdrop_path})`;
  banner.style.backgroundSize="cover";
},[selectedMovie]);


 

 const movieGenre=()=>{  
  let result=[]
 try{
  for(let x=0;x<=selectedMovie.genre_ids.length-1;x++){
    for(let y=0;y<=genre.length-1;y++){
        if (selectedMovie.genre_ids[x]===genre[y].id){
            result.push(genre[y].name)

        }
    }
}
return result[0];



 }catch(err){

 }



}

const movieLanguage=()=>{  
  let result;
 try{

    for(let y=0;y<=languages.length-1;y++){
     
        if (selectedMovie.original_language===languages[y].iso_639_1){
        
            result=languages[y].english_name;

        }
  
}
return result;



 }catch(err){

 }



}


   


const handleCloseModal=()=>{
  let dialog=document.getElementById("dialog");
  closeIframe();
  dialog.close();
}  
  
const handleWatchTrainer=()=>{

 

  let trailerId;
  
 
 let videoArray=JSON.parse(window.localStorage.getItem("videosRelated"));
 console.log(videoArray)
  for(let i=0;i<videoArray.length;i++){
     
          if(videoArray[i].type==="Trailer"){
          
              trailerId=videoArray[i].key
              i=videoArray.length;
             console.log(trailerId);

              iframe.current.src=constants.YOUTUBE+trailerId;
              banner.current.style.display="none";
              iframeContainer.current.style.display="flex"
          }

  }


}

const closeIframe=()=>{
  banner.current.style.display="flex";
  iframe.current.src="";
  iframeContainer.current.style.display="none";
  
  

}





  return (
    <dialog className="modal" id="dialog">
    <div id="close" onClick={handleCloseModal} className="close-tab">
            <img style={{position:"absolute", transform: "rotate(-185deg"}} src={cross} />
            <img style={{position:"absolute", transform: "rotate(-90deg)"}} src={cross} />
    </div>  


      
<div id="iframeContainer" ref={iframeContainer}  className="iframe-container" >
            <div id="closeFrame" onClick={closeIframe} className="close-tab close-frame">
                <img style={{position:"absolute", transform:" rotate(-185deg)"}} src={cross} />
                <img style={{position:"absolute", transform:" rotate(-90deg)"}} src={cross} />
           </div>  
         
            <iframe ref={iframe} id="iframe" style={{width:"100%",height:"400px"}}
          >
            </iframe>
         </div>  
            <div className="modal-banner" ref={banner} id="modalBanner">
              <div className="modal-banner-shadow">

            
                <div className="modal-banner-content">
                    <button onClick={handleWatchTrainer} className="action-btn modal-button" id="modalButton">Watch Trailer</button>
                    <span id="modalTitle" className=" modal-title" >{titleModal} </span>
                    <span className="overview modal-overview" id="modalOverview">{overviewModal} </span>
                </div>
              </div>


</div>



<div  className="movie-information">
            <div className="movie-data" id="movieData">
                    <div>
                            <label> Release Date: </label>
                            <p id="date" >{dateModal} </p>
                            <label >Genre: </label>
                            <p ref={genero} id="genero" className="gender">{genreModal} </p>
                    </div>
                    <div>
                        <label> Original Language: </label>
                        <p ref={languaje} id="languaje" > {languageModal} </p>
                        <p>Popularity</p>
                        <p  id="popularity">{popularityModal} </p>
                    </div>
            </div>

            <div className="related-movies" id="relatedMovies">
                <span  >Similar Movies</span>
                {id!==null?
                <>  <SimilarMovies id={id}/> </>
                :
                <></> }
               
            </div>

</div>





</dialog> 

  );
}