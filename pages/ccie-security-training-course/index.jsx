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
    'CCNA 200 - 301',
    'CCNP Enterprise - Encore Module',
    'CCNP Enarsi Module',
    'CCNP SDWAN Module',
    'CCNP Security - Cisco FTD',
    'CCNP Security - Cisco WSA',
    'CCNP Security - Cisco ESA',
    'CCNP Security - Cisco IPS',
    'CCNP Security - Cisco Umbrella',
    'CCNP Security - Cisco VPN',
]
const index = () => {
    return (
        <Layout>
            <Seo
                title="CCIE Security V6 Training Online and classroom | NetworkersHome"
                desc="Best CCIE Security V6 Training, Highest CCIE results in the world."
            />

            <div className='container my-12 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                <div className="w-full col-span-1 lg:col-span-2 flex flex-col space-y-4">
                    <h1 className='text-2xl lg:text-4xl font-bold'>CCIE Security V6 Training</h1>
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
                            Our 6 Months CCIE Security Training program is an integrated Program is designed to train fresh graduates from Basics of networking to CCIE Level covering over 15 IT certifications . Over 200+ Top MNC partnerships for placement. All our placements are without any requirement for passing expensive examinations. These unique features not only save lakhs of rupees to our students, but it also has got us fame as Top placement company in India.
                        </p>
                    </div>

                    <div className="flex flex-col space-y-1">
                        {descList.map(item => (
                            <li className='text-lg lg:text-xl flex-1  font-bold' key={item}>{item}</li>
                        ))}
                    </div>

                </div>
                <div className="col-span-1  flex flex-col">
                    <h2 className='text-2xl lg:text-4xl font-bold mb-4'>Course Features</h2>
                    <div className="flex flex-col space-y-2">
                        <h3 className='text-base  lg:text-lg'>
                            Candidate should have good English communication skills in order to seek placement although multiple placement sessions are organized . Minimum graduate candidates can apply for admission .We donot offer placement for undergraduates at this time.The Program is a 100% placement Program which means you will have access to unlimited placement opportunities every month to appear in multiple interviews with multiple companies. Our active placement partnership with over 200 companies has almost 5000 job opportunities open every year while our student intake is just 1000 so each year we are only able to provide 20% candidates to our client companies. NETWORKERS HOME is known as gateway to Top brand placements in Bangalore due to our 14 years existence and strong placement team.
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
                    <Link href='/networkers-home-contact-us'>
                        <a>
                            <button className="bg-[#EED477] mt-4 md:mt-0 font-semibold py-3 px-6 border-2 border-white rounded-lg">Contact Us</button>
                        </a>
                    </Link>
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
