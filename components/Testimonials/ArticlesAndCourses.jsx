import React from 'react'
import { courseArticles } from '../../utils/dummyData'
import ArticlesCard from '../Cards/ArticlesCard'
import Button from '../common/Button'
import SectionTitle from '../Titles/SectionTitle'

const ArticlesAndCourses = () => {
  return (
    <div className='flex flex-col'>

      {/* wraperr */}
      <div className="flex flex-col  items-center">
        <div className='w-full flex flex-col space-y-10 pt-12 themeBg'>
          <div className='flex w-full items-center pb-2 container flex-col md:flex-row justify-between gap-7'>
            <div className='flex  flex-col max-w-[35rem]'>
              <h3 className='font-bold font-lato text-center md:text-left text-3xl md:text-4xl lg:text-5xl'>Discover our latest</h3>
              <h3 className='font-bold mt-2 font-lato text-center md:text-left text-3xl md:text-4xl lg:text-5xl'>articles and insights.</h3>
            </div>
            <div className='mx-auto md:mx-0'>
              <Button text='Get Started' />
            </div>
          </div>
          <div className='grid container grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 lg:gap-12'>
            {courseArticles.map(({ image, link, linkType, title, type, desc }, i) => (
              <div key={i}
                data-aos="fade-up"
                data-aos-delay={`${i + 1}00`}
                data-aos-duration="800"
                className='mx-auto'
              >
                <ArticlesCard link={link} linkType={linkType} image={image} title={title} type={type} desc={desc} />
              </div>

            ))}
          </div>

        </div>
      </div>

    </div>
  )
}

export default ArticlesAndCourses