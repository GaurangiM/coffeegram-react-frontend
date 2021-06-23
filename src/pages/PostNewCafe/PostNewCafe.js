import React, { useState, useEffect } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import Axios from 'axios';

import {selectCafes} from '../../store/cafeList/selectors'
import CafeExists from '../../components/PostNewCafeForm/CafeExists';
import CafeNotExist from '../../components/PostNewCafeForm/CafeNotExist';
import {
  setMessage
} from "../../store/appState/actions";

const PostNewCafe = ()=> {
  const dispatch = useDispatch()
  const [name, setName] = useState("")
  const allCafeList = useSelector(selectCafes)
  const [cafeExists, setCafeExists] = useState(false)
  const [cafeFound, setCafeFound] = useState()

  //useEffect(, [])

  const postCafeOrReview = async()=> {
    //const query = encodeURI(address)
    //const geoData = await Axios.get(`http://api.positionstack.com/v1/forward?access_key=13a366ecdb5f1db8a5484e2a6ac61aec&query=${query}`)
    //dispatch(postNewCafe())
    //console.log(query, geoData.data.data[0])
  }

  const verifyCafe = ()=> {
    if(allCafeList) {
      const matchedCafe = allCafeList.find(
        cafe=> cafe.name.toLowerCase() === name.toLowerCase()
        )
      console.log(matchedCafe)
      if(matchedCafe) {
        setCafeFound(matchedCafe)
        setCafeExists(true)
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
      </Form>
        {cafeExists ? <CafeExists cafe={cafeFound}/> : <CafeNotExist/>}
      
    </div>
  )
}

export default PostNewCafe