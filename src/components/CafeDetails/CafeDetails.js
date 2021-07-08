import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import ReactStars from "react-rating-stars-component";
import { Comment, Header, Form, Button } from 'semantic-ui-react'

import { selectCafe } from '../../store/cafeDetails/selectors';
import { useSelector, useDispatch } from 'react-redux'
import { selectUser } from "../../store/user/selectors";
import { postReviewForCafe } from "../../store/cafeDetails/actions"

import './CafeDetails.css'


const CafeDetails = (props) => {
  const cafeInfo = useSelector(selectCafe)
  const user = useSelector(selectUser);
  const [newReview, setNewReview] = useState("");
  const dispatch = useDispatch();

  const postReview = ()=> {
    dispatch(postReviewForCafe(user.id, cafeInfo.id, newReview , 4))
    setNewReview("")
  }

  return (
    <div
      initial='initial'
      animate='animate'
      exit='exit'
      className="details">
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
            {cafeInfo.images.map(img => (
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
          <Comment.Group >
            <Header as='h3' dividing>
              Reviews
            </Header>

            {cafeInfo.user_caves.map(i => (
              <Comment>
                <Comment.Avatar src={i.user.avatar} />
                <Comment.Content>
                  <Comment.Author as='a'>{i.user.firstName} {i.user.lastName}</Comment.Author>
                  <Comment.Text>{i.review}</Comment.Text>
                </Comment.Content>
              </Comment>
            ))}
            {user.firstName && (
              <Form reply>
              <Form.TextArea value={newReview}
                              onChange={(e)=> setNewReview(e.target.value)}/>
              <Button content='Post Review' 
                      labelPosition='left' 
                      icon='edit' primary 
                      onClick={postReview}/>
            </Form>
            )}
            
          </Comment.Group>

        </div>
      )}
    </div>
  )
}

export default CafeDetails