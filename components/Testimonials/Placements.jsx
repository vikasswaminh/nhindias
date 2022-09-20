import Image from 'next/image'
import React from 'react'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import { motion } from 'framer-motion'

const Placements = () => {
  return (
    <div className=" p-5 lg:px-10 grid grid-cols-1 lg:grid-cols-2 lg:pl-20 place-content-center place-items-center container  items-center">
      <div
        className="flex flex-col space-y-6 justify-center lg:justify-left text-center lg:text-left">
        <div className="flex flex-col  space-y-3">
          <h3 className='text-3xl md:text-4xl font-lato lg:text-5xl font-bold'>Unlimited Learning</h3>
          <h3 className='text-3xl md:text-4xl font-lato lg:text-5xl font-bold'>Unbeatable Placements</h3>
          <div className="h-1 mx-auto lg:mx-0 bg-themeColor w-[8rem]"></div>

        </div>

        <p className='max-w-[40rem] mx-auto lg:mx-0 text-gray-600 font-medium'>
          {` CCIE training, Networking, Cloud, and Cyber security certification
          training with 100% placement. Lifetime access to Recorded Video
          content. In accordance with current occupational needs, we have
          designed our courses on live technology and real-time scenarios. We
          are Industry leaders in Online, classroom, and corporate training for
          more than 100+ in-demand IT Certifications`}
        </p>
        <div className='flex mx-auto  lg:mx-0 items-center gap-10 py-4'>
          <p className='flex items-center space-x-1 whitespace-nowrap text-xs md:text-base'> <IoIosCheckmarkCircle className='text-xl text-green-500' />  <span>Top Brand MNC Placements</span> </p>
          <p className='flex items-center space-x-1 whitespace-nowrap text-xs md:text-base'><IoIosCheckmarkCircle className='text-xl text-green-500' /> <span>Lifetime Video access</span> </p>
        </div>
      </div>

      <div
      >
        <img alt='img' src={'/assets/images/placement.png'} className='w-full h-full object-cover' />
      </div>

    </div>
  )
}

export default Placements
