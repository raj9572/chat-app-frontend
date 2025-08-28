import React from 'react'
import Sidebar from './Sidebar'
import MessageContainer from './MessageContainer'

const HomePage = () => {
  return (
    <div  className="p-4 flex h-screen bg-gray-900 text-white overflow-hidden">
       <Sidebar/>
       <MessageContainer/>
    </div>
  )
}

export default HomePage
