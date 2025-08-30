import React from 'react'
import OtherUser from './OtherUser'
import useGetOtherUsers from '../hook/useGetOtherUsers'
import { useSelector } from 'react-redux'

const OtherUsers = () => {

    // const otherUsers = [
    //     {
    //         name: 'Shivani',
    //         avatar: '👩‍💼',
    //         online: true,
    //         lastMessage: 'Hey, how are you?',
    //         time: '12:30'
    //     },
    //     {
    //         name: 'Keshav',
    //         avatar: '👨‍🦰',
    //         online: true,
    //         lastMessage: 'See you tomorrow',
    //         time: '11:45'
    //     },
    //     {
    //         name: 'Shiva reddy',
    //         avatar: '👨‍💻',
    //         online: false,
    //         lastMessage: 'Thanks for the help',
    //         time: '10:20'
    //     },
    //     {
    //         name: 'Ragni',
    //         avatar: '👩‍🦳',
    //         online: true,
    //         lastMessage: 'Let\'s catch up soon',
    //         time: '09:15'
    //     }
    // ]

    // my custom hooks
    useGetOtherUsers()

    const {otherUsers} = useSelector(store => store.user)


    if(!otherUsers) return ; // early return in react

  return (
    <div className="flex-1 space-y-2 overflow-y-auto">
         {
            otherUsers?.map((user) =>{ return <OtherUser key={user?._id} user={user}/>})
         }
    </div>
  )
}

export default OtherUsers
