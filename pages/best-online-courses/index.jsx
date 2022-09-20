import React from 'react'
import Layout from '../../components/Layout'
import ContactusTestimonial from '../../components/Testimonials/ContactusTestimonial'
import ArticlesAndCourses from '../../components/Testimonials/ArticlesAndCourses'
import Seo from '../../components/common/Seo'
const index = () => {
    return (
        <Layout>
            <Seo
                title="BEST IT CERTIFICATIONS LIST 2022 | NetworkersHome"
                desc="Best CCIE Training institute in india "
            />


            <div className="flex my-12 container  flex-col space-y-12">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-center">BEST IT CERTIFICATIONS LIST 2022</h1>
                <img alt='image' src="/assets/images/people4.jpeg" className="w-full h-full max-h-[40rem] object-cover" />

            </div>
            <div className="themeBg py-12 mt-12">
                <div className="flex container flex-col space-y-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start lg:items-center">
                        <p className='text-xl font-semibold lg:text-2xl'>Students have been searching all over internet about best online courses for cloud,Networking, programming and other most demanded courses in 2022. Here we have compiled list of best courses for career in different technologies.</p>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">Best CLOUD Certifications</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-10 items-center lg:grid-cols-2">
                        <div className="text-lg md:text-xl flex flex-col space-y-1">
                            <p>Cloud computing is a technology that allows the storing and accessing of data, applications, and other IT resources from remote servers. Cloud technologies are used in many industries for a variety of purposes and have become an essential part of the IT infrastructure.</p>
                            <p>The following list includes the top cloud certifications in demand today by companies:</p>
                            <p>
                                AWS Certified Solutions Architect - Associate Level-
                            </p>
                            <p>
                                AWS Certified Developer - Associate Level-
                            </p>
                            <p>
                                Microsoft Azure Administrator
                            </p>
                            <p>
                                Google Cloud Platform Professional Engineer
                            </p>
                            <p>
                                Oracle Certified Professional Cloud Service Provider (OCP) SaaS Applications
                            </p>
                        </div>
                        <img alt='image' src="/assets/images/cloud-certificates.jpeg" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
            <div className="container flex flex-col space-y-8 my-12">
                <div className="flex flex-col space-y-4">
                    <h2 className='text-xl lg:text-2xl font-semibold'>Best IT Networking certificates/courses 2022</h2>
                    <p>
                        The top IT networking certifications 2022 are available to help you with your career. These are the best and most relevant certifications for those in the IT industry.Top 10 IT networking certifications:1. Cisco CCNA Routing and Switching2. Microsoft MCSA Windows Server 20163. Linux Professional Institute LPIC-1 Certification4. CompTIA A+ Certification5. CompTIA Network+ Certification6. Juniper Networks Certified Associate (JNCIA) JNCIS-ENT Certification7. Juniper Networks Certified Associate (JNCIA) JNCIS-SEC Certification8. Microsoft MCSA Windows Server 2012 R2 or higher, or MCSA Office 365 Administration 2016 or higher.
                    </p>
                </div >
                <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2">
                    <img alt='image' src="/assets/images/tut1.jpeg" className="w-full h-full" />
                    <div className="flex flex-col space-y-4">
                        <h3 className='text-2xl lg:text-4xl font-bold'>Top Programming courses</h3>
                        <p className='text-lg md:text-xl'>
                            If you are like coding and programming then top programming courses 2022 are the courses that will be most in demand. The demand for programmers has been growing exponentially in recent years, and is projected to continue this trend.Some of the top programming courses 2022 are:-
                        </p>
                        <p className='text-lg md:text-xl'>
                            Python for Data Science<br />
                            Data Structures and Algorithms with Java<br />
                            C++ Programming Language<br />
                            Advanced JavaScript<br />
                        </p>
                    </div >
                </div >
                <div className="flex flex-col space-y-4">
                    <h3 className='text-2xl lg:text-4xl font-bold'>Best Cyber security course list 2022</h3>
                    <p className='text-lg md:text-xl'>
                        Cybersecurity is an ever-evolving field. With the rapid advancement in technology, it is important to keep up with the latest trends and developments. This article provides a list of best cyber security courses 2022.The course list includes best cyber security courses for beginners, intermediate learners, and advanced learners.
                    </p>
                    <p className='text-lg md:text-xl'>
                        CEH- Certified ethical hacker<br />
                        CISSP<br />
                        CISA<br />
                        Security+<br />
                        OSCP<br />
                    </p>

                </div>
            </div >
            <ArticlesAndCourses />
            <ContactusTestimonial />
        </Layout >
    )
}

export default index
