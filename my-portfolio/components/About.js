import React from 'react'
import {motion} from 'framer-motion'
const About = () => {
    return (
        <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1.5}}
            className='h-screen flex flex-col relative md:text-left text-center md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
            <motion.img
            initial={{x:-200, opacity:0}}
            transition={{duration:1.2,}}
            whileInView={{x:0, opacity:1,}} 
            viewport={{once:true}}
            src='about.jpg'
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56  rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px]'
            />
            <div className='px-0 space-y-10 md:px-10'>
                <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#009150]/50'>little</span> background</h4>
                <p className='text-base'>
                I am Ahmet Palavan. I'm 22 years old.I graduated from Marmara University and I am currently studying at Doğuş University. I am currently interested in Reactjs. I've been writing code for about 5 months. I have improved a lot as I have been working regularly. And if I start working as an intern in any company, it will improve my career and maybe the company I am doing internship will be satisfied with me. I believe it.
                </p>
            </div>
        </motion.div>
    )
}

export default About