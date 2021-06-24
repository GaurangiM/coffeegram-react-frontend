import React from 'react'
import './PageNotFound.css'

const PageNotFound = ({message})=> {
  return (
    <div className="pageNotFound">
      <h2>{message}</h2>
      <img src="/spilled-coffee.jpeg" alt="Spilled Coffee"></img>
      
    </div>
  )
}

export default PageNotFound