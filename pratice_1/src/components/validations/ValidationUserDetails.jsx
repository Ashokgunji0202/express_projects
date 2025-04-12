import React from 'react';
import PropTypes from 'prop-types';

const ValidationUserDetails = ({ user }) => {
  return (
    <li>
      <span>Name: {user.name} </span> | 
      <span>Email: {user.email} </span> | 
      <span>Age: {user.age} </span>
    </li>
  );
};

// PropTypes for a single user
ValidationUserDetails.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }).isRequired,
};

export default ValidationUserDetails;
