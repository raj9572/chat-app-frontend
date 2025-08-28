/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Messages from './Messages';
import SendInput from './SendInput';

const MessageContainer = () => {
    const [selectedContact, setSelectedContact] = useState('Patel');
    const isInput = true
    const authUser={fullName:"raj ali"}
    return (
        <>
            {
                isInput ?
                 (<div className="flex-1 flex flex-col">
                    {/* header  */}
                    <div className="bg-gray-800 border-b border-gray-700 p-4 flex items-center shadow-sm">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-lg">
                            👨‍💼
                        </div>
                        <div className="ml-3">
                            <div className="font-medium text-white">{selectedContact}</div>
                            <div className="text-sm text-green-400">Online</div>
                        </div>
                    </div>

                    <Messages />
                    <SendInput />

                </div> )  :

                (
                    <div className='md:min-w-[550px] flex flex-col justify-center items-center'>
                        <h1 className='text-4xl text-white font-bold'>Hi,{authUser?.fullName} </h1>
                        <h1 className='text-2xl text-white'>Let's start conversation</h1>

                    </div>
                )
            }
        </>


    )
}

export default MessageContainer
