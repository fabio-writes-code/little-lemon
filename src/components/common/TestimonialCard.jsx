import React from 'react'
import { Rating } from '@mui/material'

const TestimonialCard = ({username, img, testimonial, numStars}) => {
  return (
    <div className='testimonialCard'>
      <h3>{username}</h3>
      <img src={img} alt="User Picture" width={100} />
      <p>{testimonial}</p>
      <Rating name='read-only' value={numStars} readOnly />
    </div>
  )
}

export default TestimonialCard