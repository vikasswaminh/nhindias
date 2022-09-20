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
    `Specified data classes on Azure: How to characterize them`,
    `Manage Azure identities and access`,
    `Identify Azure data protection methods`,
    `Secure applications on Azure, describe Azure security features and services and implement internet protocols.`,
    `Implement enterprise governance solutions, such as resource locks, Azure policies, and role - based access control.`,
    `Establish a user, group, and multi - factor authentication architecture with Azure AD`,
    `Implement risk policies, conditional access, and access reviews as part of Azure AD Identity Protection`,
    `Manage identities in Azure Active Directory`,
    `Set up secure access using Azure AD`,
    `Regulate application access, and manage access control. `,


]
const sideList = [
    `Manage identity and access(30 - 35 %)`,
    `Implement platform protection(15 - 20 %)`,
    `Manage security operations(25 - 30 %)`,
    `Secure data and applications(20 - 25 %)`,

]


const index = () => {
    return (
        <Layout>
            <Seo
                title={'AZ-500 Microsoft Azure Security Technologies Certification Training  | NetworkersHome'}
                desc={`Acquire the required skills to obtain the Microsoft Azure Security Technologies AZ 500 Exam with Networkers Home AZ-500 Microsoft Azure Security Technologies Certification Training Course.`}
                keywords={'Microsoft Azure Security Technologies (AZ-500) certification exam, Microsoft Azure Security Technologies'}
            />
            <div className='container my-12 grid grid-cols-1 lg:grid-cols-5 gap-10'>
                <div className="w-full col-span-1 lg:col-span-3 flex flex-col space-y-5">
                    <h1 className='text-2xl lg:text-4xl font-bold'>AZ-500: Microsoft Azure Security Technologies Certification Training Course</h1>
                    <div className="flex flex-col space-y-2">
                        <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map(num => (
                                <div key={num}>
                                    <RiStarSFill key={num} className='text-yellow-500 text-4xl' />
                                </div>
                            ))}
                        </div>
                        <div className="text-xl font-semibold lg:text-2xl">
                            AZ-500: Microsoft Azure Security Technologies Certification Training Course Description
                        </div>

                        <p className="text-base lg:text-lg">
                            Everyone is migrating to the cloud, regardless of their organization type. Asset security is crucial for a business to ensure data integrity, given the rise in cybersecurity assaults and breaches worldwide. Microsoft Azure Security Technologies is the ideal method to obtain a safe cloud architecture in this regard for individuals and business teams.
                        </p>
                        <p className="text-base lg:text-lg">
                            Networkers Home offers the widely-acknowledged <span className='font-bold'>AZ-500 Microsoft Azure Security Technologies Certification Training</span> course for individuals in the IT Security field. In this training, we will cover the skills required to create security controls, manage an {`organization's`} security posture, and detect and address security vulnerabilities. We will also explore and analyze platform protection, data and application security, identity and access security, and security operations. {`You'll`} gain knowledge of platform protection, managing identity and access, security operations, and securing data and apps. The primary goal of this learning route is to assist students in beginning their studies for the Microsoft Azure Security Technologies (AZ-500) certification exam.
                        </p>
                        <p className="text-base lg:text-lg">
                            Students must be familiar with industry security standards, including multi-factor authentication, shared responsibility, and the zero trust paradigm, to participate in the <span className='font-bold'>AZ-500 Microsoft Azure Security Technologies Certification Training</span> course. You must know security protocols like SSL, IPS, and VPN. Additionally, an understanding of scripting languages, Windows and Linux operating systems, and disk and data encryption techniques is necessary. You must be familiar with Azure, PowerShell, and the Command-Line Interfaces. Once these requirements have been satisfied, you can start obtaining advanced Microsoft Azure Certifications with Networkers Home, {`India's`} leading Cisco training institution.
                        </p>
                        <p className="text-base lg:text-lg">
                            This course is intended, but not restricted, to Azure Security Engineers who either aim to sit for the relevant certification test or regularly handle security-related duties at work. An engineer who wishes to specialize in providing security for digital platforms built on Azure and play a significant part in safeguarding an {`organization's`} data might also benefit from taking this course. The <span className='font-bold'>AZ-500 Microsoft Azure Security Technologies Certification Training</span> course is the finest choice for Azure Security Professionals who want to upskill their existing knowledge and skills. Network security engineers, system engineers, IT security engineers, cloud solution architects, and cybersecurity professionals are all highly encouraged to attend.
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
                            With the conclusion of the <span className='font-bold'>AZ-500 Microsoft Azure Security Technologies Certification Training</span> course, individuals will accomplish the following goals.

                        </p>
                        <div className="flex flex-col space-y-2">
                            {descList.map(item => (
                                <li className='text-base lg:text-lg flex-1 font-bold' key={item}>{item}</li>
                            ))}
                        </div>
                        <p className='text-base lg:text-lg'>
                            The <span className='font-bold'>Microsoft Azure Security Technologies (AZ-500) certification exam</span> assesses the following concepts in applicants.
                        </p>
                        <div className="flex flex-col space-y-2">
                            {sideList.map(item => (
                                <li className='text-base lg:text-lg flex-1 font-bold' key={item}>{item}</li>
                            ))}
                        </div>
                        <p className='text-base lg:text-lg'>
                            Pass the<span className='font-bold'> Microsoft Azure Security Technologies (AZ-500) exam</span> and get the hang of <span className='font-bold'>Microsoft Azure Security Technologies</span>. Join Networkers {`Home's`} <span className='font-bold'>AZ-500 Microsoft Azure Security Technologies Certification Training</span> course today!
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
        title: 'AZ - 500: Microsoft Azure Security Technologies',
        children: [
            `Module 1: Identity and Access`,
            `Module 2: Platform Protection`,
            `Module 3: Security Operations`,
            `Module 4: Data and applications`,
        ]
    },






]



export default index
