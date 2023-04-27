
import { useState } from "react";
import Login from "./pages/Login";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";

import AppContext from "./context/contextApi";



function App() {
  const [mostPopularMovie,setMostPopularMovie]=useState();
  const [selectedMovie,setSelectedMovie]=useState('');
  const [modalShow, setModalShow] = useState(false);
  const [movies,setMovies]=useState();
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return (
    <AppContext.Provider value={{modalShow,setModalShow,selectedMovie,setSelectedMovie, movies,setMovies,mostPopularMovie,setMostPopularMovie}}>


   
    <div className="App">
   <RouterProvider router={router} />
    </div>

    </AppContext.Provider>
  );
}

export default App;
