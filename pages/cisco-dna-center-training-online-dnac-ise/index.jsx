import React from 'react'
import Layout from '../../components/Layout'
import ContactusTestimonial from '../../components/Testimonials/ContactusTestimonial'
import ArticlesAndCourses from '../../components/Testimonials/ArticlesAndCourses'
import PlacementRecords from '../../components/Testimonials/PlacementRecords'
import CustomerReviews from '../../components/Testimonials/CustomerReviews'
import { RiStarSFill } from 'react-icons/ri'
import Head from 'next/head'
import CourseFeatures from '../../components/Testimonials/CourseFeatures'
import Link from 'next/link'
import Syllabus from '../../components/common/Syllabus'
import Seo from '../../components/common/Seo'


const index = () => {
    return (
        <Layout>
            <Seo
                title="Cisco DNA Cneter DNAC Training Online| NetworkersHome"
                desc="Cisco DNA Center DNAC Training Online and classroom bootcamp!"
            />

            <div className='container my-12 grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <div className="w-full col-span-1  flex flex-col space-y-4">
                    <h1 className='text-2xl lg:text-4xl font-bold'>Cisco DNAC Training</h1>
                    <div className="flex flex-col space-y-2">
                        <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map(num => (
                                <div key={num}>
                                    <RiStarSFill key={num} className='text-yellow-500 text-4xl' />
                                </div>
                            ))}
                        </div>
                        <div className="text-xl font-semibold lg:text-2xl">
                            Cisco DNAC Course description
                        </div>
                        <p className="text-base lg:text-lg">
                            This course covers Cisco Software-Defined Networking (SDN) in the CCNP Enterprise known as SD-Access. We will delve into the working of the fabric understanding the control plane and data plane. DNA Center will be explored including use with and without a fabric. We will investigate the various roles devices have including border, edge, and control. We will use Cisco Identity Services Engine (ISE) to implement security policies. We will explore how to integrate the fabric with non-fabric networks.
                        </p>
                    </div>
                </div>
                <div className="col-span-1  flex flex-col">
                    <h2 className='text-xl font-semibold lg:text-2xl mb-4'>Cisco DNAC - CCNP Module Course prerequiste</h2>
                    <div className="flex flex-col space-y-2">
                        <h3 className='text-base  lg:text-lg'>
                            For CCNP Certification offered by Cisco, there are no prerequisites for both training and certification.
                            Generally, if you are a fresher candidate then make it sure that you begin with R&S( Enterprise now) track after which you may move ahead in the career ladder with some other track.
                        </h3>
                        <li className='text-lg lg:text-xl flex-1  font-semibold'>
                            Comprehensive, end-to-end coverage of all aspects of CCNP Enterprise IT certification
                        </li>
                        <li className='text-lg lg:text-xl flex-1  font-semibold'>
                            The course is designed for anyone who wants to start working in IT or just wants a better knowledge about networks
                        </li>
                        <li className='text-lg lg:text-xl flex-1  font-semibold'>
                            We assure you best CCNP enterprise Training in Bangalore and all over the world in online and classroom format
                        </li>

                    </div>
                </div>
            </div>
            <div className="container py-12">
                <Syllabus data={syllabusData} title={'Course Syllabus'} />

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
                        <a className="bg-[#f3f0e3] mt-4 md:mt-0 font-semibold py-3 px-6 border-2 border-white rounded-lg" target='_blank' rel='noreferrer' href='https://uploads-ssl.webflow.com/62a3260623ec5b668eeb0d5d/62ac50145f9eb98c4157b5bd_300-415-ENSDWI.pdf'>Download</a>
                        <Link href='/networkers-home-contact-us'>
                            <a
                                className="bg-[#EED477] mt-4 md:mt-0 font-semibold py-3 px-6 border-2 border-white rounded-lg"
                            >
                                Contact Us
                            </a>
                        </Link>
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
        title: `Network Today`,
        children: [
            `Introduction`,
            `Network Today`,
            `Key Challenges`,
            `Centralized Management`,
            `Automation and Assurance`,
        ]
    },
    {
        title: `Cisco SD-Access Fundamentals`,
        children: [
            `Introduction`,
            `What's SD-Access`,
            `Fabric Roles and Terminology`,
            `SD-Access Fabric Edge Nodes`,
            `SD-Access Control Plane Nodes`,
            `SD-Access Fabric Border`,
            `SD-Access Fabric Wireless Lan Controller`,
            `Cisco Identity Services Engine (ISE)`,
            `Cisco DNAC`,
            `Recap`,
        ]
    },
    {
        title: `Fabric Fundamentals`,
        children: [
            `Introduction`,
            `What is Underlay`,
            `What is Overlay`,
            `What is Fabric`,
            `SD-Access Under and Overlay`,
            `SD-Access Under vs Overlay`,
            `Recap`,
        ]
    },
    {
        title: `SD-Access Components`,
        children: [
            `Introduction`,
            `SD-Access Key Components`,
            `SD-Access LISP Components-P1`,
            `SD-Access LISP Components-P2`,
            `SD-Access VXLAN Components`,
            `SD-Access TrustSec Components-P1`,
            `SD-Access TrustSec Components-P2`,
            `SD-Access TrustSec Components-P3`,
            `Packet Flow in Fabric`,
            `Recap`,
        ]
    },
    {
        title: `Virtual Network`,
        children: [
            `Introduction`,
            `SD-Access New Terminology`,
            `SD-Access Virtual Network`,
            `SD-Access VRF, VN, Big Subnet`,
            `SD-Access Scalable Group - SGT`,
            `SD-Access Host Pool`,
            `SD-Access AnyCast Gateway`,
            `SD-Access Wireless Architecture`,
            `SD-Access DNA Assurance Analytics-P1`,
            `SD-Access DNA Assurance Analytics-P2`,
            `SD-Access DNA Assurance Analytics-P3`,
            `SD-Access DNA Assurance Analytics-P4`,
            `Recap`,
        ]
    },
]
export default index
