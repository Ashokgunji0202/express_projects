import React from 'react'
// import UserProfile from './components/UserProfile'
// import UserDetailsApi from './components/UserDetailsApi'
// import ConductionalRen from './components/ConductionalRen'
// import VerfiedUser from './components/VerfiedUser'
import LoginForm from './components/LoginForm'
import CounterUseState from './components/CounterUseState'
import UserDetails from './components/userDetails/UserDetails'
import UserDetailsUseEffect from './components/useEffectsfunction/UserDetailsUseEffect'
import UserDetailsPost from './components/useEffectsfunction/UserDetailsPost'
import PostContainer from './components/reactContext/PostContainer'
import { UserContext } from './components/utils/contexts/UserContext'
import PostContent from './components/reactContext/PostContent'



function App() {

  return (
    <>
      <div>
        <div>
          <h1>Hello world React </h1>
          {/* <UserProfile />
        <UserDetailsApi />
        <ConductionalRen />
        <VerfiedUser /> */}

        </div>
        {/* <div>
        <LoginForm />
      </div>
      <div>
      <CounterUseState />
      </div>
      <div>
        <UserDetails />
      </div> */}


        {/* <div>
        <UserDetailsUseEffect/>
      </div>
      <br />
      <br/>
      <div>
        <UserDetailsPost/>
      </div> */}

        <PostContainer />
      </div>
      <UserContext.Provider value={{ id: 1, username: "gunji", email: "gunjiashok107@gmail.com", displayname: "gunji" }}>
        <div>
          <PostContainer />
        </div>

      </UserContext.Provider>


    </>
  )
}

export default App
