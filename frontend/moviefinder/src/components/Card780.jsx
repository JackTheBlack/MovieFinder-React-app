
import {useEffect, useState,useRef,useContext } from "react";
import AppContext from "../context/contextApi";
import { constants } from "../consts/Consts";
export default function Card({item}){

    const card=useRef();
    const cardPath="https://www.themoviedb.org/t/p/w780/";
    const [cardStyle,setCardStyle] =useState({
        backgroundImage:`url(${cardPath+item.backdrop_path})`,
    
        })    
    
    const [title,setTitle]=useState(item.title);
    const [overview,setOverview]=useState(item.overview.slice(0,150)+"...");
  const {setModalShow,modalShow,selectedMovie,setSelectedMovie}=useContext(AppContext);

    const votes=item.vote_average/2

    const returnStar=(key)=>{
        return(
            <article key={key} className="star"></article>
        )
    }



    const getStars=()=>{
       const stars=[]
     
        for(let x=0;x<=votes;x++){
            stars.push(returnStar(x));
        }
        
        return <section style={{display:"flex"}}>{stars} </section>
    }
   


const cardInfo={
    position:"realtive",
    display:"flex",
    flexDirection:"column",
    paddingBottom:"55px",
    marginTop:"12rem",
    gap:"10px",
    lineHeight: "20px",
    fontStyle: "normal",
    fontWeight: 400,
    }


const handleClick=()=>{
    setSelectedMovie(item)
   let modal=document.getElementById("dialog")
   modal.showModal()

}



const cutTitle=()=>{

    let x;
    setTitle(item.title);
    card.current.style.backgroundImage=`url(${cardPath+item.backdrop_path})`;
     
    
    if (window.innerWidth<641){
        
           card.current.style.backgroundImage=`url(http://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path})`;
        
              
        if (item.title.length>25){
         
            setTitle(item.title.slice(0,22)+"...");
        }
    }

  
}


const cutOverview=()=>{


   
 
    setOverview(item.overview.slice(0,150)+"...");
    
    if (window.innerWidth<641){
      
        if (item.overview.length>40){
         
            setOverview(item.overview.slice(0,71)+"...");
        }
    }

  
}





useEffect(()=>{

 
    window.addEventListener("resize", cutTitle);
    
    window.addEventListener("resize", cutOverview);
    
  
})




return(
    <div  onClick={handleClick} ref={card} style={cardStyle} className="card780">
        <div style={{width:"100%",background: "linear-gradient(180deg, rgba(1, 1, 1, 0) 0%, #010101 100%)"}}>
            <article style={cardInfo}>

                 
                     <span>{title} </span>
                  
                    <div className="star-container">
                        { getStars("starContainer",item.vote_average)}
                    </div>
                    <div>
                    <span>{overview} </span>
                    </div>
                
            </article>
            
        </div>

    </div>
)


}