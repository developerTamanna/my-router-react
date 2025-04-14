import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Home from './components/Home/Home.jsx'

import About from './components/About/About.jsx'
import Blogs from './components/Blogs/Blogs.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import Footer from './components/Footer/Footer.jsx'
import Products from './components/Products/Products.jsx'


const router = createBrowserRouter([
 {
  path: '/',
  element: <App />,
  errorElement: <ErrorPage></ErrorPage>,
  children:[
    {
      path: "/home",
      element: <Home></Home>
    },
      {
           path:"/products",
           loader: ()=>fetch('https://fakestoreapi.com/products'),
           element:<Products></Products>
      },
    {
      path: "/about",
      element: <About></About>
    },
    {
      path:"/blog",
      element: <Blogs></Blogs>
    },
    {
      path: '/footer',
      element:<Footer></Footer>
    }

  ]
 }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
