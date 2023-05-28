import { useState,useEffect,useContext } from "react"
import Card from "./Card780";
import Card220 from "./Card220";
import AppContext from "../context/contextApi";
import rectangle1 from "../images/rectangle1.png";
import rectangle2 from "../images/rectangle2.png";


export default function CardsList() {

 
   const style1="cards-view2";


   
   const style2="cards-view1";
   const [view,setView]=useState(style2);


      



const handleColumns=()=>{
  setView(style2);
}

const handleRows=()=>{
  setView(style1);
}


const [items, setItems] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);

//  esto es para ir llamando las distinas paginas
// page se incremneta en 1 cada vez que hago una peticion GET
const [page, setPage] = useState(1);
const [three,setThree]=useState([]);


///index para ir agregando las peliculas
const [index,setIndex]=useState(1);


const [scroolTop, setScrollTop]=useState(document.documentElement.scrollTop)





const setThreeMovies=(movies)=>{
  // la primera vez le paso por referencia las tres primeras peliculas (emepzando desde la segunda)

  if (three.length<1){
    setThree(movies.slice(index,index+3));
 
    
  }else{
    
  //la sgunda vez que entra al largo del array "three" ser mayor a 1
  //se agrega las 3 peliculas que siguen en el estado items  
   
    setThree( [...three,...items.slice(index,index+3)])
  }
  
  //console.log("page: ",page," response: ",movies)
  setIndex(index+3);
  //incremento el index en 3

}



  const fetchData = async () => {
setIsLoading(true);
setError(null); 
const options = {
  method: 'GET'

}; 


await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=0b594805a17dec4e8de3882c93646258&language=en-US&page=${page}`,options)
.then(response => response.json())
.then(response =>( setItems([...items, ...response.results]),
                  setPage(page+ 1),setIsLoading(false),setThreeMovies(response.results)
                 ))
.catch(err => (console.log(err),setIsLoading(false)));


};



const handleScroll = () => {
//si la diferencia entre el scroll to anterior y el actuas es mayor a 56 entonces vuelvo
// hACER UN LLAMADO A la proxima pagina
if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
 //console.log("inner hight: ",window.innerHeight)
 //console.log("old scroll top: ",scroolTop)
 //console.log("scroll Top: ", document.documentElement.scrollTop)
 //console.log("offset hight: ",document.documentElement.offsetHeight)
 
 if ((document.documentElement.scrollTop-scroolTop )>76){
  fetchData();
  setScrollTop( document.documentElement.scrollTop);
 }

}


};
// hook de efecto que se ejecuta una sola vez para cargar
// las primeras 3 peliculas

useEffect(() => {
fetchData();
},[]);



// controla el cambio en el scroll
useEffect(() => {
window.addEventListener('scroll', handleScroll);
return () => window.removeEventListener('scroll', handleScroll);
});







    return(<>
<div className="most-watched-grid-container">


<div className="most-watched-grid">
        <div className="most-watched-grid item1">
            Most Watched
        </div>  
     
        <div className="most-watched-grid item2">
           <div onClick={handleColumns} className="buttons-columns" alt="columns" id="columns">
                <img className="rectangle" src={rectangle2} alt="columns"/>
                <img className="rectangle"  src={rectangle2} alt="columns"/>
                <img className="rectangle"  src={rectangle2} alt="columns"/>
           </div>
           <div onClick={handleRows} id="rows"alt="rows">
                <img src={rectangle1} alt="rows"/>
            </div>

        </div>  

      
   
    </div>
          
    
{three===undefined?  <></>:

<>
{JSON.stringify(view)===JSON.stringify(style1)?
   
   
   <>
         { three.map((item,index)=>
         <div key={index} className={view}>
                  
           <Card   key={index}  item={item}/> 
                 
           
         </div>)
}
   </>
   :
   <>
     <div  className={view}>
         { three.map((item,index)=>
       
          <div key={index} className="cardElement" style={{marginTop:"2em" }}>
            <Card220 key={index}  item={item}/> 
        
          </div>
            

       
                 
           
        )
}
</div>   
   </> }
      


</> }
 
</div>

    </>

    )



}