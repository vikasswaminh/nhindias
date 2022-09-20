import React from 'react'
import Layout from '../../components/Layout'
import ContactusTestimonial from '../../components/Testimonials/ContactusTestimonial'
import ArticlesAndCourses from '../../components/Testimonials/ArticlesAndCourses'
import PlacementRecords from '../../components/Testimonials/PlacementRecords'
import CustomerReviews from '../../components/Testimonials/CustomerReviews'
import { RiStarSFill } from 'react-icons/ri'
import CourseFeatures from '../../components/Testimonials/CourseFeatures'
import Link from 'next/link'
import Syllabus from '../../components/common/Syllabus'
import Seo from '../../components/common/Seo'


const index = () => {
    return (
        <Layout>
            <Seo
                title="SDWAN Training Online| Cisco Viptela. SDWAN training in bangalore, india"
                desc="SDWAN Training Online and recorded videos,Course fee,duration, sdwan syllabus and lab practice"
            />
            <div className='container my-12 grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <div className="w-full col-span-1  flex flex-col space-y-4">
                    <h1 className='text-2xl lg:text-4xl font-bold'>Cisco SDWAN Training</h1>
                    <div className="flex flex-col space-y-2">
                        <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map(num => (
                                <div key={num}>
                                    <RiStarSFill key={num} className='text-yellow-500 text-4xl' />
                                </div>
                            ))}
                        </div>
                        <div className="text-xl font-semibold lg:text-2xl">
                            Cisco SDWAN Course description
                        </div>
                        <p className="text-base lg:text-lg">
                            The Cisco SDWAN Training course 30 hours training program and is designed to provide students with the skills and knowledge necessary to implement, configure, manage and troubleshoot Cisco SDWAN solutions. The course covers the basics of Cisco SDWAN architecture and components, as well as the key features and benefits of the technology. In addition, the course covers how to deploy Cisco SDWAN in both single-site and multi-site deployments, how to perform initial configuration and ongoing management tasks, and how to troubleshoot common problems.
                        </p>
                    </div>
                </div>
                <div className="col-span-1  flex flex-col">
                    <h2 className='text-xl font-semibold lg:text-2xl mb-4'>Cisco SDWAN - CCNP Module Course prerequiste</h2>
                    <div className="flex flex-col space-y-2">
                        <h3 className='text-base  lg:text-lg'>
                            For  Cisco SDWAN Certification offered by Cisco, there are no prerequisites for both training and certification.
                            Generally, if you are a fresher candidate then make it sure that you begin with R&S( Enterprise now) track after which you may move ahead in the career ladder with some other track.
                        </h3>
                        <li className='text-lg lg:text-xl flex-1  font-semibold'>
                            Comprehensive, end-to-end coverage of all aspects of CCNP Enterprise IT certification
                        </li>
                        <li className='text-lg lg:text-xl flex-1  font-semibold'>
                            Unlimited SDWAN lab access for a month in a group
                        </li>
                        <li className='text-lg lg:text-xl flex-1  font-semibold'>
                            Internet based Lab access to each student
                        </li>
                    </div>
                </div>
            </div>
            <div className="container py-12">
                <Syllabus data={syllabusData} title='Course Syllabus' />

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
        title: 'Cisco SD-WAN Overlay Network',
        children: [
            `Examining Cisco SD-WAN Architecture`,
            `Examining the Cisco SD-WAN Architecture – OMP`,
        ]
    },
    {
        title: `Cisco SD-WAN Deployment`,
        children: [
            `Examining Cisco SD-WAN Deployment Options`,
            `Examining Cisco SD-WAN Deployment On-Premises`,
            `Examining Cisco SD-WAN Deployment Using Enterprise CA`,
            `Examining Cisco SD-WAN Controller Placement and Challenges`,
            `Deploying the vEdge Devices`,
            `Deploying the cEdge Devices`,
            `Deploying Edge Devices – Working with NAT`,
            `Deploying Edge Devices with Zero-Touch Provisioning – Part 1`,
            `Deploying Edge Devices with Zero-Touch Provisioning – Part 2`,
            `Device Configuration Templates – Part-1`,
            `Device Configuration Templates – Part-2`,
            `Redundancy, High Availability, and Scalability`,
        ]
    },
    {
        title: `Cisco SD-WAN Routing Options`,
        children: [
            `Cisco SD-WAN Routing Options - Overview`,
            `Using Dynamic Routing – Part 1`,
            `Using Dynamic Routing – Part 2`,
            `Providing Site Redundancy & High Availability`,
            `Configuring Transport-Side Connectivity`,
            `Bidirectional Forwarding Detection (BFD)`,
            `Implementing TLOC Extensions – Path Redundancy`
        ]
    },
    {
        title: `Cisco SD-WAN Policy Configuration`,
        children: [
            `Cisco SD-WAN Policy Overview`,
            `Defining Advanced Control Policies – Part 1`,
            `Defining Advanced Control Policies – Part 2`,
            `Defining Advanced Data Policies – Traffic Engineering`,
            `Defining Advanced Data Policies – Application Firewalls`,
            `Defining Advanced Data Policies – Zone-Based Firewalls`,
            `Implementing AAR (Application-Aware Routing)`,
            `Implementing DIA and NAT`,
            `Defining Advanced Data Policies – QOS`,
        ]
    },
    {
        title: `Cisco SD-WAN Migration and Interoperability`,
        children: [
            `Section Overview`,
            `Cisco SD-WAN Hybrid Scenarios`,
            `Performing SD-WAN Migration – Part 1`,
            `Performing SD-WAN Migration – Part 2`,
        ]
    },
    {
        title: `Cisco SD-WAN Management and Operations`,
        children: [
            `Troubleshooting Control Connection`,
            `Performing Day-2 Operations – Part 1`,
            `Performing Day-2 Operations – Part 2`,
            `Performing Upgrades`,
            `Build Your Own SD-WAN-Viptela-LAB`,
        ]
    },
    {
        title: `LAB TIME`,
        children: [
            `vManage Dashboard Overview`,
            `vManage-Monitor-1`,
            `vManage-Monitor-2`,
            `vManage Tools`,
            `OMP Configuration -Edge Devices-LAB`,
            `OMP Configuration -vSmart Controllers-LAB`,
            `OMP Verification - CLI-LAB`,
            `OMP Verification - CLI-LAB`,
            `OMP Verification - vManage-LAB`,
            `VPN Configuration Feature Template -LAB`,
            `VPN Interface Configuration - LAB`,
            `VRRP Configuration and Verifcation`,
            `OSPF Configuration Feature Template-LAB`,
            `BGP Configuration Feature Template-LAB`,
            `Device Template Configuration -LAB`,
            `vEdge - Zero-Touch Provisioning LAB`,
            `vEdge on-boarding through Manual configuration -LAB`,
            `Configure Device using Device Template`,
            `Adding additional configuration to device through device template-LAB`,
            `OSPF Verification CLI & vManage`,
            `Removing perticular configuration to device through device template-LAB`,
            `Control Policy: Multi-Topology using Route Filtering`,
            `Control Policy: Multi-Topology using TLOC change`,
            `Control Policy- Hub-Spoke LAB`,
            `Control Policy - Firewall Insertion between Branches`,
            `App-Aware-Route-Policy-LAB`,
            `Control Policy - Datacenter Preferences`,
        ]
    },
]
export default index
