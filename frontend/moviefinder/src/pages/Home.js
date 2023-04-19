
import "./Home.css"
import Navbar from "../components/navbar"
import Banner from "../components/banner"
import AppContext from "../context/contextApi"
import { useContext } from "react"
import MovieDetails from "../components/modal"
import CardsList from "../components/cardsList"
import { removeList } from "../functions/list"
import { Helmet } from "react-helmet"
export default function Home(){

 const {modalShow,setModalShow,selectedMovie}=useContext(AppContext)
const img=process.env.REACT_APP_POSTER_PATH+JSON.parse(localStorage.getItem('movies'))[0].poster_path;
const MetaTags =
    (<Helmet 
        >
        <link rel="icon" type="image" href={img} sizes="32x32" />
        
        </Helmet>);
    return(<>
{MetaTags}
<div onClick={removeList}>


        <header >
        <Navbar />
        </header>
       <Banner/>
       <MovieDetails       show={modalShow}
        onHide={() => setModalShow(false)}>¡
        </MovieDetails>
 
                      
  
   

      
        <CardsList/>
        </div>
        </>)
}