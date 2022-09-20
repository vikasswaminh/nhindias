import Head from 'next/head'
import Layout from '../../components/Layout'
import React from 'react'
import Videos from '../../components/Pages/career/Videos'
import JobsSection from '../../components/Pages/career/JobsSection'
import Image from 'next/image'
import Seo from '../../components/common/Seo'

const index = () => {
    return (
        <div>
            <Layout>
                <Seo
                    title="Jobs @NETWORKERS HOME | NetworkersHome"
                    desc="Best CCNP Enterprise Training Online, CCNP Encor and CCNP Enarsi with SDWAN and DNAC"
                />
                <div className="flex flex-col space-y-12 pt-12">
                    <div className="container grid grid-cols-1 gap-6 lg:grid-cols-2">
                        <div className="w-full h-full relative overflow-hidden rounded-xl  aspect-square max-w-[40rem] mx-auto">
                            <Image layout='fill' src={'/assets/images/nh-group-1.webp'} objectFit='cover' className='rounded-xl transition-all duration-300 hover:scale-105 ' alt='img' />

                        </div>
                        <div className="flex my-auto flex-col space-y-6 max-w-[40rem] mx-auto">
                            <div className="flex flex-col space-y-3">
                                <h1 className="text-3xl font-bold lg:text-4xl">
                                    NH Group
                                </h1>
                                <div className="h-1 w-20 bg-themeColor">

                                </div>
                            </div>
                            <p className="text-xl font-bold">
                                Training <span className='mx-1 font-light text-base'>•</span> Consulting  <span className='mx-1 font-light text-base'>•</span> Software development
                            </p>

                            <p className='text-lg'>
                                Welcome to Networkers Home - Asia’s largest, most awarded and a top-notch IT training institute whose rich history, proven records of success and innovative training methodologies have helped transform lives and careers of students seeking professional training and impactful results.
                                Training Excellence- What Differentiates Us?
                                Our Uniqueness lies in our strong proven presence at designing, developing and delivering world-class IT training in diverse trending domains like Networking, Cloud Computing, Cyber Security, Business Management and many more, and carving a technology expert out of a technology enthusiast.
                            </p>
                            <p className='text-lg'>
                                Consistently stepping ahead with benchmarked training excellence, Networkers Home proudly owns the world record of producing 4000+ CCIEs for which Networkers Home is rated as the World’s Best CCIE Training Institute. Our CCIE results that speak for itself has placed us at the pinnacle of offering the best-in-class Cisco training and certification courses of different levels that include:
                            </p>
                        </div>
                    </div>
                    <div className="container flex flex-col space-y-12">
                        <div className="flex text-center items-center flex-col space-y-4">
                            <h2 className="text-themeColor text-3xl font-bold lg:text-4xl">
                                Career
                            </h2>
                            <p className="max-w-[60rem] text-xl">
                                We’re always looking for talents who want to grow personally and professionally in our company. At present we are hiring instructors for Bangalore office and other staff members for our Dubai office
                            </p>
                        </div>
                    </div>
                    <JobsSection data={data} />
                    <Videos />
                </div>
            </Layout>
        </div>
    )
}


const data = [
    {
        title: 'CCNA Trainers',
        vacancyType: 'Multiple vacancies',
        location: 'Bangalore',
        duration: 'Full-time',
        jobType: 'Not Remote',
        experience: '2 Years Experience',
        isHot: true,
        postedAt: 'Posted 2 Days ago',
        text: 'Salary starting with 6.2 Lakhs to 10 Lakhs for experienced CCNA Trainers',
        imageUrl: '/assets/images/people5.jpeg'

    },
    {
        title: 'CCNA Trainers',
        vacancyType: 'Multiple vacancies',
        location: 'Bangalore',
        duration: 'Full-time',
        jobType: 'Not Remote',
        experience: '2 Years Experience',
        isHot: true,
        postedAt: 'Posted 2 Days ago',
        text: 'Salary starting with 6.2 Lakhs to 10 Lakhs for experienced CCNA Trainers',
        imageUrl: '/assets/images/nh-group-1.webp'

    },
    {
        title: 'CCNA Trainers',
        vacancyType: 'Multiple vacancies',
        location: 'Bangalore',
        duration: 'Full-time',
        jobType: 'Not Remote',
        experience: '2 Years Experience',
        isHot: true,
        postedAt: 'Posted 2 Days ago',
        text: 'Salary starting with 6.2 Lakhs to 10 Lakhs for experienced CCNA Trainers',
        imageUrl: '/assets/images/people1.png'

    },
]
export default index