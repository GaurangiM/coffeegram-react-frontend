import { useDispatch, useSelector } from 'react-redux'
import React, {useState, useEffect} from 'react'

import {getCafes} from '../../store/cafeList/actions'
import {selectCafes} from '../../store/cafeList/selectors'

const HomePage = ()=> {
  const dispatch = useDispatch()
  const allCafeList = useSelector(selectCafes)

  useEffect(()=> {
    dispatch(getCafes())
  }, [dispatch])

  return (
    <div>
      Home Page
      {allCafeList && (
        allCafeList.map(cafe=> {
          return <p key={cafe.id}>{cafe.name}</p>
        })
      )}
    </div>
  )
}

export default HomePage