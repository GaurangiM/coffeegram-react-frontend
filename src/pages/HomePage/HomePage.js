import { useDispatch, useSelector } from 'react-redux'
import React, {useState, useEffect} from 'react'

import {getCafes} from '../../store/cafeList/actions'
import {selectCafes} from '../../store/cafeList/selectors'

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
            return <img key={cafe.id} 
                        src={cafe.imageUrl}/>
          })
        )}
        {(!showSearchResult && allCafeList) && (
          allCafeList.map(cafe=> {
            return <img key={cafe.id} 
                        src={cafe.imageUrl}/>
          })
        )}
      </div>
      
    </div>
  )
}

export default HomePage