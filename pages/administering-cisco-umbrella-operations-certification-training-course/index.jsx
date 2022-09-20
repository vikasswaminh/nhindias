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
import Syllabus from '../../components/common/Syllabus'
import Seo from '../../components/common/Seo'

const descList = [
    `ISE Administrators`,
    `ISE Engineers`,
    `Wireless Administrators & Engineers`,
    `Consulting Systems Engineers`,
    `Technical Solutions Architects`,
    `Wireless Solutions Architects`,
    `BYOD Solutions Architects`,
    `Security Solutions Architects`,
    `ATP partner systems and field engineers`,
    `Systems / Network Integrators`,

]
const sideList = [
    `Implement Cisco Umbrella and execute Cisco Umbrella – Security Solution`,
    `Illustrate Cisco Umbrella and its features & position Cisco Umbrella`,
    `Comprehend Cisco Umbrella Roaming and Umbrella Roaming Security`,
    `Illustrate the working of Cisco Umbrella Roaming`,
    `Explain how Cisco Umbrella Roaming Client works and secure remote users`,
    `Use and deploy Cisco Umbrella Roaming Client`,
    `Comprehend Roaming Security`,
    `Understand and utilize Umbrella Multi-Organization tools`,
    `Distinguish between Cisco Umbrella packages`,
    `Configure and deploy the Cisco Umbrella Virtual Appliance`,
    `Utilize Virtual Appliance Setup Guide`,
    `Deploy Threat Intelligence for security`,
    `Configure Active Directory`,
    `Link Cisco Umbrella with the Active Directory`,
    `Configure Cisco Umbrella Reporting`,
    `Learn Secure Internet Gateway (SIG) fundamentals`,
    `Understand how Ransomware Protection is implemented`,
    `Understand IP and DNS Layers and their roles in preventing ransomware`,
    `Implement and understand security technologies, including DNS Security and Command and Control (C&C) Callback Detection`,
]

const index = () => {
    return (
        <Layout>
            <Seo
                title="Administering Cisco Umbrella Operations v2.0 Certification Training Course | NetworkersHome"
                desc="Register for the Administering Cisco Umbrella Operations v2.0 training course at Networkers Home without further ado. Explore the features of the world’s leading security solutions provider and become a security solutions expert!"
                keywords={'Administering Cisco Umbrella Operations v2.0 training, Cisco Umbrella, Cisco Umbrella Operations'}
            />
            <div className='container my-12 grid grid-cols-1 lg:grid-cols-5 gap-10'>
                <div className="w-full col-span-1 lg:col-span-3 flex flex-col space-y-5">
                    <h1 className='text-2xl lg:text-4xl font-bold'>Administering Cisco Umbrella Operations v2.0 Certification Training Course</h1>
                    <div className="flex flex-col space-y-2">
                        <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map(num => (
                                <div key={num}>
                                    <RiStarSFill key={num} className='text-yellow-500 text-4xl' />
                                </div>
                            ))}
                        </div>
                        <div className="text-xl font-semibold lg:text-2xl">
                            Administering Cisco Umbrella Operations v2.0 Certification Training Course Description
                        </div>
                        <p className="text-base lg:text-lg">
                            Cisco is one of the {`world's`} most prominent software and networking enterprises, specializing in networking, cloud, and security solutions. Empowering numerous organizations and companies across the globe, it provides essential services to help transform and interconnect company interiors using advanced technologies. Its security platform, <span className='font-bold'>Cisco Umbrella</span>, is one of the {`world's`} leading cloud-based security providers offering front-line defense against security threats that an organization may face on the internet. Based on the steady clientele Cisco has established, the demand for a workforce has grown. <span className='font-bold'>The Administering <span className='font-bold'>Cisco Umbrella</span> Operations v2.0 Training</span> upskills interested individuals who intend to benefit from the opportunity and arms them with all the skills they need to excel in Cisco Umbrella’s environment!
                        </p>
                        <p className="text-base lg:text-lg">
                            Designed under the supervision of Networkers Home Experts, this course covers fundamental features of <span className='font-bold'>Cisco Umbrella</span>. It will enable you to understand and deploy <span className='font-bold'>Cisco Umbrella</span> and integrate it as required. <span className='font-bold'>The Administering Cisco Umbrella Operations v2.0 training</span> course provides a comprehensive insight into Cisco {`Umbrella's`} prominent features, including Secure Internet Gateway (SIG), Umbrella Reporting, Umbrella Packages, Multi-Organization mechanism, and Ransomware Protection. We will form other meaningful discussions upon implementing <span className='font-bold'>Cisco Umbrella</span>, Roaming Client and Security, Virtual Appliance, and Reporting throughout the course. So, sign up with Networkers Home and immediately get uninterrupted course resource material access!
                        </p>
                        <p className="text-base lg:text-lg">
                            <span className='font-bold'>The Administering <span className='font-bold'>Cisco Umbrella</span> Operations v2.0 training</span> is intended for the System Engineers, System Administrators, System Architects, Channel Partners, Security Professionals, and anyone already involved in the administration of <span className='font-bold'>Cisco Umbrella</span> Operations. The course does not have any strict prerequisites. However, it is highly encouraged for individuals to be aware of Computer Science, Networking, and Networking Security fundamentals before taking this course. An elementary understanding of Cisco services and their features is a plus point.

                        </p>


                        <div className="container py-12">
                            <Syllabus data={syllabusData} fullGrid title='Course Syllabus' />
                        </div>
                    </div>
                </div>
                <div className="col-span-1 lg:col-span-2  flex flex-col">
                    <h3 className='text-2xl lg:text-4xl font-bold mb-4'>Course Benefits</h3>
                    <div className="flex flex-col space-y-2">
                        <p className='text-base lg:text-lg'>
                            Networkers Home offers Advanced Level Cisco Certification for Engineers, alongside extensive and engaging resource material. With our thorough and expertly crafted course on Administering Cisco Umbrella Operations v2.0 Training, you will be a pro before you know it! The course will help you achieve the following objectives and prepare you for the professional world.
                        </p>
                        <div className="flex flex-col space-y-2">
                            {sideList.map(item => (
                                <li className='text-base lg:text-lg flex-1 font-bold' key={item}>{item}</li>
                            ))}
                        </div>

                        <p className='text-base lg:text-lg'>
                            After completing the course, you will have developed administering and maintaining skills. You will be a Cisco Umbrella Operations expert ready to execute your skills to help various organizations. Grab the opportunity and start your Administering Cisco Umbrella Operations v2.0 Training!
                        </p>
                    </div>
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
const syllabusData = [
    {
        title: 'Administering Cisco Umbrella Operations v2.0',
        children: [
            `Module 1: Cisco Umbrella – Security Solution`,
            `Module 2: Implementing Cisco Umbrella`,
            `Module 3: Roaming Client`,
            `Module 4: Umbrella Roaming Security`,
            `Module 5: Virtual Appliance Setup Guide`,
            `Module 6: Active Directory`,
            `Module 7: Reporting`,
            `Module 8: Umbrella Multi - Organization`,

        ]
    },
]

export default index
