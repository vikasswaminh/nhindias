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
                title="FortiGate Firewall Course | NetworkersHome"
                desc="Master security techniques and implement them to protect data and information with our FortiGate Firewall course. Register for this course and pursue a career at one of the world’s renowned firewall providers!"
                keywords='FortiGate Firewall (10), FortiGate Firewall expert (1)'
            />
            <div className='container my-12 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                <div className="w-full col-span-1 lg:col-span-2 flex flex-col space-y-4">
                    <h1 className='text-2xl lg:text-4xl font-bold'>FortiGate Firewall Course</h1>
                    <div className="flex flex-col space-y-2">
                        <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map(num => (
                                <div key={num}>
                                    <RiStarSFill key={num} className='text-yellow-500 text-4xl' />
                                </div>
                            ))}
                        </div>
                        <div className="text-xl font-semibold lg:text-2xl">
                            FortiGate Firewall Course Description
                        </div>
                        <p className="text-base lg:text-lg">
                            FortiGate is a highly sophisticated security firewall that comes from Fortinet and protects networks against online assaults. Global organizations entrust FortiGate to protect their networks and infrastructures. To prevent cyber assaults, learning how to install, configure, manage, and troubleshoot FortiGate network firewalls is essential. This course helps you understand how to use and manage some essential FortiGate tools and features, including comprehension of and basic understanding of network security concepts like routing and IP addressing. With our <span className='font-bold'>FortiGate Firewall</span> course, you will also learn how to establish a <span className='font-bold'>FortiGate firewall</span> from scratch.
                        </p>
                        <p className="text-base lg:text-lg">

                            You will learn to use core firewall concepts like routing, VPN, user authentication, and firewall policies. Students will learn to secure their users using web filters and effective application control. Attending this course is recommended for networking and security enthusiasts who manage, configure, administer, and monitor FortiGate devices on various fronts. By the end, you will also come around to how to install, configure, manage, and troubleshoot your <span className='font-bold'>FortiGate firewall</span> and implement the best practices of a network security specialist.
                        </p>
                        <p className="text-base lg:text-lg">

                            <span className='font-bold'>Networkers Home</span> offers Advanced Level Certifications for highly qualified Cisco engineers and can help you achieve excellence in various network security-centered courses. Our <span className='font-bold'>FortiGate Firewall</span> Course is one of our best-improvised course modules that overlook all necessary tools a network security expert should know. Individuals who are beginners to network security and wish to escalate their skill set, or anyone interested in learning about the configuration and administration of <span className='font-bold'>FortiGate Firewall</span>, can sign up for this course. However, individuals must be minimum CCNP Certified to take this course. It is also recommended to have a good understanding of network and security protocols, basic firewall concepts, and a fundamental grasp of routing.
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
                            By the end of the course, you will acquire a solid understanding of how to deploy and maintain primary and advanced Network Security Solutions. The course also demonstrates how to allow users to connect to a network in a secure way remotely. The objectives that will be achieved by the end of this are as follows:
                        </p>
                        <li className='text-base lg:text-lg'>
                            Configure, manage, and administer a FortiGate Firewall.
                        </li>
                        <li className='text-base lg:text-lg'>
                            Assess a FortiGate network route
                        </li>
                        <li className='text-base lg:text-lg'>
                            Establish appropriate functions and operations
                        </li>
                        <li className='text-base lg:text-lg'>
                            Monitor network access to configured networks using firewall policies
                        </li>
                        <li className='text-base lg:text-lg'>
                            Implement High Accessibility with FortiGate Firewalls
                        </li>
                        <li className='text-base lg:text-lg'>
                            Implement network applications using standard or non-standard tools and protocols
                        </li>
                        <li className='text-base lg:text-lg'>
                            Implement Application control and Intrusion Preventive Measures
                        </li>
                        <li className='text-base lg:text-lg'>
                            Authenticate users using firewall policies. Carry out Authentication and acknowledge its role in Network Security
                        </li>
                        <li className='text-base lg:text-lg'>
                            Configure web filtering to block inappropriate and risky websites
                        </li>
                        <li className='text-base lg:text-lg'>
                            Apprehend Static And Dynamic Routing and differentiate between them
                        </li>
                        <li className='text-base lg:text-lg'>
                            Implement backup & restore
                        </li>
                        <li className='text-base lg:text-lg'>
                            Configure security profiles
                        </li>
                        <li className='text-base lg:text-lg'>
                            Develop an understanding of Filters, including Web Filter, DNS Filter, and File Filter
                        </li>

                        <p className='text-base lg:text-lg'>
                            Once the objectives mentioned above are fulfilled, you can tackle all <span className='font-bold'> Palo Alto Firewall</span> challenges like a pro. Start your journey with us and register for our skillfully-crafted <span className='font-bold'> Palo Alto Firewall</span> Course!
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
        title: 'FortiGate Firewall Version 6.4 NSE4 Training',
        children: [
            `Lecture-01:Common Network Security Terms.`,
            `Lecture-02:Identify Malware(Malicious Software)`,
            `Lecture-03:Introduction to Firewall Technologies.`,
            `Lecture-04:Introduction About Fortinet FortiGate.`,
            `Lecture-05:Install FortiGate Firewall On VMWare.`,
            `Lecture-06:Install FortiGate Firewall in GNS3.`,
            `Lecture-07:Install FortiGate Firewall in EVE-NG.`,
            `Lecture-08:FortiGate Firewall Dashboard.`,
            `Lecture-09:FortiGate Firewall Initial Working Lab.`,
            `Lecture-10:FortiGate Firewall Interfaces and Zones.`,
            `Lecture-11:Configure and Verify VLAN and Zone Lab.`,
            `Lecture-12:Configure and Verify One-Armed Sniffer Lab.`,
            `Lecture-13:Configure Redundant Interface in FortiGate.`,
            `Lecture-14:Configure Aggregate Interface in FortiGate.`,
            `Lecture-15:Configure Virtual Wire Pair in FortiGate.`,
            `Lecture-16:Administrative Access in FortiGate Firewall.`,
            `Lecture-17:Configure DNS & DNS Server In FortiGate.`,
            `Lecture-18:Static,Default,Dynamic and Policy Route Theory.`,
            `Lecture-19:Configure & Verify Static & Default Route Lab.`,
            `Lecture-20:Configure and Verify Policy Routing Lab.`,
            `Lecture-21:Configure and Verify Dynamic Protocol RIP.`,
            `Lecture-22:Configure and Verify Dynamic Protocol OSPF.`,
            `Lecture-23:Configure and Verify Routing Redistribution.`,
            `Lecture-24:Configure and Verify Dynamic Protocol BGP.`,
            `Lecture-25:FortiGate Firewall Policies Theory.`,
            `Lecture-26:MAC Address Based Policy in FortiGate Firewall.`,
            `Lecture-27:Local User Based Policy in FortiGate Firewall.`,
            `Lecture-28:IP Address Based Policy in FortiGate Firewall.`,
            `Lecture-29:Services and Schedule Based Policy in FortiGate.`,
            `Lecture-30:FortiGate Firewall DHCP Server Theory.`,
            `Lecture-31:FortiGate Firewall as DHCP Server Lab.`,
            `Lecture-32:FortiGate Firewall as DHCP Relay Lab.`,
            `Lecture-33:FortiGate Firewall License Activation.`,
            `Lecture-34:FortiGate Firewall Security Profile & FortiGuard.`,
            `Lecture-35:FortiGate Firewall Replacement Messages.`,
            `Lecture-36:Security Profile Antivirus Profile.`,
            `Lecture-37:Security Profile Web Filter Profile.`,
            `Lecture-38:Security Profile DNS Filter.`,
            `Lecture-39:Security Profile Application Control.`,
            `Lecture-40:Security Profile Intrusion Prevention.`,
            `Lecture-41:Security Profile File Filter.`,
            `Lecture-42:FortiGate Firewall Inspection Mode.`,
            `Lecture-43:FortiGate Firewall NGFW Modes.`,
            `Lecture-44:Policy-Based Mode to Block Facebook App.`,
            `Lecture-45:Policy-Based Mode for Default Services.`,
            `Lecture-46:FortiGate Firewall Modes (Transparent).`,
            `Lecture-47:Configure and Verify IPv4 DoS Policy.`,
            `Lecture-48:Network Address Translation Theory.`,
            `Lecture-49:Policy,Source,Interface Overload NAT Lab.`,
            `Lecture-50:Policy,Source,Overload NAT Lab.`,
            `Lecture-51:Policy,Source,One-To-One NAT Lab.`,
            `Lecture-52:Policy,Source,Fixed Port Range NAT Lab.`,
            `Lecture-53:Policy,Source, Port Block Allowcation NAT Lab.`,
            `Lecture-54:Source NAT, Central Secure NAT (SNAT).`,
            `Lecture-55:Destination NAT, Virtual IP in Security Policy.`,
            `Lecture-56:Destination NAT, Virtual IP with Central SNAT.`,
            `Lecture-57:Addresses Objects in FortiGate Firewall.`,
            `Lecture-58:Services Objects in FortiGate Firewall.`,
            `Lecture-59:High Availability (HA) Theory.`,
            `Lecture-60:High Availability HA Active-Passive Lab.`,
            `Lecture-61:High Availability HA Active-Active Lab.`,
            `Lecture-62:FortiGate Authentication With AD & Lab Setup.`,
            `Lecture-63:FortiGate Active Authentication(AD).`,
            `Lecture-64:FortiGate Passive Authentication (AD).`,
            `Lecture-65:Configure & Verify Virtual Domains (VDOMs).`,
            `Lecture-66:Cryptography Symmetric & Asymmetric Encryption.`,
            `Lecture-67:Introduction to Diffi-Hellman (DH) Group.`,
            `Lecture-68:Introduction to Internet Protocol Security IPSec.`,
            `Lecture-69:Introduction to Virtual Private Private Network.`,
            `Lecture-70:Policy-Based and Route-Based VPNs Theory.`,
            `Lecture-71:Site-to-Site IPSec Route-Based VPN Template Lab.`,
            `Lecture-72:Site-to-Site IPsec Route-Based VPN Custom Lab.`,
            `Lecture-73:Site-to-Site IPSec Policy-Based VPN Lab.`,
            `Lecture-74:Backup & Restore, Revision & Firmware Upgrade.`,
            `Lecture-75:Configure SNMP V1/V2 and SNMP V3 in FortiGate.`,
            `Lecture-76:Configure Syslog in FortiGate Firewall.`,
            `Lecture-77::Traffic Shaping Shared Shaper and Per IP Shaper.`,
            `Lecture-78:Remote Access SSL VPN Web Portal Theory & Lab.`,
            `Lecture-79:Remote Access IPSec VPN Theory and Lab.`,
            `Lecture-80:FortiGate Firewall CLI Basic Commands.`,
            `Lecture-81:Troubleshooting FortiGate Firewall.`,
            `Lecture-82:Packet Sniffing in FortiGate Firewall.`,
            `Lecture-83:Fundamental CLI Commands in FortiGate Firewall.`,
            `Lecture-84:Configure and Verify Packet Capture in FortiGate.`,
        ]
    },



]

export default index
