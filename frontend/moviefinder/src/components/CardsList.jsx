import { useState } from "react"
import Card from "./Card780";
import Card220 from "./Card220";

export default function CardsList() {

    
    const [threeMovies,setThreeMovies]=useState(JSON.parse(localStorage.getItem('movies')).slice(1,4));
  

    
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


    return(<>
          <button onClick={handleOnclick}>hola </button>

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
      

       
    </>

    )



}