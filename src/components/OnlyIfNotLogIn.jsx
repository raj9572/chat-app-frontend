import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const OnlyIfNotLogIn = () => {
    const {authUser} = useSelector(store => store.user)
  return (
     authUser ? <Navigate to='/' /> : <Outlet/>
  )
}

export default OnlyIfNotLogIn
