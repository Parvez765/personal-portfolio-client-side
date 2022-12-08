import { createBrowserRouter } from "react-router-dom";
import ProjectDetails from "../Componets/ProjectDetails/ProjectDetails";

import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/", element: <Main></Main>, children: [
            {
                path: "/", element: <Home></Home>
            },
            {
                path: "/project/:id",
                // loader: () => {
                //     return fetch("/projects.json")
                //         .then(res => res.json())
                //         .then(data =>{
                            
                //         })
                    
                // },
                element: <ProjectDetails></ProjectDetails>
            }
           
        ]
    }
])