import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import CafeDetails from '../../components/CafeDetails/CafeDetails';
import { selectCafe } from '../../store/cafeDetails/selectors';
import {fetchCafeDetails} from '../../store/cafeDetails/actions'
import { useEffect, useState } from 'react';
import axios from 'axios';

const CafeDetailsPage = ()=> {
  const { cafeId } = useParams();
  const dispatch = useDispatch()
  const cafeInfo = useSelector(selectCafe)
  const [cafeDetails, setCafeDetails] = useState(cafeInfo)

  useEffect(()=> {
    dispatch(fetchCafeDetails(cafeId))
  }, [])


  
  return (
    <div className="CafeDetails">
      <CafeDetails details={cafeDetails}/>
    </div>
  )
}

export default CafeDetailsPage