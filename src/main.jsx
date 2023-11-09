import React from 'react'
import ReactDOM from 'react-dom/client' 
import './index.css'
<script src="./Product.js"></script>
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Products from './Products.jsx';
import ItemeProducts from './ItemeProducts';
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Products/>,
    },
    {
      path: "/:id",
      element: <ItemeProducts/>,
    },
    
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
