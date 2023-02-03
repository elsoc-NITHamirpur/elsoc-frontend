import React from 'react'
import { eventItems } from '../data/eventItems'
import { LazyLoadImage } from "react-lazy-load-image-component";

const Events = () => {
  return (
    <div className='py-4 md:py-20'>
      {eventItems.map(({id, title, description, imageUrl, left}) => (
        <div key={id} className={`px-4 md:px-24 my-40 flex flex-col ${left? 'md:flex-row' : 'md:flex-row-reverse'} md:flex-row`}>
          <div className='w-full md:w-2/5 rounded-md overflow-hidden'><LazyLoadImage className='' src={imageUrl} alt='events'/></div>
          <div className='w-full md:w-3/5 px-2 md:px-12 flex flex-col items-center'>
            <h2 className='text-center text-5xl text-teal-700 mb-8'>{title}</h2>
            <p className='text-center md:text-left text-white text-1xl'>{description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Events