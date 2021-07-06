import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'

import  './LandingPage.css'

const LandingPage = ()=> {
  const dispatch = useDispatch()
  useEffect(()=> {
    
  }, [])

  return (
    <div className="LandingPage">
      <div>
        <h1>Welcome to coffee community !</h1>
        <Link to='/home'>Explore Cafes</Link>
      </div>
      
      <img src="https://cdni.iconscout.com/illustration/premium/thumb/girl-reading-book-in-restaurant-3454007-2914605.png" alt="Girl at cafe"/>
    </div>
  )
}

export default LandingPage