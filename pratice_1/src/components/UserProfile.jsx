import React from 'react'
import UserSkills from './UserSkills'
import UserName from './UserName';

const UserProfile = () => {
    return (
        <div id='user-profile'>
            <h1>Hello Profile Components</h1>
            <UserName username="gunjiAshok" age={20} isLoggedIn={false} />
            <div>
                <p>Profile</p>
                <span>Email : </span>
                <span>gunjiashok107@gmail.com</span>
            </div>
            <p>Skills</p>
            <UserSkills />
        </div>
    )
}
export default UserProfile;

