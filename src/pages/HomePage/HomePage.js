import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

import { getCafes } from '../../store/cafeList/actions'
import { selectCafes } from '../../store/cafeList/selectors'
import {
  setMessage
} from "../../store/appState/actions";
import { animationTwo, transition, animationOne } from '../../animations';

import './HomePage.css'

const HomePage = () => {
  const dispatch = useDispatch()
  const allCafeList = useSelector(selectCafes)
  const [searchCity, setSearchCity] = useState("")
  const [cityCafes, setCityCafes] = useState([])
  const [showSearchResult, setShowSearchResult] = useState(false)

  useEffect(() => {
    dispatch(getCafes())
  }, [dispatch])

  const searchCafes = async (cityTag) => {
    if (cityTag === 'all') {
      setCityCafes(allCafeList)
      return
    }
    if (allCafeList) {
      const cafesInCity = allCafeList.filter(cafe => {
        if (cityTag)
          return cafe.address.city.toLowerCase() === cityTag.toLowerCase()

        return cafe.address.city.toLowerCase() === searchCity.toLowerCase()
      })
      if (cafesInCity.length !== 0) {
        setCityCafes([...cafesInCity])
        setShowSearchResult(true)
        setSearchCity("")
      } else {
        dispatch(setMessage("danger", true, `No cafes found in ${searchCity}`));
        setSearchCity("")
        setCityCafes(allCafeList)
      }

    }

  }

  return (
    <motion.div initial='out'
      animate='in'
      exit='out'
      variants={animationTwo}
      transition={transition}
      className="HomePage">
      <div className="cityTags">
        <a href="#/" onClick={() => {
          let cityTag = "amsterdam"
          searchCafes(cityTag)
        }}>Amsterdam</a>
        <a href="#/" onClick={() => {
          let cityTag = "maastricht"
          searchCafes(cityTag)
        }}>Maastricht</a>
        <a href="#/" onClick={() => {
          let cityTag = "rotterdam"
          searchCafes(cityTag)
        }}>Rotterdam</a>
        <a href="#/" onClick={() => {
          let cityTag = "den haag"
          searchCafes(cityTag)
        }}>Den Haag</a>
        <a href="#/" onClick={() => {
          let cityTag = "utrecht"
          searchCafes(cityTag)
        }}>Utrecht</a>
        <a href="#/" onClick={() => {
          let cityTag = "all"
          searchCafes(cityTag)
        }}>All</a>
      </div>

      <motion.div  className="cafes">
        {setShowSearchResult && (
          cityCafes.map(cafe => {
            return (
                <Link key={cafe.id} to={`/cafes/${cafe.id}`}>
                  <motion.article initial='out'
                                animate='in'
                                exit='out'
                                variants={animationOne}
                                transition={transition} class="box">
                    <img class="img" src={cafe.imageUrl} width="800" height="450" alt='' />
                    <h2 class="title">
                      <a href="#0" >{cafe.name}</a>
                    </h2>
                  </motion.article>
                </Link>
              )
          })
        )}
        {(!showSearchResult && allCafeList) && (
          allCafeList.map(cafe => {
            return (
              <Link key={cafe.id} to={`/cafes/${cafe.id}`}>
                <motion.article initial='out'
                                animate='in'
                                exit='out'
                                variants={animationTwo}
                                transition={transition} class="box">
                  <img class="img"
                    src={cafe.imageUrl}
                    width="800"
                    height="450"
                    alt='A cafe' />
                  <h2 class="title">
                    <a href="#0">{cafe.name}</a>
                  </h2>
                </motion.article>
              </Link>
            )
          })
        )}
      </motion.div>

    </motion.div>
  )
}

export default HomePage