import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ArticlesCard = ({ linkType, image, link, type, title, desc }) => {
  return (
    <>
      {
        linkType === 'hyper'
          ?
          <a href={link} target='_blank' rel='noreferrer' className='flex  flex-col  items-start space-y-3 w-full group h-full cursor-pointer '>
            <div className="max-w-sm lg:max-w-full bg-white rounded-lg overflow-hidden h-full shadow-sm hover:shadow-xl mt-4 mb-12 border">
              <div className="overflow-hidden aspect-[1.75] min-h-[12rem] sm:min-h-[15rem] relative">
                <Image className="w-full scale-110 hover:scale-125 transition-all duration-300" src={image} layout='fill' alt="image" />
              </div>

              <div className="px-6 py-4 space-y-3">
                <span className="inline-block bg-blue-200 text-themeColor rounded-full px-3 py-1 text-sm font-semibold">{type}</span>
                <div className="font-bold text-xl">{title}</div>
                <p className="text-gray-700 text-base">
                  {desc}
                </p>
              </div>

            </div>

          </a>
          :
          <Link href={link}>
            <a className='flex  flex-col  items-start space-y-3 w-full group h-full cursor-pointer '>
              <div className="max-w-sm lg:max-w-full bg-white rounded-lg overflow-hidden h-full shadow-sm hover:shadow-xl mt-4 mb-12 border">
                <div className="overflow-hidden aspect-[1.75] rounded-t-xl min-h-[12rem] sm:min-h-[15rem] relative">
                  <Image className="w-full scale-110 hover:scale-125 transition-all duration-300" src={image} layout='fill' alt="image" />
                </div>

                <div className="px-6 py-4 space-y-3">
                  <span className="inline-block bg-blue-200 text-themeColor rounded-full px-3 py-1 text-sm font-semibold">{type}</span>
                  <div className="font-bold text-xl">{title}</div>
                  <p className="text-gray-700 text-base">
                    {desc}
                  </p>
                </div>

              </div>

            </a>
          </Link>
      }
    </>
  )
}

export default ArticlesCard