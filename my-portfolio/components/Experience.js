import React from 'react'
import {motion} from 'framer-motion'
import ExperienceCard from './ExperienceCard'
const Experience = () => {
    return (
        <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1.5}}
            className='h-screen  flex relative md:-space-y-10 flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Experience
            </h3>
            <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
            scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#90EE90]/80'>
                <ExperienceCard/>
                <ExperienceCard/>
                <ExperienceCard/>
            </div>
        </motion.div>
    )
}

export default Experience