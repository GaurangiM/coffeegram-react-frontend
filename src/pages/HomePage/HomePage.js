import { useDispatch, useSelector } from 'react-redux'
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import {getCafes} from '../../store/cafeList/actions'
import {selectCafes} from '../../store/cafeList/selectors'
import {
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
        setCityCafes(allCafeList)
      }
      
    }
    
  }

  return (
    <div className="HomePage">
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
              <Button type="submit" className="mb-2"
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
              
                <Link key={cafe.id} 
                          to={`/cafes/${cafe.id}`}>
                      <img src={cafe.imageUrl} alt="A cafe"/>
                </Link>
            
            )
          })
        )}
        {(!showSearchResult && allCafeList) && (
          allCafeList.map(cafe=> {
            return <Link key={cafe.id} 
                          to={`/cafes/${cafe.id}`}>
                      <img src={cafe.imageUrl} alt="A cafe"/>
                    </Link>
          })
        )}
      </div>
      
    </div>
  )
}

export default HomePage