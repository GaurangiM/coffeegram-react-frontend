import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { signUp } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { motion } from "framer-motion"

import { animationTwo, transition } from '../../animations';

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(signUp(firstName, lastName, email, password));

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  }

  return (
    <motion.div initial='out'
      animate='in'
      exit='out'
      variants={animationTwo}
      className="CafeDetails"
      transition={transition}>
      <Container>
        <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
          <h1 className="mt-5 mb-5">Signup</h1>
          <Form.Group controlId="formBasicName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              value={firstName}
              onChange={event => setFirstName(event.target.value)}
              type="text"
              placeholder="Enter first name"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              value={lastName}
              onChange={event => setLastName(event.target.value)}
              type="text"
              placeholder="Enter last name"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={email}
              onChange={event => setEmail(event.target.value)}
              type="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              onChange={event => setPassword(event.target.value)}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mt-5">
            <Button variant="primary" type="submit" onClick={submitForm}>
              Sign up
            </Button>
          </Form.Group>
          <Link to="/login">Click here to log in</Link>
        </Form>
      </Container>
    </motion.div>

  );
}
