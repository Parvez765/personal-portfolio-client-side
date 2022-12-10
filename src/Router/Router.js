import { createBrowserRouter } from "react-router-dom";
import BlogDetails from "../Componets/BlogDetails/BlogDetails";
import About from "../Componets/Header/About/About";
import ProjectDetails from "../Componets/ProjectDetails/ProjectDetails";

import Main from "../Layout/Main";
import AboutMe from "../Pages/AboutMe/AboutMe";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/", element: <Main></Main>, children: [
            {
                path: "/", element: <Home></Home>
            },
            {
                path: "/about", element: <AboutMe></AboutMe>
            },
            {
                path: "/project/:id",
                element: <ProjectDetails></ProjectDetails>
            },
            {
                path: "/contact", element: <Contact></Contact>
            },
            {
                path: "/blog", element: <Blog></Blog>
            },
            {
                path: "/blogdetails", element: <BlogDetails></BlogDetails>
            }
           
        ]
    }
])