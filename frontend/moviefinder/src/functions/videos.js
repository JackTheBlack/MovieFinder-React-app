export const bringVideos=async(id)=>{

    const options = {
        method: 'GET'
      
    }; 
     var list;   
try{

    await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,options)
        .then(response => response.json())
        .then(response =>( console.log(response.results),window.localStorage.setItem("videosRelated",JSON.stringify(response.results))))
                        
        .catch(err => (console.log(err)));
}catch(err){
    console.log(err)
}
   return true;

}