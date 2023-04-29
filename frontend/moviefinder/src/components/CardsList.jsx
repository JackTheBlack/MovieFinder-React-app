import { useState,useEffect,useContext } from "react"
import Card from "./Card780";
import Card220 from "./Card220";
import AppContext from "../context/contextApi";
import rectangle1 from "../images/rectangle1.png";
import rectangle2 from "../images/rectangle2.png";


export default function CardsList() {

    
    const [threeMovies,setThreeMovies]=useState();
    const[loaded,setLoaded]=useState(false);

  
    const {movies}=useContext(AppContext)
    
   const style1={
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    marginTop:"5%",
    color:"white",
   }


   
   const style2={
    display:"grid",
    justifyContent:"center",
    alignItems:"center",
    alignContent:"center",
    padding:"auto",
  columnGap:"10%",
    color:"white",
    gridTemplateColumns:"auto auto auto "
       } 
   const [view,setView]=useState(style2);


      


const handleOnclick=()=>{
  console.log(style1)
  if(JSON.stringify(view)===JSON.stringify(style1)){
    console.log( "sdsdsdsview")
    setView(style2);

   
  }else{
    setView(style1);
    console.log(view)
  }
}

const handleColumns=()=>{
  setView(style2);
}

const handleRows=()=>{
  setView(style1);
}

useEffect(()=>{
if((localStorage.getItem('movies')!==null)&&(!loaded)){
  setLoaded(true)
 setTimeout(
  setThreeMovies( JSON.parse(localStorage.getItem('movies')).slice(1,4))
 ,2000)
}



})


    return(<>

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
          
    
{threeMovies===undefined?  <></>:

<>
{JSON.stringify(view)===JSON.stringify(style1)?
   
   
   <>
         { threeMovies.map((item,index)=>
         <div key={index} style={view}>
                  
           <Card   key={index}  item={item}/> 
                 
           
         </div>)
}
   </>
   :
   <>
     <div  style={view}>
         { threeMovies.map((item,index)=>
       
        
              <Card220 key={index}  item={item}/> 
        

       
                 
           
        )
}
</div>   
   </> }
      


</> }
 
       
    </>

    )



}