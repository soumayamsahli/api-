import React from 'react'
import UserCard from './UserCard'

const UserList = ({listofUser}) => {
  return (
    <div>
      {listofUser.map( user => <UserCard user={user}/>)}
    </div>
  )
}

export default UserList
