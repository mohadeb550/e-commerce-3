
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Favorites from "../Pages/Favorites";
import Login from "../Pages/Login";
import Phone from "../components/PhoneDetails";

const router = createBrowserRouter([

    {path:'/', loader: ()=> fetch('/phones.json') , element: <Root/> , children:[

        {path: '/', element: <Home/> },
        {path: '/favorites' , element: <Favorites/>},
        {path: '/login', element: <Login/>},
        {path: '/phones/:id', element: </>}
    ]}
])



export default router;