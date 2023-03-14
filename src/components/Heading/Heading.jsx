import React from 'react'

const Heading = ({title}) => {
  return (
    <div className='title-text p-4 md:p-20'>
      <h1 className='text-5xl text-center font-semibold text-teal-200'>{title}</h1>
    </div>
  )
}

export default Heading