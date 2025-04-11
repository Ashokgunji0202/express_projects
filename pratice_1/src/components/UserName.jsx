import React from 'react'
import PropTypes from 'prop-types';


const UserName = (props) => {
   // console.log(props);
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
UserName.propTypes = {
  username: PropTypes.string.isRequired,
  age: PropTypes.number,
  isLoggedIn: PropTypes.bool
};

export default UserName
