import React from 'react'
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useDispatch } from 'react-redux'
import ReactStars from "react-rating-stars-component";

import { postReviewForCafe } from '../../store/user_cafes/actions';


const CafeExist = ({cafe})=> {
  const dispatch = useDispatch()
  const [review, setReview] = useState("")
  const [rating, setRating] = useState("")
  const [image, setImage] = useState("")
  

  const postReview = ()=> {
    dispatch(postReviewForCafe(cafe.id, review, rating, image))
    setReview("")
    setRating("")
    setImage("")
  }

  return (
    <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
      <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Review</Form.Label>
          <Form.Control
            value={review}
            onChange={event => setReview(event.target.value)}
            type="text"
            placeholder="Review"
            required
            as="textarea" 
            rows={3}
          />
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Label>Rating</Form.Label>
          <ReactStars
                    count={5}
                    size={24}
                    activeColor="#ffd700"
                    isHalf={true}
                    edit={true}
                    onChange={(newRating)=> setRating(newRating)}
            />
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Label>Picture of cafe</Form.Label>
          <Form.Control
            value={image}
            onChange={event => setImage(event.target.value)}
            type="text"
            placeholder="Image"
            required
          />
        </Form.Group>
        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={postReview}>
            Post a Review
          </Button>
        </Form.Group>
    </Form>
  )
}

export default CafeExist