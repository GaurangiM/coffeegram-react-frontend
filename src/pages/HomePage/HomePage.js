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

  const searchCafes = async(e)=> {
    e.preventDefault()
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
                      <img className="cafeImage" src={cafe.imageUrl} alt="A cafe"/>
                      <span className="imageText">{cafe.name}</span>
                </Link>
                
            
            )
          })
        )}
        {(!showSearchResult && allCafeList) && (
          allCafeList.map(cafe=> {
            return (
              /*<Link key={cafe.id} to={`/cafes/${cafe.id}`}>
                <img className="cafeImage" src={cafe.imageUrl} alt="A cafe"/>
                <span className="imageText">{cafe.name}</span>
              </Link>*/


              <Link key={cafe.id} to={`/cafes/${cafe.id}`}>
              <article class="box">
                <img class="img" src={cafe.imageUrl} width="800" height="450" alt=''/>
                <h2 class="title"><a href="#0" aria-label="Learn more Very Distant Mountains">{cafe.name}</a></h2>
                <div class="actions">
                  <button class="btn" title="Save as favorite">
                    <svg data-icon="heart" viewBox="0 0 512 512">
                      <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
                    </svg>
                  </button>
                  <button class="btn" title="Share this trip">
                    <svg data-icon="share" viewBox="0 0 512 512">
                      <path d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z" />
                    </svg>
                  </button>
                </div>
              </article>
              </Link>
                
             

              



            )
          })
        )}
      </div>
      
    </div>
  )
}

export default HomePage