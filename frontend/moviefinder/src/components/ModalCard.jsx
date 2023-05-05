import { useContext } from "react";
import AppContext from "../context/contextApi";

export default function ModalCard({item}){
    const cardPath="http://www.themoviedb.org/t/p/w154/";
    
    
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
    backgroundImage:`url(${cardPath+item.poster_path})`,
    backgroundSize:"cover",
    width:"154px",
    height:"170px",
    display:"flex",
    flexDirection:"row",
    cursor:"pointer",
    color:"white",
    }

const cardInfo={
    position:"realtive",
    display:"flex",
    flexDirection:"column",
    paddingBottom:"40%",
    marginTop:"98%",
    gap:"10px",
  
    }




return(
    <div alt={item.title} style={cardStyle}>
        <div style={{width:"100%",background: "linear-gradient(180deg, rgba(1, 1, 1, 0) 0%, #010101 100%)"}}>
            
        </div>

    </div>
)


}