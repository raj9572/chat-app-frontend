import React from 'react'
import Message from './Message';
import useGetMessages from '../hook/useGetMessages';
import { useSelector } from 'react-redux';

// const messages = [
//   { id: 1, text: 'sdjhfvhsdfv', time: '12:45', sender: 'me' },
//   { id: 2, text: 'hello', time: '12:45', sender: 'me' },
//   { id: 3, text: 'hjdsfkjbdsbjf', time: '12:45', sender: 'me' },
//   { id: 4, text: 'iergefg', time: '12:45', sender: 'me' },
//   { id: 5, text: 'hi patel I\'m good', time: '12:45', sender: 'other' },
//   { id: 6, text: 'kya kr rhe ho?', time: '12:45', sender: 'other' }
// ];



const Messages = () => {

  useGetMessages()

  const {messages} = useSelector(store => store.message)

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
