/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react'
import Messages from './Messages';
import SendInput from './SendInput';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUser } from '../redux/userSlice';

const MessageContainer = () => {
    const {authUser, selectedUser, onlineUsers} = useSelector(store => store.user)
    const isOnline = onlineUsers?.includes(selectedUser?._id)
    const dispatch = useDispatch()

    useEffect(() =>{
        return () => dispatch(setSelectedUser(null))
    },[])
    
    return (
        <>
            {
                selectedUser !== null ?
                 (<div className="flex-1 flex flex-col">
                    {/* header  */}
                    <div className="bg-gray-800 border-b border-gray-700 p-4 flex items-center shadow-sm">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-lg">
                            <img src={selectedUser?.profilePhoto} alt="" />
                        </div>
                        <div className="ml-3">
                            <div className="font-medium text-white">{selectedUser?.fullName}</div>
                            <div className="text-sm text-green-400">{isOnline ? "Online" : "Offline"}</div>
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
