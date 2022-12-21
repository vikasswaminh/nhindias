import Head from 'next/head'
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Pages/Home/Hero';
import Testimonials from '../components/Testimonials';
import Placements from '../components/Testimonials/Placements';
import CustomerReviews from '../components/Testimonials/CustomerReviews'
import PlacementRecords from '../components/Testimonials/PlacementRecords';
import CourseFeatures from '../components/Testimonials/CourseFeatures';
import ContactusTestimonial from '../components/Testimonials/ContactusTestimonial';
import TeamExperts from '../components/Testimonials/TeamExperts';
import Questions from '../components/Testimonials/Questions';
import ArticlesAndCourses from '../components/Testimonials/ArticlesAndCourses';
import { courses } from '../components/dummyData'
import Seo from '../components/common/Seo';

export default function Home() {
  return (
    <Layout>
      <Seo
        title="Best CCNA Course in Bangalore, india |CCNA Training. 100% Placement CCNA Certification course programs"
        desc="Best CCNA Course in online and classroom format . CCNA Certification information, CCNA Full form, CCNA exam cost"
        og_img='https://www.networkershome.com/assets/images/logo.png'
        keywords="Networkers Home, networkershome, CCIE, CNCP"
      />
      <div className='flex flex-col mt-12 space-y-12 lg:space-y-20'>
        <Hero />
        <Testimonials courses={courses} />
        <div className='max-w-screen space-y-10'>
          <Placements />
          <PlacementRecords />
          <CustomerReviews />
          <CourseFeatures />
          <ContactusTestimonial />
          <TeamExperts />
          <Questions />
          <ArticlesAndCourses />
        </div>
      </div>
    </Layout>
  )
}
