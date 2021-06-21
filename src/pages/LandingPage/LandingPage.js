import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import  './LandingPage.css'

const LandingPage = ()=> {
  

  return (
    <div className="LandingPage">
      <h1>Welcome to coffee community !</h1>
      <Link to="/home">Explore Cafes</Link>
    </div>
  )
}

export default LandingPage