
import { useState } from "react";
import Login from "./pages/Login";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import { removeList } from "./functions/list";
import AppContext from "./context/contextApi";


function App() {

  const [modalShow, setModalShow] = useState(false);
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
    <AppContext.Provider value={{modalShow,setModalShow}}>

   
    <div onClick={removeList} className="App">
   <RouterProvider router={router} />
    </div>
    </AppContext.Provider>
  );
}

export default App;
