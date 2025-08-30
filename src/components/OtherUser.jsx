import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedUser } from '../redux/userSlice'

const OtherUser = ({user}) => {
    // const isSelected = true
    const dispatch = useDispatch()
    const {selectedUser} = useSelector(store => store.user)

    const selectedUserHandler = (user)=>{
        dispatch(setSelectedUser(user))
    }
    
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
                {user.online && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-800"></div>
                )}
            </div>
            <div className="ml-3 flex-1">
                <div className="font-medium text-white">{user.fullName}</div>
                {user.lastMessage && (
                    <div className="text-sm text-gray-400 truncate">{user.lastMessage}</div>
                )}
            </div>
            {user.time && (
                <div className="text-xs text-gray-400">{user.time}</div>
            )}
        </div>
    )
}

export default OtherUser
