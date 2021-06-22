import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import { selectCafe } from '../../store/cafeDetails/selectors';
import { useDispatch, useSelector } from 'react-redux'

import './CafeDetails.css'

const CafeDetails = (props)=> {
  const cafeInfo = useSelector(selectCafe)
 
  return (
    <div className="details">
      {cafeInfo && (
        <div>
          <h1>{cafeInfo.name}</h1>
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={cafeInfo.imageUrl}
                alt="First slide"
              />
            </Carousel.Item>
            {cafeInfo.images.map(img=> (
              <Carousel.Item>
              <img
                className="d-block w-100"
                src={img.image}
                alt="First slide"
              />
            </Carousel.Item>
            ))}
          </Carousel>
          <div className="cafeDescription">
            <p>{cafeInfo.description}</p>
            <p>Contact : {cafeInfo.contact}</p>
            <p>Address : {cafeInfo.address.houseNumber} {cafeInfo.address.streetName} {cafeInfo.address.postCode} {cafeInfo.address.city}
            </p>
          </div>
          <div className="reviews">
              {cafeInfo.user_caves && (
                cafeInfo.user_caves.map(i=> (
                  <p key={cafeInfo.id}>{i.review}</p>
                ))
              )}
          </div>
          
        </div>
        
      )}
      
    </div>
    
  )
}

export default CafeDetails