import React from 'react'
import'./moviecontentent.css'
import Button from 'react-bootstrap/Button';

function MovieContent() {
  return (
    <div className="content active">
    <h1 className='movie-title'>Trolls Band Together</h1>
    <h4>
      <span>Year</span>
      <span><i>age</i></span>
      <span>length</span>
      <span>category</span>
    </h4>
    <p>Lorem ipsum dolor sit amet consectetur 
      adipisicing elit. Itaque recusandae, odit non reiciendis,
       mollitia sequi praesentium maxime possimus impedit at sint laborum maiores 
       porro rem consectetur molestias quis sed et?</p>
    <div className="button">
    <Button variant="light opacity-50">info</Button></div>
  </div>
  )
}

export default MovieContent
