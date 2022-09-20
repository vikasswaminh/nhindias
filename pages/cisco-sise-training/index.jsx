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
    `Describe the benefits of such a deployment and how each Cisco ISE feature contributes to these benefits.Describe Cisco ISE deployments, including fundamental deployment components and how they interact to form a cohesive security architecture.`,
    `Describe how authentication and authorization are implemented using Cisco ISE policy sets and how to utilize this capability to meet your organization's needs.`,
    `Describe the Cisco ISE profiling services, set them up, and learn how to keep track of them to improve your situational awareness of network - connected endpoints.`,
    `Describe the posture service, posture agents, posture deployment and licensing, and compliance components for endpoints in Cisco ISE.`,
    `Describe ideas and set up components for identity management, certificate services, and 802.1X and MAC Authentication Bypass(MAB) authentication.`,
    `Describe Cisco TrustSec®, third - party Network Access Devices(NADs), and Easy Connect`,
    `Describe the issues, solutions, procedures, and portals related to BYOD.Describe best practices for implementing this profiler service in your particular context`,
    `Set up a BYOD solution and explain the connection between the BYOD procedures and the configuration elements that go with it`,
    `Describe and set up web authentication, processes, operation, and guest services, including guest access components and various guest access situations`,
    `Describe and configure multiple certificates linked to a BYOD solution`,
    `Describe and implement TACACS + device management using Cisco ISE, including command sets, profiles, and policy sets.Configure the My Devices portal and explain its value`,
    `Recognize how TACACS + fits into the Authentication, Authentication, and Accounting(AAA) system and how the TACACS + and RADIUS protocols differ from one another`,
]
const sideList2 = [
    `The SISE Lab and Install ISE 2.4`,
    `Initial Cisco ISE Setup, GUI Familiarization, and System Certificate Usage`,
    `Cisco ISE`,
    `Active Directory`,
    `Policy Sets`,
    `Access Policy for Easy Connect`,
    `Guest Access, including Operations and Reports`,
    `Cisco ISE Profiling Configuration, Customization, and Reports`,
    `Cisco ISE Compliance Services`,
    `Cisco ISE for Basic Device Administration`,
    `Compliance - Based Access`,
    `BYOD Configuration`,
    `Client Provisioning`,
    `TACACS + Command Authorization`,
    `Posture Policies`,
    `Compliance Policy`,
    `Blacklisting Devices`,

]
const index = () => {
    return (
        <Layout>
            <Seo
                title="300-715 Cisco SISE Certification Training Course | NetworkersHome"
                desc="Sign up for our 300-715 Cisco SISE Certification Training Course, become an expert at deploying and handling the Cisco Identity Services Engine (ISE), and equip yourself with the much-demanded skills!"
                keywords='Cisco Identity Services Engine (ISE) (1), Cisco ISE (6)
,Implementing and Configuring Cisco Identity Services Engine (SISE) v3.0 (3)'
            />
            <div className='container my-12 grid grid-cols-1 lg:grid-cols-5 gap-10'>
                <div className="w-full col-span-1 lg:col-span-3 flex flex-col space-y-5">
                    <h1 className='text-2xl lg:text-4xl font-bold'>300-715 Cisco SISE Certification Training Course</h1>
                    <div className="flex flex-col space-y-2">
                        <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map(num => (
                                <div key={num}>
                                    <RiStarSFill key={num} className='text-yellow-500 text-4xl' />
                                </div>
                            ))}
                        </div>
                        <div className="text-xl font-semibold lg:text-2xl">
                            Implementing and Configuring Cisco Identity Services Engine (SISE) v3.0 Course Description
                        </div>
                        <p className="text-base lg:text-lg">
                            The <span className='font-bold'>Implementing and Configuring Cisco Identity Services Engine (SISE) v3.0</span> course demonstrates how to use and position the Cisco ISE (Identity Services Engine). The Cisco ISE is an access control policy management solution, providing highly secure network access to users across wireless, wired, and VPN connections. The course provides insight into the implementation of Cisco ISE, its features, and the skills required to deploy it across networks. The module covers all critical concepts, including policy enforcement, profiling, web authentication, BYOD, TACACS+ administration, and endpoint compliance services. Register for Networkers Home 300-715 Cisco SISE Certification Training course, and learn to manage security operations within your network.
                        </p>
                        <p className="text-base lg:text-lg">
                            This course will help you implement Cisco SISE to provide secure business and context-based access based on policies. You can centrally configure various services in a single web-based GUI console while gaining professional skills for in-demand job opportunities. By the end of the course, you will be well-prepared to take the <span className='font-bold'>Implementing and Configuring Cisco Identity Services Engine</span> (300-715 SISE) Exam. It is essential for achieving CCNP Security Certifications and the <span className='font-bold'>Cisco Certified Specialist - Security Identity Management Implementation certifications</span> in the future.
                        </p>
                        <p className="text-base lg:text-lg">
                            With Networkers Home, individuals can obtain <span className='font-bold'>Advanced Level Cisco Certifications</span>. Before starting this course, it is required to be familiar with the basics of Cisco IOS® Software Command-Line Interface (CLI), Cisco AnyConnect® Secure Mobility Client, Microsoft Windows operating systems, Cisco VPN clients, and 802.1X. If you were previously enrolled for <span className='font-bold'>Cisco CCNP® Security Certification training</span> or <span className='font-bold'>Introduction to 802.1X Operations for Cisco Security Professionals (802.1X)</span>, you would likely have covered these prerequisites. The course is intended, but not limited to:

                        </p>
                        <div className="flex flex-col space-y-2">
                            {descList.map(item => (
                                <li className='text-base lg:text-lg flex-1 font-bold' key={item}>{item}</li>
                            ))}
                        </div>
                        <div className="container py-12">
                            <Syllabus data={syllabusData} fullGrid title='Course Syllabus' />
                        </div>
                    </div>
                </div>
                <div className="col-span-1 lg:col-span-2  flex flex-col">
                    <h2 className='text-2xl lg:text-4xl font-bold mb-4'>Course Benefits</h2>
                    <div className="flex flex-col space-y-2">
                        <p className='text-base lg:text-lg'>
                            The objectives of <span className='font-bold'>Implementing and Configuring Cisco Identity Services Engine (SISE) v3.0</span> course are:
                        </p>
                        <div className="flex flex-col space-y-2">
                            {sideList.map(item => (
                                <li className='text-base lg:text-lg flex-1 font-bold' key={item}>{item}</li>
                            ))}
                        </div>
                        <p className='text-base lg:text-lg'>
                            Practically, you will be able to configure and assess:
                        </p>
                        <div className="flex flex-col space-y-2">
                            {sideList2.map(item => (
                                <li className='text-base lg:text-lg flex-1 font-bold' key={item}>{item}</li>
                            ))}
                        </div>
                        <p className='text-base lg:text-lg'>
                            Sign up for our <span className='font-bold'>300-715 Cisco SISE Certification Training Course</span> and become an expert at deploying and handling the Cisco Identity Services Engine (ISE)!
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
        title: ' 300 - 715 Cisco SISE',
        children: [
            `Module 1: Architecture and Deployment`,
            `Module 2: Policy Enforcement`,
            `Module 3: Web Auth and Guest Services`,
            `Module 4: Profiler`,
            `Module 5: BYOD`,
            `Module 6: Endpoint Compliance`,
            `Module 7: Network Access Device Administration`,

        ]
    },



]

export default index
