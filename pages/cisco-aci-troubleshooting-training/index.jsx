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
    `Operate and troubleshoot the Cisco ACI Fabric`,
    `Configure and troubleshoot new and existing Cisco ACI environments`,
    `Implement best practices using your Cisco ACI operational skills and troubleshooting techniques`,
    `Comprehend and monitor APIC`,
    `Manage, optimize, and troubleshoot APIC`,
    `Execute Application Deployment`,
]
const sideList = [
    `Interface policies`,
    `Switch profiles & vSwitch(Virtual Switch) policy`,
    `VRFs & EPGs`,
    `Bridge domains`,
    `Troubleshoot VMM domain integrations, VLAN pools, & VM connectivity`,
    `OSPF interface policy & neighbor relationship`,
    `Advertising subnets`,
    `Protocol filters`,
    `Contracts between tenants`,


]


const index = () => {
    return (
        <Layout>
            <Seo
                title="Cisco ACI Troubleshooting Training | NetworkersHome"
                desc="Register now and learn the latest Cisco ACI troubleshooting techniques with our Cisco ACI Troubleshooting Training course!"
                keywords={'Cisco ACI (5), Cisco Application Centric Infrastructure (ACI) (1), ACI infrastructure (1)'}
            />

            <div className='container my-12 grid grid-cols-1 lg:grid-cols-5 gap-10'>
                <div className="w-full col-span-1 lg:col-span-3 flex flex-col space-y-5">
                    <h1 className='text-2xl lg:text-4xl font-bold'>Cisco ACI Troubleshooting Training (ACITS) Course</h1>
                    <div className="flex flex-col space-y-2">
                        <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map(num => (
                                <div key={num}>
                                    <RiStarSFill key={num} className='text-yellow-500 text-4xl' />
                                </div>
                            ))}
                        </div>
                        <div className="text-xl font-semibold lg:text-2xl">
                            Cisco ACI Troubleshooting Training (ACITS) Course Description
                        </div>

                        <p className="text-base lg:text-lg">
                            Cisco has retained its position as the world’s leading software-based solution provider, delivering modern cloud-based networking and security solutions. The global transition of information to clouds and virtual drives has challenged various organizations. Cisco, however, provides services that have made it possible without much sacrifice. The Cisco ACI Troubleshooting Training is designed to help you become a part of the Cisco ACI workforce by establishing solid skills in implementing and troubleshooting ACI infrastructure fundamentals.
                        </p>
                        <p className="text-base lg:text-lg">
                            Experts have crafted the <span className='font-bold'>Cisco ACI Troubleshooting Training</span> course at Networkers Home, {`India's`} biggest Cisco Training school. The content has been derived from the latest real-world troubleshooting tools and techniques. The training will develop your troubleshooting skills and help you understand and practice tools and techniques to tackle all  <span className='font-bold'>Cisco Application Centric Infrastructure (ACI)</span> solutions under any provided circumstances. You will be able to gain real-life knowledge that will help you configure and deploy an ACI fabric and maintain its operations. Sign up for the <span className='font-bold'>Cisco ACI Troubleshooting Training</span> course with Networkers Home and equip yourself with advanced ACI Troubleshooting skills!
                        </p>
                        <p className="text-base lg:text-lg">
                            The <span className='font-bold'>Cisco ACI Troubleshooting Training</span> course integrates up-to-date software, tools, and techniques to explore troubleshooting and managing ACI Fabric in depth. You will learn how to configure your own ACI fabric and explore existing environments with ACI troubleshooting tools. Furthermore, the course analyzes the entire domain of available ACI tools and features, including troubleshooting, performance tracking, configuration, and infrastructure management. This knowledge allows students to understand how and when to use the tools efficiently and effectively. With the extensive and interactive resource material, you will be able to recognize the key to troubleshooting and become an ACI troubleshooting expert in no time!
                        </p>
                        <p className="text-base lg:text-lg">
                            Networkers Home offers Advanced Level Cisco Certifications to engineers as conveniently as possible. All you need for enrollment is a CCNA Certification or equivalent. Moreover, prior knowledge of Server Virtualization fundamentals, Data Center infrastructure and operations, and network troubleshooting basics is required. Familiarity with Cisco switches, Data Center Architecture, and basic networking protocols is highly recommended.
                        </p>
                        <p className="text-base lg:text-lg">
                            The <span className='font-bold'>Cisco ACI Troubleshooting Training</span> is intended for individuals who have a basic understanding of ACI operations and functions and want to expand their career opportunities. Field engineers, support engineers, network and server administrators, and storage administrators are highly encouraged to apply.
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
                            The prime objective of this course is to upskill individuals with effective ACI troubleshooting techniques and deliver them to their customers. Consequently, they can provide ACI Support in the future on their own. This course teaches you to troubleshoot the ACI infrastructure efficiently. With the completion of the <span className='font-bold'>Cisco ACI Troubleshooting Training</span> course, you will be able to:
                        </p>
                        <div className="flex flex-col space-y-2">
                            {descList.map(item => (
                                <li className='text-base lg:text-lg flex-1 font-bold' key={item}>{item}</li>
                            ))}
                        </div>
                        <p className='text-base lg:text-lg'>
                            Furthermore, you will be able to troubleshoot:
                        </p>
                        <div className="flex flex-col space-y-2">
                            {sideList.map(item => (
                                <li className='text-base lg:text-lg flex-1 font-bold' key={item}>{item}</li>
                            ))}
                        </div>
                        <p className='text-base lg:text-lg'>
                            Completing the <span className='font-bold'>Cisco ACI Troubleshooting Training</span> course will equip you with the skills you need to troubleshoot ACI Fabrics. Register now and refine your skills to advance on becoming a Troubleshooting expert!
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
        title: ' Cisco ACI Troubleshooting Training (ACITS)',
        children: [
            `Module 1: ACI physical connectivity troubleshooting`,
            ` Module 2: ACI Physical construct troubleshooting(vlan - pool, domain, AAEP, interface policy, interface policy group, interface profile and switch profile)`,
            `Module 3: ACI Logical construct(Tenant, VRF, Bridge- domain and EPG) troubleshooting`,
            `Module 4: Contract troubleshooting`,
            `Module 5: VMM troubleshooting`,
            `Module 6: ACI Layer2, extend EPG and Extend Bridge Domain troubleshooting L4 - L7 troubleshooting`,
            `Module 7: L3OUT troubleshooting`,
            `Module 8: ACI Backup, OOB MGMT, in -band MGMT, AAA, SYSLOG, fault troubleshooting`,

        ]
    },






]



export default index
