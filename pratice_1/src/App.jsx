import { useState } from 'react'
import UserProfile from './components/UserProfile'
import UserDetailsApi from './components/UserDetailsApi'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Hello world React </h1>
        <UserProfile />
        <UserDetailsApi />
      </div>
    </>
  )
}

export default App
