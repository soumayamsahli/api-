import React from 'react'

const UserCard = ({user}) => {
  return (
    <div>
      <p> {user.name}</p>
      <p> {user.email}</p>
    </div>
  )
}

export default UserCard
