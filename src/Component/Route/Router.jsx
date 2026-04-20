import { createBrowserRouter } from "@/compat/react-router-dom";
import Main from "./Main";
import Home from "../Home/Home";
import Features from "../Navber/Features";
import Reffers from "../Navber/Reffers";
import Contact from "../Navber/Contact";
import Extraincome from "../Navber/Extraincome";
import Pharmacy from "../Busniesstype/Pharmacy";
import Grocery from "../Busniesstype/Grocery";
import Electronic from "../Busniesstype/Electronic";
import Fashion from "../Busniesstype/Fashion";
import Hardware from "../Busniesstype/Hardware";
import Dealer from "../Busniesstype/Dealer";
import Login from "./Login";
import Registration from "./Registration";
import Admin from "./Admin";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/features',
                element:<Features></Features>
            },
            {
                path:'/reffer',
                element:<Reffers></Reffers>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/extraincome',
                element:<Extraincome></Extraincome>
            },
            {
                path:'/pharmacy',
                element:<Pharmacy></Pharmacy>
            },
            {
                path:'/grocery',
                element:<Grocery></Grocery>
            },
            {
                path:'/electronics',
                element:<Electronic></Electronic>
            },
            {
                path:'/fashion',
                element:<Fashion></Fashion>
            },
            {
                path:'/hardware',
                element:<Hardware></Hardware>
            },
            {
                path:'/dealer',
                element:<Dealer></Dealer>
            }
        ]
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/registration',
        element:<Registration></Registration>
    },
    {
        path:'/admin',
        element:<Admin></Admin>
    }
])
cod