/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import HomePage from "./components/HomePage"
import Signup from "./components/Signup"
import Login from "./components/Login"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import io from 'socket.io-client'
import { setSocket } from "./redux/socketSlice"
import { setOnlineUsers } from "./redux/userSlice"
import { getSocket, initSocket } from "./socket"


const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>
  },
  {
    path:"/register",
    element:<Signup/>
  },
  {
    path:"/login",
    element:<Login/>
  }
])



function App() {
 const {authUser} = useSelector(store => store.user)
 const socket = getSocket()
 const dispatch = useDispatch()

 useEffect(() =>{

    if(authUser){
       const socket = initSocket(authUser._id);

      socket.on('getOnlineUsers',(onlineUsers) =>{
           dispatch(setOnlineUsers(onlineUsers))
      })

      return () => socket.close()

    }else{
      if(socket){
        socket.close()

      }
    }




 },[authUser])




  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
