import React from 'react'
import { HiOutlineChevronDoubleRight } from 'react-icons/hi'
import Link from 'next/link'

const CourseCard = ({ title, desc, link, projects, img, i }) => {
  return (
    <Link href={link}>
      <a
        data-aos="fade-up"
        data-aos-delay={`${i + 1}00`}
        data-aos-duration="800"
        className={``}>
        <div className='flex flex-col bg-white max-w-screen p-4 md:p-8 rounded-2xl min-h-full items-start hover:shadow-CourseCard  justify-center space-y-4 md:space-y-6 border transition-all ease-out duration-200'>
          <h3 className="font-bold text-2xl md:text-3xl  lg:text-4xl">
            {title}
          </h3>
          <p className="font-medium text-gray-500">{desc}</p>
          {projects ? (
            <ul className="flex flex-col space-y-2 items-start text-left">
              {projects.map((project, i) => (
                <li key={i} className="font-semibold flex items-center space-x-3 text-gray-800">
                  <HiOutlineChevronDoubleRight className='text-themeColor' /> <span>{`${project[i]}`}</span>
                </li>
              ))}
            </ul>
          ) : img && (
            <div>
              <picture>
                <img src={img} className='rounded-xl' alt='img' />
              </picture>
            </div>
          )}
        </div>
      </a>
    </Link>

  )
}

export default CourseCard
