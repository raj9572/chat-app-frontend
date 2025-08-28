import React from 'react'

const Message = ({ message }) => {
  const isMe = message.sender === 'me';
  
  return (
    <div className={`flex ${isMe ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl shadow-md ${
          isMe
            ? 'bg-blue-600 text-white rounded-br-md'
            : 'bg-gray-700 text-white rounded-bl-md'
        }`}
      >
        <div className="text-sm">{message.text}</div>
        <div className={`text-xs mt-1 ${
          isMe ? 'text-blue-200' : 'text-gray-400'
        }`}>
          {message.time}
        </div>
      </div>
    </div>
  );
};

export default Message
