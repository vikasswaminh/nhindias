import React from 'react'
import Layout from '../../components/Layout'
import ContactusTestimonial from '../../components/Testimonials/ContactusTestimonial'
import ArticlesAndCourses from '../../components/Testimonials/ArticlesAndCourses'
import PlacementRecords from '../../components/Testimonials/PlacementRecords'
import CustomerReviews from '../../components/Testimonials/CustomerReviews'
import { RiStarSFill } from 'react-icons/ri'
import Head from 'next/head'
import Link from 'next/link'
import Seo from '../../components/common/Seo'


const descList = [
    `CCNA`,
    `CCNP`,
    `Palo Alto Firewall`,
    `CEH`,
    `Checkpoint`,
    `Fortigate`,
    `12 Projects`,
]
const index = () => {
    return (
        <Layout>
            <Seo
                title="Engineer starter program | NetworkersHome"
                desc="Best Engineer starter program in the world"
            />
            <div className='container my-12 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                <div className="w-full col-span-1 lg:col-span-2 flex flex-col space-y-4">
                    <h1 className='text-2xl lg:text-4xl font-extrabold'>Engineer starter program</h1>
                    <div className="flex flex-col space-y-2">
                        <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map(num => (
                                <div key={num}>
                                    <RiStarSFill key={num} className='text-yellow-500 text-4xl' />
                                </div>
                            ))}
                        </div>
                        <div className="text-xl font-semibold lg:text-2xl">
                            CCIE Security V6 Course description
                        </div>
                        <p className="text-base lg:text-lg">
                            We are pleased to announce our new Engineer starter package for students who are 12th pass or pursuing 12th class. This program is our only program for freshers students who are undergraduate. Program will offer minimum 2 Lakhs- 5.5 Lakhs package to successful students. Build your knowledge for networking certification through our well designed courses. Our course <span className='font-bold'>allows students to gain practical experience in their chosen career path before they even graduate.</span>
                        </p>
                        <p className="text-base lg:text-lg">
                            With cutting edge technology training, we plan to transform candidates into employable network engineers.
                        </p>
                    </div>

                    <div className="flex flex-col space-y-1">
                        {descList.map(item => (
                            <li className='text-lg lg:text-xl flex-1  font-bold' key={item}>{item}</li>
                        ))}
                    </div>

                </div>
                <div className="col-span-1  flex flex-col">
                    <h2 className='text-2xl lg:text-4xl font-bold mb-4'>Course Benefits</h2>
                    <div className="flex flex-col space-y-2">
                        <h3 className='text-base  lg:text-lg'>
                            There are many benefits to getting IT certification training, including the potential for higher pay,
                            increased job satisfaction, and improved career prospects. If {`you're`} thinking of pursuing an IT career,
                            certification training can give you the skills and knowledge you need to succeed.
                        </h3>
                        <div className='flex flex-col space-y-2'>
                            <li className='text-base lg:text-lg'>
                                Life time recorded videos.
                            </li>
                            <li className='text-base lg:text-lg'>
                                2 Years access to placement updates for bigger and better opportunities.

                            </li>
                            <li className='text-base lg:text-lg'>
                                Placement in Top IT Companies all over india

                            </li>
                        </div>
                    </div>
                </div>
            </div>

            <PlacementRecords />
            <CustomerReviews />
            <ArticlesAndCourses />
            <ContactusTestimonial />
        </Layout>
    )
}

export default index
