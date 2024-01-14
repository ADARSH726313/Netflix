import React from 'react'
import Header from './Header'
import Browser from './Browser'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
const Body = () => {

    const appBrowser = createBrowserRouter([

        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browser",
            element:<Browser/>
        }
    ])
  return (
    <>
    <RouterProvider  router={appBrowser} />
   
    </>
  )
}
export default Body