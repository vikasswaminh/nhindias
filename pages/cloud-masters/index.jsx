import React from 'react'
import Layout from '../../components/Layout'
import ContactusTestimonial from '../../components/Testimonials/ContactusTestimonial'
import ArticlesAndCourses from '../../components/Testimonials/ArticlesAndCourses'
import PlacementRecords from '../../components/Testimonials/PlacementRecords'
import CustomerReviews from '../../components/Testimonials/CustomerReviews'
import CourseFeatures from '../../components/Testimonials/CourseFeatures'
import { RiStarSFill } from 'react-icons/ri'
import Head from 'next/head'
import Link from 'next/link'
import Seo from '../../components/common/Seo'

const descList = [
    'CCNA - CCNP Enterprise',
    'AWS Assocaite',
    'Palo Alto Firewall',
    'CEH',
    'CHFI',
    'AWS Advanced Security',
    'Cloud Security projects',
    'Cloud Routing protocols advanced Project',
    '3 Optional advanced Projects',
]
const index = () => {
    return (
        <Layout>
            <Seo
                title="MultiCloud AWS,Azure and GCP certifications | NetworkersHome"
                desc="Cloud computing AWS, Azure and GCP Training with placement"
            />
            <div className='container my-12 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                <div className="w-full col-span-1 lg:col-span-2 flex flex-col space-y-4">
                    <h1 className='text-2xl lg:text-4xl font-bold'>MultiCloud + Cloud Security experts</h1>
                    <div className="flex flex-col space-y-2">
                        <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map(num => (
                                <div key={num}>
                                    <RiStarSFill key={num} className='text-yellow-500 text-4xl' />
                                </div>
                            ))}
                        </div>
                        <div className="text-xl font-semibold lg:text-2xl">
                            Course description
                        </div>
                        <p className="text-base lg:text-lg">
                            Learn technologies of tomorrow that can give you an edge over competitors. We have created a unique combination of Cloud technologies and Cloud security practices. Cloud Masters takes you into the Deep dive world of cloud computing with real projects. Its first program in india which offers you multi-cloud expertise in AWS,Google cloud and Azure domain. Today most demand in job market comes for multi-cloud expertise. Modules Covered
                        </p>
                    </div>
                    <div className="grid grid-cols items-start md:grid-cols-2">
                        <div className="flex flex-col space-y-1">
                            {descList.slice(0, Math.ceil(descList.length / 2)).map(item => (
                                <li className='text-lg lg:text-xl flex-1  font-bold' key={item}>{item}</li>
                            ))}
                        </div>
                        <div className="flex flex-col  space-y-1">
                            {descList.slice(Math.ceil(descList.length / 2), descList.length).map(item => (
                                <li className='text-lg lg:text-xl flex-1  font-bold' key={item}>{item}</li>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-span-1  flex flex-col">
                    <h2 className='text-2xl lg:text-4xl font-bold mb-4'>Course Features</h2>
                    <div className="flex flex-col space-y-2">
                        <li className='text-base lg:text-lg'>
                            The candidate should have good English communication skills in order to seek placement although multiple placement sessions are organized. Minimum graduate candidates can apply for admission. We {`don't`} offer placement for undergraduates at this time.
                        </li>
                        <li className='text-base lg:text-lg'>
                            Learn how to design, deploy, and manage cloud computing platforms during this comprehensive course
                        </li>
                        <li className='text-base lg:text-lg'>
                            Uncover the latest developments in cloud computing including containers, serverless computing, machine learning, artificial intelligence, and more
                        </li>
                        <li className='text-base lg:text-lg'>
                            Tools for Cloud Computing: Amazon Web Services, Microsoft Azure, Google Compute Engine
                        </li>

                    </div>
                </div>
            </div>
            <div className="bg-themeColor py-12 lg:py-20">
                <div className="container flex flex-col md:flex-row text-center md:text-left  items-center justify-between">
                    <div className="flex flex-col space-y-4">
                        <h3 className='text-2xl lg:text-4xl font-bold text-white'>Download Complete Syllabus</h3>
                        <p className="text-white text-base lg:text-lg">
                            Checkout full syllabus for relevant courses
                        </p>
                    </div>
                    <Link href='/networkers-home-contact-us'>
                        <a>
                            <button className="bg-[#EED477] mt-4 md:mt-0 font-semibold py-3 px-6 border-2 border-white rounded-lg">Contact Us</button>
                        </a>
                    </Link>
                </div>
            </div>
            <CourseFeatures noBG={true} />
            <PlacementRecords />
            <CustomerReviews />
            <ArticlesAndCourses />
            <ContactusTestimonial />
        </Layout>
    )
}

export default index
