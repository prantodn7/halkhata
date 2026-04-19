import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "../Home/Home";
import Features from "../Navber/Features";
import Reffers from "../Navber/Reffers";
import Contact from "../Navber/Contact";

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
            }
        ]
    }
])