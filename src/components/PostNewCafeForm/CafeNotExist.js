import { useState } from "react";
import Form from "react-bootstrap/Form";
import React from 'react'
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from 'react-redux'
import Axios from 'axios';

const CafeNotExists = ()=> {

  const [description, setDescription] = useState("")
  const [address, setAddress] = useState("")
  const [image, setImage] = useState("")

  const postCafe = ()=> {

  }

  return (
    <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
      <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Short description</Form.Label>
          <Form.Control
            value={description}
            onChange={event => setDescription(event.target.value)}
            type="text"
            placeholder="Description"
            required
            as="textarea" 
            rows={3}
          />
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Label>Address</Form.Label>
          <Form.Control
            value={address}
            onChange={event => setAddress(event.target.value)}
            type="text"
            placeholder="Address"
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
          <Button variant="primary" type="submit" onClick={postCafe}>
            Post a Cafe
          </Button>
        </Form.Group>
    </Form>
  )
}

export default CafeNotExists