import React from 'react'
import Contact from '../Forms/Contact'
import tut1 from '../../public/assets/images/tut1.jpeg'
import Image from 'next/image'
import SectionTitle from '../Titles/SectionTitle'

const ContactusTestimonial = () => {
  return (
    <div className="py-12 container">
      <div className="flex flex-col space-y-2 items-center text-center ">
        <SectionTitle text='Contact Us' />
        <div className="h-1 bg-themeColor w-[8rem]"></div>
        <p className="text-sm md:text-md lg:text-lg">
          Complete the form below to arrange a personal demonstration
        </p>
      </div>
      <div className="flex mx-auto flex-col lg:flex-row gap-10 mt-12  ">
        <div
          data-aos="fade-right"
          data-aos-delay="800"
          data-aos-duration="800"
          className="flex-1 max-w-[40rem] mx-auto w-full">
          <Contact />
        </div>
        {/* // whats the prob ? */}

        <div
          className="flex flex-col max-w-[40rem] mx-auto w-full space-y-3 flex-1"
        >

          <div className='w-full relative h-full overflow-hidden rounded-xl '>
            <Image
              src={tut1}
              layout='fill'
              objectFit='cover'
              className="w-full hover:scale-105 h-full rounded-xl transition-all duration-500 object-contain"
              alt=""
            />

          </div>
          <h3>
            “NH is the number one training and placement provider. It has made
            careers of thousands of people in such a less time, Highly
            recommended institute”
          </h3>
          <p className="font-semibold">
            Srikant R — Cisco Systems, Principal Architect
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactusTestimonial
