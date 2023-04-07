import React from 'react'
import loaderGif from '../../assets/loader.gif'

const Loader = () => {
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center flex-col'>
        <img src={loaderGif} width="180" height="180" alt="loading..." />
    </div>
  )
}

export default Loader