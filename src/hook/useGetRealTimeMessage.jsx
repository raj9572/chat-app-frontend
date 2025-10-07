/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { getSocket } from '../socket'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../redux/messageSlice'
import { setNotification } from '../redux/userSlice'

const useGetRealTimeMessage = () => {
   const socket = getSocket()
   const dispatch = useDispatch()
   const { selectedUser } = useSelector(store => store.user)

   
   useEffect(() => {
      if(!socket) return

        const handleNewMessage = (newMessage) => {
         if(selectedUser?._id !== newMessage?.senderId){
            dispatch(setNotification(newMessage))
         }else{

           dispatch(addMessage(newMessage));
         }
         
         
         
    };


      socket?.on("newMessage", handleNewMessage)

      return () => {
      socket.off("newMessage", handleNewMessage);
    };

   }, [socket, selectedUser])
}

export default useGetRealTimeMessage
