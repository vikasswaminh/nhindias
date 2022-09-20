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
    `Azure subscriptions`,
    `Resource groups`,
    `RBAC`,
    `Azure Backup`,
    `File sync`,
    `Azure PowerShell`,
    `Deploying resources with ARM templates`,
    `Azure DNS domains`,
    `Azure load balancer`,
    `Azure identity protection`,

]
const sideList = [
    `Manage Azure identities and governance(15 - 20 %)`,
    `Implement and manage storage(10 - 15 %)`,
    `Deploy and manage Azure compute resources(25 - 30 %)`,
    `Configure and manage virtual networking(30 - 35 %)`,
    `Monitor and back up Azure resources(10 - 15 %)`,
]


const index = () => {
    return (
        <Layout>
            <Seo
                title="AZ-104 Microsoft Azure Administrator Certification Training  | NetworkersHome"
                desc="Grab the opportunity to work at one of the world’s prominent cloud platforms by enrolling in Networkers Home’s AZ-104 Microsoft Azure Administrator Certification Training course!"
                keywords='Microsoft Azure Certifications (), AZ-104 Azure Administrator test (1), Microsoft Azure (2), AZ-104 Microsoft Azure Administrator Exam (1)'
            />

            <div className='container my-12 grid grid-cols-1 lg:grid-cols-5 gap-10'>
                <div className="w-full col-span-1 lg:col-span-3 flex flex-col space-y-5">
                    <h1 className='text-2xl lg:text-4xl font-bold'>AZ-104: Microsoft Azure Administrator Certification Training Course</h1>
                    <div className="flex flex-col space-y-2">
                        <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map(num => (
                                <div key={num}>
                                    <RiStarSFill key={num} className='text-yellow-500 text-4xl' />
                                </div>
                            ))}
                        </div>
                        <div className="text-xl font-semibold lg:text-2xl">
                            AZ-104: Microsoft Azure Administrator Certification Training Course Description
                        </div>
                        <p className="text-base lg:text-lg">
                            One of the fastest-growing business cloud platforms, Microsoft Azure, enables professionals to deploy more secure cloud environments. Network professionals should be familiar with administering these services on platforms like Microsoft Azure as corporate solutions and services migrate to the cloud. The  <span className='font-bold'>AZ-104 Microsoft Azure Administrator Certification Training</span> will assist learners by enabling them to develop a foundational grasp of installing and managing identities, governance, cloud storage, building virtual networks, and managing resources.
                        </p>
                        <p className="text-base lg:text-lg">
                            One of the highly recognized qualifications from Microsoft for professionals globally is the <span className='font-bold'>Azure Administrator Certification</span>. Enroll in the <span className='font-bold'>AZ-104 Microsoft Azure Administrator Certification Training</span> course from Networkers Home and seize the opportunity to work at one of the most renowned cloud platforms in the world!
                        </p>
                        <p className="text-base lg:text-lg">
                            With this course, you will gain a thorough grasp of the complete administrative process of Azure systems. You will learn how to maintain, compute, and secure your network. To pass the <span className='font-bold'>AZ-104 Azure Administrator test</span>, sharpen your Azure Administrator abilities with this course. For Azure Administrators who oversee, manage, and design virtual networks in a cloud environment, the AZ-104 Microsoft Azure Administrator Training is the best option. It is strongly recommended that IT professionals, Azure administrators, system administrators, network administrators, cloud architects, database administrators, security engineers, and IT professionals join.
                        </p>
                        <p className="text-base lg:text-lg">
                            It is a requirement for enrollment in the <span className='font-bold'>AZ-104 Microsoft Azure Administrator Training</span> course that students are familiar with the principles of <span className='font-bold'>Microsoft Azure</span>. You should be proficient in identity management, networking, virtualization, and storage. Additionally, knowledge of network setups, encryption technologies, and on-premises virtualization technologies is required. Also necessary for those interested in understanding Active Directory and Disaster Recovery. After these conditions are met, you may begin earning advanced Microsoft Azure Certifications with Networkers Home, {`India's`} largest Cisco training facility. Achieve a widely recognized <span className='font-bold'>AZ-104 Microsoft Azure Administrator Certification Training</span> while learning how to build your cloud frameworks.

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
                            Individuals will achieve the following objectives with the completion of <span className='font-bold'>AZ-104 Microsoft Azure Administrator Certification Training</span>.
                        </p>
                        <div className="flex flex-col space-y-2">
                            {descList.map(item => (
                                <li className='text-base lg:text-lg flex-1 font-bold' key={item}>{item}</li>
                            ))}
                        </div>
                        <p className='text-base lg:text-lg'>
                            The AZ-104 Microsoft Azure Administrator Exam test the following concepts in applicants
                        </p>
                        <div className="flex flex-col space-y-2">
                            {sideList.map(item => (
                                <li className='text-base lg:text-lg flex-1 font-bold' key={item}>{item}</li>
                            ))}
                        </div>
                        <p className='text-base lg:text-lg'>
                            Ace the Microsoft Azure Administrators Exam and tests and become well-versed in Microsoft Azure features and operations. Register for <span className='font-bold'>AZ-104 Microsoft Azure Administrator Certification Training</span> by Networkers Home!
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
        title: 'AZ - 104T00 - A: Microsoft Azure Administrator',
        children: [
            `Module 1: Identity`,
            `Module 2: Governance and Compliance`,
            `Module 3: Azure Administration`,
            `Module 4: Virtual Networking`,
            `Module 5: Intersite Connectivity`,
            `Module 6: Network Traffic Management`,
            `Module 7: Azure Storage`,
            `Module 8: Azure Virtual Machines`,
            `Module 9: Serverless Computing`,
            `Module 10: Data Protection & Monitoring`,
        ]
    },
]



export default index
