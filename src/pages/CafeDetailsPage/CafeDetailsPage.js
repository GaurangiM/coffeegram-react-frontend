import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from "framer-motion";

import CafeDetails from '../../components/CafeDetails/CafeDetails';
import { selectRating } from '../../store/cafeDetails/selectors';
import { fetchCafeDetails } from '../../store/cafeDetails/actions'
import { useEffect } from 'react';
import { animationTwo, transition } from '../../animations'

const CafeDetailsPage = () => {
  const { cafeId } = useParams();
  const dispatch = useDispatch()
  const ratings = useSelector(selectRating)
  let total = 0
  ratings.forEach(element => {
    total = total + parseFloat(element)
  });

  let avgRating = (total / ratings.length).toFixed(1)

  useEffect(() => {
    dispatch(fetchCafeDetails(cafeId))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return (
    <motion.div initial='out' 
                animate='in' 
                exit='out' 
                variants={animationTwo}
                className="CafeDetails"
                transition={transition}>
    <CafeDetails rating={avgRating} /> 

    </motion.div>
  )
}

export default CafeDetailsPage