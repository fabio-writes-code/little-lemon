import React from 'react'
import url1 from '../icons_assets/Mario and Adrian A.jpg'
import url2 from '../icons_assets/Mario and Adrian b.jpg'

const About = () => {
  return (
    <div className='about'>
      <div className="about-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem maxime quaerat molestiae magni blanditiis necessitatibus voluptatibus commodi, id velit aspernatur iste fugit impedit tempore, non eligendi est eum similique adipisci!</p>
      </div>
      <div className="pictures">
        <img src={url2} alt="Mario and Adrian Cooking 2" height={300} />
        <img src={url1} alt="Mario and Adrian Cooking" height={300}/>
      </div>
    </div>
  )
}

export default About  