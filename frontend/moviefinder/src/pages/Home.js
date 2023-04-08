import { Link } from "react-router-dom"
import "./Home.css"
import Navbar from "../components/navbar"
import Banner from "../components/banner"
import AppContext from "../context/contextApi"
import { useContext } from "react"
import MovieDetails from "../components/modal"

export default function Home(){

 const {modalShow,setModalShow}=useContext(AppContext)
 
    
    return(<>
        <header>
        <Navbar/>
        </header>
       <Banner/>
       <MovieDetails       show={modalShow}
        onHide={() => setModalShow(false)}>¡
        </MovieDetails>

        <button > <Link to={"/login"} > LOGIN</Link>
        </button>
        </>)
}