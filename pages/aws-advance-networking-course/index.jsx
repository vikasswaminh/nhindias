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

const index = () => {
    return (
        <Layout>
            <Seo
                title="AWS Advance Networking | NetworkersHome"
                desc="Sign up for the AWS Advance Networking course now and grab the opportunity to work as a network expert at one of the world's biggest competitors in cloud technology, Amazon Web Services (AWS)!"
                keywords={'Amazon Web Service, AWS Networking, Advanced Networking, Advanced Networking Expert, AWS Network'}
            />
            <div className='container my-12 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                <div className="w-full col-span-1 lg:col-span-2 flex flex-col space-y-4">
                    <h1 className='text-2xl lg:text-4xl font-bold'>AWS Advance Networking Course</h1>
                    <div className="flex flex-col space-y-2">
                        <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map(num => (
                                <div key={num}>
                                    <RiStarSFill key={num} className='text-yellow-500 text-4xl' />
                                </div>
                            ))}
                        </div>
                        <div className="text-xl font-semibold lg:text-2xl">
                            AWS Advance Networking Course Description
                        </div>
                        <p className="text-base lg:text-lg">
                            With the promptly growing  <span className='font-bold'>Amazon Web Services (AWS)</span> networking community, many new networking elements and frameworks have emerged, creating plenty of opportunities for network specialists. If you are someone looking to pursue a career, or even an interest, in <span className='font-bold'>AWS Advance Networking</span>, now is the time!
                        </p>
                        <p className="text-base lg:text-lg">
                            The data transition from drives and disks to clouds and virtual disks has caused a mega shift in various matured organizations and companies. Other organizations have substantial network maps up and running but lack the cloud network frameworks. Although changes on such a massive scale are a nightmare, a skilled and well-versed Networking expert can save the day. Therefore, organizations are trying to track down Networking personnel who know their way around cloud network infrastructure and IP networking. Well, that is where you come in, an <span className='font-bold'>Advanced Networking</span> professional, upskilled with our <span className='font-bold'>AWS Advance Networking</span> Course!
                        </p>
                        <p className="text-base lg:text-lg">
                            With all the tremendous career opportunities being highlighted, now is an excellent chance to polish your cloud and hybrid access networking skills by signing up for our <span className='font-bold'>AWS Advance Networking</span>. Even if you aspire to be an Advanced Networking expert as a hobby, this course is as engaging as it is educative, and an Advanced Level Cisco Certification is the best perk. The minimum requirement for enrollment in this course is CCNP certification, and it is recommended to have a basic knowledge of some in-demand networking subjects like simple IP routing and subnetting before the start of the course.
                        </p>
                        <p className="text-base lg:text-lg">
                            Here at Networkers Home, {`India's`} most prominent Cisco training school, each course is carefully crafted under the supervision of highly experienced subject experts and scholars. Our <span className='font-bold'>AWS Advanced Networking</span> course is designed with the fusion of essential, in-demand networking skills that help you crack complex and stubborn networking riddles in no time. The abundance of resource material, including lectures and demos, and its captivating content will help you level up your <span className='font-bold'>AWS Networking</span> game and grow as an <span className='font-bold'>Advance Networking expert</span> before you know it!
                        </p>
                    </div>
                </div>

                <div className="col-span-1  flex flex-col">
                    <h3 className='text-2xl lg:text-4xl font-bold mb-4'>Course Benefits</h3>
                    <div className="flex flex-col space-y-2">
                        <p className='text-base lg:text-lg'>
                            Below are some objectives that will be achieved with this course and will help you become a distinguished and promising Networking specialist.
                        </p>
                        <li className='text-base lg:text-lg'>
                            Actively recognize and differentiate between <span className='font-bold'>Advanced Networking</span> concepts in AWS
                        </li>
                        <li className='text-base lg:text-lg'>
                            Design refined networking frameworks using Amazon Virtual Private Cloud(Amazon VPC)
                        </li>
                        <li className='text-base lg:text-lg'>
                            Design and execute cloud-native <span className='font-bold'>AWS networks</span>
                        </li>
                        <li className='text-base lg:text-lg'>
                            Implement necessary network security controls and protocols
                        </li>
                        <li className='text-base lg:text-lg'>
                            Maintain and handle tools to control operational processes
                        </li>
                        <li className='text-base lg:text-lg'>
                            Possess network automation skills & control automation tools
                        </li>
                        <li className='text-base lg:text-lg'>
                            Link on-site data centers to Amazon VPC & incorporate AWS Network services with your applications
                        </li>
                        <li className='text-base lg:text-lg'>
                            Use network automation to assist app migration and deployments
                        </li>
                        <li className='text-base lg:text-lg'>
                            Practice advanced troubleshooting skills & techniques
                        </li>

                        <p className='text-base lg:text-lg'>
                            Once the objectives mentioned above are achieved, you will have developed advanced networking skills. Whether designing advanced network frameworks or troubleshooting any errors, our <span className='font-bold'>AWS Advance Networking</span> course has covered it. So, what are you waiting for? Grab the opportunity and begin your journey to being a successful <span className='font-bold'>AWS Advance Networking</span> expert.
                        </p>


                    </div>
                </div>
            </div>
            <div className="container pb-8">
                <div>
                    <Syllabus data={syllabusData} title='Course Syllabus' />
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
        title: 'AWS Certified Advanced Networking Specialty',
        children: [
            `Course Introduction`,
            `Introduction to AWS Networking`,
            `AWS Networking fundamentals`,
        ]
    },
    {
        title: 'Amazon VPC Fundamentals:',
        children: [
            `Section Introduction`,
            `VPC Addressing (CIDR)`,
            `VPC Route Tables`,
            `IP Addresses - Private vs Public vs Elastic & IPv4 vs IPv6`,
            `Elastic Network Interfaces (ENI)`,
            `VPC Firewall - Security Group`,
            `VPC Firewall - Network Access Control List (NACL)`,
            `Default VPC`,
            `Hands On: Creating VPC with Public Subnet`,
            `Hands On: Add Private subnet`,
            `NAT Gateway`,
            `Hands On: Create NAT Gateway`,
            `NAT Gateway High Availability`,
            `NAT Instance (EC2 based NAT)`,
            `Exam Essentials`,
            `VPC Fundamentals`,
        ]
    },
    {
        title: 'Additional VPC Features:',
        children: [
            `Extending VPC address space`,
            `Revisiting Elastic Network Interface (ENI)`,
            `Bring Your Own IP`,
            `VPC Traffic Monitoring`,
            `VPC Traffic Mirroring`,
            `VPC Features`,
        ]
    },
    {
        title: 'VPC DNS and DHCP:',
        children: [
            `Amazon VPC DNS Server`,
            `Default EC2 Public and Private DNS Names`,
            `EC2 Customer domain name`,
            `VPC DHCP Options sets`,
            `Hands On: Custom DNS with Route53 Private Hosted zone`,
            `Hands On: Custom DNS with DNS server`,
            `Hybrid DNS resolution - VPC to On-premises and On-premises to AWS`,
            `Summary`,
            `VPC DNS`,
        ]
    },
    {
        title: 'Network performance and Optimization:',
        children: [
            `Basics of Network performance - Bandwidth, Latency, Jitter, Throughput, PPS, MTU`,
            `Placement Groups and EBS Optimized EC2 instances`,
            `Enhanced Networking`,
            `DPDK and Elastic Fabric Adapter (EFA)`,
            `Bandwidth Limits inside and outside of VPC`,
            `Network I/O credits`,
            `Summary`,
            `Exam Essentials`,
            `Network Peformance`,
        ]
    },
    {
        title: 'VPC Peering:',
        children: [
            `Introduction to VPC private connectivity Options`,
            `VPC Peering`,
            `Hands On: VPC Peering across AWS regions`,
            `VPC Peering invalid scenarios`,
            `VPC Peering`,
        ]
    },
    {
        title: 'VCP Endpoints - VCP Gateway Endpoint:',
        children: [
            `Introduction to VPC endpoints`,
            `VPC Gateway Endpoint`,
            `Hands On: VPC gateway endpoint`,
            `VPC endpoints and S3 bucket policy`,
            `Accessing VPC gateway endpoint from remote network`,
            `VPC Endpoints`,
        ]
    },
    {
        title: 'VCP interface endpoint and PrivateLink:',
        children: [
            `Introduction to VPC Interface endpoint`,
            `Hands On: Create VPC interface endpoint and access SQS`,
            `VPC Interface endpoint for Customer service (PrivateLink)`,
            `VPC PrivateLink architecture`,
            `Hands On: VPC PrivateLink`,
            `VPC interface endpoint DNS`,
            `Accessing VPC interface endpoint from remote network`,
            `VPC PrivateLink vs VPC Peering`,
            `Summary`,
            `Exam Essentials`,
            `VPC PrivateLink and Interface endpoints`,
        ]
    },
    {
        title: 'Transit Gateway:',
        children: [
            `Introduction to Transit Gateway`,
            `Transit Gateway VPC attachments and Routing`,
            `Hands On: Transit Gateway & VPCs with full routing`,
            `Hands On: Transit Gateway & VPCs with restricted routing`,
            `Transit Gateway VPC Network Patterns`,
            `Transit Gateway AZ considerations`,
            `Transit Gateway AZ affinity & Appliance mode`,
            `Transit Gateway Peering`,
            `Transit Gateway Connect Attachment`,
            `Transit Gateway & Direct Connect`,
            `Transit Gateway Multicast`,
            `TGW Architecture: Centralized outbound internet using NAT`,
            `TGW Architecture: Centralized IPS/IDS with Gateway Load Balancer`,
            `TGW Architecture: Centralized VPC interface endpoints`,
            `VPC Peering vs Transit Gateway`,
            `Transit Gateway Sharing`,
        ]
    },
    {
        title: 'Hybrid Network Basics:',
        children: [
            `Introduction to Hybrid Networking`,
            `OSI Layers refresher`,
            `How IPSec VPN works?`,
            `Static Routing vs Dynamic Routing`,
            `How BGP works?`,
            `BGP Route selection - ASPATH, LOCAL_PREF, MED`,
        ]
    },
    {
        title: 'AWS Site-to-Site VPN',
        children: [
            `Introduction to AWS Site-to-Site VPN`,
            `Hands On: Setup AWS Site-to-Site VPN`,
            `VPN NAT Traversal (NAT-T)`,
            `VPN Route Propagation (Static vs Dynamic)`,
            `VPN Transitive Routing scenarios`,
            `VPN Tunnels - Active/Passive Mode`,
            `VPN Dead Peer Detection (DPD)`,
            `VPN Monitoring`,
            `AWS Site-to-Site VPN Architectures`,
            `AWS VPN CloudHub`,
            `EC2 based VPN`,
            `EC2 based VPN - High Availability`,
            `EC2 based VPN - Horizontal Scaling`,
            `AWS Transit VPC`,
        ]
    },
    {
        title: 'AWS Client VPN:',
        children: [
            `Introduction to AWS Client VPN`,
            `Hands On: Setup the AWS Client VPN`,
            `Hands On: Accessing VPC internet gateway over the Client VPN connection`,
            `Hands On: Client VPN Split Tunnel`,
            `Hands On: Accessing VPC peering connection over a Client VPN`,
        ]
    },
    {
        title: 'Direct Connect:',
        children: [
            `Introduction to Direct Connect`,
            `Direct Connect Components`,
            `Direct Connect Requirements`,
            `Direct Connect Connection Types - Dedicated vs Hosted`,
            `Steps to create Direct Connect Connections`,
            `Walkthrough: Creating a DX Connection`,
            `Introduction to DX Virtual Interfaces (VIFs)`,
            `DX Virtual Interfaces (VIF) creation parameters`,
            `Public VIF`,
            `Private VIF`,
            `Direct Connect Gateway`,
            `Direct Connect with Transit Gateway (TGW)`,
            `DX and Transit VPC`,
            `DX Routing policies and BGP communities`,
            `Public VIF Routing policies`,
            `Public VIF routing scenarios`,
            `Public VIF BGP Communities`,
            `Private VIF routing policies and BGP communities`,
            `DX LAG (Link Aggregation Group)`,
            `DX Connection Resiliency`,
            `DX Failure detection with BFD - Bidirectional Forwarding Detection`,
            `DX Security & Encryption (VPN over DX and MACSec)`,
            `MTU and Jumbo Frames for DX`,
            `DX Billing`,
            `DX Monitoring using CloudWatch`,
            `DX Troubleshooting - Layer1-4`,
            `Summary and Exam Essentials`,
            `Direct Connect`,
        ]
    },
    {
        title: 'CloudFront:',
        children: [
            `CloudFront Overview`,
            `CloudFront Origins`,
            `Hands On: Origin Groups`,
            `CloudFront Origin Headers`,
            `CloudFront Origin Security`,
            `Hands On: Restrict an ALB to CloudFront`,
            `CloudFront and HTTPS`,
            `End-to-End Encryption in CloudFront`,
            `CloudFront Geo Restrictions`,
            `CloudFront Functions and Lambda@Edge`,
            `Hands On: CloudFront Functions`,
            `CloudFront Cleanup`,
            `AWS Global Accelerator`,
            `Hands On: AWS Global Accelerator`,
            `CloudFront`,
        ]
    },
    {
        title: 'Elastic Load Balancers:',
        children: [
            `ELB Overview`,
            `Classic Load Balancer`,
            `Application Load Balancer`,
            `Network Load Balancer`,
            `Connection Idle Timeout`,
            `Request Routing Algorithm`,
            `Sticky Sessions (Session Affinity)`,
            `Cross-Zone Load Balancing`,
            `ELB SSL/TLS`,
            `Connection Draining`,
            `X-Forwarded Headers`,
            `Hands On: ALB X-Forwarded Headers`,
            `Proxy Protocol`,
            `Hands On: NLB Proxy Protocol`,
            `gRPC & ALB`,
            `Hybrid Connectivity`,
            `Load Balancer`,
        ]
    },
    {
        title: 'Route 53:',
        children: [
            `What is a DNS ?`,
            `Route 53 Overview`,
            `Route 53 - Registering a domain`,
            `Route 53 - Creating our first records`,
            `Route 53 - EC2 Setup`,
            `Route 53 - TTL`,
            `Route 53 CNAME vs Alias`,
            `Routing Policy - Simple`,
            `Routing Policy - Weighted`,
            `Routing Policy - Latency`,
            `Route 53 - Health Checks`,
            `Route 53 - Health Checks Hands On`,
            `Routing Policy - Failover`,
            `Routing Policy - Geolocation`,
            `Routing Policy - Geoproximity`,
            `Routing Policy - Traffic Flow & Geoproximity Hands On`,
            `Routing Policy - Multi Value`,
            `3rd Party Domains & Route 53`,
            `DNS Migration in Route 53`,
            `Common Route 53 Records`,
            `Route 53 - Subdomain Zones`,
            `Route 53 - DNSSEC`,
            `Route 53 Resolvers & Hybrid DNS`,
            `Hands On: Route53 Resolvers - Part 1 - Setting up VPN`,
            `Hands On: Route53 Resolvers - Part 2 - DNS configuration`,
            `Hands On: Route53 Resolvers - Part 3 - Resolver endpoints`,
            `Route 53 Logging`,
            `Route 53 DNS Firewall`,
            `Solution Architectures for DNS`,
            `Route 53 - Cleanup`,
            `Route 53`,
        ]
    },
    {
        title: 'AWS Network Security Services:',
        children: [
            `Introduction to AWS Network Security Services`,
            `Recap - Security Groups and Network ACL`,
            `AWS Web Application Firewall (WAF)`,
            `Hands On: Cross-Site Scripting (XSS) attack simulation and prevention with WAF`,
            `Introduction to AWS Network Firewall (2021)`,
            `AWS Network Firewall - VPC and Route tables`,
            `AWS Network Firewall Components & Rule groups`,
            `Hands On: AWS Network Firewall`,
        ]
    },
    {
        title: 'Gateway Load Balancer 2021:',
        children: [
            `The legacy way of using the Network appliances`,
            `Gateway Load Balancer and Traffic flow`,
            `Hands On: Gateway Load Balancer`,
            `Summary: Gateway Load Balancer`,
            `Exam Essentails`,
        ]
    },
    {
        title: 'Final Section - Conragulations!',
        children: [
            `THANK YOU!`,
            `Bonus Lecture`,
        ]
    },

]

export default index
