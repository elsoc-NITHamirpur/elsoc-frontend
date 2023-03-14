import React from 'react'
import { motion } from "framer-motion"
import { semesterData } from '../data/StudyMaterial/studyMaterialData'
import { Link } from 'react-router-dom'

const StudyMaterial = () => {
  return (
    <div className='py-40'>
      <h2 className='text-4xl md:text-7xl text-center text-teal-700'>Study Material</h2>
      <h2 className='text-xl md:text-2xl text-center text-gray-400 px-4 py-20'>It's always hectic to find proper StudyMaterial and recent year papers. ELSOC presents properly documented study material prepared by final and pre-final year students.</h2>
      <motion.div 
      initial={{ opacity: 0, y:50 }}
      transition={{ ease: "easeOut", duration: 2 }}
      whileInView={{opacity:1, y:0}}
      className='flex flex-wrap justify-center gap-x-8 gap-y-16'>
        {semesterData.map(({id, title, link}) => (
        <Link key={id} to={link} className="md:w-1/5 px-1 rounded-md overflow-hidden border-2 border-opacity-10 hover:border-teal-700 hover:scale-110 hover:transition-all hover:delay-150 hover:ease-in-out">
          <div className='text-xl text-white hover:text-teal-700 text-center py-2'>{title}</div>
        </Link>
        ))}
      </motion.div>
    </div>
  )
}

export default StudyMaterial