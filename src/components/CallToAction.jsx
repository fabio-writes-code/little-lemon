import React from 'react'
import img from '../icons_assets/call-to-action-image.jpg'

const CallToAction = () => {
  return (
    <section className='CallToAction'>
      <div className="text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil eligendi voluptas error quaerat ullam magni dolorem vel at fuga odit, molestiae debitis itaque sequi recusandae porro expedita omnis, praesentium voluptatem?</p>
        <button className='btn'>Reserve a Table</button>
      </div>
      <img src={img} alt="Food Picture" />
    </section >
  )
}

export default CallToAction