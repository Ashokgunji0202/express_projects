import React, { useState } from 'react'

const UserDetailsApis1 = ({ user, setUsers }) => {
    const [isEdition, setIsEdition] = useState(false);
    const [userName, setUserName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    return (
        <div>
            <div>
                <button
                    onClick={() => {
                        setIsEdition(currentState => !currentState);
                    }}>Edit
                </button>
                <button onClick={() => setUsers(users => users.filter(u => u.id !== user.id))}>Delete</button>


                {/* <button onClick={()=>console.log(user)}>Save</button> */}

                {/* One way of editing */}
                {/* <button onClick={()=>{
                const updatedUser = {...user};
                updatedUser.name = userName;
                updatedUser.email = email;
                setUsers(users => users.map(u => u.id === user.id ? updatedUser : u));
                setIsEdition(false);
            }}>Save</button> */}

                {/* Second way of editing */}
                <button onClick={() => {
                    setUsers((currentUsersState) => {
                        return currentUsersState.map((currentUser) => currentUser.id === user.id ? (
                            {
                                ...currentUser,
                                name: userName,
                                email: email
                            }
                        ):currentUser
                        );
                    })
                    setIsEdition(false);

                }}>Save</button>
            </div>
            <div>
                <b>ID: </b>
                <span>{user.id}</span>
                <br />
                <b>Name: </b>

                {/* <span>{user.name}</span> */}
                {isEdition ? (<input
                    name='username'
                    id='username'
                    type="text"
                    value={userName}
                    onChange={(e) => {
                        setUserName(e.target.value);
                    }}
                />) : (<span>{user.name}</span>)}
                <br />
                <b>Email: </b>

                {/* <span>{user.email}</span> */}
                {isEdition ? (<input 
                name='email' 
                id='email' 
                type="email" 
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                />) : (<span>{user.email}</span>)}
                <br />
                <b>Age: </b>
                <span>{user.age}</span>
                <br />
            </div>

        </div>
    )
}

export default UserDetailsApis1
