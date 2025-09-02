import React, {  } from 'react'
import Message from './Message';
import useGetMessages from '../hook/useGetMessages';
import { useSelector } from 'react-redux';
import useGetRealTimeMessage from '../hook/useGetRealTimeMessage';



const Messages = () => {


  useGetMessages()
  useGetRealTimeMessage()


  const { messages } = useSelector(store => store.message)

  // if(!messages) return 


  return (
    <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="space-y-1">
        {messages && messages?.map((message) => (
          <Message key={message?._id} message={message} />
        ))}
      </div>
    </div>
  )
}

export default Messages
