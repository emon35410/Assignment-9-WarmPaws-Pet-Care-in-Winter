import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../../Component/Home";
import ErrorPage from "../../Component/ErrorPage";
import Service from "../../Component/Service";
import ServiceDetails from "../../Component/ServiceDetails";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";
import Authlayout from "../Authlayout/Authlayout";
import Myprofile from "../../Component/Myprofile";
import PrivateRoute from "../Provider/PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: "/",
        Component: Home,
        loader: () => fetch("/petservice.json"),

      },

    ]
  },
  {
    path: "/services/:id",
    element: <PrivateRoute>
      <ServiceDetails></ServiceDetails>
    </PrivateRoute>,
    loader: async ({ params }) => {
      const res = await fetch("/service.json");
      const data = await res.json();
      const service = data.find(item => item.serviceId === parseInt(params.id));
      if (!service) {
        throw new Response("Not Found", { status: 404 });
      }
      return service;
    }
  },

  {
    path: "/services",
    Component: Service,
    loader: () => fetch("/service.json")
  },
  {
    path: "/profile",
    element: <Myprofile></Myprofile>
  },
  {
    path: "/auth",
    element: <Authlayout></Authlayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>
      },
      {
        path: "/auth/register",
        element: <Register></Register>
      }

    ]
  }

]);


export default router;