/* eslint-disable react-hooks/exhaustive-deps */
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./components/HomePage"
import Signup from "./components/Signup"
import Login from "./components/Login"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setOnlineUsers } from "./redux/userSlice"
import { disconnectSocket, getSocket, initSocket } from "./socket"
import RequireUser from "./components/RequireUser"
import OnlyIfNotLogIn from "./components/OnlyIfNotLogIn"


const router = createBrowserRouter([
  {
    path: "/",
    element: <RequireUser />,   
    children: [
      {
        path: "/",
        element: <HomePage />,  
      }
    ]
  },
  {
  element: <OnlyIfNotLogIn />,   
  children: [
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Signup /> },
  ],
}
])



function App() {
  const { authUser } = useSelector(store => store.user)
  const socket = getSocket()
  const dispatch = useDispatch()
  useEffect(() => {

    if (authUser) {
      const socket = initSocket(authUser._id);

      socket.on('getOnlineUsers', (onlineUsers) => {
        dispatch(setOnlineUsers(onlineUsers))
      })

      return () => disconnectSocket()

    } else {
      if (socket) {
        socket.close()

      }
    }




  }, [authUser])




  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
