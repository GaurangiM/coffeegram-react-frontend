import React from 'react'
import Card from 'react-bootstrap/Card'

import './CafeDetails.css'

const CafeDetails = (props)=> {
  return (
    <div className="details">
      {props.details && (
        <div>
          <Card className="bg-dark text-white">
          <img src={props.details.imageUrl} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>{props.details.name}</Card.Title>
          </Card.ImgOverlay>
        </Card>
        <p>{props.details.description}</p>
        </div>
        
      )}
      
    </div>
  )
}

export default CafeDetails