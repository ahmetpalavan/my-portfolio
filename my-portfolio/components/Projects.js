import React from 'react'
import { motion, } from 'framer-motion';

const Projects = () => {
    const projects = [1,2,3,4,5];
    return (
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}
        className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row 
        max-w-full justify-evenly mx-auto items-center z-20'>
            <h3 className='top-24 uppercase tracking-[20px] absolute text-gray-500 text-2xl hidden'> 
                Projects
            </h3>
            <div className='relative snap-mandatory w-full flex overflow-x-scroll overflow-y-hidden snap-x z-20'>
                {projects.map((p,i)=>(
                    <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                        <motion.img
                        initial={{y:-200}}
                        transition={{duration:1.2}}
                        whileInView={{opacity:1,y:0}}
                        viewport={{once:true}}
                        src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png" alt="" />
                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-4xl font-semibold text-center'>
                                <span className='underline decoration-[#4B5320]/50'>
                                    Case Study {i+1} of {projects.length}:
                                </span>{' '}
                                Netflix Clone
                            </h4>
                            <p className='xs:text-xs md:text-lg text-center md:text-center'>
                                Netflix app that has a log In and log Out Authentication with Firebase. It has a beatiful Home Screen with all movies looking just like Netflix.
                                There is also a subscription page where you can see your active monthly subscription.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-full absolute top-[30%] bg-[#4B6F44]/10 left-0 h-[300px] -skew-y-12' />
        </motion.div>
    )
}

export default Projects