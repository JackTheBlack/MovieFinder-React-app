import { useContext } from "react";
import AppContext from "../context/contextApi";

export default function Card220({item}){
    const cardPath="http://www.themoviedb.org/t/p/w220_and_h330_face/";
    
    
  const {setModalShow,modalShow,selectedMovie,setSelectedMovie}=useContext(AppContext);

    const votes=item.vote_average/2

    const returnStar=(key)=>{
        return(
            <article key={key} className="star"></article>
        )
    }


    const title=()=>{

        let x;
        if (item.title.length>25){
            x=item.title.slice(0,22)+"...";
        }else{
            x=item.title;
        }

        return x;
    }

    const getStars=()=>{
       const stars=[]
     
        for(let x=0;x<=votes;x++){
            stars.push(returnStar(x));
        }
        
        return <section style={{display:"flex"}}>{stars} </section>
    }
   

const cardStyle ={
    backgroundImage:`url(${cardPath+item.poster_path})`,
    backgroundSize:"cover",
    width:"220px",
  height:"330px",
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
    lineHeight: "20px",
    fontStyle: "normal",
    fontWeight: 400,
    }


const handleClick=()=>{
    setSelectedMovie(item)

   console.log("modal press")
  // modal.showModal()

}

return(<>



    <div  onClick={handleClick} data-bs-toggle="modal" data-bs-target="#exampleModal" style={cardStyle} className="card220">
        <div className="card220Shadow">
            <article style={cardInfo}>
                    <span>{title()} </span>
                    <div className="star-container">
                        {getStars("starContainer",item.vote_average)}
                    </div>
                    <div>
                    <span>{item.overview.slice(0,70)+"..."} </span>
                    </div>
                
            </article>
            
        </div>

    </div>


</>
)


}