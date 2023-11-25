import React from 'react'
import UserContainer from './User/UserContainer'
import StreamContainer from './Stream/StreamContainer'

export default function RightSidebar() {
  return (
    <div className="h-screen col-span-2 pt-15 pb-4 flex-col text-center">
        <UserContainer />
        <StreamContainer />
        
    </div>
  )
}
