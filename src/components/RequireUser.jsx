import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const RequireUser = () => {
    const {authUser} = useSelector(store => store.user)

  return (
     <div>
      {authUser ? <Outlet/> :<Navigate to='/login'/>} 
    </div>
  )
}

export default RequireUser
