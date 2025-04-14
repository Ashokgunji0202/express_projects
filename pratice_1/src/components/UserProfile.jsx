import React from 'react'
import UserSkills from './UserSkills'
import UserName from './UserName';

/**
 * Renders a user profile
 *
 * The component renders a user profile which includes his name, age, and
 * whether he is logged in or not. Also, his skills are displayed.
 *
 * @returns {JSX.Element} React component representing the user profile
 */
const UserProfile = () => {
    //Spred operator
    const users = {
        username: 'gunjiAshok',
        age: 20,
        isLoggedIn: false
    };
    return (
        <div id='user-profile'>
            <h1>Hello Profile Components</h1>
            {/* <UserName username="gunjiAshok" age={20} isLoggedIn={false} /> */}
            <UserName {...users} />
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

