import React from 'react'
import Layout from '../../components/Layout'
import ArticlesAndCourses from '../../components/Testimonials/ArticlesAndCourses'

import Head from 'next/head'
import ContactForm from '../../components/Pages/ContactForm'
import Seo from '../../components/common/Seo'

const Index = () => {

    return (
        <Layout>
            <Seo
                title={'Contact Us | NetworkersHome'}
                desc={`Contact us for any queries about anything, we'll reach you in no time.`}
                keywords={'Contact Us, Contact networkershome, networkershome contact us'}
            />
            <Head>
                <title>Contact Us | NetworkersHome</title>
                <meta content="NETWORKERS HOME contact information " name="description" />
            </Head>
            <div className="flex container flex-col space-y-6 mt-6 lg:space-y-12">
                <div className="flex flex-col space-y-6">
                    <h1 className='text-3xl lg:text-5xl pb-2 font-bold'>Contact us</h1>
                    <p className="text-lg lg:text-xl">
                        India Training Campus: L-149, 1st,2nd,3rd Floor,Sector 6, HSR Layout, Bangalore-560102
                    </p>
    <p className="text-lg lg:text-xl">
                        Dubai Head Office: Building B, Al Saaha Offices, Souk Al Bahar Old Town Island، Burj Khalifa District - United Arab Emirates
                    </p>
                    <div className="flex">
                        <a href="tel:+919611027980" className="py-3 bg-themeDark text-white text-base lg:text-lg truncate font-semibold px-4">India: +919611027980</a>
                        <a href="tel:+971526142450" className="py-3 bg-themeColor text-white text-base lg:text-lg truncate font-semibold px-4">Dubai: +971526142450</a>
                    </div>
                </div>
                <ContactForm />
            </div>
            <ArticlesAndCourses />

        </Layout>
    )
}

export default Index
