import React from 'react'
import videoBg from './videoBg.mp4'

const Main = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
            <h1>Welcome</h1>
            <p>to</p>
            <h1>Cliconix</h1>
            <button >Enter</button>
        </div>
    </div>
  )
}

export default Main