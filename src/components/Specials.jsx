import React from 'react'
import SpecialCard from './common/SpecialCard'
import url1 from '../icons_assets/highlight-dish-1.jpeg'
import url2 from '../icons_assets/highlight-dish-2.jpg'
import url3 from '../icons_assets/highlight-dish-3.jpg'

const specials =[
  {
    img:url1,
    dishName:'Cesar Salad',
    dishPrice: '$12.99',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, recusandae nobis vel amet inventore sunt blanditiis architecto voluptates nostrum porro magni facere officia voluptatem labore, veritatis, eaque fugit asperiores reprehenderit.'
  },
  {
    img:url2,
    dishName:'Tomato Salad',
    dishPrice: '$15.99',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, recusandae nobis vel amet inventore sunt blanditiis architecto voluptates nostrum porro magni facere officia voluptatem labore, veritatis, eaque fugit asperiores reprehenderit.'
  },
  {
    img:url3,
    dishName:'Cheese Desert',
    dishPrice: '$10.99',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, recusandae nobis vel amet inventore sunt blanditiis architecto voluptates nostrum porro magni facere officia voluptatem labore, veritatis, eaque fugit asperiores reprehenderit.'
  }
]

const Specials = () => {
  return (
    <div className='specials'>
      <h1>This week's specials!</h1>
      <button className="btn">Order Menu</button>
      {specials.map((s, index)=><SpecialCard key={s.dishName} img={s.img} cardCount={index} dishName={s.dishName} dishPrice={s.dishPrice} description={s.description}/>)}
    </div>
  )
}

export default Specials