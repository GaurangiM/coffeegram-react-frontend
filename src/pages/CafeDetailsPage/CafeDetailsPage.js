import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import CafeDetails from '../../components/CafeDetails/CafeDetails';
import { selectCafe, selectRating } from '../../store/cafeDetails/selectors';
import {fetchCafeDetails} from '../../store/cafeDetails/actions'
import { useEffect, useState } from 'react';
import axios from 'axios';

const CafeDetailsPage = ()=> {
  const { cafeId } = useParams();
  const dispatch = useDispatch()
  const cafeInfo = useSelector(selectCafe)
  const [cafeDetails, setCafeDetails] = useState(cafeInfo)
  const ratings = useSelector(selectRating)
  let total=0
  ratings.forEach(element => {
    total=total + parseFloat(element)
  });
  
  let avgRating = total/ratings.length
  
  useEffect(()=> {
    dispatch(fetchCafeDetails(cafeId))
    
  }, [])


  
  return (
    <div className="CafeDetails">
      <CafeDetails rating={avgRating}/>
    </div>
  )
}

export default CafeDetailsPage