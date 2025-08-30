import { createBrowserRouter,RouterProvider } from "react-router-dom"
import HomePage from "./components/HomePage"
import Signup from "./components/Signup"
import Login from "./components/Login"



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

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
