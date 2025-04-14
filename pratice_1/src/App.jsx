import React from 'react'
// import UserProfile from './components/UserProfile'
// import UserDetailsApi from './components/UserDetailsApi'
// import ConductionalRen from './components/ConductionalRen'
// import VerfiedUser from './components/VerfiedUser'
import LoginForm from './components/LoginForm'
import CounterUseState from './components/CounterUseState'
import UserDetails from './components/userDetails/UserDetails'



function App() {
  
  return (
    <>
      <div>
        <h1>Hello world React </h1>
        {/* <UserProfile />
        <UserDetailsApi />
        <ConductionalRen />
        <VerfiedUser /> */}
        
      </div>
      <div>
        <LoginForm />
      </div>
      <div>
      <CounterUseState />
      </div>
      <div>
        <UserDetails />
      </div>
    </>
  )
}

export default App
