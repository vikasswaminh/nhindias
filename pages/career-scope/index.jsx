import Head from 'next/head'
import Layout from '../../components/Layout'
import React from 'react'
import ArticlesAndCourses from '../../components/Testimonials/ArticlesAndCourses'
import ContactusTestimonial from '../../components/Testimonials/ContactusTestimonial'
import CourseFeatures from '../../components/Testimonials/CourseFeatures'
import CustomerReviews from '../../components/Testimonials/CustomerReviews'
import PlacementRecords from '../../components/Testimonials/PlacementRecords'
import SectionOne from '../../components/Pages/career/SectionOne'

const index = () => {
    return (
        <div>
            <Layout>
                <Head>
                    <title>CCNA,CCNP and CCIE Scope | NetworkersHome</title>
                    <meta content="Best CCNP Enterprise Training Online, CCNP Encor and CCNP Enarsi with SDWAN and DNAC " name="description" />
                </Head>

                <SectionOne />
            </Layout>
        </div>
    )
}

export default index