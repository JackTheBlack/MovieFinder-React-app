
const  getGenres=async()=>{


    const options = {
        method: 'GET'
      
    }; 


    await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=0b594805a17dec4e8de3882c93646258`,options)
    .then(response => response.json())
    .then(response =>sessionStorage.setItem("genres",JSON.stringify(response.genres)))
    .catch(err => (console.log(err)));

}

const movieGenre=(array)=>{

    const genresID=JSON.parse(sessionStorage.getItem("genres"))
    let result=[]


    for(let x=0;x<=array.length-1;x++){
        for(let y=0;y<=genresID.length-1;y++){
            if (array[x]===genresID[y].id){
                result.push(genresID[y].name)

            }
        }
    }
   
return result;

}

export { getGenres,movieGenre}
