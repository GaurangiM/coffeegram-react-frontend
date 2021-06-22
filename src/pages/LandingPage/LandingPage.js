import React from 'react'
import {Link} from 'react-router-dom'

import  './LandingPage.css'

const LandingPage = ()=> {

  return (
    <div className="LandingPage">
      <h1>Welcome to coffee community !</h1>
      <Link to='/home'>Explore Cafes</Link>
    </div>
  )
}

export default LandingPage