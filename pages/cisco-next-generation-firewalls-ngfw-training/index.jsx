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
    `To deliver advanced threat prevention before, during, and after assaults, use Cisco Firepower NGFW.`,
    `Acquire cutting - edge knowledge for highly demanded security - related tasks.`,
    `Describe the Cisco Firepower Threat Defense system's main ideas, NGIPS, and NGFW technologies, and include implementation scenarios.`,
    `Complete the basic configuration and setup activities for the Cisco Firepower Threat Defense device.`,
    `Describe how to create Quality of Service and control traffic using Cisco Firepower Threat Defense.`,
    `Describe how to use Cisco Firepower Threat Defense to install NAT.`,
    `Use Cisco Firepower to make a preliminary network discovery and identify hosts, apps, and services.`,
    `Describe the behavior, application, and process for implementing access control policies.`,
    `Describe the ideas and steps involved in putting security intelligence elements into practice.`,
    `Explain how to establish file control and sophisticated malware prevention using Cisco's Advanced Malware Protection (AMP) for networks.`,
    `Adopt and maintain intrusion prevention measures`,
    `Describe the site - to - site VPN's components and setup.`,
    `Describe and set up a Cisco AnyConnect - based remote - access SSL VPN.`,
    `Describe the uses and capabilities of SSL decryption `,
    `Acknowledge the advantages of engaging with SSNGFW`,

]



const index = () => {
    return (
        <Layout>
            <Seo
                title="Cisco Firepower Next Generation Firewall (SSNGFW) v1.0 Training | NetworkersHome"
                desc="Register for our expertly prepared Securing Networks with Cisco Firepower Next Generation Firewall (SSNGFW) v1.0 Training Course and become an SSNGFW expert!"
                keywords={'NGFW Firewall (1), Securing Networks with Cisco Firepower certification (1)'}
            />
            <div className='container my-12 grid grid-cols-1 lg:grid-cols-5 gap-10'>
                <div className="w-full col-span-1 lg:col-span-3 flex flex-col space-y-5">
                    <h1 className='text-2xl lg:text-4xl font-bold'>Securing Networks with Cisco Firepower Next Generation Firewall (SSNGFW) v1.0 Training Course</h1>
                    <div className="flex flex-col space-y-2">
                        <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map(num => (
                                <div key={num}>
                                    <RiStarSFill key={num} className='text-yellow-500 text-4xl' />
                                </div>
                            ))}
                        </div>
                        <div className="text-xl font-semibold lg:text-2xl">
                            Securing Networks with Cisco Firepower Next Generation Firewall (SSNGFW) v1.0 Training Course Description
                        </div>
                        <p className="text-base lg:text-lg">
                            Technology plays a significant role in {`today's`} corporate environment, enabling success and maintaining a competitive advantage. Organizations must strengthen their systems and information in light of this reliance. In an era of ongoing cybersecurity and hacking concerns, businesses seek out individuals with certifications and accreditations to prevent incurring risks. A certificate in the field of cybersecurity is offered by the Securing Networks with <span className='font-bold'>Cisco Firepower Next Generation Firewall (SSNGFW) v1.0 training</span> course and is accepted all around the world. The Securing Networks with Cisco Firepower Next Generation Firewall course teaches professionals how to implement a Cisco Firepower NGFW to offer businesses advanced threat protection before, during, and after attacks. The Securing Networks with Cisco Firepower Next Generation Firewall course also gives professionals the ability to gain leading-edge skills for high-demand responsibilities focused on security. The average salary for certified SSNGFW professionals ranges between USD 85,000 to USD 160,000.
                        </p>
                        <p className="text-base lg:text-lg">
                            With the <span className='font-bold'>Securing Networks with Cisco Firepower Next Generation Firewall (SSNGFW) v1.0 Training</span> course, you will learn how to execute and configure Cisco Firepower Threat Defense technology. We will discuss initial device setup, configuration, Cisco Adaptive Security Appliance (ASA), Cisco Firepower Threat Defense migration, and Network Address Translation (NAT). {`You'll`} discover how to use advanced network intelligence, file type identification, network-based malware detection, and deep packet inspection features of the Next-Generation Firewall (NGFW) and Next-Generation Intrusion Prevention System (NGIPS). Before going on to in-depth analysis, system management, and troubleshooting, you will also learn how to install site-to-site VPN, remote-access VPN, and SSL decryption.
                        </p>
                        <p className="text-base lg:text-lg">
                            Security supervisors, Cisco Consultants and Integrators, Security professionals, Cisco {`Partners'`} technical support professionals, and Network and System engineers, among others, may enroll in the Cisco Securing Networks with Cisco Firepower Next Generation Firewall v1.0 Training.
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
                            Students who complete this course on Securing Networks using Cisco Firepower Next Generation Firewall will be able to:
                        </p>
                        <div className="flex flex-col space-y-2">
                            {descList.map(item => (
                                <li className='text-base lg:text-lg flex-1 font-bold' key={item}>{item}</li>
                            ))}
                        </div>
                        <p className='text-base lg:text-lg'>
                            Upon completing the above Securing Networks with Cisco Firepower Next Generation Firewall training course, participants can now sit the 300-701 SNCF Securing Networks with Cisco Firepower examination. The examination tests the knowledge of Cisco Firepower Threat Defense and Firepower 7000 and 8000 series virtual appliances. These include policy configuration (30%), integrations (15%), deployments (30%), and management and troubleshooting (25%). Also, note that the <span className='font-bold'>Securing Networks with Cisco Firepower certification</span> is valid for three years after complete fulfillment.
                        </p>
                        <p className='text-base lg:text-lg'>
                            Once the goals mentioned above have been achieved, you are ready to take on any NGFW Firewall difficulties with ease. Register for our expertly prepared Securing Networks with <span className='font-bold'>Cisco Firepower Next Generation Firewall (SSNGFW) v1.0 Training</span> Course!
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
        title: 'Securing Networks with Cisco Firepower Next Generation Firewall',
        children: [


            `Module 1: Cisco Firepower Threat Defense Overview`,
            `Module 2: Cisco Firepower NGFW Device Configuration`,
            `Module 3: Cisco Firepower NGFW Traffic Control`,
            `Module 4: Cisco Firepower NGFW Address Translation`,
            `Module 5: Cisco Firepower Discovery`,
            `Module 6: Implementing Access Control Policies`,
            `Module 7: Security Intelligence`,
            `Module 8: File Control and Advanced Malware Protection`,
            `Module 9: Next - Generation Intrusion Prevention Systems`,
            `Module 10: Site - to - Site VPN`,
            `Module 11: Remote - Access VPN`,
            `Module 12: SSL Decryption`,
            `Module 13: Detailed Analysis Techniques`,
            `Module 14: System Administration`,
            `Module 15: Cisco Firepower Troubleshooting`,
            `Module 16: Lab outline`,

        ]
    },
]



export default index
