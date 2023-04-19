
import { useRef,useContext } from "react";
import AppContext from "../context/contextApi";

export default function Card({item}){
    const cardPath="https://www.themoviedb.org/t/p/w780/";
    
    
  const {setModalShow,modalShow,selectedMovie,setSelectedMovie}=useContext(AppContext);

    const votes=item.vote_average/2

    const returnStar=()=>{
        return(
            <article className="star"></article>
        )
    }



    const getStars=()=>{
       const stars=[]
     
        for(let x=0;x<=votes;x++){
            stars.push(returnStar());
        }
        
        return <section style={{display:"flex"}}>{stars} </section>
    }
   

const cardStyle ={
    backgroundImage:`url(${cardPath+item.backdrop_path})`,
    width:"710px",
    height:"310px",
    display:"flex",
    flexDirection:"row",
    cursor:"pointer",
    color:"white",
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

return(
    <div  onClick={handleClick} style={cardStyle}>
        <div style={{width:"100%",background: "linear-gradient(180deg, rgba(1, 1, 1, 0) 0%, #010101 100%)"}}>
            <article style={cardInfo}>
                    <span>{item.title} </span>
                    <div className="star-container">
                        {getStars()}
                    </div>
                    <div>
                    <span>{item.overview.slice(0,150)+"..."} </span>
                    </div>
                
            </article>
            
        </div>

    </div>
)


}