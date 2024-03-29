import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import car1 from '/images/carosuel1.png'
import car2 from '/images/carosuel2.png'

function HeroCarousel() {
  return (
    <div className="mt-[100px]">
      <Carousel>
        <Carousel.Item>
          <img className='d-block w-100 h-[54vh] brightness-[100%] object-cover' src={car1} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100 h-[54vh] brightness-[100%] object-cover' src={car2} alt="" />
        </Carousel.Item>
      </Carousel>
    </div>

  )
}

export default HeroCarousel
