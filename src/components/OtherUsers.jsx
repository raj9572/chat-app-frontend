import React from 'react'
import OtherUser from './OtherUser'

const OtherUsers = () => {

    const otherUsers = [
        {
            name: 'Shivani',
            avatar: '👩‍💼',
            online: true,
            lastMessage: 'Hey, how are you?',
            time: '12:30'
        },
        {
            name: 'Keshav',
            avatar: '👨‍🦰',
            online: true,
            lastMessage: 'See you tomorrow',
            time: '11:45'
        },
        {
            name: 'Shiva reddy',
            avatar: '👨‍💻',
            online: false,
            lastMessage: 'Thanks for the help',
            time: '10:20'
        },
        {
            name: 'Ragni',
            avatar: '👩‍🦳',
            online: true,
            lastMessage: 'Let\'s catch up soon',
            time: '09:15'
        }
    ]

  return (
    <div className="flex-1 space-y-2 overflow-y-auto">
         {
            otherUsers?.map((user) =>{ return <OtherUser key={user?.name} user={user}/>})
         }
    </div>
  )
}

export default OtherUsers
