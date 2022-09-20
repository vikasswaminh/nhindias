import React from 'react'
import Layout from '../../components/Layout'
import ContactusTestimonial from '../../components/Testimonials/ContactusTestimonial'
import ArticlesAndCourses from '../../components/Testimonials/ArticlesAndCourses'
import PlacementRecords from '../../components/Testimonials/PlacementRecords'
import CustomerReviews from '../../components/Testimonials/CustomerReviews'
import CourseFeatures from '../../components/Testimonials/CourseFeatures'
import { RiStarSFill } from 'react-icons/ri'
import Syllabus from '../../components/common/Syllabus'
import Seo from '../../components/common/Seo'

const index = () => {
    return (
        <Layout>
            <Seo
                title="AWS Security Training | NetworkersHome"
                desc="Network and security experts are in high demand, and there is no better time to upgrade your security skills than now. Our AWS Security Training course teaches the latest AWS tools and security protocols."
                keywords={'Amazon Web Services (AWS) (), AWS Security professional (1), AWS Security (1)'}
            />


            <div className='container my-12 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                <div className="w-full col-span-1 lg:col-span-2 flex flex-col space-y-4">
                    <h1 className='text-2xl lg:text-4xl font-bold'>AWS Security Training Course</h1>
                    <div className="flex flex-col space-y-2">
                        <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map(num => (
                                <div key={num}>
                                    <RiStarSFill key={num} className='text-yellow-500 text-4xl' />
                                </div>
                            ))}
                        </div>
                        <div className="text-xl font-semibold lg:text-2xl">
                            AWS Security Training Course Description
                        </div>
                        <p className="text-base lg:text-lg">
                            A global transformation is happening right now where organizations strive to embrace the latest digital advancements while leaving behind conventional methods. Meanwhile, cloud technology is rapidly growing, and neglecting it will only result in lagging progress. Where many cloud technologies have emerged, <span className='font-bold'>Amazon Web Services (AWS)</span> has become one of the largest cloud service providers for various establishments across the globe. However, like everything else, it is crucial to safeguard confidential data and information hosted on cloud servers. That is where you come in – an <span className='font-bold'>AWS Security professional!</span>
                        </p>
                        <p className="text-base lg:text-lg">
                            It is wise for companies to realize that establishing an efficient cloud or hybrid-cloud infrastructure is not the ultimate goal, but preserving it is equally significant. Maintaining the framework is impractical without implementing vital security customs. Therefore, organizations around the globe seek skilled and well-versed experts to protect their data on the cloud front and enforce necessary security protocols. As a result, heightened demand for trained AWS Security professionals has encompassed the job market. There are many opportunities to choose from, and the first step is to sign up for our <span className='font-bold'>AWS Security Training</span> course to achieve excellence as an AWS Security expert!
                        </p>
                        <p className="text-base lg:text-lg">

                            With the extensive career gateways and super-engaging content, our AWS Security Training course is for anyone who hunts for a career in this field or even wishes to learn as a side quest. At Networkers Home, {`India's`} biggest Cisco training school, we pledge to make in-demand courses accessible to students all over India while retaining the quality and abundance of the resource material. From lectures to demos, you can access all resources and polish your security skills by signing up for this course. We offer an Advanced Level Cisco Certification for engineers, and a CCNP certification is required for enrollment.
                        </p>
                        <p className="text-base lg:text-lg">

                            Our <span className='font-bold'>AWS Security Training</span> course stands on approved modules by Network {`Home's`} Security experts. The course provides a carefully designed, step-by-step outline so you can learn without speculations. With the course completion, you will be able to practice and implement methods for securing the cloud front and build a professional career in <span className='font-bold'>AWS Security</span>. Furthermore, you will also have gained an understanding of other sought-after <span className='font-bold'>AWS services</span> like Identity and Access Management.

                        </p>

                    </div>

                </div>
                <div className="col-span-1  flex flex-col">
                    <h3 className='text-2xl lg:text-4xl font-bold mb-4'>Course Benefits</h3>
                    <div className="flex flex-col space-y-2">
                        <p className='text-base lg:text-lg'>
                            The objectives that will be achieved by the end of this course are as follows:
                        </p>
                        <li className='text-base lg:text-lg'>
                            Be able to secure information on the AWS cloud
                        </li>
                        <li className='text-base lg:text-lg'>
                            Develop pivotal security skills
                        </li>
                        <li className='text-base lg:text-lg'>
                            Protect all kinds of data
                        </li>
                        <li className='text-base lg:text-lg'>
                            Acknowledge recommended security features and protocols
                        </li>
                        <li className='text-base lg:text-lg'>
                            Innovate and establish security protocols given complex circumstances
                        </li>
                        <li className='text-base lg:text-lg'>
                            Actively make use of AWS key services, including networking, storage, and database services
                        </li>
                        <li className='text-base lg:text-lg'>
                            Leverage AWS tools to monitor and tackle security threats
                        </li>
                        <li className='text-base lg:text-lg'>
                            Simplify and assist the transition to cloud
                        </li>
                        <p className='text-base lg:text-lg'>
                            Whether you want to succeed as a security architect/engineer or explore the scope of this domain, our <span className='font-bold'>AWS Security Training</span> course is here to assist. So, sign up for our <span className='font-bold'>AWS Security Training</span> course without further ado!
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
        title: 'AWS Certified Security Specialty',
        children: [
            `Overview of the Course`,
            `Our Community`,
        ]
    },
    {
        title: 'Domain 1 - Incident Response',
        children: [
            `Introduction to Domain 1`,
            `Case Study of Hacked Server`,
            `AWS Abuse Reports`,
            `AWS GuardDuty`,
            `Update - Guard Duty`,
            `Whitelisting Alerts in AWS GuardDuty`,
            `Document - GuardDuty Alert Lists`,
            `Centralized Dashboards for GuardDuty Findings`,
            `Incident Response`,
            `Incident Response Use-Cases for Exams`,
            `Use Case - Dealing with Exposed Access Keys`,
            `Use Case - Dealing with compromised EC2 Instances`,
            `Amazon Detective`,
            `Incident Response in Cloud`,
            `Penetration Testing in AWS (New)`,
        ]
    },
    {
        title: 'Domain 2 - Logging & Monitoring',
        children: [
            `Introduction to Vulnerability, Exploit, Payload`,
            `VEP Practical - Hacking inside a test farm`,
            `Understanding Automated Vulnerability Scanners`,
            `Common Vulnerabilities Exposures & CVSS`,
            `Introduction to AWS Inspector`,
            `New EC2 GUI`,
            `AWS Inspector Vulnerability Scans`,
            `AWS Security Hub`,
            `Overview of Layer 7 Firewalls`,
            `Understanding AWS WAF`,
            `Deploying AWS WAF`,
            `Overview of AWS Systems Manager`,
            `Configure SSM Agent`,
            `Overview of Sessions Manager`,
            `SSM - Run Command`,
            `Overview of Patch Manager`,
            `Parameter Store`,
            `Systems Manager Automation`,
            `Systems Manager Inventory`,
            `Creating our First Inventory in SSM`,
            `Overview of Unified CloudWatch Agent`,
            `Unified CloudWatch Agent - Practical`,
            `Document - Unified CloudWatch Agent`,
            `Amazon EventBridge`,
            `Amazon Athena`,
            `Revising AWS Config`,
            `Revising AWS Config - Practical`,
            `Trusted Advisor`,
            `Understanding CloudTrail`,
            `Creating First CloudTrail Trail`,
            `CloudTrail Event Types`,
            `CloudTrail - Log File Integrity Validation`,
            `Document - S3 Log File Validation`,
            `Digest Delivery Times`,
            `Overview of Amazon Macie`,
            `Detecting Sensitive Files with Macie`,
            `S3 Event Notification`,
            `Revising VPC Flow Logs`,
            `VPC Flow Logs In-Detail`,
            `Centralized Logging Architecture`,
            `Cross-Account Logging for CloudTrail`,
            `Document - Centralized Logging Policy`,
            `Considerations - S3 Bucket Policy for Cross Account CloudTrail`,
            `Document - Conditional S3 Bucket Policy for CloudTrail`,
            `AWS SNS`,
            `Streaming Data & Amazon Kinesis`,
            `Amazon Kinesis Service Offerings`,
        ]
    },
    {
        title: 'Domain 3 - Infrastructure Security',
        children: [
            `Bastion Hosts & SSH Agent Forwarding`,
            `Document - Commands for SSH Agent Forwarding`,
            `Introduction to Virtual Private Networks`,
            `Understanding AWS Client VPN Endpoints`,
            `Creating Client VPN Endpoints`,
            `Document - Commands to Setup ClientVPN Endpoint`,
            `Overview of AWS VPN Tunnels`,
            `VPC Peering`,
            `Overview of VPC Endpoints`,
            `Implementing Gateway VPC Endpoints`,
            `VPC Endpoint Policies`,
            `Overview of Interface VPC Endpoints`,
            `Implementing Interface Endpoints`,
            `Overview of VPC Endpoint Services`,
            `Network ACLs`,
            `NACL - Rule Ordering`,
            `Understanding Stateful vs Stateless Firewalls`,
            `IDS / IPS in AWS`,
            `EBS Architecture & Secure Data Wiping`,
            `Understanding the Content Delivery Networks`,
            `Demo - CloudFront Distribution`,
            `Understanding Edge Locations`,
            `Deploying CloudFront Distribution`,
            `Origin Access Identity`,
            `Overview of CloudFront Signed URLs`,
            `Implementing CloudFront Signed URLs`,
            `Field Level Encryption in CloudFront`,
            `Real World example on DOS Implementation`,
            `AWS Shield`,
            `Mitigating DDOS Attacks`,
            `Document - DDoS References`,
            `Introduction to Application Programming Interface (API)`,
            `Understanding the working of API`,
            `Building Lambda Function for our API`,
            `Building our first API with API Gateway`,
            `Lambda & S3`,
            `EC2 Key-Pair Troubleshooting`,
            `EC2 Tenancy Attribute`,
            `AWS Artifact`,
            `Lambda@Edge`,
            `Lambda@Edge Demo`,
            `DNS Attributes in VPC`,
            `DNS Query Logging`,
            `Implementing Route53 Query Logging`,
            `Step Function`,
            `Overview of Network Firewall`,
            `Deploying Network Firewall`,
        ]
    },
    {
        title: 'Domain 4 - Identity & Access Management',
        children: [
            `Overview of AWS Organizations`,
            `Creating our first AWS Organization & SCP`,
            `Organizational Unit (OU) in AWS organization`,
            `IAM Policy Evaluation Logic`,
            `Identity and Resource Based Policies`,
            `Understanding IAM Policies`,
            `IAM Policies - Part 02`,
            `Identity Account Architecture`,
            `Creating Cross-Account IAM Roles`,
            `Cross Account IAM Policy Document`,
            `External ID in Delegation`,
            `EC2 Instance Meta-Data`,
            `Revising IAM Role`,
            `Understanding working of an IAM role`,
            `IPTABLES & Instance Meta-Data`,
            `Document - Commands`,
            `IAM - Version Element`,
            `IAM Policy Variables`,
            `Document - IAM Policy Variable`,
            `Principal and NotPrincipal Element`,
            `Document - Resource Policy for Principal Element`,
            `Implementing NotPrincipal Element`,
            `Document - NotPrincipal S3 Bucket Policy`,
            `Conditionl Element`,
            `Document - Condition Policy Examples`,
            `AWS Security Token Service`,
            `Federation`,
            `Understanding SAML for SSO`,
            `Overview of AWS Single Sign-On`,
            `Implementing AWS SSO`,
            `Integrating AWS SSO with AWS CLI`,
            `Amazon Cognito`,
            `Understanding Active Directory`,
            `Introduction to AWS Directory Service`,
            `Domain Joining EC2 instance with Directory Service`,
            `Document - Joining Linux Instance with SimpleAD`,
            `Trusts in Active Directory`,
            `S3 Bucket Policies`,
            `Bucket Policy Document`,
            `Regaining Access to Locked S3 Bucket`,
            `Bucket Policy Document - Deny Statements`,
            `Cross Account S3 Bucket Configuration`,
            `Document - Cross Account S3 Bucket Policy.`,
            `Canned ACLs`,
            `Document - Canned ACLs Commands`,
            `Understanding Presigned URLs`,
            `S3 Versioning`,
            `S3 - Cross Region Replication`,
            `S3 Object Lock`,
            `MFA Protected API Access`,
            `Document - MFA CLI Commands`,
            `IAM Permission Boundaries`,
            `IAM and S3`,
            `Document - IAM Policies`,
            `Troubleshooting IAM Policies`,
            `Document - Troubleshooting Policies`,
            `Troubleshooting Answers - Solution 01`,
            `Troubleshooting Answers - Solution 02`,
            `Troubleshooting Answers - Solution 03`,
            `Troubleshooting Answers - Solution 04`,
            `Troubleshooting Answers - Solution 05`,
            `AWS Control Tower`,
            `IAM Service Role and Pass Role`,
            `Document Code - Pass Role Policy`,
            `Amazon WorkMail`,
        ]
    },
    {
        title: 'Domain 5 - Date Protection',
        children: [
            `Introduction to Cryptography`,
            `Understanding communication Protocols`,
            `Plain Text vs Encrypted Text Based Protocols`,
            `Understanding the Disk Level encryption schemas`,
            `AWS CloudHSM`,
            `Important Pointers - CloudHSM`,
            `AWS Key Management Service`,
            `Creating our first Customer Managed Key (CMK)`,
            `Document - CMKs References`,
            `Envelope Encryption with KMS`,
            `Schedule Key Deletion`,
            `Overview of Asymmetric Key Encryption`,
            `Asymmetric Keys with KMS`,
            `Document - Asymmetric Encryption Commands`,
            `Digital Signing with KMS`,
            `Document - Digital Signing with KMS Commands`,
            `AWS Key Management Service - Data Key Caching`,
            `AWS Key Management Service - CMK Deletion & EBS Use-Case`,
            `Reducing Risk of Unmanageable CMK`,
            `KMS - Authentication and Access Control`,
            `KMS Policy Evaluation Logic - Use Case Solution - 01`,
            `Document - KMS Use Case 01`,
            `KMS Policy Evaluation Logic - Use Case Solution - 01`,
            `KMS Policy Evaluation Logic - Use Case 02`,
            `Document - KMS Use Case 02`,
            `KMS Policy Evaluation Logic - Use Case Solution - 02`,
            `KMS Policy Evaluation Logic - Use Case - 03`,
            `Document - KMS Use Case 03`,
            `KMS Policy Evaluation Logic - Use Case Solution - 03 (New)`,
            `KMS Grants`,
            `Document - KMS Grants Commands`,
            `Importing Key Material to KMS`,
            `Document - Imported Key Material Commands`,
            `KMS ViaService`,
            `Document - KMS ViaService Policy`,
            `Migrating Encrypted KMS Data Across Regions`,
            `Multi-Region KMS`,
            `Benefits of CloudHSM over KMS`,
            `S3 Encryption`,
            `Load Balancing in AWS`,
            `OSI Model & AWS ELB`,
            `Classic Load Balancers`,
            `Overview of Application Load Balancers`,
            `Listener and Target Groups`,
            `ALB Practicals`,
            `Network Load Balancers`,
            `ELB Access Logs`,
            `Understanding HTTPS Connections`,
            `Overview of AWS Certificate Manager`,
            `Issuing Certificates with ACM`,
            `Glacier Vault and Vault Lock`,
            `DynamoDB Encryption`,
            `Overview of AWS Secrets Manager`,
            `RDS Integration with AWS Secrets Manager`,
            `Encryption Context in KMS`,
            `Document - Encrypted Context Commands`,
            `DNS Cache Poisoning Attack`,
            `Document - External Link`,
            `Overview of DNSSEC`,
            `PCAP Files - DNS and DNSSEC`,
            `Configuring DNSSEC in Route53`,
        ]
    },
]

export default index
