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


const index = () => {
    return (
        <Layout>
            <Seo
                title="Cisco CCNA+CCNP Combo Training with placement | NetworkersHome"
                desc="Best CCNA and CCNP Enterprise Training Online, CCNP Encor and CCNP Enarsi with SDWAN and DNAC."
            />
            <div className='container my-12 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                <div className="w-full col-span-1 lg:col-span-2 flex flex-col space-y-4">
                    <h1 className='text-2xl lg:text-4xl font-bold'>Cisco CCNA+CCNP Combo</h1>
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
                            First time in India, any institute has started offering a 100% placement program to students based on CCNA +CCNP Training alone. We have named this Network Engineer-Mini package. The candidate will be trained on the new CCNA Track along with CCNP Enterprise modules. You will have access to unlimited Lab access and training via classroom or online mode. This program is specially designed for students who {`don't`} have budget of 1.50 Lakhs for CCIE programs and want to first start a career before making big investment.
                        </p>
                    </div>
                </div>
                <div className="col-span-1  flex flex-col">
                    <h2 className='text-2xl lg:text-4xl font-bold mb-4'>Course Features</h2>
                    <div className="flex flex-col space-y-2">
                        <h3 className='text-lg  lg:text-xl'>
                            Candidate should have good English communication skills in order to seek placement although multiple placement sessions are organized . Minimum graduate candidates can apply for admission .We donot offer placement for undergraduates at this time.The Program is a 100% placement Program which means you will have access to unlimited placement opportunities every month to appear in multiple interviews with multiple companies. Addon Modules
                        </h3>
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
                    <div className="flex flex-col space-y-4">
                        <a className="bg-[#f3f0e3] mt-4 md:mt-0 font-semibold py-3 px-6 border-2 border-white rounded-lg" href='https://uploads-ssl.webflow.com/62a3260623ec5b668eeb0d5d/62ac50145f9eb98c4157b5bd_300-415-ENSDWI.pdf'>Contact Us</a>
                        <Link href='/networkers-home-contact-us'>
                            <a>
                                <button className="bg-[#EED477] mt-4 md:mt-0 font-semibold py-3 px-6 border-2 border-white rounded-lg">Contact Us</button>
                            </a>
                        </Link>
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
