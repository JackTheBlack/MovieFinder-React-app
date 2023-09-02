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
  
 


  return (
  <div className="modal fade bg-transparent" id="exampleModal"  aria-labelledby="exampleModalLabel" index="-1" aria-hidden="true">



<div className="modal-dialog " style={{color:"white"}}>
  <div className="modal-content   bg-black">
    <div className="modal-header">
      <h1 className="modal-title fs-5" id="exampleModalLabel">{selectedMovie.title} </h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div className="modal-body">
    {selectedMovie.overview}
    </div>
    <div className="modal-footer">
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" className="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>
</div>

  );
}