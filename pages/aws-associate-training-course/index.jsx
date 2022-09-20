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
                title="AWS Associate Training Course | NetworkersHome"
                desc="Become an AWS Solutions Architect by taking our AWS Associate Training course and taking your architecture skills to another level! Enroll now!"
                keywords={'Amazon Web Services (4), AWS Solutions Architects (2), AWS Associate (4), AWS Solutions Architect-Associate Exam (1)'}
            />
            <div className='container my-12 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                <div className="w-full col-span-1 lg:col-span-2 flex flex-col space-y-4">
                    <h1 className='text-2xl lg:text-4xl font-bold'>AWS Associate Training Course</h1>
                    <div className="flex flex-col space-y-2">
                        <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map(num => (
                                <div key={num}>
                                    <RiStarSFill key={num} className='text-yellow-500 text-4xl' />
                                </div>
                            ))}
                        </div>
                        <div className="text-xl font-semibold lg:text-2xl">
                            AWS Associate Training Course Description
                        </div>
                        <p className="text-base lg:text-lg">
                            Cloud Technology has taken the world by surprise, primarily due to its unimaginable access and convenience. Amazon Web Services (AWS) is a renowned and extensively used Cloud-service provider that has equipped organizations with cloud infrastructures and assisted them in transitioning into the tech-saturated world smoothly. With its ever-expanding workforce, Amazon Web Services is responsible for creating tremendous career opportunities for architects, engineers, and administrators. Therefore, AWS Solutions Architects, including AWS Associate, retain one of the highly regarded positions in the tech industry.
                        </p>
                        <p className="text-base lg:text-lg">

                            The hike in demand for AWS Associates can be accredited to the whopping tech evolution that has entirely altered the driving methods of organizations around the globe. Cloud and hybrid-cloud services have rapidly become one of the most sought-after technologies. The transition for progressive organizations is a great deal and way harder than it sounds. Various organizations are expanding their work personnel to smoothly and effectively embrace technological upgrades. As a consequence, AWS Associates are highly in-demand, and there is no better time to tap your architectural and administrative skills than now. Our AWS Associate Training Course is here to serve and assist you in becoming a proficient AWS Associate!
                        </p>
                        <p className="text-base lg:text-lg">

                            Our course module is mapped out under the supervision of our experienced and qualified AWS experts. It is intended for those individuals who wish to pursue a career as an AWS Solutions Architect. Our team at Networkers Home strives to provide quality resource material and certifications to students based in any part of the world, making Networkers Home the biggest Cisco training school in India. This course will substantiate your ability to develop effective architectures and establish secure applications using AWS tools and technologies. Therefore, by the course’s end, you will have mastered the key to becoming a skilled AWS Associate!
                        </p>

                        <p className="text-base lg:text-lg">
                            With a detailed insight into the workings of essential AWS services, this course will help you pass the AWS Solutions Architect-Associate Exam. The lectures and demos are put together to deliver the content most effectively. The aim is to develop a good understanding of the tools and services offered by AWS and familiarize students with their practical use. Other aspects like interactive and captivating content will assist you in absorbing the concepts faster!
                        </p>
                        <p className="text-base lg:text-lg">
                            We offer Advanced Level Certifications for highly qualified Cisco Engineers, including AWS Associate Training. A CCNP Certification is required for enrollment in this course. Plus, it is highly recommended to have an initial concept of Cloud Computing and its features. The course contains in-depth insight into AWS key components like cloud formation. Furthermore, this course will highlight the techniques for keeping data leakages to an absolute minimum.
                        </p>

                    </div>

                </div>
                <div className="col-span-1  flex flex-col">
                    <h3 className='text-2xl lg:text-4xl font-bold mb-4'>Course Benefits</h3>
                    <div className="flex flex-col space-y-2">
                        <p className='text-base lg:text-lg'>
                            With an in-depth insight into the AWS Associate world, our AWS Associate Training course aims to attain the following with the completion of the course:

                        </p>
                        <li className='text-base lg:text-lg'>
                            Apprehend chief Amazon Web Services (AWS) applications and services
                        </li>
                        <li className='text-base lg:text-lg'>
                            Supervise AWS Architectures, including Resilient and Performant Architectures
                        </li>
                        <li className='text-base lg:text-lg'>
                            Determine the necessary security protocols and implement them
                        </li>
                        <li className='text-base lg:text-lg'>
                            Design operational and cost-effective architectures
                        </li>
                        <li className='text-base lg:text-lg'>
                            Learn to integrate AWS tools and services to establish efficient applications
                        </li>
                        <li className='text-base lg:text-lg'>
                            Understand the professional environment which confines the AWS workplace
                        </li>
                        <li className='text-base lg:text-lg'>
                            Establish error-solving protocols while building applications
                        </li>
                        <p className='text-base lg:text-lg'>
                            After fulfilling these objectives, you will be ready to enter the professional world as an AWS Associate. The course will help you gain extensive knowledge and refine your skills to advance on the journey to becoming an accomplished AWS Associate. Book our AWS Associate Training course and explore the ever-growing world of Amazon Web Services!
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
        title: 'AWS Certified Solutions Architect Associate',
        children: [
            `Introduction - AWS Certified Solutions Architect Associate`,
            `Course Introduction`,
            `Creating an AWS Account`,
            `AWS Account Activation Troubleshooting`,
            `Important Message`,
            `About your instructor`,
        ]
    },
    {
        title: 'Code & Slides Download:',
        children: [
            'Slides and Code Download'
        ]
    },
    {
        title: 'Getting Started with AWS:',
        children: [
            `AWS Cloud Overview - Regions & AZ`,
            `Tour of the AWS Console & Services in AWS`,
            `About the UI changes in the course`,
        ]
    },
    {
        title: 'IAM & AWS CLI:',
        children: [
            `IAM Introduction: Users, Group, Policies`,
            `IAM Users, Group, Policies`,
            `IAM Policies`,
            `IAM Policies Hands On`,
            `IAM MFA Hands On`,
            `AWS Access Keys, CLI and SDK`,
            `AWS CLI Setup on Window`,
            `AWS CLI Setup on Mac OS X`,
            `AWS CLI Setup on Linux`,
            `AWS CLI Hands On`,
            `AWS CloudShell: Region Availability`,
            `AWS CloudShell`,
            `IAM Roles for AWS Services`,
            `IAM Roles Hands On`,
            `IAM Security Tools Hands On`,
            `IAM Best Practices`,
            `IAM Summary`,
            `IAM & AWS CLI Quiz`,
        ]
    },
    {
        title: 'EC2 Fundamentals:',
        children: [
            `AWS Budget Setup`,
            `EC2 Basics`,
            `Creat an EC2 Instance with EC2 User Data to have a Website Hands On`,
            `EC2 Instance Types Basics`,
            `Security Groups & Classic Ports Overview`,
            `Security Groups Hands On`,
            `SSH Overview`,
            `How to SSH Using Linux or Mac`,
            `How to SSH using Windows`,
            `How SSH using Windows 10`,
            `SSH Troubleshooting`,
            `EC2 Instance Connect`,
            `EC2 Instance Roles Demo`,
            `EC2 Instance Purchasing Options`,
            `Spot Instances & Spot Fleet`,
            `EC2 Instances Launch Types Hands On`,
            `EC2 Fundamentals Quiz`,
        ]
    },
    {
        title: 'EC2 - Solutions Architech Associate Level:',
        children: [
            `Private vs Public vs Elastic IP`,
            `Private vs Public vs Elastic IP Hands On`,
            `EC2 Placement Groups`,
            `EC2 Placement Groups - Hands On`,
            `Elastic Network Interfaces (ENI) - Overview`,
            `Elastic Network Interfaces (ENI) - Hands On`,
            `ENI - Extra Reading`,
            `EC2 Hibernate`,
            `EC2 Hibernate - Hands On`,
            `EC2 - Advanced Concepts (Nitro, vCPU, Capacity Reservations)`,
            `EC2 SAA Level Quiz`,
        ]
    },
    {
        title: 'EC2 Instance Storage:',
        children: [

            `EBS Overview`,
            `EBS Hands On`,
            `EBS Snapshots`,
            `EBS Snapshots - Hands On`,
            `AMI Overview`,
            `AMI Hands On`,
            `EC2 Instance Store`,
            `EBS Volume Types`,
            `EBS Multi-Attach`,
            `EBS Encryption`,
            `Amazon EFS`,
            `Amazon EFS - Hands On`,
            `EFS vs EBS`,
            `EBS & EFS - Section Cleanup`,
            `EC2 Data Management Quiz`,
        ]
    },
    {
        title: 'High Availability and Scalability: ELB & ASG:',
        children: [
            `High Availability and Scalability`,
            `Elastic Load Balancing. (ELB) Overview`,
            `Classic Load Balancer (CLB)`,
            `Classic Load Balancer (CLB) - Hands On`,
            `Application Load Balancer (ALB)`,
            `Application Load Balancer (ALB) - Hands On`,
            `Network Load Balancer (NLB)`,
            `Network Load Balancer (NLB) - Hands On`,
            `Gateway Load Balancer (GWLB)`,
            `Elastic Load Balancer - Sticky Sessions`,
            `Elastic Load Balancer - Cross Zone Load Balancing`,
            `Elastic Load Balancer - SSL Certificates`,
            `Elastic Load Balancer - Connection Draining`,
            `Auto Scaling Groups (ASG) Overview`,
            `Auto Scaling Goups Hands On`,
            `Auto Scaling Groups - Scaling Policies`,
            `Auto Scaling Groups - Scaling Policies Hands On`,
            `Auto Scaling Groups - for Solutions Architects`,
            `High Availability & Scalability Quiz`,
        ]
    },
    {
        title: 'AWS Fundamentals: RDS + Aurora + ElastiCache:',
        children: [
            `Amazon RDS Overview`,
            `RDS Read Replicas vs Multi AZ`,
            `Amazon RDS Hands On`,
            `RDS Encryption + Security`,
            `Amazon Aurora`,
            `Amazon Aurora - Hands On`,
            `Amazon Aurora - Advanced Concepts`,
            `ElastiCache Overview`,
            `ElastiCache Hands On`,
            `ElastiCache for Solution Architects`,
            `List of Ports to be familiar with`,
            `RDS, Aurora, & ElastiCache Quiz`,

        ]
    },
    {
        title: 'Rout 53 :',
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
            `Route 53 - Section Cleanup`,
            `Route 53 Quiz`,
        ]
    },
    {
        title: 'Classic Solutions Architecture Discussions:',
        children: [
            `Solutions Architecture Discussions Overview`,
            `WhatsTheTime.com`,
            `MyClothes.com`,
            `MyWordPress.com`,
            `Instantiating applications quickly`,
            `Beanstalk Overview`,
            `Beanstalk Hands On`,
            `Classic Solutions Architecture Discussions Quiz`,

        ]
    },
    {
        title: 'Amazon S3 Introduction:',
        children: [
            `Amazon S3 - Section Introduction`,
            `S3 Buckets and Objects`,
            `S3 Buckets and Objects - Hands On`,
            `S3 Versioning`,
            `S3 Versioning - Hands On`,
            `S3 Encryption`,
            `S3 Encryption - Hands On`,
            `S3 Security & Bucket Policies`,
            `S3 Bucket Policies Hands On`,
            `S3 Websites`,
            `S3 CORS`,
            `S3 CORS Hands On`,
            `S3 Consistency Model`,
            `Amazon S3 Quiz`,
        ]
    },
    {
        title: 'AWS SDK, IAM Roles & Policies:',
        children: [
            `IAM Roles and Policies Hands On`,
            `AWS Policy Simulator`,
            `AWS EC2 Instance Metadata`,
            `AWS SDK Overview`,
            `AWS IAM, CLI, & SDK Quiz`,
        ]
    },
    {
        title: 'Advanced Amazon S3 & Athena:',
        children: [
            `S3 MFA Delete`,
            `S3 MFA Delete Hands On`,
            `S3 Default Encryption`,
            `S3 Access Logs`,
            `S3 Access Logs - Hands On`,
            `S3 Replication(Cross Region and Same Region)`,
            `S3 Replication - Hands On`,
            `S3 Pre - signed URLs`,
            `S3 Pre - signed URLs - Hands On`,
            `S3 Storage Classes + Glacier`,
            `S3 Storage Classes + Glacier - Hands On`,
            `S3 Lifecycle Rules`,
            `S3 Lifecycle Rules - Hands On`,
            `S3 Analytics`,
            `S3 Performance`,
            `S3 Select & Glacier Select`,
            `S3 Event Notifications`,
            `S3 Event Notifications - Hands On`,
            `S3 Requester Pays`,
            `Athena Overview`,
            `Athena Hands On`,
            `S3 Lock Policies & Glacier Vault Lock`,
            `Amazon S3 Advanced & Athena Quiz`,
        ]
    },
    {
        title: 'CloudFront & AWS Global Accelerator: ',
        children: [
            `CloudFront Overview`,
            `CloudFront with S3 - Hands On`,
            `CloudFront Signed URL / Cookies`,
            `CloudFront Advanced Concepts`,
            `AWS Global Accelerator - Overview`,
            `AWS Global Accelerator - Hands On`,
            `CloudFront & AWS Global Accelerator Quiz`,
        ]
    },
    {
        title: 'AWS Storage Extras:',
        children: [
            `AWS Snow Family Overview`,
            `AWS Snow Family Hands On`,
            `Architecture: Snowball into Glacier`,
            `Amazon FSx`,
            `Amazon FSx - Hands On`,
            `Storage Gateway Overview`,
            `Amazon FSx File Gateway`,
            `Storage Gateway Hands On`,
            `AWS Transfer Family`,
            `All AWS Storage Options Compared`,
            `AWS Storage Extras Quiz`,
        ]
    },
    {
        title: 'Decoupling applications: SQS, SNS, Kinesis, Active MQ:',
        children: [
            `Introduction to Messaging`,
            `Amazon SQS - Standard Queues Overview`,
            `SQS - Standard Queue Hands On`,
            `SQS - Queue Access Policy`,
            `SQS - Message Visibility Timeout`,
            `SQS - Dead Letter Queues`,
            `SQS - Delay Queues`,
            `SQS - Long Polling`,
            `SQS - Request Response`,
            `SQS - FIFO Queues`,
            `SQS + Auto Scaling Group`,
            `Amazon Simple Notification Service (AWS SNS)`,
            `SNS and SQS - Fan Out Pattern`,
            `SNS - Hands On`,
            `Amazon Kinesis`,
            `Amazon Kinesis - Hands On`,
            `Data Ordering for Kinesis vs SQS FIFO`,
            `SQS vs SNS vs Kinesis`,
            `Amazon MQ`,
            `Messaging & Integration Quiz`,
        ]
    },
    {
        title: 'Containers on AWS: ECS, Fargate, ECR & EKS:',
        children: [
            `Docker Introduction`,
            `Amazon ECS`,
            `Creating ECS Cluster - Hands On`,
            `Creating ECS Service - Hands On`,
            `Amazon ECS - Auto Scaling`,
            `Amazon ECS - Rolling Updates`,
            `Amazon ECS - Solutions Architectures`,
            `Amazon ECR`,
            `EKS Overview`,
            `Containers on AWS Quiz`,
        ]
    },
    {
        title: 'Serverless Overviews from a Solution Architect Perspective',
        children: [
            `About the Serverless Section`,
            `Serverless Introduction`,
            `Lambda Overview`,
            `Lambda Hands-On`,
            `Lambda Limits`,
            `Lambda@Edge`,
            `Amazon DynamoDB`,
            `Amazon DynamoDB - Hands-On`,
            `Amazon DynamoDB - Advanced Features`,
            `API Gateway Overview`,
            `API Gateway Basics Hands-On`,
            `API Gateway Security`,
            `AWS Cognito Overview`,
            `Serverless Application Model (SAM) Overview`,
            `Serverless Overview Quiz`,
        ]
    },
    {
        title: 'Serverless Solution Architecture Discussions:',
        children: [

            `Mobile Application: MyTodoList`,
            `Serverless Website: MyBlog.com`,
            `MicroServices Architecture`,
            `Distributing Paid Content`,
            `Software updates distribution`,
            `Big Data Ingestion Pipeline`,
            `Serverless Solutions Architecture Discussions Quiz`,
        ]
    },
    {
        title: 'Database in AWS',
        children: [
            `Choosing the right database`,
            `RDS`,
            `Aurora`,
            `ElastiCache`,
            `DynamoDB`,
            `S3`,
            `Athena`,
            `Redshift`,
            `Glue`,
            `Neptune`,
            `OpenSearch (ex: ElasticSearch)`,
            `Databases in AWS Quiz`,
        ]
    },
    {
        title: 'AWS Monitoring & Audit: CloudWatch, CloudTrail & Config:',
        children: [
            `AWS Monitoring - Section Introduction`,
            `CloudWatch Metrics`,
            `CloudWatch Custom Metrics`,
            `CloudWatch Dashboards`,
            `CloudWatch Logs`,
            `CloudWatch Logs Hands On`,
            `CloudWatch Agent & CloudWatch Logs Agent`,
            `CloudWatch Alarms`,
            `CloudWatch Alarms Hands On`,
            `EventBridge Overview (formerly CloudWatch Events)`,
            `Amazon EventBridge - Hands On`,
            `CloudTrail Overview`,
            `CloudTrail Hands On`,
            `AWS Config - Overview`,
            `AWS Config - Hands On`,
            `CloudTrail vs CloudWatch vs Config`,
            `Monitoring & Auditing Quiz`,
        ]
    },
    {
        title: 'Identity and Access Management (IAM) - Advanced:',
        children: [
            `Security Token Service (STS) Overview`,
            `Identity Federation & Cognito`,
            `Directory Services - Overview`,
            `Organizations - Overview`,
            `Organizations - Hands On`,
            `IAM - Advanced`,
            `IAM - Policy Evaluation Logic`,
            `Resource Access Manager (RAM)`,
            `AWS IAM Identity Center (successor to AWS Single Sign-On)`,
            `AWS Single Sign On (SSO) - Overview`,
            `IAM Advanced Quiz`,
        ]
    },
    {
        title: 'AWS Security & Encryption: KMS, SSM Parameter Store, CloudHSM, Shield, WAF:',
        children: [
            `AWS Security - Section Introduction`,
            `Encryption 101`,
            `KMS Overview`,
            `KMS Hands On w/ CLI`,
            `KMS Key Rotation`,
            `SSM Parameter Store Overview`,
            `SSM Parameter Store Hands On (CLI)`,
            `SSM Parameter Store Hands On (AWS Lambda)`,
            `AWS Secrets Manager - Overview`,
            `AWS Secrets Manager - Hands On`,
            `CloudHSM`,
            `Shield - DDoS Protection`,
            `Web Application Firewall (WAF)`,
            `WAF & Shield - Hands On`,
            `Amazon GuardDuty`,
            `Amazon Inspector`,
            `Macie`,
            `Shared Responsibility Model`,
            `AWS Security & Encryption Quiz`,
        ]
    },
    {
        title: 'Networking - VPC:',
        children: [
            `Section Introduction`,
            `CIDR, Private vs Public IP`,
            `Default VPC Overview`,
            `VPC Overview`,
            `VPC Hands On`,
            `Subnet Overview`,
            `Subnet Hands On`,
            `Internet Gateways & Route Tables`,
            `Internet Gateways & Route Tables Hands On`,
            `Bastion Hosts`,
            `Bastion Hosts Hands On`,
            `NAT Instances`,
            `NAT Instances Hands On`,
            `NAT Gateways`,
            `NAT Gateways Hands On`,
            `DNS Resolution Options & Route 53 Private Zones`,
            `DNS Resolution Options & Route 53 Private Zones Hands On`,
            `NACL & Security Groups`,
            `NACL & Security Groups Hands On`,
            `VPC Reachability Analyzer`,
            `VPC Reachability Analyzer Hands On`,
            `VPC Peering`,
            `VPC Peering Hands On`,
            `VPC Endpoints`,
            `VPC Endpoints Hands On`,
            `VPC Flow Logs`,
            `VPC Flow Logs Hands On + Athena`,
            `Site to Site VPN, Virtual Private Gateway & Customer Gateway`,
            `Site to Site VPN, Virtual Private Gateway & Customer Gateway Hands On`,
            `Direct Connect & Direct Connect Gateway`,
            `AWS PrivateLink - VPC Endpoint Services`,
            `AWS PrivateLink - VPC Endpoint Services Hands On`,
            `AWS ClassicLink`,
            `Transit Gateway`,
            `VPC Traffic Mirroring`,
            `IPv6 for VPC`,
            `IPv6 for VPC - Hands On`,
            `Egress Only Internet Gateway`,
            `Egress Only Internet Gateway Hands On`,
            `Section Cleanup`,
            `VPC Section Summary`,
            `VPC Quiz`,
            `Networking Costs in AWS`,
        ]
    },
    {
        title: 'Disaster Recovery & Migrations:',
        children: [
            `Disaster Recovery in AWS`,
            `Database Migration Service (DMS)`,
            `Database Migration Service (DMS) - Hands On`,
            `On-Premises Strategies with AWS`,
            `DataSync - Overview`,
            `Transferring Large Datasets into AWS`,
            `AWS Backup`,
            `AWS Backup - Hands On`,
            `Disaster Recovery & Migration Quiz`,
        ]
    },
    {
        title: 'Machine Learning:',
        children: [
            `Rekognition Overview`,
            `Transcribe Overview`,
            `Polly Overview`,
            `Translate Overview`,
            `Lex + Connect Overview`,
            `Comprehend Overview`,
            `SageMaker Overview`,
            `Forecast Overview`,
            `Kendra Overview`,
            `Personalize Overview`,
            `Textract Overview`,
            `Machine Learning Summary`,
            `Machine Learning Quiz`,
        ]
    },
    {
        title: 'More Solution Architectures:',
        children: [
            `Event Processing in AWS`,
            `Caching Strategies in AWS`,
            `Blocking an IP Address in AWS`,
            `High Performance Computing (HPC) on AWS`,
            `EC2 Instance High Availability`,
            `Bastion Host High Availability`,
            `More Solution Architectures Quiz`,
        ]
    },
    {
        title: 'Other Services:',
        children: [
            `Other Services Section Introduction`,
            `CICD Introduction`,
            `CloudFormation Intro`,
            `CloudFormation Hands-On`,
            `CloudFormation - Extras`,
            `Step Functions & SWF`,
            `EMR`,
            `OpsWorks`,
            `AWS Workspaces`,
            `AppSync`,
            `Cost Explorer`,
            `Other Services: Cheat Sheet`,
            `Other Services Quiz`,
        ]
    },
    {
        title: 'WhitePaper and Architectures - AWS Certified Solutions Architect Associate:',
        children: [
            `WhitePaper Section Introduction`,
            `AWS Well-Architected Framework & Well-Architected Tool`,
            `AWS Trusted Advisor Overview + Hands-On`,
            `Examples of Architecture - AWS Certified Solutions Architect Associate`,
            `WhitePapers & Architectures Quiz`,
        ]
    },
    {
        title: 'Preparation for Exam + Practice Exam - AWS Certified Solutions Architect Associate:',
        children: [
            `Exam Preparation - Section Introduction`,
            `State of Learning Checkpoint - AWS Certified Solutions Architect Associate`,
            `Exam Tips - AWS Certified Solutions Architect Associate`,
            `Links to Whitepapers`,
            `Exam Walkthrough and Signup`,
            `Practice Exam - AWS Certified Solutions Architect Associate`,
        ]
    },
    {
        title: 'Congratulations - AWS Certified Solutions Architect Associate',
        children: [
            `THANK YOU!`
        ]
    },



]

export default index
