import React, { useState } from 'react'
import UserDetailsApis1 from './UserDetailsApis1'

const UserDetails = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [counter, setCounter] = useState(4);
    const [age, setAge] = useState(0);

    const [users, setUsers] = useState([
        {
            id: 1,
            name: 'gunji',
            email: 'gunjiashok107@gmail.com',
            age: 20
        }, {
            id: 2,
            name: 'patel',
            email: 'bahaipatel107@gmail.com',
            age: 21
        }, {
            id: 3,
            name: 'basha',
            email: 'Basha107@gmail.com',
            age: 21
        }]);
        const handelSubmit = (e) => {
            e.preventDefault();
            const newUser = {
                id: counter,
                name: username,
                email: email,
                age: age
            };
            setCounter(counter + 1);
            setUsers(users => [...users, newUser]);
            setUsername('');
            setEmail('');
            setAge(0);
        }
    return (
        <div>
            <div>
                <form action="" onSubmit={handelSubmit}>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="age">Age: </label>
                        <input
                            type="number"
                            name="age"
                            id="age"
                            value={age} onChange={(e) => setAge(e.target.value)}
                        />
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
            <h3>UserDetailsApi For Fetching</h3>
            <ul>
                {users.map((user) => (
                    <UserDetailsApis1 key={user.id} user={user} setUsers={setUsers} />
                ))}
            </ul>

        </div>
    )
}

export default UserDetails
