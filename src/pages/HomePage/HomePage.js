import { useDispatch, useSelector } from 'react-redux'
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import {getCafes} from '../../store/cafeList/actions'
import {selectCafes, selectRatings} from '../../store/cafeList/selectors'
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage
} from "../../store/appState/actions";

import './HomePage.css'

const HomePage = ()=> {
  const dispatch = useDispatch()
  const allCafeList = useSelector(selectCafes)
  const [searchCity, setSearchCity] = useState("")
  const [cityCafes, setCityCafes] = useState([])
  const [showSearchResult, setShowSearchResult] = useState(false)
  
  useEffect(()=> {
    dispatch(getCafes())
  }, [dispatch])

  const searchCafes = async()=> {
    if(allCafeList) {
      const cafesInCity = allCafeList.filter(cafe=> 
        cafe.address.city.toLowerCase() === searchCity.toLowerCase())
      //console.log(cafesInCity)
      if(cafesInCity.length !== 0) {
        setCityCafes([...cafesInCity])
        setShowSearchResult(true)
        setSearchCity("")
      }else {
        dispatch(setMessage("danger", true, `No cafes found in ${searchCity}`));
        setSearchCity("")
      }
      
    }
    
  }

  return (
    <div className="HomePage">
      <div>
        <input type="text" placeholder="Enter city"
                value={searchCity}
                onChange={(e)=> {
                  setSearchCity(e.target.value)
                  }}/>
        <button onClick={searchCafes}>Search</button>
      </div>
      <div>
        {setShowSearchResult && (
          cityCafes.map(cafe=> {
            return (
              
                <Link key={cafe.id} 
                          to={`/cafes/${cafe.id}`}>
                      <img src={cafe.imageUrl}/>
                </Link>
            
            )
          })
        )}
        {(!showSearchResult && allCafeList) && (
          allCafeList.map(cafe=> {
            return <Link key={cafe.id} 
                          to={`/cafes/${cafe.id}`}>
                      <img src={cafe.imageUrl}/>
                    </Link>
          })
        )}
      </div>
      
    </div>
  )
}

export default HomePage