
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Favorites from "../Pages/Favorites";
import Login from "../Pages/Login";

const router = createBrowserRouter([

    {path:'/', element: <Root/> , children:[

        {path: '/', element: <Home/> },
        {path: '/favorites' , element: <Favorites/>},
        {path: '/login', element: <Login/>}
    ]}
])



export default router;