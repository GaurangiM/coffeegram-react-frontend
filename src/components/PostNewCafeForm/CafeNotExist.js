import { useState } from "react";
import Form from "react-bootstrap/Form";
import React from 'react'
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";

import {postNewCafe} from '../../store/cafeList/actions'
import './PostNewCafeForm.css'

const CafeNotExists = ({cafeName})=> {
  const history = useHistory()
  const dispatch = useDispatch()
  const [description, setDescription] = useState("")
  const [postCode, setPostCode] = useState("")
  const [street, setStreet] = useState("")
  const [houseNumber, setHouseNumber] = useState("")
  const [city, setCity] = useState("")
  const [image, setImage] = useState("")

  const postCafe = async(e)=> {
    e.preventDefault()
    /*const query = encodeURI(`${street} ${houseNumber} ${postCode} ${city}`)
    const geoData = await Axios.get(`http://api.positionstack.com/v1/forward?access_key=13a366ecdb5f1db8a5484e2a6ac61aec&query=${query}`)
    console.log(query, geoData.data.data[0])
    
      setLatitude(geoData.data.data[0].latitude)
      setLongitude(geoData.data.data[0].longitude)*/
      dispatch(postNewCafe(cafeName, description, postCode, street, houseNumber, city, image, history))
      setCity("")
      setDescription("")
      setHouseNumber("")
      setImage("")
      setPostCode("")
      setStreet("")
    }

  return (
    <Form className="newCafeForm">
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Description</Form.Label>
        <Form.Control placeholder="Description"
                      value={description}
                      onChange={(e)=> setDescription(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Cafe Image</Form.Label>
        <Form.Control placeholder="Image url"
                      value={image}
                      onChange={(e)=> setImage(e.target.value)} />
      </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>House Number</Form.Label>
          <Form.Control placeholder="House Number"
                        value={houseNumber}
                        onChange={(e)=> setHouseNumber(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Street</Form.Label>
          <Form.Control placeholder="Street"
                        value={street}
                        onChange={(e)=> setStreet(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Post code</Form.Label>
          <Form.Control value={postCode}
                        placeholder="Postcode"
                        onChange={(e)=> setPostCode(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>City</Form.Label>
          <Form.Control value={city}
                        placeholder="City"
                        onChange={(e)=> setCity(e.target.value)}/>
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit" onClick={postCafe}>
        Post New Cafe
      </Button>
    </Form>
  )
}

export default CafeNotExists