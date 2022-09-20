import React from 'react'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import SectionTitle from '../Titles/SectionTitle'

const CourseFeatures = ({ noBG }) => {
  return (
    <div className={`w-full ${noBG ? 'bg-white' : 'themeBg'} py-12`}>
      <div className="grid container gap-5 px-4 lg:px-20 py-4 grid-cols-1 mx-auto lg:grid-cols-2 place-content-center place-items-center">
        {/* left  */}
        <div
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-duration="800"
          className='flex flex-col items-start gap-10 max-w-[40rem] mx-auto w-full'>

          <div className='flex flex-col space-y-3'>

            <div className="flex lg:hidden">
              <SectionTitle leftOnly text={`Unique features to give you CCIE Training Experience`} />
            </div>
            <div className="hidden lg:flex">
              <h3 className='font-bold text-3xl font-lato lg:text-4xl'>Unique features to give you CCIE Training Experience</h3>
            </div>
            <div className="h-1 bg-themeColor w-[8rem]"></div>

            <div className='flex flex-col items-start space-y-3'>
            </div>

            <p className='flex text-sm md:text-md lg:text-lg items-center space-x-3'> <IoIosCheckmarkCircle className='text-2xl text-green-600' /> <span>Learn technology from World top CCIE instructors with teaching experience of 20 years</span> </p>
            <p className='flex text-sm md:text-md lg:text-lg items-center space-x-3'> <IoIosCheckmarkCircle className='text-lg text-green-600' /> <span>Learn at your ease. Watch the recorded sessions anytime</span> </p>
            <p className='flex text-sm md:text-md lg:text-lg items-center space-x-3'> <IoIosCheckmarkCircle className='text-lg text-green-600' /> <span>Get hands-on industry experience with 24/7 lab access</span> </p>
            <p className='flex text-sm md:text-md lg:text-lg items-center space-x-3'> <IoIosCheckmarkCircle className='text-lg text-green-600' /> <span>At the end of each course, we award you with a certificate of completion</span> </p>

          </div>
        </div>

        <div
          className='flex  flex-col space-y-4 md:space-y-8  max-w-[40rem] mx-auto w-full'>
          <Video1 />
        </div>
      </div>
    </div>
  )
}


const Video1 = () => {
  return (
    <>
      <div className="w-full relative pb-[60%]">
        <iframe className='absolute w-full h-full' src="https://www.youtube.com/embed/hDuCVAlxZaM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </>
  )
}

export default CourseFeatures
