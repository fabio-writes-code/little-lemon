import React from 'react'
import CallToAction from './CallToAction'
import Specials from './Specials'
import Testimonials from './Testimonials'
import About from './About'

const Homepage = () => {
  return (
    <div>
      <CallToAction/>
      <Specials/>
      <Testimonials/>
      <About/>
    </div>
  )
}

export default Homepage