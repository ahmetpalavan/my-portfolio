import React from 'react'
import { motion } from 'framer-motion'

const ahmet= {directionLeft :Boolean}
const Skill = ({directionLeft}) => {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.img
            initial={{
                x: directionLeft ? -200 : 200,
                opacity:0
            }}
            transition={{duration:1}}
            whileInView={{opacity:1, x:0}}
            src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
            className='rounded-full border border-gray-500 object-cover md:w-18 md:h-18 w-24 h-24 xl:w-18 xl:h-18 filter 
            group-hover:grayscale transition duration-300 ease-in-out'
            />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
            group-hover:bg-white h-24 w-24 md:w-18 md:h-18 xl:w-18 xl:h-18 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black opacity-100'>100%</p>
                </div>
            </div>
        </div>
    )
}

export default Skill