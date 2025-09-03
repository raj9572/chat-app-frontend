/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedUser } from '../redux/userSlice'

const OtherUser = ({ user }) => {

    const dispatch = useDispatch()
    const { selectedUser, onlineUsers } = useSelector(store => store.user)
    const userData = onlineUsers[user._id];

    const isOnline = userData && userData.socketId
    // const selectedUserHandler = (user)=>{
    //     dispatch(setSelectedUser(user))
    // }

    const selectedUserHandler = useCallback(
        (user) => {
            dispatch(setSelectedUser(user))
        },
        [selectedUser] 
    );


    return (
        <div
            className={`flex items-center p-4 hover:bg-gray-700 cursor-pointer transition-colors ${selectedUser?._id === user?._id ? 'bg-gray-700 border-r-2 border-blue-500' : ''
                }`}
            onClick={() => selectedUserHandler(user)}
        >
            <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-xl">
                    <img src={user?.profilePhoto} alt="" />
                </div>
                {isOnline && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-800"></div>
                )}
            </div>
            <div className="ml-3 flex-1">
                <div className="font-medium text-white">{user?.fullName}</div>
                {user?.lastMessage && (
                    <div className="text-sm text-gray-400 truncate">{user.lastMessage}</div>
                )}
            </div>
            {user?.time && (
                <div className="text-xs text-gray-400">{user.time}</div>
            )}
        </div>
    )
}

export default OtherUser
