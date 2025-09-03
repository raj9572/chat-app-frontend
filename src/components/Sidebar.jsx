import React, { useState } from 'react'
import { LogOut, Search } from 'lucide-react';
import OtherUsers from './OtherUsers';
import axios from 'axios';
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {    setAuthUser,  setOtherUsers } from '../redux/userSlice';
import { disconnectSocket } from '../socket';


const Sidebar = () => {
    const navigate = useNavigate()
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()
    const { otherUsers} = useSelector(store => store.user)
    
    const LogoutHandler = async() =>{
        try {
            const res = await axios.get("http://localhost:8080/api/v1/user/logout")
            toast.success(res?.data?.message)
            navigate("/login")
            dispatch(setAuthUser(null))
            disconnectSocket();
        } catch (error) {
             toast.error(error.response.data.message);
        }
    }

    //Todo optimized search submit handler

  const searchSubmitHandler = (e) =>{
    e.preventDefault()
    const conversationUser = otherUsers?.filter(user => user?.fullName.toLowerCase().includes(search.toLowerCase()))
    // console.log(conversationUser)
    if (conversationUser) {
        dispatch(setOtherUsers(conversationUser))
    } else {
        toast.error("user not found")
    }
  }



    return (
        <div className="w-80 bg-gray-800 border-r border-gray-700 flex flex-col shadow-lg">
            {/* search bar */}
            <div className="p-4">
                <form onSubmit={searchSubmitHandler} className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        placeholder="Search..."
                        className="w-full bg-gray-700 text-white pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                </form>
            </div>

            <OtherUsers />


            {/* logout */}
            <div className="p-4 border-t border-gray-700">
                <button className="flex items-center text-gray-300  w-full ">
                    <div onClick={LogoutHandler} className='flex items-center gap-0 cursor-pointer hover:text-white transition-colors' >
                    <LogOut className="w-5 h-5 mr-2 " />
                      Logout
                    </div>
                </button>
            </div>


        </div>
    )
}

export default Sidebar
