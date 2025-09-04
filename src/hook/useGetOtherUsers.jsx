/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setOtherUsers } from '../redux/userSlice'
import toast from 'react-hot-toast'

const useGetOtherUsers = () => {

    const dispatch = useDispatch()
    const { onlineUsers } = useSelector(store => store.user)
    const token = localStorage.getItem("chat_app_token")
    useEffect(() => {
        const fetchOtherUsers = async () => {
            try {
                axios.defaults.withCredentials = true
                const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user`, {
                    headers: {
                        Authorization: `Bearer ${token}`,   
                    },
                })

                dispatch(setOtherUsers(res?.data))
            } catch (error) {
                toast.error(error.response.data.message);
            }
        }
        fetchOtherUsers()
    }, [onlineUsers])
}

export default useGetOtherUsers
