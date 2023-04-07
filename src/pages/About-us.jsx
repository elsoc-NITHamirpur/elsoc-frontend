import React from 'react'
import AboutUs from '../components/Home/AboutUs'
import { TabChange } from "../utils/dynamic-title-function.js"

const About = () => {
  TabChange('Elsoc | About us')
  return (
    <div>
        <AboutUs/>
    </div>
  )
}

export default About