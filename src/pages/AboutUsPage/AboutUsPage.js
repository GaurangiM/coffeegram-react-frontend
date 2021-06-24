import React from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

import './AboutUs.css'

const AboutUsPage = ()=> {
  return (
    <div className="aboutUs">
      <h1>Coffeegram</h1>
      <p>We are a team of people who love coffee and some more coffee... So the motive behind this group is to share our love for coffee and 
        suggest some cool cafes we come across in our lives ! Here you can browse through our exclusive collection of amazing cafes, its pictures and 
        some genuine reviews about cafe. So next time you are on a stroll around any city in Netherlands, no need to Google, just search through our cafe collection
        and experience the pleasure of best ever coffee !
      </p>
      <h2>Come and be a part of Coffeegram by signing up !</h2>
      <h3>Meet our CoffeeGrammers</h3>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional
              content.{' '}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  )
}

export default AboutUsPage