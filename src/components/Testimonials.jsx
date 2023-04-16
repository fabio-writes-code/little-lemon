import React from 'react'
import TestimonialCard from './common/TestimonialCard'
import url1 from '../icons_assets/testimonial-picture.jpg'

const testimonials=[
  {
    username:'username1',
    img:url1,
    testimonial:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat sequi sed libero corporis.',
    stars:5
  },
  {
    username:'username1',
    img:url1,
    testimonial:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat sequi sed libero corporis.',
    stars:4
  },
  {
    username:'username1',
    img:url1,
    testimonial:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat sequi sed libero corporis.',
    stars:3.5
  }
]

const Testimonials = () => {
  return (
    <div className='testimonials'>
      <h1>Testimonials</h1>
      <div className="cards">
        {testimonials.map(t=><TestimonialCard id={t.username} username={t.username} img={t.img} testimonial={t.testimonial} numStars={t.stars}/>)}
      </div>
    </div>
  )
}

export default Testimonials