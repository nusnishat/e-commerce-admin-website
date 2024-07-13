import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './components/Register/Register.jsx';
import Login from './components/Login/Login.jsx';
import AuthProviders from './components/providers/AuthProviders.jsx';
import Home from './components/Home/Home.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Products from './components/Products/Products.jsx';
import Orders from './components/Orders/Orders.jsx';
import Customers from './components/Customers/Customers.jsx';
import AdminProducts from './components/AdminProducts/AdminProducts.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Register></Register>
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/home',
    element: <Home></Home>,
    children: [
      {
        path:'/home/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path:'/home/products',
        element: <Products></Products>
      },
      {
        path:'/home/orders',
        element: <Orders></Orders>
      },
      {
        path:'/home/customers',
        element: <Customers></Customers>
      },
      {
        path:'/home/products-admin-view',
        element: <AdminProducts></AdminProducts>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router}></RouterProvider>
    </AuthProviders>
  </React.StrictMode>,
)
