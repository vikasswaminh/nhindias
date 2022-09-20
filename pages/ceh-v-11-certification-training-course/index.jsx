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
                title="Certified Ethical Hacker v11 Certification Training | NetworkersHome"
                desc="Are you someone looking for a course to refine your Ethical Hacking skills or just a beginner who wants to learn Ethical Hacking techniques? Our Certified Ethical Hacker (CEH) v11 Training course has been redesigned, now better than ever. Register now and start your journey to becoming Certified Ethical Hacker!"
                keywords={'CEH Ethical Hacker (10),CEH Ethical Hacker Training (3), CEH v11 Training (1), CEH v11 test (1), CEH certification (1)'}
            />

            <div className='container my-12 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                <div className="w-full col-span-1 lg:col-span-2 flex flex-col space-y-4">
                    <h1 className='text-2xl lg:text-4xl font-bold'>Certified Ethical Hacker v11 Certification Training Course</h1>
                    <div className="flex flex-col space-y-2">
                        <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map(num => (
                                <div key={num}>
                                    <RiStarSFill key={num} className='text-yellow-500 text-4xl' />
                                </div>
                            ))}
                        </div>
                        <div className="text-xl font-semibold lg:text-2xl">
                            Certified Ethical Hacker v11 Certification Training
                            Course Description
                        </div>
                        <p className="text-base lg:text-lg">
                            One of the most sought-after certification programs in IT Security and Cybersecurity is the <span className='font-bold'>CEH Ethical Hacker</span> course certification. Businesses are developing vital initiatives to train employees in the cybersecurity field through ethical hacking programs as data infringements and hacks are spreading globally. IT and Cybersecurity departments acknowledge that ethical hacking can be used as an effective counter-method to tackle the prevailing cyber threats. It is easier to identify the vulnerabilities in your network with a hacker’s approach and use it to strengthen your work environment against breaches. If you wish to be a competent hacker, our <span className='font-bold'>CEH Ethical Hacker</span> Training is for you!
                        </p>
                        <p className="text-base my-2 lg:text-lg">

                            <span className='font-bold'>CEH Ethical Hacker</span> Certification (CEH v11) Training Course has become a popular cybersecurity course for professionals, and IT departments across the globe, have made <span className='font-bold'>CEH Ethical Hacker</span> Certification a must. We have designed this course contemplating industrial and professional requirements. The new module emphasizes IoT and cloud concepts and pays more regard to Malware Analysis. In this course, you will discover the latest malware analysis skills and learn to use the most recent hacking tools and strategies. The <span className='font-bold'>CEH V11</span> will assist professionals in learning about the most recent hacking tools, methods, and procedures utilized by cybercriminals and cybersecurity experts to penetrate company networks. <span className='font-bold'>CEH Ethical Hacker</span> Certification validates the competencies necessary to succeed in the IT security field, and it is required if you want to succeed as a <span className='font-bold'>CEH Ethical Hacker</span>!
                        </p>
                        <p className="text-base lg:text-lg">
                            Join the <span className='font-bold'>CEH Ethical Hacker</span> community and take a CEH Training course on Networkers Home, {`India's`} most prominent Cisco training school, for the best preparation for the CEH Certification. We provide Advanced Level Certifications for Cisco engineers. Our extensive resource material lets you learn the latest hacking methods and identify an {`organization's`} weakest links. Our <span className='font-bold'>CEH v11</span> Training course is intended for professionals that manage IT security aspects across infrastructure that spans physical, cloud, and hybrid environments. The course is also well-suited for professionals wishing to enter cybersecurity and pass the <span CEH className='font-bold'>CEH v11</span> test. We wish to assist you in becoming familiar with the fundamentals of ethical hacking, information security, and the CEH certification, which is often the first step in a career in these fields. Individuals need a CCNP Certification to be eligible for this course.
                        </p>
                    </div>
                </div>
                <div className="col-span-1  flex flex-col">
                    <h2 className='text-2xl lg:text-4xl font-bold mb-4'>Course Benefits</h2>
                    <div className="flex flex-col space-y-2">
                        <p className='text-base lg:text-lg'>
                            With an in-depth insight into the Ethical Hacking world, our <span className='font-bold'>CEH Ethical Hacker</span> v11 Training course aims to attain the following with the completion of the course:
                        </p>
                        <li className='text-base lg:text-lg'>
                            Strive to achieve the global hacking standard in Ethical Hacking
                        </li>
                        <li className='text-base lg:text-lg'>
                            Acknowledge and use the latest technology
                        </li>
                        <li className='text-base lg:text-lg'>
                            Become experienced in modern malware and spyware
                        </li>
                        <li className='text-base lg:text-lg'>
                            Actively provide solutions to basic and advanced hacking challenges
                        </li>
                        <li className='text-base lg:text-lg'>
                            Acknowledge and eliminate threatening attack vectors
                        </li>
                        <li className='text-base lg:text-lg'>
                            Gain hacking expertise
                        </li>
                        <li className='text-base lg:text-lg'>
                            Practice standardized hacking techniques and methods
                        </li>
                        <p className='text-base lg:text-lg'>
                            After fulfilling these objectives, you will be ready to enter the professional world as a <span className='font-bold'>CEH Ethical Hacker</span>. The course will help you gain extensive knowledge and refine your skills to advance on becoming well-versed in Ethical Hacking. Book our <span className='font-bold'>CEH Ethical Hacker</span> Training course to learn the best ethical hacking practices and techniques to prepare for CEH certification!
                        </p>
                    </div>
                </div>
            </div>
            <div className="container py-12">
                <Syllabus data={syllabusData} title='Course Syllabus' />
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
        title: 'Introduction to the Exam:',
        children: [
            `Introduction`,
            `Ethics and Ethical Hacking`,
            `Getting Certified`,
            `About the Exam `,
            `More Ethics`,
        ]
    },
    {
        title: `Foundation:`,
        children: [
            `Introducion`,
            `Security Triad`,
            `Network Topologies`,
            `Communications Models`,
            `OSI vs TCP/ IP`,
            `02: 18`,
            `Internet Protocol`,
            `IP Subnetting`,
            `IP Subnetting Further Explained`,
            `Subnetting Assignment`,
            `IPv6`,
            `IPv6 Rationale`,
            `User Datagram Protocol(UDP)`,
            `Transmission Control Protocol(TCP)`,
            `Network Design`,
            `Ethernet`,
            `Wireless Networks`,
            `Bluetooth`,
            `Cloud Computing Services`,
            `Cloud Computing Networking`,
        ]
    },
    {
        title: `Cryptography:`,
        children: [
            `Introducion`,
            `What is Cryptography?`,
            `Symmetric Cryptography`,
            `Diffie-Hellman and Key Derivation`,
            `Asymmetric Cryptography`,
            `Encryption Assignment`,
            `Hybrid CryptoSystems`,
            `Generating Certificates`,
            `Cryptographic Hashes`,
            `PGP vs Certificate Authority`,
        ]
    },
    {
        title: `Ethical Hacking Testing Methodology:`,
        children: [
            `Introducion`,
            `Basic Methodology`,
            `Open Source Recon with DNS and whois`,
            `Open Source Recon with Web Sites`,
            `Recon Assignment`,
            `Open Source Recon with Maltego`,
            `Port Scanning with Nmap`,
            `Enumeration with Nmap`,
            `Using the Nmap Scripting Engine`,
            `Scanning Assignment`,
            `Password Cracking with John the Ripper`,
            `Password Cracking with Rainbow Tables`,
            `Vulnerability Scanning with OpenVAS`,
            `Vulnerability Scanning with Nessus`,
            `Searching for Exploits`,
            `Google Hacking`,
            `Using Metasploit`,
            `Using Meterpreter`,
            `Social Engineering`,
            `Automating Social Engineering Attacks`,
        ]
    },
    {
        title: `Web Application Testing:`,
        children: [

            `Introducion`,
            `SQL Injection`,
            `XML Entity Injection`,
            `Cross Site Scripting`,
            `Automated Testing with Burp Suite`,
            `Automated Testing with ZED Attack Proxy`,
            `Vulnerability Remediation`,
        ]
    },
    {
        title: `Malware Operations:`,
        children: [
            `Introducion`,
            `Malware Types`,
            `Infection Vectors`,
            `Botnets`,
            `Command and Control`,
            `Anti - Virus`,
            `Static Analysis With Debuggers`,
            `Static Analysis With Metadata`,
            `Dynamic Analysis With Virtual Machines`,
            `Dynamic Analysis With Sandboxes`,
        ]
    },
    {
        title: `Software Security:`,
        children: [
            `Introducion`,
            `Types of Languages`,
            `Memory Layout of Process`,
            `Buffer Overflows`,
            `Heap Spraying`,
            `Protecting Against Software Attacks`,
            `Secure Programming Practices`,
            `Methodologies`,
            `Threat Modeling`,
            `Software Isolation`,
        ]
    },
    {
        title: `Wireless Networking:`,
        children: [
            `Introducion`,
            `Primer to 802.11`,
            `Handshakes`,
            `WEP Encryption`,
            `WPA Encryption`,
            `Deauthentication Attacks`,
        ]
    },
    {
        title: `Network Design:`,
        children: [
            `Introducion`,
            `Gathering Requirements`,
            `Defense in Depth`,
            `Defense in Breadth`,
            `Logging`,
            `Security Information and Event Management`,
            `Defensible Network Architecture`,
            `Security Controls`,
        ]
    },
    {
        title: `Governance:`,
        children: [
            `Introducion`,
            `Risk`,
            `Threats and Vulnerabilities`,
            `Policy Development`,
            `Standards and Procedures`,
            `Security Operations`,
        ]
    },
    {
        title: ` Conclusion:`,
        children: [
            `Section Overview`,
            `Final Quiz`,
            `Wrap - Up`,
            `Additional Resources`,
        ]
    },


]

export default index
