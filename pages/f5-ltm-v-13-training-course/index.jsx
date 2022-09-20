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
    'CCNA - 200 - 301',
    'AWS Assocaite',
    'Palo Alto Firewall',
    'CEH',
    'CHFI',
    'AWS Advanced Security',
    'Cloud Security projects',
    'Cloud Routing protocols advanced Project',
    '3 Optional advanced Projects',
]
const index = () => {
    return (
        <Layout>
            <Seo
                title="F5 LTM v13 Training Course | NetworkersHome"
                desc="Learn more about the popular F5 LTM platform with our F5 LTM v13 Training course and become an expert in designing and configuring F5 tools and features!"
                keywords='F5 LTM (5), F5 LTM expert (2), BIG-IP F5 LTM technology (4), Local Traffic Manager (LTM) (2)'
            />
            <div className='container my-12 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                <div className="w-full col-span-1 lg:col-span-2 flex flex-col space-y-4">
                    <h1 className='text-2xl lg:text-4xl font-bold'>F5 LTM v13 Training Course</h1>
                    <div className="flex flex-col space-y-2">
                        <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map(num => (
                                <div key={num}>
                                    <RiStarSFill key={num} className='text-yellow-500 text-4xl' />
                                </div>
                            ))}
                        </div>
                        <div className="text-xl font-semibold lg:text-2xl">
                            F5 LTM v13 Training Course Description
                        </div>
                        <p className="text-base lg:text-lg">
                            F5 is a prominent application security and accessibility provider, primarily delivering security infrastructures and solutions. F5 frameworks aim to protect the applications from malware or cyber-attacks and help them retain their normal operations without hindrance. It allows users to access these applications anyplace, anytime, using any device, while ensuring uninterrupted access. A career as an <span className='font-bold'>F5 LTM</span> expert is an outstanding achievement for those who wish to excel as network and security engineers or administrators. This course is designed for the same purpose, to help motivated individuals acquaint themselves with critical features of <span className='font-bold'>F5 LTM</span> and excel in the subject. Becoming well-versed in <span className='font-bold'>F5 LTM</span> is a long road, but with our <span className='font-bold'>F5 LTM Training</span> course, you will become skilled in no time!
                        </p>
                        <p className="text-base lg:text-lg">
                            Students will understand the <span className='font-bold'>F5 LTM</span> system, associated configuration tools, and traffic management in this course. The BIG-IP <span className='font-bold'>F5 LTM</span> technology, frequently used in application delivery networks, will be explored in-depth. This course will familiarize students with fundamental and advanced BIG-IP F5 LTM tools and features and demonstrate’ a practical understanding of the Local Traffic Manager (LTM) Network. With the extensive resource material and discussions, our F5 LTM Training course aims to assist students in developing the skills required to design and manage <span className='font-bold'>F5 LTM</span> Networks that perform and function correctly and effectively.
                        </p>
                        <p className="text-base lg:text-lg">
                            We offer Advanced Level Certifications for highly qualified Cisco engineers. Hence, this course is aimed at network engineers, network administrators, network operators, security engineers, and network security engineers who oversee the setup, installation, and administration of the <span className='font-bold'>F5 LTM</span> infrastructure. It is also suitable for beginners with basic knowledge of the subject who wish to become <span className='font-bold'>F5 LTM</span> experts. Individuals looking to enhance their network and security skills can enroll as well. The requirement for this course is CCNP certification.

                        </p>

                    </div>
                    <div>
                        <Syllabus fullGrid data={syllabusData} title='Course Syllabus' />
                    </div>
                </div>
                <div className="col-span-1  flex flex-col">
                    <h2 className='text-2xl lg:text-4xl font-bold mb-4'>Course Benefits</h2>
                    <div className="flex flex-col space-y-2">
                        <p className='text-base lg:text-lg'>
                            After finishing our <span className='font-bold'>F5 LTM Training</span>   course, you will have the skills required to administer and configure F5 LTM Networks and execute the following:
                        </p>
                        <li className='text-base lg:text-lg'>
                            Excellent knowledge of BIG-IP F5 Local Traffic Manager(LTM)
                        </li>

                        <li className='text-base lg:text-lg'>
                            Set up and configure <span className='font-bold'>BIG-IP F5 LTM</span>
                        </li>

                        <li className='text-base lg:text-lg'>
                            Ability to compose, configure, and administer <span className='font-bold'>F5 LTM</span> frameworks
                        </li>

                        <li className='text-base lg:text-lg'>
                            Implement advanced <span className='font-bold'>BIG-IP F5 LTM</span> configuration options
                        </li>

                        <li className='text-base lg:text-lg'>
                            Understand tools, features, and functions of <span className='font-bold'>BIG-IP F5 LTM</span>
                        </li>

                        <li className='text-base lg:text-lg'>
                            Reform and organize traffic pattern
                        </li>
                        <li className='text-base lg:text-lg'>
                            Reform traffic patterns using SSL, SIP, etc.
                        </li>
                        <li className='text-base lg:text-lg'>
                            Manage dynamic load balancing techniques
                        </li>
                        <li className='text-base lg:text-lg'>
                            Use layers to secure the infrastructure
                        </li>
                        <li className='text-base lg:text-lg'>
                            Process traffic pattern with SNAT pools
                        </li>
                        <li className='text-base lg:text-lg'>
                            Safeguard applications and interfaces using <span className='font-bold'>F5 LTM</span>
                        </li>

                        <p className='text-base lg:text-lg'>
                            Our <span className='font-bold'>F5 LTM Training</span>  course is designed for enthusiasts who wish to pursue a career as an <span className='font-bold'>F5 LTM Expert</span>. It is a promising field, and what better way to begin than by registering for our <span className='font-bold'>F5 LTM Training</span> course? {`Let's`} start when you are ready!
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
        title: 'Ultimate F5 LTM Training (v16) from Beginner to Expert',
        children: [

            `Introduction to BIG - IP F5 LTM`,
            `What is Node, Pool, Poolmember, Virtual server in F5 Terminology ?`,
            `LAB Setup video details`,
            `Configuring Node, Pool, Poolmember, Virtual Server`,
            `Types of Deployment`,
            `Creating and configuring Self - IP and VLAN`,
            `Port Lockdown security feature in Network configuration`,
            `What is Load Balancing in F5 ?`,
            `Round Robin Load balancing method - Static Method`,
            `Static Ratio Load Balancing - Static Method`,
            `Dynamic Load Balancing Method - Fastest`,
            `Dynamic Load Balancing Method - Least Connection`,
            `Dynamic Load Balancing Method - Predictive Method`,
            `Dynamic Load Balancing Method - Weighted Least Connection`,
            `Dynamic Load Balancing Method - Observed`,
            `F5 Health Check Monitors`,
            `Address Check Monitor method`,
            `Service Check Monitor method`,
            `Content Check Monitor method`,
            `Interactive Check Monitor method`,
            `Health Monitor Testing`,
            `Monitor Instance`,
            `Status & Symbols of Health Monitors`,
            `Network MAP`,
            `F5 profile introduction`,
            `Introduction to Persistence Profiles`,
            `Source Address persistence Part - 1`,
            `Source Address Persistence Method Part - 2`,
            `Cookie Persistence Method - Introduction`,
            `Cookie Persistence Method Part - 2`,
            `NAT overview`,
            `SNAT AutoMap Method`,
            `SNAT method`,
            `SNAT List method`,
            `Overview of SSL in BIG - IP F5`,
            `SSL Offloading / SSL Termination / Client SSL in BIG - IP F5`,
            `Priority Group Activation in F5 LTM`,
            `Fall Back Host Mechanism in F5 LTM`,
            `One Connect Mechanism - Part - 1`,
            `One Connect Mechanism Part - 2`,
            `Local Logging, Remote Logging, High Speed Logging`,
            `SNMP configuration and Functions in F5`,
            `In - built TCPDUMP feature for Packet Analysis in BIG- IP F5`,
            `Configuring Packet Filters for Network security`,
            `CLI Access Management`,
            `iRule - features & functions`,
            `High Availablity redundancy mechanism in BIG - IP F5 Part - 1`,
            `High Availablity Mechanism Part - 2`,
            `How to setup a F5 Lab in VMware workstation`,
        ]
    },



]

export default index
