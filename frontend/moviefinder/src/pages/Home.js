import { Link } from "react-router-dom"
import "./Home.css"
import Navbar from "../components/navbar"
import Banner from "../components/banner"
export default function Home(){


    
    return(<>
        <header>
        <Navbar/>
        </header>
       <Banner/>
       
        <button > <Link to={"/login"} > LOGIN</Link>
        </button>
        </>)
}