import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../../Component/Home";
import ErrorPage from "../../Component/ErrorPage";
import Service from "../../Component/Service";
import ServiceDetails from "../../Component/ServiceDetails";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/petservice.json"),
        
      },
      {
        path: "/services/:id",
        Component: ServiceDetails,
        loader: async ({ params }) => {
          const res = await fetch("/service.json");
          const data = await res.json();
          const service = data.find(item => item.serviceId === parseInt(params.id));
          if (!service) {
            throw new Response("Not Found", { status: 404 });
          }
          return service;
        },
        
        
        
      }
    ]
  },

  {
    path: "/services",
    Component: Service,
    loader: () => fetch("/service.json")
  },

]);


export default router;