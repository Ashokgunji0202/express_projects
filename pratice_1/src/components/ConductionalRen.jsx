import React from 'react'

const ConductionalRen = () => {

    const isAuthenticated = false
  return isAuthenticated ? <div>
      <h2>Authenticated</h2>
      <p>Welocome User!</p>
  </div> : <div>
    <h2>Not Authenticated</h2>
    <p>Please Login</p>
    </div>
}

export default ConductionalRen
