
const  getGenres=async(genresId)=>{


    const options = {
        method: 'GET'
      
    }; 


    await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=0b594805a17dec4e8de3882c93646258`,options)
    .then(response => response.json())
    .then(response =>movieGenre(genresId,response.genres))
    .catch(err => (console.log(err)+"dsdsdsds"));

}

const movieGenre=(genresId,genres)=>{
   
   
   
    let result=[]
   

    for(let x=0;x<=genresId.length-1;x++){
        for(let y=0;y<=genres.length-1;y++){
            if (genresId[x]===genres[y].id){
                result.push(genres[y].name)

            }
        }
    }
   
let genreSection=document.getElementById("genre");
genreSection.innerText=result[0];


}

export { getGenres,movieGenre}
