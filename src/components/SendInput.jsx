import { Send } from 'lucide-react';
import React, {  useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setMessages } from '../redux/messageSlice';


const SendInput = () => {
     const [message, setMessage] = useState('');
     const dispatch = useDispatch()
     const {selectedUser} = useSelector(store => store.user)
     const {messages} = useSelector(store => store.message)
  //    const handleKeyPress = (e) => {
  //   if (e.key === 'Enter' && !e.shiftKey) {
  //     e.preventDefault();
  //     handleSendMessage();
  //   }
  // };

     const handleSendMessage = async() => {
        try {
          const res = await axios.post(`http://localhost:8080/api/v1/message/send/${selectedUser?._id}`,
            {message},
            {
              headers:{
              'Content-Type':"application/json"
            },
            withCredentials:true
            }
            
          )
          dispatch(setMessages([...messages , res?.data?.newMessage]))
          
        } catch (error) {
          console.log(error)
        }
        setMessage('')
  };
  return (
    <div className="bg-gray-800 border-t border-gray-700 p-4">
      <div className="flex items-center space-x-3">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Send a message..."
          className="flex-1 bg-gray-700 text-white px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-400"
        />
        <button
          onClick={handleSendMessage}
          disabled={!message.trim()}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white p-3 rounded-full transition-all transform hover:scale-105 active:scale-95"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

export default SendInput
