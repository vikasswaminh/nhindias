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
    `Identify standard TCP / IP, network application, and endpoint assaults`,
    `Describe how different network security technologies cooperate to prevent attacks`,
    `Describe information security ideas and methods within the network`,
    `Configure the Cisco ASA appliance and Cisco Firepower Next - Generation Firewall with access control`,
    `Describe and use the fundamental Cisco Email Security Appliance capabilities and functions for email content security`,
    `Describe and put into practice the Cisco Web Security Appliance's capabilities and functionalities for web content security`,
    `Describe the capabilities, deployment types, policy administration, and investigation console of Cisco Umbrella Security`,
    `Describe cryptography tools and techniques and introduce VPNs`,
    `Describe Cisco secure site - to - site connection options and clarify how to set up point - to - point IPs and VPNs on the Cisco ASA and Cisco Firepower Next - Generation Firewall using the Cisco Internetwork Operating System(Cisco IOS) and Virtual Tunnel Interface(VTI)`,
    `Provide a fundamental understanding of endpoint security and describe the architecture and core features of Advanced Malware Protection(AMP) for Endpoints`,
    `Describe and deploy Cisco secure remote access connectivity solutions`,
    `Describe how to configure 802.1X and Extensible Authentication Protocol(EAP) Authentication`,
    `Set up and test Cisco IOS software Layer 2 and Layer 3 data plane controls`,
    `Examine various defenses on Cisco devices that defend the control and management plane`,
    `Describe Cisco Stealthwatch Enterprise and Stealthwatch Cloud solutions`,
    `Outline the fundamentals of cloud computing, typical cloud attacks, and how to safeguard cloud environments`,


]
const sideList = [
    `Network Settings and NAT on Cisco ASA`,
    `Cisco ASA Access Control Policies`,
    `Cisco Firepower NGFW NAT`,
    `Cisco Firepower NGFW Access Control Policy`,
    `Cisco Firepower NGFW Discovery and IPS Policy`,
    `Cisco NGFW Malware and File Policy`,
    `Listener, Host Access Table(HAT), and Recipient Access Table(RAT) on Cisco Email Security Appliance(ESA)`,
    `Mail Policies`,
    `Proxy Services, Authentication, and HTTPS Decryption`,
    `Acceptable Use Control and Malware Protection`,
    `Umbrella Dashboard`,
    `Cisco Umbrella Investigate`,
    `DNS Ransomware Protection by Cisco Umbrella`,
    `Static VTI Point - to - Point IPsec IKEv2 Tunnel`,
    `Point - to - Point VPN between the Cisco ASA and Cisco Firepower NGFW`,
    `Remote Access VPN on the Cisco Firepower NGFW`,
    `Cisco AMP for Endpoints`,
    `Endpoint Analysis using AMP for Endpoints Console`,
    `File Ransomware Protection by Cisco AMP for Endpoints Console`,
    `Cisco Stealthwatch Enterprise v6.9.3`,
    `Cognitive Threat Analytics(CTA) in Stealthwatch Enterprise v7.0`,
    `Cisco Stealthwatch Cloud`,
    `Stealthwatch Cloud Alert Settings, Watchlists, and Sensors`,
    `Cisco Cloudlock Dashboard and User Security`,
    `Cisco Cloudlock Application and Data Security`,

]




const index = () => {
    return (
        <Layout>
            <Seo
                title="Implementing and Operating Cisco Security Core Technologies (SCOR) | NetworkersHome"
                desc="Register for Implementing and Operating Cisco Security Core Technologies (SCOR) course on Networkers Home and take the initial step towards Advanced Level Cisco Certifications!"
                keywords={'Cisco CCNP Security (1), CCIE Security (1)'}
            />
            <div className='container my-12 grid grid-cols-1 lg:grid-cols-5 gap-10'>
                <div className="w-full col-span-1 lg:col-span-3 flex flex-col space-y-5">
                    <h1 className='text-2xl lg:text-4xl font-bold'>Implementing and Operating Cisco Security Core Technologies (SCOR) Course</h1>
                    <div className="flex flex-col space-y-2">
                        <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map(num => (
                                <div key={num}>
                                    <RiStarSFill key={num} className='text-yellow-500 text-4xl' />
                                </div>
                            ))}
                        </div>
                        <div className="text-xl font-semibold lg:text-2xl">
                            Implementing and Operating Cisco Security Core Technologies (SCOR) Course Description
                        </div>
                        <p className="text-base lg:text-lg">
                            The <span className='font-bold'>Implementing and Operating Cisco Security Core Technologies (SCOR)</span> course prepares individuals for highly-demanding security roles concerning the Cisco CCNP Security and CCIE Security certifications. You will learn the techniques and tools necessary to implement the real Cisco security solutions that offer enhanced threat protection against cybersecurity assaults. Deploying Cisco Firepower Next-Generation Firewall and Cisco Adaptive Security Appliance (ASA) Firewall, setting up access control rules, mail policies, and 802.1X Authentication, among other things, will all be covered in great detail. Register now and learn about <span className='font-bold'>Implementing and Operating Cisco Security Core Technologies (SCOR)</span> with Networkers Home!
                        </p>
                        <p className="text-base lg:text-lg">
                            The comprehensive, captivating resource material helps you develop and improve your SCOR skills and knowledge. It will prepare you for the Implementing and Operating Cisco Security Core Technologies (350-701 SCOR) Exam. This can lead you to advance certifications like the new CCNP Security, CCIE Security, and the Cisco Certified Specialist - Security Core certifications. The objectives that will be fulfilled by the end of the course are:
                        </p>
                        <div className="flex flex-col space-y-2">
                            {descList.map(item => (
                                <li className='text-base lg:text-lg flex-1 font-bold' key={item}>{item}</li>
                            ))}
                        </div>
                        <div className="py-6">
                            <Syllabus data={syllabusData} fullGrid title='Course Syllabus' />
                        </div>
                    </div>
                </div>
                <div className="col-span-1 lg:col-span-2  flex flex-col">
                    <h2 className='text-2xl lg:text-4xl font-bold mb-4'>Course Benefits</h2>
                    <div className="flex flex-col space-y-2">
                        <p className="text-base lg:text-lg">
                            Furthermore, you will learn how to configure and implement:
                        </p>
                        <div className="flex flex-col space-y-2">
                            {sideList.map(item => (
                                <li className='text-base lg:text-lg flex-1 font-bold' key={item}>{item}</li>
                            ))}
                        </div>
                        <p className='text-base lg:text-lg'>
                            After successfully fulfilling these objectives, you will gain high-level knowledge and skills crucial for <span className='font-bold'>Implementing and Operating Cisco Security Core Technologies (SCOR)</span> experts and specialists. Register for our <span className='font-bold'>Implementing and Operating Cisco Security Core Technologies (SCOR)</span> now and take the initial step towards Advanced Level Cisco Certifications!
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
        title: 'Implementing and Operating Cisco Security Core Technologies(SCOR)',
        children: [
            `Module 1 Security Concepts`,
            `Module 2 Network Security`,
            `Module 3 Securing the Cloud`,
            `Module 4 Content Security`,
            `Module 5 Endpoint Protection and Detection`,
            `Module 6 Secure Network Access, Visibility, and Enforcement`,

        ]
    },
]



export default index
