import React from 'react'
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import Axios from 'axios';

import { postReviewForCafe } from '../../store/cafeDetails/actions';

const CafeExist = ({cafe})=> {
  const dispatch = useDispatch()
  const [review, setReview] = useState("")
  const [rating, setRating] = useState("")
  const [image, setImage] = useState("")

  const postReview = ()=> {
    dispatch(postReviewForCafe(cafe.id, review, rating, image))
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
          <Form.Control
            value={rating}
            onChange={event => setRating(event.target.value)}
            type="text"
            placeholder="Rating"
            required
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