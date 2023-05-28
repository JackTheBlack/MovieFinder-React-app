import { useEffectOnce } from "../customHooks/useEffectOnce"
import {useNavigate} from "react-router-dom";
import "./Home.css"
import { getMostPopulars } from "../functions/getMovies"
import Navbar from "../components/Navbar"
import Banner from "../components/Banner"
import AppContext from "../context/contextApi"
import { useContext,useEffect } from "react"
import MovieDetails from "../components/Modal"
import CardsList from "../components/CardsList"
import { removeList } from "../functions/list"
import { Helmet } from "react-helmet"

export default function Home(){

const navigate=useNavigate();
 const {setMovies, modalShow,setModalShow,selectedMovie}=useContext(AppContext)
//const img=process.env.REACT_APP_POSTER_PATH+JSON.parse(localStorage.getItem('movies'))[0].poster_path;



const  getGenres=async(genresId)=>{


    const options = {
        method: 'GET'
      
    }; 


    await fetch(`${process.env.REACT_APP_GENRE_PATH}${process.env.REACT_APP_API_KEY}`,options)
    .then(response => response.json())
    .then(response =>window.localStorage.setItem("genres",JSON.stringify(response.genres)))
    .catch(err => (console.log(err)+"dsdsdsds"));

}

const  getLanguages=async(genresId)=>{


    const options = {
        method: 'GET'
      
    }; 


    await fetch(`https://api.themoviedb.org/3/configuration/languages?api_key=0b594805a17dec4e8de3882c93646258`,options)
    .then(response => response.json())
    .then(response =>window.localStorage.setItem("languajes",JSON.stringify(response)))
    .catch(err => (console.log(err)+"dsds"));

}




useEffect(() => {
    // Actualiza el título del documento usando la API del navegador

    getGenres();
    getLanguages();


 //console.log("el ancho actual de la pantalla es ",window.innerWidth);
  });
  

  useEffectOnce(() => {
if((window.localStorage.getItem("accessToken")===null)&&(window.sessionStorage.getItem("accessToken")===null)){
    navigate("/login")
}
    getMostPopulars(setMovies);
    
  });


    return(<>

{(window.localStorage.getItem("accessToken")===null)&&(window.sessionStorage.getItem("accessToken")===null)?
<>
 
</>
:
<>

<div onClick={removeList}>


        <header >
        <Navbar />
        </header>
        
        <Banner/>
       <MovieDetails/>
 
        

  <div style={{position:"relative",justifyContent:"center",alignItems:"center"}}>
                        
  <CardsList/>
    </div>    
  

      
      
        </div>
</> }

        </>)
}