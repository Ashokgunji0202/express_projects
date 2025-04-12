import { useState } from 'react'
import UserProfile from './components/UserProfile'
import UserDetailsApi from './components/UserDetailsApi'
import ConductionalRen from './components/ConductionalRen'
import VerfiedUser from './components/VerfiedUser'
import LoginForm from './components/LoginForm'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Hello world React </h1>
        <UserProfile />
        <UserDetailsApi />
        <ConductionalRen />
        <VerfiedUser />
      </div>
      <div>
        <LoginForm />
      </div>
    </>
  )
}

export default App
