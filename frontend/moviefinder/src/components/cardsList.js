import { useState } from "react"
import Card from "./card";

export default function CardsList() {

    
    const [threeMovies,setThreeMovies]=useState(JSON.parse(localStorage.getItem('movies')).slice(1,4));


    
   const style={
display:"flex",
flexDirection:"row",
justifyContent:"center",
marginTop:"5%",
color:"white",

   }


    return(<>
         { threeMovies.map((item,index)=>
         <div key={index} style={style}>
                  
           <Card  item={item}/> 
                 
           
         </div>)}
    </>

    )



}