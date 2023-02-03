import React from 'react'
import { motion } from "framer-motion"
import { eventData, semesterData } from '../data/studyMaterialData'

const StudyMaterial = () => {
  return (
    <div>
      <h2 className='text-4xl md:text-7xl text-center pt-32 mb-16 text-white'>Study Material</h2>
      <h2 className='text-xl md:text-2xl text-center mt-32 mb-16 text-gray-400 px-4 md:px-20'>Docs related to recently organized events</h2>
      <motion.div
      initial={{ opacity: 0, y: 50}}
      transition={{ ease: 'easeOut', duration: 2}}
      whileInView={{ opacity: 1, y: 0}}
      className="flex flex-wrap justify-center gap-x-8 gap-y-16 my-12">
        {eventData.map(({id, title, link}) => (
        <a key={id} href={link} className="md:w-1/5 px-1 rounded-md overflow-hidden border-2 border-opacity-10 hover:scale-110 hover:transition-all hover:delay-150 hover:ease-in-out">
          <div className='text-teal-700 text-center py-2'>{title}</div>
        </a>
        ))}
      </motion.div>
      <h2 className='text-xl md:text-2xl text-center mt-32 mb-16 text-gray-400 px-4 md:px-20'>It's always hectic to find proper StudyMaterial and recent year papers. ELSOC presents properly documented study material prepared by final and pre-final year students.</h2>
      <motion.div 
      initial={{ opacity: 0, y:50 }}
      transition={{ ease: "easeOut", duration: 2 }}
      whileInView={{opacity:1, y:0}}
      className='flex flex-wrap justify-center gap-x-8 gap-y-16 my-12 pb-12'>
        {semesterData.map(({id, title, link}) => (
        <a key={id} href={link} className="md:w-1/5 px-1 rounded-md overflow-hidden border-2 border-opacity-10 hover:scale-110 hover:transition-all hover:delay-150 hover:ease-in-out">
          <div className='text-xl text-teal-700 text-center py-2'>{title}</div>
        </a>
        ))}
      </motion.div>
    </div>
  )
}

export default StudyMaterial