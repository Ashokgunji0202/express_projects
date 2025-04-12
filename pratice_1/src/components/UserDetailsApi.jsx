import React from 'react';
import ValidationUserDetails from './validations/ValidationUserDetails';

const UserDetailsApi = () => {
  const mockUsers = [
    {
      id: 1,
      name: 'gunji',
      email: 'gunjiashok107@gmail.com',
      age: 20
    },
    {
      id: 2,
      name: 'ashok',
      email: 'gunjiashok107@gmail.com',
      age: 21
    }
  ];

  return (
    <div>
      <h3>UserDetailsApi</h3>
      <ul>
        {mockUsers.map((user) => (
          <ValidationUserDetails key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default UserDetailsApi;
