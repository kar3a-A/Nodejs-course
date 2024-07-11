
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Recepies from './pages/Recepies.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },{
        path: "/about",
        element: <About />
      },{
        path: "/receipes",
        element: <Recepies />
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />

)
