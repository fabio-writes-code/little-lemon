import React from 'react'

const SpecialCard = (props) => {
  console.log('card'+props.cardCount)
  return (
    <div className='specialcard' style={{gridArea:'card'+props.cardCount}}>
      <img src={props.img} alt="Food Picure" />
      <h3 className='dishName'>{props.dishName}</h3>
      <h3 className='price'>{props.dishPrice}</h3>
      <p>{props.description}</p>
      <h3 className='order'>Order for Delivery</h3>
    </div>
  )
}

export default SpecialCard