import React from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
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
            <div>
                <h1>
                    <span>{text}</span>
                    <Cursor cursorColor='#008000'/>
                </h1>
            </div>
        </div>
        
    )
}

export default Hero