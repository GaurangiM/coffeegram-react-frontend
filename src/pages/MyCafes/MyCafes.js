import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { motion } from "framer-motion"
import { apiUrl } from "../../config/constants";

import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import CafesOnMap from '../../components/CafesOnMap/CafesOnMap'
import { animationTwo, transition } from '../../animations';

import './MyCafes.css'

const MyCafes = ()=> {
  const [cafeList, setCafeList] = useState([]);
  const user = useSelector(selectUser);

  useEffect(()=> {
    const fetchData = async()=> {
      const response = await axios.get(`${apiUrl}/cafes/${user.id}/mycafes`)
      console.log(response.data.userCafes)
      setCafeList([...response.data.userCafes])
    }
    fetchData()
  })
  return (
    <motion.div className="MyCafes"
                initial='out'
                animate='in'
                exit='out'
                variants={animationTwo}
                transition={transition}>
      <h1>Hey Coffeeholic, here you can see the cafes you visited and reviewed in the past !</h1>
      <CafesOnMap cafes={cafeList}/>
    </motion.div>
  )
}

export default MyCafes