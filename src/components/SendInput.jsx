import { Send } from 'lucide-react';
import React, { useState } from 'react'

const SendInput = () => {

     const [message, setMessage] = useState('');

     const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

     const handleSendMessage = () => {
    if (message.trim()) {
      // Here you would typically add the message to your state/database
      setMessage('');
    }
  };
  return (
    <div className="bg-gray-800 border-t border-gray-700 p-4">
      <div className="flex items-center space-x-3">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
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
