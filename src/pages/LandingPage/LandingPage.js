import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { motion } from "framer-motion"

import { animationTwo, transition } from '../../animations';

import './LandingPage.css'

const LandingPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {

  }, [])

  return (
    <motion.div 
      className="LandingPage">
      <div>
        <h1>Welcome to coffee community !</h1>
        <Link to='/home'>Explore Cafes</Link>
      </div>
      <motion.img
        src="https://cdni.iconscout.com/illustration/premium/thumb/girl-reading-book-in-restaurant-3454007-2914605.png"
        alt="Girl at cafe"
        animate={{
          scale: 0.8,
          transition: {
            duration: 3
          }
        }} />
    </motion.div>
  )
}

export default LandingPage