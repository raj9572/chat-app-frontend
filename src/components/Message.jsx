import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';

const Message = ({ message }) => {
  const scroll = useRef()
  const {authUser} = useSelector(store => store.user)

  useEffect(()=>{
    
    scroll.current?.scrollIntoView({behavior:"smooth"})
  
  },[message])



  return (
    <div ref={scroll} className={`flex ${authUser?._id === message?.senderId ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl shadow-md ${
          authUser?._id === message?.senderId 
            ? 'bg-blue-600 text-white rounded-br-md'
            : 'bg-gray-700 text-white rounded-bl-md'
        }`}
      >
        <div className="text-sm">{message?.message}</div>
        <div className={`text-xs mt-1 ${
          authUser?._id === message?.senderId ? 'text-blue-200' : 'text-gray-400'
        }`}>
          {message.createdAt}
        </div>
      </div>
    </div>
  );
};

export default Message
