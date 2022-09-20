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
                title="AWS Professional Training  | NetworkersHome"
                desc="Do you wish to become a professional solutions architect at the world’s top-tier cloud companies? Enroll in our AWS Professional Training course and take the first step towards a promising career!"
                keywords={'Amazon Web Services (AWS) (2), AWS Solutions Architect- Professional (3), AWS Solutions Architect – Associate (1)'}
            />

            <div className='container my-12 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                <div className="w-full col-span-1 lg:col-span-2 flex flex-col space-y-4">
                    <h1 className='text-2xl lg:text-4xl font-bold'>AWS Professional Training Course</h1>
                    <div className="flex flex-col space-y-2">
                        <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map(num => (
                                <div key={num}>
                                    <RiStarSFill key={num} className='text-yellow-500 text-4xl' />
                                </div>
                            ))}
                        </div>
                        <div className="text-xl font-semibold lg:text-2xl">
                            AWS Professional Training Course Description
                        </div>

                        <p className="text-base lg:text-lg">
                            The idea of cloud computing was initiated when analysts at Google and Amazon noticed a new paradigm in user behavior- the number of files being accessed online was relatively high than on the desktop. <span className='font-bold'>Amazon Web Services (AWS)</span> is a significant Infrastructure as a Service (IaaS) provider worldwide. One of its notable impacts is the career opportunities that have emerged for architects and engineers. This course fills the gap between traditional architecture and cloud architecture skills and helps you effectively transition to become an <span className='font-bold'>AWS Solutions Architect- Professional.</span>
                        </p>
                        <p className="text-base lg:text-lg">
                            With organizations worldwide undergoing this change, the demand for experienced and professional cloud architects has risen. As a result, the worth of an architect or engineer who can simplify the enormous transition from physical drives to the cloud is higher than ever. Employers seek individuals who can effectively establish and maintain cloud architectures and continually innovate strategies to retain their efficiency. If you are an architect or engineer with a basic knowledge of infrastructures, you can level up your architecture game with our <span className='font-bold'>AWS Professional Training </span> course!
                        </p>
                        <p className="text-base lg:text-lg">
                            This course content has been designed for you to achieve <span className='font-bold'>AWS Solutions Architect -Professional </span> Certification. The course aims to enhance your knowledge about AWS solutions and polish your architecture designing skills. By the end, you will be better at designing, optimizing, transferring, securing, and managing operations across AWS Cloud. The course content explores AWS services and tools in detail so you can design effective solutions in unusual situations. It will allow you to validate your technical and management skills and grow in the AWS environment.
                        </p>
                        <p className="text-base lg:text-lg">
                            We provide Advanced Level Certifications for Cisco Engineers. As the name suggests, our <span className='font-bold'>AWS Professional Training</span> course is ideal for those who have previously worked with AWS. Having a CCNP Certification is mandatory. It is also recommended for individuals to pass the <span className='font-bold'>AWS Solutions Architect – Associate</span> course before taking this on. Moreover, the individuals should have experience designing cloud architectures for AWS and be familiar with AWS technologies. Understanding of AWS Management Console and hybrid-cloud architecture is also required.
                        </p>
                    </div>

                </div>
                <div className="col-span-1  flex flex-col">
                    <h3 className='text-2xl lg:text-4xl font-bold mb-4'>Course Benefits</h3>
                    <div className="flex flex-col space-y-2">
                        <p className='text-base lg:text-lg'>
                            In this course, you will study advanced AWS design features and AWS cross-account access. You will also learn various connectivity and integration techniques, including directory and data management, statistics, and other AWS core features. After finishing our <span className='font-bold'>AWS Professional Training</span> course, you will have the skills required to design and implement advanced AWS architectures and execute the following:
                        </p>
                        <li className='text-base lg:text-lg'>
                            Understand the functioning of crucial <span className='font-bold'>Amazon Web Services (AWS)</span> features

                        </li>
                        <li className='text-base lg:text-lg'>
                            Determine the benefits and drawbacks of AWS tools and services and anticipate when they are required
                        </li>
                        <li className='text-base lg:text-lg'>
                            Design and suggest real-world architecture solutions
                        </li>
                        <li className='text-base lg:text-lg'>
                            Strategize to improve existing architectures
                        </li>
                        <li className='text-base lg:text-lg'>
                            Design and execute highly accessible, fault-immune AWS applications
                        </li>
                        <li className='text-base lg:text-lg'>
                            Enforce security and cost-effective protocols
                        </li>
                        <li className='text-base lg:text-lg'>
                            Carry out smooth migration of large applications on AWS Cloud
                        </li>
                        <li className='text-base lg:text-lg'>
                            Help your organization efficiently integrate AWS Cloud
                        </li>
                        <p className='text-base lg:text-lg'>
                            Our <span className='font-bold'>AWS Professional Training</span> course is designed for motivated individuals who wish to pursue a career as an <span className='font-bold'>AWS Solutions Architect- Professional</span>. We train individuals to innovate and execute methods to assist organizations in successfully integrating and preserving AWS Cloud. It is a rather promising field, and what better way to begin than by registering for our <span className='font-bold'>AWS Professional Training</span> course? {`Let's`} start when you are ready!

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
        title: 'Step Functions',
        children: [
            `SWF`,
            `SQS`,
            `Amazon MQ`,
            `Amazon SNS`,
            `Amazon SNS - SQS Fan Out Pattern`,
            `Service Communication Quiz`,
        ]
    },
    {
        title: 'Data Engineering:',
        children: [

            `Kinesis Data Streams`,
            `Kinesis Data Firehose`,
            `Kinesis Data Analytics`,
            `Streaming Architectures`,
            `AWS Batch`,
            `Amazon EMR`,
            `Running Jobs on AWS`,
            `AWS Glue`,
            `Redshift`,
            `Amazon DocumentDB`,
            `Athena & Quicksight`,
            `Big Data Architecture`,
            `Data Engineering Quiz`,
        ]
    },
    {
        title: 'Monitoring:',
        children: [
            `CloudWatch`,
            `X-Ray`,
            `Monitoring Quiz`,
        ]
    },
    {
        title: 'Deployment and Instance Management:',
        children: [
            `Elastic Beanstalk`,
            `OpsWorks`,
            `CodeDeploy`,
            `CloudFormation`,
            `Service Catalog`,
            `SAM - Serverless Application Model`,
            `AWS CDK - Cloud Development Kit`,
            `Deployment Comparisons`,
            `AWS Systems Manager - SSM`,
            `Deployment and Instance Management Quiz`,
        ]
    },
    {
        title: 'Cost Control:',
        children: [
            `Cost Allocation Tags`,
            `AWS Tag Editor`,
            `Trusted Advisor`,
            `EC2 Launch Types & Savings Plan`,
            `S3 Cost Savings`,
            `S3 Storage Classes - Reminder`,
            `AWS Budgets & Cost Explorer`,
            `Cost Control Quiz`,
        ]
    },
    {
        title: 'Migration:',
        children: [
            `Cloud Migrations - The 6R`,
            `Storage Gateway`,
            `Snow Family`,
            `Snow Family - Improving Performance`,
            `AWS DMS - Database Migration Services`,
            `AWS CART - Cloud Adoption Readiness Tool`,
            `Disaster Recovery`,
            `AWS FIS - Fault Injection Simulator`,
            `VM Migrations Services`,
            `Migration Quiz`,
        ]
    },
    {
        title: 'VPC:',
        children: [
            `VPC - Basics`,
            `VPC Peering`,
            `Transit VPC & Transit Gateway`,
            `VPC Endpoints`,
            `VPC Endpoint Policies`,
            `PrivateLink`,
            `VPN Part 1`,
            `VPN Part 2`,
            `Direct Connect`,
            `On-Premise Redundant Connections`,
            `VPC Quiz`,
        ]
    },
    {
        title: 'Other Services:',
        children: [

            `Other Services`,
            `CICD`,
            `CloudSearch`,
            `Alexa for Business, Lex & Connect`,
            `AWS Rekognition`,
            `Kinesis Video Streams`,
            `AWS WorkSpaces & Amazon AppStream 2.0`,
            `Amazon Mechanical Turk`,
            `AWS Device Farm`,
            `Amazon Macie`,
            `Amazon Transcribe`,
            `Amazon WorkDocs`,
            `Other Services Quiz`,
        ]
    },
]

export default index
