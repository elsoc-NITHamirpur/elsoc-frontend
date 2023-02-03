import React from 'react'
// import './Heading.css'

const Heading = ({title}) => {
  return (
    <div className='title-text'>
      <h1 className='text-5xl text-center font-semibold text-teal-200'>{title}</h1>
    </div>
  )
}

export default Heading