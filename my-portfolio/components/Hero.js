import React from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'

const Hero = () => {
    const [text] = useTypewriter({
        words: ["Hi, My Name's Ahmet Palavan.", 'I-Love-Coffee.js', "<ButLovesToCodeMore/>"],
        loop: true,
        delaySpeed:2000
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles/>
            <img className='relative rounded-full w-32 h-32 mx-auto object-cover' src="ahmetfoto.jpg" alt="" />
            <div className='z-20'>
                <h2 className='text-gray-500 text-sm uppercase pb-2 tracking-[15px]'>Software Developer</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#00FA9A'/>
                </h1>
                <div className='pt-5'>
                    <Link href='#about'>
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href='#experience'>
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href='#skills'>
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href='#projects'>
                        <button className='heroButton'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
        
    )
}

export default Hero