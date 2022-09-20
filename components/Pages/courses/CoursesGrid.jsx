import Link from 'next/link'
import React, { Suspense } from 'react'
import Button from '../../common/Button'

const CoursesGrid = ({ courses }) => {
    return (
        <Suspense>
            <div className='container'>
                <div className='flex py-6 w-full items-center pb-2 container flex-col md:flex-row justify-between gap-7'>
                    <div className='flex  flex-col max-w-[35rem]'>
                        <h3 className='font-bold font-lato text-center md:text-left text-3xl md:text-4xl lg:text-5xl'>43 IT Certifications to choose from</h3>
                    </div>
                    <Link href='/networkers-home-contact-us'>
                        <a className='mx-auto md:mx-0'>
                            <Button text='Contact Us' />
                        </a>
                    </Link>
                </div>
                <div className='grid mb-12 mt-6 grid-cols-1 items-stretch md:grid-cols-2 lg:grid-cols-3 border-[0.51px] xl:grid-cols-4'>
                    {courses.map(({ heading, highlight, text, slug }, i) => (
                        <div key={i} className='h-full'>
                            <Link href={slug} className='h-full'>
                                <a className={`flex h-full flex-col space-y-4 p-6 py-10 ${highlight ? 'bg-themeColor text-white border-themeColor' : ' bg-white border-gray-200  hover:border-themeColor hover:bg-blue-100'} border-[0.5px]`} >
                                    <h3 className='text-lg md:text-xl font-bold'>{heading}</h3>
                                    <p className='text-base pb-2 lg:text-lg opacity-80'>{text}</p>
                                    <a className='bg-black !mt-auto hover:border-themeColor border border-black text-white text-lg font-semibold p-3 text-center flex items-center justify-center'>
                                        Find More
                                    </a>
                                </a>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </Suspense>
    )
}

export default CoursesGrid