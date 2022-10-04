import React from 'react'
import {SocialIcon} from 'react-social-icons'
import {motion} from 'framer-motion'


const Header = () => {
    return (
        <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto p-5 z-20 xl:items-center'>
            <motion.div
            initial={{
                x:-500,
                opacity:0,
                scale:0.5
            }}
            animate={{
                x:0,
                opacity:1,
                scale:1
            }}
            transition={{
                duration:1.5
            }}
            className='flex flex-row items-center'>
                <SocialIcon url="https://twitter.com/AhmetPlvn1" fgColor='gray' bgColor='transparent'/>
                <SocialIcon url='https://github.com/ahmetpalavan' fgColor='gray' bgColor='transparent'/>
                <SocialIcon url='https://www.linkedin.com/in/ahmet-palavan-625aa1247/' fgColor='gray' bgColor='transparent'/>
            </motion.div>
            <motion.div 
            initial={{
                x:500,
                opacity:0,
                scale:0.5
            }}
            animate={{
                x:0,
                opacity:1,
                scale:1
            }}
            transition={{
                duration:1.5
            }}
            className='flex flex-row items-center cursor-pointer text-gray-300 '>
                <SocialIcon
                className='cursor-pointer'
                network='email'
                fgColor='gray'
                bgColor='transparent'
                />
                <p className='uppercase hidden text-xs text-gray-400 md:inline-flex'>Get In Touch</p>
            </motion.div>
        </header>
    )
}

export default Header