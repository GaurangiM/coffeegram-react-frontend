import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import Axios from 'axios';

import {selectCafes} from '../../store/cafeList/selectors'
import {
  setMessage
} from "../../store/appState/actions";

const PostNewCafe = ()=> {
  const dispatch = useDispatch()
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [address, setAddress] = useState("")
  const [image, setImage] = useState("")
  const allCafeList = useSelector(selectCafes)

  const postCafe = async()=> {
    const query = encodeURI(address)
    const geoData = await Axios.get(`http://api.positionstack.com/v1/forward?access_key=13a366ecdb5f1db8a5484e2a6ac61aec&query=${query}`)
    //dispatch(postNewCafe())
    console.log(query, geoData.data.data[0])
  }

  const verifyCafe = ()=> {
    if(allCafeList) {
      const matchedCafe = allCafeList.find(
        cafe=> cafe.name.toLowerCase() === name.toLowerCase()
        )
      console.log(matchedCafe)
      if(matchedCafe) {
        dispatch(setMessage("danger", true, `${matchedCafe.name} cafe already exists ! You can post a review`));
      }
    }
    
  }

  return (
    <div>
      
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Add new cafe to our list !</h1>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name of Cafe</Form.Label>
          <Form.Control
            value={name}
            onChange={event => setName(event.target.value)}
            type="text"
            placeholder="Enter cafe name"
            required
          />
        </Form.Group>
        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={verifyCafe}>
            See if cafe already exists!
          </Button>
        </Form.Group>
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
        <Link to="/signup" style={{ textAlign: "center" }}>
          Click here to sign up
        </Link>
      </Form>
    </div>
  )
}

export default PostNewCafe