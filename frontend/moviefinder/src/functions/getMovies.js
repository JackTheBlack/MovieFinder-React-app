import { cutOverview } from "./cutOverview";
import { getStars } from "./starts";
import { movieGenre,getGenres } from "./genres";


const sendLocalStorage=(movies)=>{
  localStorage.setItem('movies', JSON.stringify(movies));


}


export const getMostPopulars=async(setMovies)=>{
    

   // window.sessionStorage.setItem("movies",JSON.stringify(response.results)),
                            //showMostPopular(3)
  
        const options = {
            method: 'GET'
          } 
       
        await fetch(`${process.env.REACT_APP_MOVIE_FINDER_API}`,options)
            .then(response => response.json())
            .then(response =>(setMovies(response.results[0]),theMostPopular(response.results[0]),sendLocalStorage(response.results) ))
            .catch(err => (console.log(err)));
    
    
   
}


export const theMostPopular=(mp)=>{

    const posterPath=`${process.env.REACT_APP_POSTER_PATH}`;
   getGenres(mp.genre_ids)
   
    let banner=document.getElementById("banner");
   
    let overview=document.getElementById("overview");
    overview.innerText=mp.overview.slice(0,150)+"...";
 
    //console.log(`${posterPath+mp.backdrop_path}`);
    banner.style.backgroundImage=`url(${posterPath+mp.backdrop_path})  `; 
    let title=document.getElementById("title");
    title.innerText=mp.title;
    
    getStars("starContainer",mp.vote_average);
   
    
   
    sessionStorage.setItem("bannerId",JSON.stringify(mp.id))
}
