/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { getSocket } from '../socket'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage, setMessages } from '../redux/messageSlice'

const useGetRealTimeMessage = () => {
   const socket = getSocket()
   const dispatch = useDispatch()
   const { messages } = useSelector(store => store.message)

   const { selectedUser } = useSelector(store => store.user)
   useEffect(() => {

      if(!socket)  return

        const handleNewMessage = (newMessage) => {
         if(selectedUser?._id !== newMessage?.senderId) return
         dispatch(addMessage(newMessage));
    };


      socket?.on("newMessage", handleNewMessage)

      return () => {
      socket.off("newMessage", handleNewMessage);
    };

   }, [setMessages,messages])
}

export default useGetRealTimeMessage
