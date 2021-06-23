import React from 'react'
import './PageNotFound.css'

const PageNotFound = ({message})=> {
  return (
    <div className="pageNotFound">
      <h2>{message}</h2>
      <img src="/something-went-wrong.jpeg"></img>
      
    </div>
  )
}

export default PageNotFound