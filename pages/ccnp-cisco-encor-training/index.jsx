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
    `Demonstrate the hierarchical network design model and architecture using access, distribution, and core layers`,
    `Understand how Cisco Express Forwarding works`,
    `Identify how hardware and software can switch processes and modes`,
    `Troubleshoot Layer 2 connection using trunking and VLANs`,
    `Establish redundant switched networks using the spanning tree protocol`,
    `Troubleshoot the EtherChannel link aggregation`,
    `Explain features and parameters of EIGRP and the idea of path selection`,
    `Describe components of OSPF, including adjacencies, packet types, and route filtering`,
    `Understand how to link the company's network to the internet using static and dynamic NAT `,
    `Identify the different network components and virtualization tools used`,
    `Explain wireless networking components and concepts regarding RF, antenna properties, and wireless standards`,
    `Deploy various wireless methods, including APs and cloud - based services, with Central Cisco WLC Architecture`,
    `Explain location - based services and wireless roaming`,
    `Configure APs and WLCs to achieve centralized administration`,
    `Troubleshoot wireless client connectivity concerns using available tools`,
    `Practice troubleshooting network analysis with available tools`,
    `Debug and troubleshoot commands`,

]



const index = () => {
    return (
        <Layout>
            <Seo
                title="Implementing and Operating Cisco Enterprise Network Core Technologies (ENCOR) | NetworkersHome"
                desc="Take the first step towards ENCOR Certification by registering for our CCNP Implementing Cisco Enterprise Network Core Technologies (ENCOR) v1.2 course, and learn advanced enterprise network skills!"
                keywords={'Cisco Enterprise Network Core Technologies (ENCOR) '}
            />

            <div className='container my-12 grid grid-cols-1 lg:grid-cols-5 gap-10'>
                <div className="w-full col-span-1 lg:col-span-3 flex flex-col space-y-5">
                    <h1 className='text-2xl lg:text-4xl font-bold'>CCNP Cisco Enterprise ENCOR 350-401 Certification Training Course</h1>
                    <div className="flex flex-col space-y-2">
                        <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map(num => (
                                <div key={num}>
                                    <RiStarSFill key={num} className='text-yellow-500 text-4xl' />
                                </div>
                            ))}
                        </div>
                        <div className="text-xl font-semibold lg:text-2xl">
                            CCNP Cisco Enterprise ENCOR 350-401 Certification Training Course Description
                        </div>
                        <p className="text-base lg:text-lg">
                            Cisco is constantly growing as a leading cloud-oriented network and security solutions provider. Its reach encompasses many enterprises, and they are growing by the day. There is no better time to learn ENCOR concepts and skills than now! Experts at Networkers Home have developed an engaging and interactive module for <span className='font-bold'>
                                Implementing and Operating Cisco Enterprise Network Core Technologies (ENCOR)</span>. The course is designed by integrating advanced and in-demand enterprise network skills and technologies. Whether you are looking for a course that prepares you for the 350-401 Test or wants to improve your existing enterprise network skills, this course is for you!
                        </p>
                        <p className="text-base lg:text-lg">
                            This course is the improved and latest version to deliver the best resource material for the <span className='font-bold'>Cisco Enterprise Network Core Technologies (ENCOR)</span>. This course aims to educate professionals on how to establish, manage, and troubleshoot wired and wireless enterprise networks. You will also learn how to independently program and automate enterprise networks while laying the network framework fulfilling network and security standards. We will utilize technologies like SD-Access and SD-WAN in doing so. You will also explore the concepts of dual-stack architecture, virtualization, network infrastructure and assurance, network security, and automation. Enrolling in this course will give students access to all resource material. Preparation for the 350-401 test is also included, which is required if you want advanced certifications such as CCNP Enterprise, CCIE Enterprise Infrastructure, and Wireless CCIE.
                        </p>
                        <p className="text-base lg:text-lg">
                            Before enrolling in <span className='font-bold'>Implementing and Operating Cisco Enterprise Network Core Technologies (ENCOR)</span> course, individuals should have previous concepts of some required topics, including fundamentals of Python Scripting, Enterprise Routing, Wireless Connectivity, and Local Area Networks (LAN) networks. Moreover, it is necessary to know the implementation of Enterprise LAN and LAN in considerably large organizations and how to perform scripting in Python at an initial level. The course is intended for IT Administrators, Network Administrators, Network Support Technicians, IT Support Technicians, Mid-level Network Engineers, and Service Administrators. It is highly recommended for professionals who wish to enhance and improve their knowledge and skills about ENCOR, CCNP, and Cisco Certification in Enterprise Technologies.
                        </p>

                        <div className="py-6">
                            <Syllabus data={syllabusData} fullGrid title='Course Syllabus' />
                        </div>
                    </div>
                </div>
                <div className="col-span-1 lg:col-span-2  flex flex-col">
                    <h3 className='text-2xl lg:text-4xl font-bold mb-4'>Course Benefits</h3>
                    <div className="flex flex-col space-y-2">
                        <p className="text-base lg:text-lg">
                            The CCNP ENCOR v1.2 course opens a gateway to new opportunities and certifications, including the <span className='font-bold'>Cisco Enterprise Network Core Technologies (ENCOR)</span> exam. By the end of the course, students will be able to accomplish the following.
                        </p>
                        <div className="flex flex-col space-y-2">
                            {descList.map(item => (
                                <li className='text-base lg:text-lg flex-1 font-bold' key={item}>{item}</li>
                            ))}
                        </div>
                        <p className='text-base lg:text-lg'>
                            So, why wait? Take the first step towards ENCOR Certification by registering for our <span className='font-bold'>CCNP Implementing Cisco Enterprise Network Core Technologies (ENCOR)</span> v1.2 course.
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
        title: 'CCNP Cisco Enterprise ENCOR 350 - 401',
        children: [
            `Module 1: Examining Cisco Enterprise Network Architectur`,
            `Module 2: Understanding Cisco Switching Paths`,
            `Module 3: Implementing Campus LAN Connectivity`,
            `Module 4: Building Redundant Switched Topology`,
            `Module 5: Implementing Layer 2 Port Aggregation`,
            `Module 6: Understanding EIGRP`,
            `Module 7: Implementing OSPF`,
            `Module 8: Optimizing OSPF`,
            `Module 9: Exploring EBGP`,
            `Module 10: Implementing Network Redundancy`,
            `Module 11: Implementing NAT`,
            `Module 12: Introducing Virtualization Protocols and Techniques`,
            `Module 13: Understanding Virtual Private Networks and Interfaces`,
            `Module 14: Understanding Wireless Principles`,
            `Module 15: Examining Wireless Deployment Options`,
            `Module 16: Understanding Wireless Roaming and Location Services`,
            `Module 17: Examining Wireless AP Operation`,
            `Module 18: Understanding Wireless Client Authentication`,
            `Module 19: Troubleshooting Wireless Client Connectivity`,
            `Module 20: Introducing Multicast Protocols`,
            `Module 21: Introducing QoS`,
            `Module 22: Implementing Network Services`,
            `Module 23: Using Network Analysis Tools`,
            `Module 24: Implementing Infrastructure Security`,
            `Module 25: Implementing Secure Access Control`,
            `Module 26: Understanding Enterprise Network Security Architecture`,
            `Module 27: Exploring Automation and Assurance Using Cisco DNA Center`,
            `Module 28: Examining the Cisco SD - Access Solution`,
            `Module 29: Understanding the Working Principles of the Cisco SD - WAN Solution`,
            `Module 30: Understanding the Basics of Python Programming`,
            `Module 31: Introducing Network Programmability Protocols`,
            `Module 32: Introducing APIs in Cisco DNA Center and vManage`,
            `Module 33: Lab outline`,
        ]
    },
]



export default index
