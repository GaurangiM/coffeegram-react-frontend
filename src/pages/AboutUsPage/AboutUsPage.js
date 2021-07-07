import React from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion';

import { selectUsers } from '../../store/userList/selectors'
import { animationTwo, transition } from '../../animations';

import './AboutUs.css'

const AboutUsPage = () => {

  const allUsers = useSelector(selectUsers)

  return (
    <motion.div initial='out'
                animate='in'
                exit='out'
                variants={animationTwo}
                transition={transition}
                className="aboutUs">
      <h1>Coffeegram</h1>
      <p>We are a team of people who love coffee and some more coffee... So the motive behind this group is to share our love for coffee and
        suggest some cool cafes we come across in our lives ! Here you can browse through our exclusive collection of amazing cafes, its pictures and
        some genuine reviews about cafe. So next time you are on a stroll around any city in Netherlands, no need to Google, just search through our cafe collection
        and experience the pleasure of best ever coffee !
      </p>
      <h2>Come and be a part of Coffeegram by signing up !</h2>
      <h3>Meet our CoffeeGrammers</h3>
      <div className="team">
        {allUsers && (
          allUsers.map(user => (
            <div className="member shadow" key={user.id}>
              <img src={user.avatar} alt="User Avatar" />
              <p>{user.firstName} {user.lastName}</p>
              <p>{user.bio}</p>
            </div>
          ))
        )}
      </div>


    </motion.div>
  )
}

export default AboutUsPage