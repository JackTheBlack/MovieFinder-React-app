import Button from 'react-bootstrap/Button';

import  {useEffect,useContext} from "react"
import AppContext from '../context/contextApi';
import { findByLabelText } from '@testing-library/react';

export default function MovieDetails(props) {



useEffect(() => {
  // Actualiza el título del documento usando la API del navegador
  let banner =document.getElementById("modalBanner"); 


  banner.style.backgroundImage=`url(${process.env.REACT_APP_POSTER_PATH+selectedMovie.backdrop_path})`;
  banner.style.backgroundSize="cover";
});

  const{selectedMovie,setSelectedMovie}=useContext(AppContext)
 
   
const modalBanner={

 
  backgroundImage:`url(${process.env.REACT_APP_POSTER_PATH+selectedMovie.backdrop_path})`,
  
  width: "auto",
  height:" 450px",
  
  backgroundSize:"cover",
  backgroundRepeat:"no-repeat",
  color: "#0FEFFD",
  fontFamily: 'Open Sans',
fontStyle:" normal",
fontWeight: "700",
fontSize: "56px",
lineHeight: "64px",
paddingBot:"1rem",

 
}

const handleCloseModal=()=>{
  let dialog=document.getElementById("dialog");
  dialog.close();
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
            <button className="action-btn modal-button" id="modalButton">Watch Trailer</button>
            <span id="modalTitle" className=" modal-title">{selectedMovie.title} </span>
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
<span className="overview modal-overview" id="modalOverview"></span>

<div  className="movie-information">
<div className="movie-data" id="movieData">
        <div>
                <label> Release Date: </label>
                <p id="date" ></p>
                <label>Genre:</label>
                <p id="genero" className="gender"></p>
        </div>
        <div>
            <label> Original Language: </label>
            <p id="languaje" ></p>
            <p>Popularity</p>
            <p id="popularity"></p>
        </div>
</div>

<div className="related-movies" id="relatedMovies">
    <span  >Similar Movies</span>
      <div id="cardModalContainer" className="card-modal-container">
         
      </div>
</div>

</div>


</dialog> 

  );
}