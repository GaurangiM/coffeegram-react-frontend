import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import CafeDetails from '../../components/CafeDetails/CafeDetails';
import { selectCafes } from '../../store/cafeList/selectors';
import { useEffect, useState } from 'react';

const CafeDetailsPage = ()=> {
  const { cafeId } = useParams();
  const dispatch = useDispatch()
  const allCafeList = useSelector(selectCafes)
  const [cafeDetails, setCafeDetails] = useState()
  
  console.log(cafeId)
  useEffect(()=> {
    const fetchCafeDetails = async()=> {
      const cafe = await allCafeList.find(cafe=> cafe.id === parseInt(cafeId))
      console.log(cafe)
      setCafeDetails(cafe)
    }
    fetchCafeDetails()
  }, [])


  
  return (
    <div className="CafeDetails">
      <CafeDetails details={cafeDetails}/>
    </div>
  )
}

export default CafeDetailsPage