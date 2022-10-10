import React from 'react'
import {PhoneIcon, MapPinIcon,EnvelopeIcon} from '@heroicons/react/24/solid'
import {useForm} from 'react-hook-form'

const ContactMe = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = formData => {
        window.location.href = `mailto:ahmetpalavann@gmail?suject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}
        (${formData.email})`
    };
    return (
        <div className='h-screen flex relative flex-col md:text-left text-center md:flex-row max-w-7xl
        px-10 justify-evenly mx-auto items-center'>
            <h3 className='uppercase top-10 absolute tracking-[20px] text-gray-500 text-2xl mt-3'>
                Contact Me
            </h3>
                <div className='flex flex-col space-y-2 mt-5' >
                <h4 className='text-4xl font-semibold text-center'>
                    I have got just what you need. {' '}
                    <span className='underline decoration-[#90EE90]/50'>Lets Talk.</span>
                </h4>
                <div>
                    <div className='space-y-5 '>
                        <div className='flex items-center space-x-5 justify-center'>
                            <PhoneIcon className='text-[#90EE90] h-7 w-7 animate-pulse'/>
                            <p className='text-xl'>05373989029</p>
                        </div>
                        <div className='flex items-center space-x-5 justify-center'>
                            <EnvelopeIcon className='text-[#90EE90] h-7 w-7 animate-pulse'/>
                            <p className='text-xl'>ahmetpalavann@gmail.com</p>
                        </div>
                        <div className='flex items-center space-x-5 justify-center'>
                            <MapPinIcon className='text-[#90ee90] h-7 w-7 animate-pulse'/>
                            <p className='text-xl'>İstanbul/Kadıköy</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='space-x-2 flex'>
                    <input
                        {...register('name')} 
                        placeholder='Name' 
                        className='contactInput' 
                        type="text" />
                    <input 
                        {...register('email')} 
                        placeholder='Email' 
                        className='contactInput' 
                        type="email" />
                    </div>
                    <input 
                        {...register('subject')}  
                        placeholder='Subject' 
                        className='contactInput' 
                        type="text" />
                    <textarea 
                        {...register('message')} 
                        placeholder='Message' 
                        className='contactInput'  />
                    <button type='submit' className='py-2 px-5 bg-[#90EE90] rounded-md text-black font-bold'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe