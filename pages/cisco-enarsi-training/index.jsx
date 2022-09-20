import React from 'react'
import Layout from '../../components/Layout'
import ContactusTestimonial from '../../components/Testimonials/ContactusTestimonial'
import ArticlesAndCourses from '../../components/Testimonials/ArticlesAndCourses'
import PlacementRecords from '../../components/Testimonials/PlacementRecords'
import CustomerReviews from '../../components/Testimonials/CustomerReviews'
import CourseFeatures from '../../components/Testimonials/CourseFeatures'
import { RiStarSFill } from 'react-icons/ri'
import Head from 'next/head'
import Syllabus from '../../components/common/Syllabus'
import Seo from '../../components/common/Seo'

const descList = [
    `Learn how to configure, maintain, and troubleshoot a business network.`,
    `Acquire the knowledge to configure, oversee, and troubleshoot a company network.`,
    `Set up the traditional IPv4 and IPv6 Enhanced Interior Gateway Routing Protocol(EIGRP)`,
    `Use Policy - Based Routing(PBR) and IP Service Level Agreements to implement path management(SLA)`,
    `Understand the fundamental building blocks of MPLS VPNs and Multiprotocol Label Switching(MPLS)`,
    `Configure MP - BGP for IPv4 and IPv6, modify the behavior of OSPFv2 and OSPFv3, and deploy DHCP(Dynamic Host Configuration,Protocol) security measures`,
    `Establish a secure, smooth internal network with the appropriate connectivity`,
]
const index = () => {
    return (
        <Layout>
            <Seo
                title="Implementing Cisco Enterprise Advanced Routing and Services (ENARSI) | NetworkersHome"
                desc="Explore the ever-evolving world of Microsoft Azure by joining Networkers Home's Implementing Cisco Enterprise Advanced Routing and Services (ENARSI) Course"
                keywords={'Microsoft Azure (3), Azure 204 Exam (1), AZ-204 Developing Solutions for Microsoft Azure Exam (1), Microsoft Azure Solutions (1)'}
            />
            <div className='container my-12 grid grid-cols-1 lg:grid-cols-5 gap-10'>
                <div className="w-full col-span-1 lg:col-span-3 flex flex-col space-y-5">
                    <h1 className='text-2xl lg:text-4xl font-bold'>Implementing Cisco Enterprise Advanced Routing and Services (ENARSI) Course</h1>
                    <div className="flex flex-col space-y-2">
                        <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map(num => (
                                <div key={num}>
                                    <RiStarSFill key={num} className='text-yellow-500 text-4xl' />
                                </div>
                            ))}
                        </div>
                        <div className="text-xl font-semibold lg:text-2xl">
                            Implementing Cisco Enterprise Advanced Routing and Services (ENARSI) Course Description
                        </div>
                        <p className="text-base lg:text-lg">
                            Technological advancements have made it feasible to maintain accuracy and regularly monitor a global corporate environment standard. Therefore, business enterprises are looking to integrate these technologies into their network. Students will learn the skills necessary to set up, manage, and troubleshoot a corporate network in this ENARSI course. You can set up, configure, manage, and troubleshoot a corporate network by passing the <span className='font-bold'>Implementing Cisco Enterprise Advanced Routing and Services (ENARSI)</span> exam. The advanced routing and infrastructure technologies taught in this course build on the ideas presented in the <span className='font-bold'>Implementing and Operating Cisco Enterprise Network Core Technologies (ENCOR)</span> v1.0 course.
                        </p>
                        <p className="text-base lg:text-lg">
                            For the Implementing Cisco Enterprise Advanced Routing and Services (ENARSI) course, students must be familiar with network foundations, LAN deployment, administration, and security of network devices, as well as network automation. System engineers, system administrators, network administrators, enterprise network engineers, aspiring CCNA professionals, professionals looking to pass their ENARSI 300-410 certification training, enterprise network engineers, system engineers, and network administrators are the target audience for this course.

                        </p>


                        <div className="py-6">
                            <Syllabus data={syllabusData} fullGrid title='Course Syllabus' />
                        </div>
                    </div>
                </div>
                <div className="col-span-1 lg:col-span-2  flex flex-col">
                    <h2 className='text-2xl lg:text-4xl font-bold mb-4'>Course Benefits</h2>
                    <div className="flex flex-col space-y-2">
                        <p className="text-base lg:text-lg">
                            This course will enable students to achieve the following goals:
                        </p>
                        <div className="flex flex-col space-y-2">
                            {descList.map(item => (
                                <li className='text-base lg:text-lg flex-1 font-bold' key={item}>{item}</li>
                            ))}
                        </div>

                        <p className='text-base lg:text-lg'>
                            The primary objective of this course is to help individuals prepare for the <span className='font-bold'>Implementing Cisco Enterprise Advanced Routing and Services (300-410 ENARSI) exam</span>. This exam tests your knowledge of implementation and troubleshooting for advanced routing technologies and services. After passing the 300-410 ENARSI exam, you can earn the Cisco Certified Specialist – Enterprise Advanced Infrastructure Implementation certification and pursue the new CCNP Enterprise certification.
                        </p>
                        <p className='text-base lg:text-lg'>
                            Once the goals mentioned above have been achieved, you are ready to take on any enterprise routing challenges. Register for our expertly prepared Securing Networks with <span className='font-bold'>Implementing Cisco Enterprise Advanced Routing and Services (ENARSI)</span> course!

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
        title: 'Implementing Cisco Enterprise Advanced Routing and Services(ENARSI)',
        children: [
            `Module 1: Layer 3 Technologies`,
            `Module 2: VPN Technologies`,
            `Module 3: Infrastructure Security`,
            `Module 4: Infrastructure Services`,
        ]
    },
]



export default index
