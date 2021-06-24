import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import ReactStars from "react-rating-stars-component";
import { Button, Comment, Form, Header } from 'semantic-ui-react'

import { selectCafe } from '../../store/cafeDetails/selectors';
import { useSelector } from 'react-redux'

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
          <div className="cafeDescription shadow">
          <ReactStars classNames="ratingStars"
                    count={5}
                    size={24}
                    activeColor="#ffd700"
                    isHalf={true}
                    edit={false}
                    value={parseFloat(props.rating)}
            />
            <p>Rating : {props.rating}</p>
            <p>{cafeInfo.description}</p>
            <p>Contact : {cafeInfo.contact}</p>
            <p>Address : {cafeInfo.address.houseNumber} {cafeInfo.address.streetName} {cafeInfo.address.postCode} {cafeInfo.address.city}
            </p>
          </div>
          <div className="reviews">
              {cafeInfo.user_caves && (
                cafeInfo.user_caves.map(i=> (
                  <div>
                    <p key={cafeInfo.id}>{i.review}</p>
                    <p>--- {i.user.firstName} {i.user.lastName}</p>
                  </div>
                ))
              )}
          </div>


    <Comment.Group>
      <Header as='h3' dividing>
        Comments
      </Header>

      <Comment>
        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
        <Comment.Content>
          <Comment.Author as='a'>Matt</Comment.Author>
          <Comment.Text>How artistic!</Comment.Text>
        </Comment.Content>
      </Comment>

      <Form reply>
        <Form.TextArea />
        <Button content='Add Reply' labelPosition='left' icon='edit' primary />
      </Form>
    </Comment.Group>
          
        </div>
        
      )}
      
    </div>
    
  )
}

export default CafeDetails