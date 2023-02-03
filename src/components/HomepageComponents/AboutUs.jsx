import React from 'react'
import { motion } from "framer-motion"
import Heading from '../BasicComponents/Heading'

const AboutUs = ({ref}) => {
  return (
    <div className='bg-black bg-opacity-60 px-4 md:px-52 py-40'>
      <div>
        <Heading title="About ELSOC" />
        <motion.div
        initial={{ opacity: 0, y:100 }}
        transition={{ ease: "easeOut", duration: 2 }}
        whileInView={{opacity:1, y:0}}
        className='p-8 mt-20 text-xl text-white text-center rounded-[20px]'>
          ELSOC stands for "Electrical Society", which is administered by the Department of Electrical Engineering, NIT Hamirpur. The mission of ELSOC is to enlighten, engage, and enhance the technical and social diversity of electrical engineers. We at ELSOC conduct regular workshops on programming fundamentals, advanced electrical topics, and cutting-edge technologies. In addition, we focus on the academic pursuits of students from all departments. We intend to provide budding engineers with a venue to hone and expand their practical skills.
          </motion.div>
      </div> 
    </div>
  )
}

export default AboutUs