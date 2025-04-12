import React from 'react';
import Styles from './Style.module.css';

const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const userName = formData.get('userName');
    const password = formData.get('password');

    console.log(formData.get('userName'));
    console.log(formData.get('password')); 

    // fetch(`http://localhost:5173/api/login`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ userName, password }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          border: '1px solid white',
          borderRadius: '10px',
          padding: '10px',
          margin: '10px',
        }}
      >
        <div>
          <h2>Login Form</h2>
        </div>
        <div style={{ margin: '10px' }}>
          <label htmlFor="userName">UserName :</label>
          <br />
          <input
            name="userName"
            className={Styles.inputField}
            id="userName"
            type="text"
            placeholder="Enter Username"
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
        <div style={{ margin: '10px' }}>
          <label htmlFor="password">Password :</label>
          <br />
          <input
            name="password"
            className={Styles.inputField}
            id="password"
            type="password"
            placeholder="Enter Password"
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
        <div style={{ margin: '10px'}}>
          <button className={Styles.buttonStyle} type="submit">Login</button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
