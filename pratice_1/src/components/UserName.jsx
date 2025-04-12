import React from 'react'
import PropTypes from 'prop-types';
import Styles from './Style.module.css'



const UserName = (props) => {
   // console.log(props);
  return (
    <React.Fragment>
      {/* <b style={{
         color: 'red' ,
        fontSize: '20px'     
        }}>UserName: </b> */}
      <b className={Styles.username} >UserName: </b>
      <span>{props.username}</span>
      <br />
      <b className={Styles.age}>age: </b>
      <span>{props.age}</span>
      <br />
      <b>IsloggedIn : </b>
      <span>{props.isLoggedIn ? 'true' : 'false'}</span>
    </React.Fragment>
  )
}
UserName.propTypes = {
  username: PropTypes.string.isRequired,
  age: PropTypes.number,
  isLoggedIn: PropTypes.bool
};

export default UserName
