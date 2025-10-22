import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../../Component/Home";
import ErrorPage from "../../Component/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            Component:Home,
            loader:()=> fetch("/petservice.json")
        },
        
    ]
  },
]);


export default router;