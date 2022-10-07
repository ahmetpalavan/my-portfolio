import React from 'react'
import {PhoneIcon, MapPinIcon,EnvelopeIcon} from '@heroicons/react/24/solid'

const ContactMe = () => {
    return (
        <div className='h-screen flex relative flex-col md:text-left text-center md:flex-row max-w-7xl
        px-10 justify-evenly mx-auto items-center'>
            <h3 className='uppercase top-24 absolute tracking-[20px] text-gray-500 text-2xl'>
                Contact Me
            </h3>
                <div className='flex flex-col space-y-10'>
                <h4 className='text-4xl font-semibold text-center'>
                    I have got just what you need. {' '}
                    <span className='underline decoration-[#90EE90]/50'>Lets Talk.</span>
                </h4>
                <div>
                    <div>
                        <div className='flex items-center space-x-5'>
                            <PhoneIcon/>
                            <p>05373989029</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe