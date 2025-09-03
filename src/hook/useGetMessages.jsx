/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMessages } from '../redux/messageSlice'
import toast from 'react-hot-toast'
const useGetMessages = () => {
    const {selectedUser} = useSelector(store => store.user)
    const dispatch = useDispatch()

    useEffect(() =>{
        
        const fetchMessages = async() =>{
            try {
               
                axios.defaults.withCredentials = true
                const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/message/${selectedUser?._id}`)
                dispatch(setMessages(res?.data || []))
            } catch (error) {
                toast.error(error.response.data.message);
            }
        }
        fetchMessages()

    },[selectedUser])


 
}

export default useGetMessages
