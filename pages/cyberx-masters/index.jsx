import React from 'react'
import Layout from '../../components/Layout'
import ContactusTestimonial from '../../components/Testimonials/ContactusTestimonial'
import ArticlesAndCourses from '../../components/Testimonials/ArticlesAndCourses'
import Head from 'next/head'
import PlacementRecords from '../../components/Testimonials/PlacementRecords'
import CustomerReviews from '../../components/Testimonials/CustomerReviews'
import CourseFeatures from '../../components/Testimonials/CourseFeatures'
import { RiStarSFill } from 'react-icons/ri'
import Link from 'next/link'
import Seo from '../../components/common/Seo'

const descList = [
    'CCNA - 200 - 301',
    'CEH(Certified ethical hacker)',
    'Linux Fundamentals and Core',
    'Fortigate Firewall',
    'Python Scripting',
    'PEN Testing- LPT',
    'Bug Bounty Hunting',
    'Real World Projects -2 ',

]
const index = () => {
    return (
        <Layout>
            <Seo
                title="Cyber security Course with placement CEH  | NetworkersHome"
                desc="Cyber security training with placement, 100 placement program"
            />
            <div className='container my-12 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                <div className="w-full col-span-1 lg:col-span-2 flex flex-col space-y-4">
                    <h1 className='text-2xl lg:text-4xl font-bold'>Cyberx Masters</h1>
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
                            Our 6 Months Cyber Security Program is designed to train fresh graduates. Program covers some of the latest IT Certifications in demand like CCNA, CCNP- 3 modules, CEH and CHFI, Penetration testing/ Cloud Pen testing along with automation using python and ansible. The job outlook for cybersecurity professionals is more favorable than it ever has been. Because it’s such a wide field, there are numerous different jobs that you can pursue in the cybersecurity industry. The U.S. Bureau of Labor Statistics estimates that the employment of information security analysts will grow 31 percent from 2019 to 2029. In comparison, the average growth rate for all occupations is only 4 percent.
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
                    <h3 className='text-2xl lg:text-4xl font-bold mb-4'>Course Features</h3>
                    <div className="flex flex-col space-y-2">
                        <li className='text-base lg:text-lg'>
                            Get your hands on world-class cyber security training by Certified Ethical Hackers
                        </li>
                        <li className='text-base lg:text-lg'>
                            Learn about the common attacks (phishing, DDoS and more), how to defend against them and how to deal with them when they happen.We are official ECouncil partner for CEH and CHFI plus 40 more Cyber security certifications.
                        </li>
                        <li className='text-base lg:text-lg'>
                            Become an expert in cyber security through our interactive lessons, quizzes, and exams.
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
