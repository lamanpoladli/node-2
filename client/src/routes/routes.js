
import Home from "../pages/Home";
import MainRoot from "../pages/Mainroot";


export const ROUTES = [
    //Main Root - user side
    {
        path:'/',
        element:<MainRoot/>,
        children: [
            {
                path:'',
                element: <Home/>
            }
        ]
    }
    //Admin Root - admin side
    
]