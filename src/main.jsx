import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from "react-router/dom";
import router from './layout/Route/Route.jsx';
import AuthProvider from './layout/Provider/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer position="top-right" autoClose={2000}></ToastContainer>

    </AuthProvider>


  </StrictMode>,
)
