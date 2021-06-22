import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import './CafeDetails.css'

const CafeDetails = (props)=> {
 
  return (
    <div className="details">
      {props.details && (
        <div>
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={props.details.imageUrl}
                alt="First slide"
              />
            </Carousel.Item>
            {props.details.images.map(img=> (
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
            <p>{props.details.description}</p>
            <p>Contact : {props.details.contact}</p>
            <p>Address : {props.details.address.houseNumber} {props.details.address.streetName} {props.details.address.postCode} {props.details.address.city}
            </p>
          </div>
          
        </div>
        
      )}
      
    </div>
  )
}

export default CafeDetails