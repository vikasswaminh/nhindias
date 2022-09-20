import React from 'react'
import { RiStarSFill, RiDoubleQuotesL } from 'react-icons/ri'
import Image from 'next/image'

const ReviewCard = ({ rating, message, name }) => {
  const noOfStars = (rating) => {
    const starArr = []
    const starNum = 1
    for (let i = 0; i < Math.ceil(rating); i++) {
      starArr.push(i)
    }
    return starArr
  }
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={`200`}
      data-aos-duration="800"
      className='bg-white w-full space-y-6 border border-gray-100 rounded-lg p-4 shadow-lg transition-all ease-in-out duration-150 flex flex-col max-w-screen '>
      <div className="flex space-x-4 items-center">
        <div className="w-14 h-14 rounded-full bg-gray-200">
          <picture>

            <img alt='image' src=' /assets/images/reviewDp.png' />
          </picture>
        </div>
        <div className='flex flex-col space-y-2'>
          <h3 className='text-lg'>{name}</h3>
          <div className='flex items-center'>
            {noOfStars(rating).map((num, i) => (
              <RiStarSFill key={num} className='text-yellow-500 text-xl' />
            ))}
          </div>
        </div>
      </div>
      <div className='flex flex-col space-y-1'>
        <RiDoubleQuotesL className='text-2xl opacity-70' />
        <p className="text-sm md:text-base">{message}</p>

      </div>
    </div>
  )
}

export default ReviewCard