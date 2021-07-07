import { useDispatch, useSelector } from 'react-redux'
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";

import {getCafes} from '../../store/cafeList/actions'
import {selectCafes} from '../../store/cafeList/selectors'
import {
  setMessage
} from "../../store/appState/actions";
import { animationTwo, transition } from '../../animations';

import './HomePage.css'

//const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const HomePage = ()=> {
  const dispatch = useDispatch()
  const allCafeList = useSelector(selectCafes)
  const [searchCity, setSearchCity] = useState("")
  const [cityCafes, setCityCafes] = useState([])
  const [showSearchResult, setShowSearchResult] = useState(false)
  
  useEffect(()=> {
    dispatch(getCafes())
  }, [dispatch])

  const searchCafes = async(e)=> {
    e.preventDefault()
    if(allCafeList) {
      const cafesInCity = allCafeList.filter(cafe=> 
        cafe.address.city.toLowerCase() === searchCity.toLowerCase())
      if(cafesInCity.length !== 0) {
        setCityCafes([...cafesInCity])
        setShowSearchResult(true)
        setSearchCity("")
      }else {
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
                className="CafeDetails"
                transition={transition} 
                className="HomePage">
      <div className="cityTags">
        <a>Amsterdam</a>
        <a>Maastricht</a>
        <a>Rotterdam</a>
        <a>Den Haag</a>
        <a>Utrecht</a>
      </div>
      <div className="searchCity">
        <Form>
          <Row className="align-items-center">
            <Col xs="auto">
              <Form.Control className="mb-2"
                            id="inlineFormInput"
                            placeholder="Enter city"
                            value={searchCity}
                            onChange={(e)=> {
                              setSearchCity(e.target.value)
                            }}
              />
            </Col>
            <Col xs="auto">
              <Button type="submit" className="mb-2 cityButton"
                      onClick={searchCafes}>
                  Search
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
      <div className="cafes">
        {setShowSearchResult && (
          cityCafes.map(cafe=> {
            return (
              <Link key={cafe.id} to={`/cafes/${cafe.id}`}>
                <article class="box">
                  <img class="img" src={cafe.imageUrl} width="800" height="450" alt=''/>
                  <h2 class="title">
                    <a href="#0" >{cafe.name}</a>
                  </h2>
                </article>
              </Link>
            )
          })
        )}
        {(!showSearchResult && allCafeList) && (
          allCafeList.map(cafe=> {
            return (
              <Link key={cafe.id} to={`/cafes/${cafe.id}`}>
                <article class="box">
                  <motion.img class="img" 
                              src={cafe.imageUrl} 
                              width="800" 
                              height="450" 
                              alt='A cafe image'
                              whileHover={{ scale: 1.1 }}
                              transition={transition}/>
                  <h2 class="title">
                    <a href="#0">{cafe.name}</a>
                  </h2>
                </article>
              </Link>
            )
          })
        )}
      </div>
      
    </motion.div>
  )
}

export default HomePage