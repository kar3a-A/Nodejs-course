import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Detail from "../pages/Detail.jsx";
import NotFound from "../pages/NotFound.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/blogs/:id",
                element: <Detail />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
        },
    ]);

export default router