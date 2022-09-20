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
    `Introduction`,
    `Python programming basics`,
    `Data structures in Python`,
    `Reading and writing to a file in Python`,
    `Conditional code and loops in Python`,
    `GitHub`,
    `Libraries, packages, and modules for Python`,
    `Environments for Integrated Development`,
    `Analyzing and addressing errors in Python code`,
    `APIs and automation protocols supported by Cisco`,
    `YANG data model`,
    `Application Centric Infrastructure with Cisco`,
    `Cisco ACI Whitelists`,
    `XML and JSON extraction from the Cisco ACI`,
    `Using Python and Postman to alter the ACI policy`,
    `Cisco ACI Visore`,
    `Cisco UCS topology`,
    `UCS configuration Python `,
    `Cisco IOS XE RESTCONF API`,
    `Cisco IOS XE NETCONF API`,
    `Cisco ASA REST API`,
    `Cisco Nexus NX - OS APIs`,

]



const index = () => {
    return (
        <Layout>
            <Seo
                title={'Python Programming for Cisco Network Engineers (PCNE)  | NetworkersHome'}
                desc={`Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.`}
                keywords={'Python Course for cisco automation, cisco automation using python, Python course networkershome, python for cisco, python programming for cisco'}
            />
            <div className='container my-12 grid grid-cols-1 lg:grid-cols-5 gap-10'>
                <div className="w-full col-span-1 lg:col-span-3 flex flex-col space-y-5">
                    <h1 className='text-2xl lg:text-4xl font-bold'>Python Programming for Cisco Network Engineers (PCNE) Course</h1>
                    <div className="flex flex-col space-y-2">
                        <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map(num => (
                                <div key={num}>
                                    <RiStarSFill key={num} className='text-yellow-500 text-4xl' />
                                </div>
                            ))}
                        </div>
                        <div className="text-xl font-semibold lg:text-2xl">
                            Python Programming for Cisco Network Engineers (PCNE) Course Description
                        </div>
                        <p className="text-base lg:text-lg">
                            You might wonder why you need to learn Python as a network engineer or someone with a similar background. After all, the {`industry's`} shift toward network automation is apparent. In addition, you could administer your network using various tools without having to write any code. Or, if you ever need to develop something directly, you have software experts who can take care of it. <span className='font-bold'>Python Programming for Cisco Network Engineers (PCNE)</span> training is designed to cater to the growing need to hasten the operations of software-based technologies in a Cisco enterprise. Learn everything from the fundamentals of Python programming to the specific skills and tools required to manage network devices using Python programming. Start with Networkers Home <span className='font-bold'>Python Programming for Cisco Network Engineers (PCNE)</span> today!
                        </p>
                        <p className="text-base lg:text-lg">
                            For Cisco networking experts, this course offers extensive Python programming training. You will discover how to create, edit, change, and develop complicated Python scripts while using APIs and data models exclusively focusing on Python programming. {`You'll`} be able to automate Cisco networking operations across the company with these skills. Students will learn the fundamentals of Python programming. This course will explore the fundamentals of Python, from writing practical scripts to setting up network devices. After finishing this course, you will have grasped a strong concept of Python Programming and the ability to write, use, and debug robust network automation programs.
                        </p>
                        <p className="text-base lg:text-lg">
                            The course targets Network automation engineers, software developers, system integration programmers, infrastructure architects, and network designers, but it is not restricted to those groups. Engineers that configure/manage network devices or integrate software-based solutions in a Cisco enterprise are encouraged to take this course. Additionally, this course requires basic networking skills (CCNA Level) and knowledge of GNS3. It is necessary to comprehend Cisco networking hardware. ACI knowledge and Python or programming knowledge are advantageous but not mandatory.

                        </p>

                        <div className="py-6">
                            <Syllabus data={syllabusData} fullGrid title='Course Syllabus' />
                        </div>
                    </div>
                </div>
                <div className="col-span-1 lg:col-span-2  flex flex-col">
                    <h1 className='text-2xl lg:text-4xl font-bold mb-4'>Course Benefits</h1>
                    <div className="flex flex-col space-y-2">
                        <p className="text-base lg:text-lg">
                            With the help of the <span className='font-bold'>Python Programming for Cisco Network Engineers (PCNE)</span> course, you will build a strong concept on the fundamentals of Cisco platforms, automation, and applications. You will be able to use the following skills and knowledge to implement apps to meet corporate needs by the conclusion of the course.
                        </p>
                        <div className="flex flex-col space-y-2">
                            {descList.map(item => (
                                <li className='text-base lg:text-lg flex-1 font-bold' key={item}>{item}</li>
                            ))}
                        </div>
                        <p className='text-base lg:text-lg'>
                            For those passionate about learning Python and who want to work at Cisco as a Python Specialist, we offer the <span className='font-bold'>Python Programming for Cisco Network Engineers (PCNE)</span> course. What better way to get started than by signing up for our <span className='font-bold'>Python Programming for Cisco Network Engineers (PCNE)</span> course? When you are prepared, {`let's`} begin!
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
        title: 'Python Programming for Cisco Network Engineers(PCNE)',
        children: [
            `Module 1: Introduction`,
            `Module 2: Fundamental Python programming`,
            `Module 3: Python data structure`,
            `Module 4: Using Python to read from and write to a file`,
            `Module 5: Python loops and conditional code`,
            `Module 6: GitHub`,
            `Module 7: Programming Python Functions`,
            `Module 8: Python Libraries, Packages, and Modules`,
            `Module 9: Integrated Development Environments`,
            `Module 10: Python code analysis and error handling`,
            `Module 11: Cisco - supported APIs and automation protocols`,
            `Module 12: Cisco IOS XE RESTCONF API`,
            `Module 13: Cisco IOS XE NETCONF API`,
            `Module 14: Cisco ASA REST API`,
            `Module 15: Cisco Nexus NX- OS APIs`,
            `Module 16: YANG data model`,
            `Module 17: Cisco Application Centric Infrastructure`,
            `Module 18: Cisco ACI whitelists`,
            `Module 19: Extracting XML and JSON from the Cisco ACI`,
            `Module 20: Modifying the ACI policy with Postman and Python`,
            `Module 21: The Cisco ACI Visore tool`,
            `Module 22: Cisco UCS topology`,
            `Module 23: Configuring UCS with Python`,
            `Module24: Labs`,
        ]
    },
]



export default index
