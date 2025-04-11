import React from 'react'

const UserName = (props) => {
    console.log(props);
  return (
    <div>
      <b>UserName: </b>
      <span>{props.username}</span>
      <br />
      <b>age: </b>
      <span>{props.age}</span>
      <br />
      <b>IsloggedIn : </b>
      <span>{props.isLoggedIn ? 'true' : 'false'}</span>
    </div>
  )
}

export default UserName
