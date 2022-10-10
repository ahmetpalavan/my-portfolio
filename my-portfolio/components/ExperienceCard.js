import React from 'react'
import {motion} from 'framer-motion'

const ExperienceCard = () => {
    return (
    <article className=' flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
        w-[500px] md:w-[600px] md:-space-y-3 xl:w-fit snap-center  bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer 
        transition-opacity duration-200 overflow-hidden z-0 xl:space-y-2 xl:space-x-auto'>
        <motion.img
            initial={{y:-100, opacity:0}}
            transition={{duration:1.2}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            src="https://media-exp1.licdn.com/dms/image/C4D0BAQGn45YCZjokPg/company-logo_200_200/0/1581767690753?e=2147483647&v=beta&t=BvscqgKipPgyomPOj6migOv-OR8z4syP3HkJmk0jCwo" alt="" 
            className='w-32 h-32 rounded-full md:-mt-1 object-cover object-center xl:w-[150px] xl:h-[150px]'
        />
        <div className='px-0 md:px-10 '>
            <h4 className='text-4xl font-light'>Web Developer</h4>
            <p className='font-bold text-2xl mt-1'>Anneler Satıyor</p>
            <div className='flex space-x-2 my-2'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" alt="" 
                className='h-10 w-10 rounded-full'/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="" 
                className='h-10 w-10 rounded-full'/>
                <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" className='h-10 w-10 rounded-full' alt="" />
                    {/* Tech Used */}
                    {/* Tech Used */}
                    {/* Tech Used */}
                </div>
                <p className='uppercase text-gray-300 py-5'>Started work... -Ended work</p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>SummarySummarySummaryy asödilşasdöa </li>
                    <li>skndasndasdnaskn asjdnajsdnsa</li>
                    <li>asdasdasdmasdmas dkdnaksdnaskl</li>
                    <li>aasdasdadad sdmkasmksam</li>
                    <li>sjabdaçsjbdças dalsjdlasdlasdn</li>
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard