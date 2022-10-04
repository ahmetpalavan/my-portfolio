import React from 'react'
import Typewriter from 'typewriter-effect'
import {Cursor} from 'react-simple-typewriter'
const Hero = () => {
    return (
        <div>
            
        <Typewriter
            options={{
            strings: ["Hi, My Name's Ahmet.", 'I-Love-Coffee.js',"<ButLovesToCodeMore/>"],
            autoStart: true,
            loop: true,
            delay:75,
            
            }}
            />
        </div>
    )
}

export default Hero