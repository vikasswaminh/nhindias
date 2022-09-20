import React from 'react'
import Layout from '../../components/Layout'
import ContactusTestimonial from '../../components/Testimonials/ContactusTestimonial'
import ArticlesAndCourses from '../../components/Testimonials/ArticlesAndCourses'
import Head from 'next/head'
import PlacementRecords from '../../components/Testimonials/PlacementRecords'
import CustomerReviews from '../../components/Testimonials/CustomerReviews'
import { RiStarSFill } from 'react-icons/ri'
import CourseFeatures from '../../components/Testimonials/CourseFeatures'
import Link from 'next/link'
import TeamExperts from '../../components/Testimonials/TeamExperts'
import Syllabus from '../../components/common/Syllabus'
import Seo from '../../components/common/Seo'

const descList = [
    'Network fundamentals',
    'Network access',
    'IP connectivity',
    'IP services',
    'Security fundamentals',
    'Automation and programmability',
]

const index = () => {
    return (
        <Layout>
            <Seo
                title="CCNA Course Details | Training Duration, Online, Fee Structure, Career Options, Syllabus, and Salary in Bangalore india"
                desc="Best CCNA Course training in Bangalore. Know CCNA Certification Course Duration, scope, job options."
            />
            <div className='container my-12 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                <div className="w-full col-span-1 lg:col-span-2 flex flex-col space-y-4">
                    <h1 className='text-2xl lg:text-4xl font-bold'>CCNA Course 200-301</h1>
                    <div className="flex flex-col space-y-2">
                        <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map(num => (
                                <div key={num}>
                                    <RiStarSFill key={num} className='text-yellow-500 text-4xl' />
                                </div>
                            ))}
                        </div>
                        <div className="text-xl font-semibold lg:text-2xl">
                            CCNA Course description
                        </div>
                        <p className="text-base lg:text-lg">
                            CCNA 200-301 Training in both online and classroom mode.  The CCNA certification is valid for three years.. Upon completing the course, you will receive a certificate of completion, ensuring you have the skills needed to become a CCNA and start your career in IT networking! We offer CCNA course in online and classroom format. Programs comes with lifetime video library access as well as free exam prep software. The market for IT professionals is booming, and the demand for Cisco Certified Networking Professionals is especially high.
                        </p>
                    </div>
                    <h2 className='text-2xl lg:text-4xl font-bold mb-4'>CCNA Course Topics </h2>
                    <div className="flex flex-col space-y-1">
                        {descList.slice(0, 6).map(item => (
                            <li className='text-lg lg:text-xl flex-1  font-semibold' key={item}>{item}</li>
                        ))}
                    </div>
                </div>

                <div className="col-span-1  flex flex-col">
                    <h3 className='text-xl lg:text-2xl font-bold mb-4'>Benefits of CCNA certification</h3>
                    <div className="flex flex-col space-y-2">
                        <h3 className='text-base  lg:text-lg'>
                            There are many benefits to obtaining a CCNA certification, including increased job security, opportunities for advancement, and higher salaries. <br />
                            Perhaps the most important benefit of CCNA certification is the ability to demonstrate to employers that you have the skills and knowledge necessary to perform complex networking tasks. With the ever-increasing reliance on networked systems, organizations are looking for employees who can keep their networks running smoothly. A CCNA certification gives you the credibility you need to stand out from the crowd and show employers that you are qualified for the job.
                        </h3>
                        <li className='text-lg lg:text-xl flex-1  font-semibold'>
                            Comprehensive, end-to-end coverage of all aspects of CCNA IT certification
                        </li>
                        <li className='text-lg lg:text-xl flex-1  font-semibold'>
                            The course is designed for anyone who wants to start working in IT or just wants a better knowledge about networks
                        </li>
                        <li className='text-lg lg:text-xl flex-1  font-semibold'>
                            We assure you best CCNA Training in bangalore and all over the world in online and classroom format
                        </li>
                    </div>
                    <div className="flex flex-col mt-4 space-y-2">
                        <a target='_blank' rel='noreferrer' href='https://uploads-ssl.webflow.com/62a3260623ec5b668eeb0d5d/62ac3c289988300eb63458e1_CCNA.pdf' className="rounded-lg py-3 px-6 text-center w-full hover:opacity-80 text-lg bg-[#EED477]">Download Course Syllabus</a>
                        <a target='_blank' rel='noreferrer' href='https://www.cisco.com/c/dam/en_us/training-events/training-services/courses/implementing-and-administering-cisco-solutions-ccna.pdf' className="rounded-full border border-gray-300 bg-[#fafafa] py-3 px-6 text-center w-full hover:bg-[#efefef] text-lg">Cisco Official Course info</a>
                    </div>
                </div>
            </div>
            <div className="container py-12">
                <Syllabus slicingIndex={1 + (syllabusData.length / 2)} title={'CCNA Course Syllabus'} data={syllabusData} />
            </div>
            <img alt='image' src="/assets/images/course-banner.jpg" className="w-full h-full" />
            <CourseFeatures noBG={true} />
            <div className="bg-themeColor py-12 lg:py-20">
                <div className="container flex flex-col md:flex-row text-center md:text-left  items-center justify-between">
                    <div className="flex flex-col space-y-4">
                        <h3 className='text-2xl lg:text-4xl font-bold text-white'>Download Complete Syllabus</h3>
                        <p className="text-white text-base lg:text-lg">
                            Checkout full syllabus for relevant courses
                        </p>
                    </div >
                    <div className="flex flex-col space-y-4">
                        <a href='https://uploads-ssl.webflow.com/62a3260623ec5b668eeb0d5d/62ac3c289988300eb63458e1_CCNA.pdf' className="bg-[#fff] mt-4 md:mt-0 font-semibold py-3 px-6 border-2 border-white rounded-lg">Download</a>
                        <Link href='/networkers-home-contact-us'>
                            <a
                                className="bg-[#EED477] mt-4 md:mt-0 font-semibold py-3 px-6 border-2 border-white rounded-lg"
                            >
                                Contact Us
                            </a>
                        </Link>
                    </div>
                </div >
            </div >
            <PlacementRecords />
            <CustomerReviews />
            <TeamExperts />
            <ContactusTestimonial />
            <ArticlesAndCourses />
        </Layout >
    )
}

const syllabusData = [
    {
        title: 'Host to Host Communications',
        children: [
            `Introduction`,
            `A (Very) Basic Introduction to Networking`,
            `The OSI Reference Model Overview`,
            `The TCP/IP Stack`,
            `The Upper OSI Layers`,
            `The Lower OSI Layers`
        ]
    },
    {
        title: `The Cisco IOS Operating System`,
        children: [
            `Introduction`,
            `Cisco Operating Systems`,
            `Connecting to a Cisco Device over the network`,
            `Making the Initial Connection to a Cisco Device`,
            `Navigating the Cisco IOS Operating System Part 1`,
            `Navigating the Cisco IOS Operating System Part 2`,
            `Cisco IOS Configuration Management`,
            `The IOS Operating System - Lab Exercises`
        ]
    },
    {
        title: `OSI Layer 4 - The Transport Layer`,
        children: [
            `Introduction`,
            `The Transport Layer Header, TCP and UDP`
        ]
    },
    {
        title: `OSI Layer 3 - The Network Layer`,
        children: [
            `Introduction`,
            `The IP Header`,
            `Unicast, Broadcast and Multicast Traffic`,
            `How to Count in Binary`,
            `IPv4 Addresses`,
            `Calculating an IPv4 Address in Binary`,
            `The Subnet Mask`,
            `Slash Notation`,
        ]
    },
    {
        title: `IP Address Classes`,
        children: [
            `Introduction`,
            `Class A IP Addresses`,
            `IP Address Classes B and C`,
            `IP Address Classes D and E`,
        ]
    },
    {
        title: `Subnetting`,
        children: [
            `Introduction`,
            `CIDR Classless Inter-Domain Routing`,
            `Subnetting Overview`,
            `Subnetting Class C Networks and VLSM`,
            `Subnetting Practice Questions`,
            `Variable Length Subnet Masking Example Part 1`,
            `Variable Length Subnet Masking Example Part 2`,
            `Subnetting Large Networks Part 1`,
            `Subnetting Large Networks Part 2`,
            `Subnetting on the 4th Octet - Written Example`,
            `Subnetting on the 3rd Octet - Written Example`,
            `Private IP Addresses Part 1`,
            `Private IP Addresses Part 2`,
            `Subnetting Table and Subnet Calculator`,
            `Where to Get More Subnetting Practice`,
            `Additional Subnetting Practice`,

        ]
    },
    {
        title: `OSI Layer 2 - The Data-Link Layer`,
        children: [
            `Introduction`,
            `Local Area Network Layer 2 - Ethernet`,
        ]
    },
    {
        title: `OSI Layer 1 - The Physical Layer`,
        children: [
            `Introduction`,
            `Ethernet Connection Media`,

        ]
    },
    {
        title: `Cisco Device Functions`,
        children: [
            `Introduction`,
            `Switches vs Hubs`,
            `Switch Operation`,
            `Routers`,
            `Other Cisco Devices`,
            `Cisco Device Functions - Lab Exercises`,
        ]
    },
    {
        title: `The Life of a Packet`,
        children: [
            `Introduction`,
            `DNS The Domain Name System`,
            `DNS on Cisco Routers`,
            `ARP Address Resolution Protocol`,
            `ARP for Routed Traffic`,
            `Life of a Packet Example Part 1 - DNS`,
            `Life of a Packet Example Part 2 - HTTP`,
            `The Life of a Packet - Lab Exercises`,

        ]
    },
    {
        title: `The Cisco Troubleshooting Methodology`,
        children: [
            `Introduction`,
            `The Cisco Troubleshooting Methodology`,
            `Cisco Troubleshooting Methodology - Lab Example`,
            `The Cisco Troubleshooting Methodology - Lab Exercises`,
        ]
    },
    {
        title: `Cisco Router and Switch Basics`,
        children: [
            `Introduction`,
            `Basic Router and Switch Configuration`,
            `The Setup Wizard`,
            `Speed and Duplex Settings`,
            `CDP and LLDP`,
            `Basic Layer 1 and 2 Troubleshooting`,
            `Basic Layer 1 and 2 Troubleshooting - Lab Demo`,
            `Cisco Router and Switch Basics - Lab Exercises`,
        ]
    },
    {
        title: `Cisco Device Management`,
        children: [
            `Introduction`,
            `The Boot Up Process`,
            `The Boot Up Process Lab Demo`,
            `Factory Reset and Password Recovery`,
            `Password Recovery Lab Demo`,
            `Backing up the System Image and Configuration`,
            `Upgrading IOS`,
            `Cisco Device Management - Lab Exercises`,
        ]
    },
    {
        title: `Routing Fundamentals`,
        children: [
            `Introduction`,
            `Connected and Local Routes`,
            `Connected and Local Routes Lab Demo`,
            `Static Routes`,
            `Static Routes Lab Demo`,
            `Summarisation, Longest Prefix Match, and Default Routes`,
            `Summary Routes and Longest Prefix Match Lab Demo`,
            `Default Routes and Load Balancing Lab Demo`,
            `Routing Fundamentals - Lab Exercises`,
        ]
    },
    {
        title: `Dynamic Routing Protocols`,
        children: [
            `Introduction`,
            `Dynamic Routing Protocols vs Static Routes`,
            `Dynamic Routing Protocols Lab Demo`,
            `Routing Protocol Types`,
            `Routing Protocol Types Lab Demo`,
            `Routing Protocol Metrics`,
            `Routing Protocol Metrics Lab Demo`,
            `Equal Cost Multi Path`,
            `Equal Cost Multi Path Lab Demo`,
            `Administrative Distance`,
            `Administrative Distance Lab Demo`,
            `Loopback Interfaces`,
            `Adjacencies and Passive Interfaces`,
            `Adjacencies and Passive Interfaces Lab Demo`,
            `Dynamic Routing Protocols - Lab Exercises`,
        ]
    },
    {
        title: `Connectivity Troubleshooting`,
        children: [
            `Introduction`,
            `Basic Connectivity Troubleshooting`,
            `Connectivity Troubleshooting - Lab Exercises`,
        ]
    },
    {
        title: `IGP Interior Gateway Protocol Fundamentals`,
        children: [
            `Introduction`,
            `RIP the Routing Information Protocol`,
            `RIP Lab Demo`,
            `EIGRP - the Enhanced Interior Gateway Routing Protocol`,
            `EIGRP Lab Demo`,
            `IGP Fundamentals Configuration - Lab Exercises`,
        ]
    },
    {
        title: `OSPF - Open Shortest Path First`,
        children: [
            `Introduction`,
            `OSPF Characteristics`,
            `OSPF Basic Configuration`,
            `OSPF Basic Configuration Lab Demo`,
            `OSPF Advanced Topics`,
            `OSPF Advanced Topics Lab Demo`,
            `OSPF Areas`,
            `OSPF Areas Lab Demo`,
            `Bandwidth vs Clock Rate and Speed`,
            `OSPF Cost Metric`,
            `OSPF Cost Metric Lab Demo`,
            `OSPF Adjacencies`,
            `OSPF Adjacencies Lab Demo`,
            `OSPF DR and BDR Designated Routers`,
            `OSPF DR and BDR Lab Demo`,
            `OSPF Configuration - Lab Exercises`,
        ]
    },
    {
        title: `VLANs Virtual Local Area Networks`,
        children: [
            `Introduction`,
            `Campus LAN Design - Core, Distribution and Access Layers`,
            `Spine - Leaf Network Design`,
            `Why we have VLANs`,
            `VLAN Access Ports`,
            `VLAN Access Ports Lab Demo`,
            `VLAN Trunk Ports`,
            `VLAN Trunk Ports Lab Demo`,
            `DTP Dynamic Trunking Protocol`,
            `VTP VLAN Trunking Protocol`,
            `VTP Lab Demo`,
            `VLAN Configuration Lab Exercises`,
        ]
    },
    {
        title: `Inter-VLAN Routing`,
        children: [
            `Introduction`,
            `Router with Separate Interfaces`,
            `Router on a Stick`,
            `Layer 3 Switch`,
            `Layer 3 Switch Lab Demo`,
            `VLAN and Inter-VLAN Routing Configuration - Lab Exercises`,
        ]
    },
    {
        title: `DHCP - Dynamic Host Configuration Protocol`,
        children: [
            `Introduction`,
            `DHCP Dynamic Host Configuration Protocol`,
            `Cisco DHCP Server`,
            `External DHCP Server`,
            `Windows, Mac and Linux client IP settings`,
            `Cisco DHCP Client`,
            `DHCP Configuration - Lab Exercises`,
        ]
    },
    {
        title: `HSRP - Hot Standby Router Protocol`,
        children: [
            `Introduction`,
            `Network Redundancy`,
            `FHRP First Hop Redundancy Protocols`,
            `HSRP Hot Standby Router Protocol`,
            `HSRP Advanced Topics`,
            `HSRP Configuration - Lab Exercises`,
        ]
    },
    {
        title: `STP - Spanning Tree Protocol`,
        children: [
            `Introduction`,
            `Layer 3 Path Selection and Loop Prevention Review`,
            `Why we have the Spanning Tree Protocol`,
            `Spanning Tree Terminology - The Bridge`,
            `How Spanning Tree Works`,
            `Spanning Tree Versions`,
            `Verification - show spanning-tree`,
            `Verification - show mac address-table`,
            `Manipulating the Root Bridge Election`,
            `Spanning Tree and HSRP Alignment`,
            `Portfast, BPDU Guard and Root Guard`,
            `STP Troubleshooting - Lab Exercises`,
            `STP Configuration - Lab Exercises`,
        ]
    },
    {
        title: `EtherChannel`,
        children: [
            `Introduction`,
            `Why we have EtherChannel`,
            `EtherChannel Load Balancing`,
            `EtherChannel Protocols and Configuration`,
            `EtherChannel Lab Demo`,
            `StackWise, VSS and vPC`,
            `Layer 3 EtherChannel`,
            `EtherChannel Configuration - Lab Exercises`,
        ]
    },
    {
        title: `Switch Security`,
        children: [
            `Introduction`,
            `DHCP Snooping`,
            `DAI Dynamic ARP Inspection`,
            `802.1X Identity Based Networking`,
            `Preventing Unauthorised Devices with Port Security`,
            `Preventing Unauthorised Devices with Port Security Lab Demo`,
            `Locking Ports to Hosts with Port Security`,
            `Locking Ports to Hosts with Port Security Lab Demo`,
            `Port Security Configuration - Lab Exercises`,
        ]
    },
    {
        title: `ACLs - Access Control Lists`,
        children: [
            `Introduction`,
            `Access Control Lists Overview`,
            `Standard, Extended and Named ACLs`,
            `ACL Syntax`,
            `ACL Operations`,
            `Numbered ACLs Lab Demo`,
            `Named ACLs Lab Demo`,
            `Access Control Lists Configuration - Lab Exercise`,
        ]
    },
    {
        title: `NAT - Network Address Translation`,
        children: [
            `Introduction`,
            `IPv4 Address Exhaustion and NAT`,
            `Static NAT`,
            `NAT Translations - Inside Local, Inside Global, Outside Local, Outside Global`,
            `Static NAT Lab Demo`,
            `Dynamic NAT`,
            `Dynamic NAT Lab Demo`,
            `PAT Port Address Translation`,
            `PAT Port Address Translation Lab Demo`,
            `Network Address Translation Configuration - Lab Exercise`,
        ]
    },
    {
        title: `IPv6 Addressing and Routing`,
        children: [
            `Introduction`,
            `Why We Need IPv6`,
            `The IPv6 Address Format`,
            `IPv6 Global Unicast Addresses`,
            `IPv6 Global Unicast Addresses Lab Demo`,
            `EUI-64 Addresses`,
            `Unique Local and Link Local Addresses`,
            `Link Local Addresses Lab Demo`,
            `SLAAC Stateless Address AutoConfiguration`,
            `IPv6 Static Routes`,
            `IPv6 Static Routes Lab Demo`,
            `IPv6 Addressing and Routing - Lab Exercise`,
        ]
    },
    {
        title: `WAN - Wide Area Networks`,
        children: [
            `Introduction`,
            `WAN Overview`,
            `VPN - Virtual Private Networks`,
            `WAN Connectivity Options`,
            `Leased Lines`,
            `MPLS Multi Protocol Label Switching`,
            `PPPoE Point to Point Protocol over Ethernet`,
            `WAN Topology Options`,
        ]
    },
    {
        title: `The Security Threat Landscape`,
        children: [
            `Introduction`,
            `The Security Threat Landscape`,
            `Common Attacks`,
            `Firewalls and IDS/IPS`,
            `Firewalls vs Packet Filters`,
            `Cryptography`,
            `TLS Transport Layer Security`,
            `Site-to-Site VPN Virtual Private Networks`,
            `Remote Access VPN Virtual Private Networks`,
            `Threat Defense Solutions`,
        ]
    },
    {
        title: `Cisco Device Security`,
        children: [
            `Introduction`,
            `Line Level Security`,
            `Privileged Exec and Password Encryption`,
            `Line Level Security Lab Demo`,
            `Usernames and Privilege Levels`,
            `SSH Secure Shell`,
            `SSH Secure Shell Lab Demo`,
            `AAA Authentication, Authorization and Accounting`,
            `AAA Configuration`,
            `Global Security Best Practices`,
            `Global Security Best Practices Lab Demo`,
            `Cisco Device Security Configuration - Lab Exercises`,
        ]
    },
    {
        title: `Network Device Management`,
        children: [
            `Introduction`,
            `Syslog`,
            `Terminal Monitor and Logging Synchronous`,
            `Syslog Lab Demo`,
            `SNMP Simple Network Management Protocol`,
            `SNMP Lab Demo`,
            `SNMPv3 Configuration`,
            `SNMPv3 Lab Demo`,
            `Syslog vs SNMP`,
            `Network Device Management - Lab Exercises`,
        ]
    },
    {
        title: `QoS Quality of Service`,
        children: [
            `Introduction`,
            `QoS Overview`,
            `Classification and Marking`,
            `Congestion Management`,
            `Policing and Shaping`,
        ]
    },
    {
        title: `Cloud Computing`,
        children: [
            `Introduction`,
            `Traditional IT Deployment Models`,
            `Defining Cloud Computing`,
            `Cloud Computing Case Study`,
            `Server Virtualization`,
            `Virtualizing Network Devices`,
            `Cloud Service Models`,
            `Cloud Deployment Models`,
            `Cloud Computing Advantages`,
        ]
    },
    {
        title: `Wireless Networking Fundamentals`,
        children: [
            `Introduction`,
            `Wireless Network Types`,
            `Infrastructure Mode and Wireless Access Points`,
            `Wireless LAN Controllers and CAPWAP`,
            `Switch Configuration for Wireless Networks`,
            `Wireless Channels and Radio Frequencies`,
            `Wireless Security`,
            `Switch Configuration for Wireless - Lab Demo`,
            `Wireless Network Configuration - Lab Demo`,
            `Wireless Fundamentals: Lab Exercises`,
        ]
    },
    {
        title: `Network Automation and Programmability`,
        children: [
            `Introduction`,
            `The Benefits of Network Automation and Programmability`,
            `Python, Git, GitHub and CI-CD`,
            `Data Serialization Formats: XML, JSON and YAML`,
            `APIs - CRUD, REST and SOAP`,
            `Model Driven Programmability - YANG, NETCONF, RESTCONF and gRPC`,
            `Lab Demo - Testing APIs with Postman`,
            `Configuration Management Tools - Ansible, Puppet and Chef`,
            `Ansible Lab Demo`,
            `SDN Software Defined Networking`,
            `Software Defined Architecture - DNA Center`,
            `Software Defined Architecture - SD-Access`,
            `Software Defined Architecture - SD-WAN`,
            `Further Learning Resources`,
        ]
    },

]
export default index
