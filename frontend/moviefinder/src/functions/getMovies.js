import env from "react-dotenv";

export const getMostPopulars=async()=>{
    
   
  
        const options = {
            method: 'GET'
          
        }; 
       
        await fetch(`${process.env.REACT_APP_MOVIE_FINDER_API}`,options)
            .then(response => response.json())
            .then(response =>(theMostPopular(response.results[0])
                           // window.sessionStorage.setItem("movies",JSON.stringify(response.results)),
                            //showMostPopular(3)
                            ))
            .catch(err => (console.log(err)));
    
    
   
}


export const theMostPopular=(mp)=>{

    const posterPath=`${process.env.REACT_APP_POSTER_PATH}`;
 
    var banner=document.getElementById("banner");
    var overview=document.getElementById("overview");
    console.log(`${posterPath+mp.backdrop_path}`);
    banner.style.backgroundImage=`url(${posterPath+mp.backdrop_path})  `;
    let title=document.getElementById("title");
    title.innerText=mp.title;
  //  getStars("starContainer",mp.vote_average);
    overview.innerText=mp.overview;
   // let gendres= movieGenre(mp.genre_ids);
   // let gendre=document.getElementById("genre");
  //  gendre.innerText=gendres[0];
    sessionStorage.setItem("bannerId",JSON.stringify(mp.id))
}
