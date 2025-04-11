import { useState } from 'react'
import UserProfile from './components/UserProfile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Hello world React </h1>
        <UserProfile />
      </div>
    </>
  )
}

export default App
