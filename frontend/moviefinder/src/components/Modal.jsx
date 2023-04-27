import Button from 'react-bootstrap/Button';
import { Genres, getGenres } from '../functions/genres';
import  {useEffect,useContext,useRef,useState} from "react"
import AppContext from '../context/contextApi';
import { formatDate } from '../functions/formatDate';
import { bringVideos } from '../functions/videos';

export default function MovieDetails() {


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


 const{selectedMovie,setSelectedMovie}=useContext(AppContext)
 const [videoArray,setVideoArray]=useState([]);
 
 const genre=JSON.parse(window.localStorage.getItem("genres"));
  
 const languages=JSON.parse(window.localStorage.getItem("languajes")) 
  
 

useEffect(() => {


  if (selectedMovie!==undefined){
    setVideoArray(bringVideos(selectedMovie.id));
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
  console.log("original languaje :"+selectedMovie.original_language)
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

              iframe.current.src="https://www.youtube.com/embed/"+trailerId;
              iframeContainer.current.style.display="flex"
          }

  }


}

const closeIframe=()=>{
  
  iframeContainer.current.style.display="none";

}


  return (
    <dialog className="modal" id="dialog">
    <div id="close" onClick={handleCloseModal} className="close-tab">
            <img style={{position:"absolute", transform: "rotate(-185deg"}} src="../images/cross.png"/>
            <img style={{position:"absolute", transform: "rotate(-90deg)"}} src="../images/cross.png"/>
    </div>  

    <div className="modal-banner" id="modalBanner">
      <div className="modal-banner-shadow">

     
        <div className="modal-banner-content">
            <button onClick={handleWatchTrainer} className="action-btn modal-button" id="modalButton">Watch Trailer</button>
            <span id="modalTitle" className=" modal-title" >{titleModal} </span>
        </div>
      </div>


</div>
<div id="iframeContainer" className="iframe-container" >
<div id="closeFrame" className="close-tab close-frame">
    <img style={{position:"absolute", transform: "rotate(-185deg"}} src=",./images/cross.png"/>
    <img style={{position:"absolute", transform: "rotate(-90deg)"}} src="../images/cross.png"/>
</div>  

<iframe id="iframe">
</iframe>
</div>  
<span className="overview modal-overview" id="modalOverview">{overviewModal} </span>

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
      <div id="cardModalContainer" className="card-modal-container">
         
      </div>
</div>

</div>
<div id="iframeContainer" ref={iframeContainer}  className="iframe-container" >
            <div id="closeFrame" onClick={closeIframe} className="close-tab close-frame">
                <img style={{position:"absolute", transform:" rotate(-185deg)"}} src=",./images/cross.png"/>
                <img style={{position:"absolute", transform:" rotate(-90deg)"}} src="../images/cross.png"/>
           </div>  
         
            <iframe ref={iframe} id="iframe"
          >
            </iframe>
         </div>  

</dialog> 

  );
}