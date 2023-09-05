import { useState } from 'react'

import Nav from './components/Nav'
import Banner from './components/Banner'
import PageLink from './components/PageLink'
import ProductDetails from './components/ProductDetails'
import Suggestions from './components/Suggestions'
import Footer from './components/Footer'
import Layout from './components/Layout'
import { Route, RouterProvider, Routes } from 'react-router'
import Cart from './components/Cart'
import { createBrowserRouter } from 'react-router-dom'
import CheckOutModal from './components/CheckOutModal'


const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children:[
      {
        path:"/ProductDetails",
        element:<ProductDetails />
      },
      {
        path:"/Cart",
        element:<Cart/>
      },
      // {
      //   path:"/CheckOutModal",
      //   element:<CheckOutModal/>
      // }
    ]
  }
])


function App() {


  return (
    <div className='w-[100%] '>
      <RouterProvider router={router} />
      {/* <Routes>
        <Route path="/"  element={<Layout />}></Route>
        <Route path={"/Cart"} element={<Cart/>}></Route>
        <Route path={"/ProductDetails"} element={<ProductDetails />}></Route>
        <Route path={"/Suggestions"} element={<Suggestions />}></Route>  
          </Routes> */}





    </div>
  )
}

export default App
