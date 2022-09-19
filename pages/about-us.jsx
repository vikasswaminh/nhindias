import React from 'react'
import Layout from '../components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import TeamExperts from '../components/Testimonials/TeamExperts'
import { socialData } from '../components/dummyData'
import CourseFeatures from '../components/Testimonials/CourseFeatures'
import Seo from '../components/common/Seo'

const index = () => {
    return (
        <Layout>
            <Seo
                title={'About Networkershome | About Us'}
                desc={`All about Networkershome and its story.`}
                og_img='https://www.networkershome.com/_next/image?url=%2Fassets%2Fimages%2Fabout-2.webp&w=1920&q=75'
                keywords="Networkers Home about us, about networkershome, about ccie, networkershome story"
            />
            <div className="container pt-4 pb-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="grid grid-cols-2 gap-6">
                    {['about-1.webp', 'about-2.webp', 'about-3.webp', 'about-4.webp'].map(img => (
                        <div key={img} className='w-full h-full aspect-square overflow-hidden rounded-xl relative'>
                            <Image layout='fill' src={'/assets/images/' + img} objectFit='cover' className='rounded-xl transition-all duration-300 hover:scale-105 ' alt='img' />
                        </div>
                    ))}
                </div>
                <div className="h-full flex items-center">
                    <div className="flex flex-col space-y-4">
                        <h2 className='text-3xl font-bold lg:text-4xl'>About The Company</h2>
                        <div className="h-1 w-20 bg-themeColor"></div>
                        <p className="text-xl">
                            Welcome to Networkers Home that ever since its inception has helped its students to follow a concrete training roadmap and turn their dreams into a reality by making them industry-fit and job-ready. Our
                            well-knit technical program pedagogy laying emphasis on practical training, for expert-level courses in
                            diverse fields of networking, cyber security, network security and cloud computing are capable of
                            transforming you as seasoned technology experts and best fit the industry requirements.
                        </p>
                        <h2 className='text-xl pt-6 font-bold lg:text-2xl'>Follow Us:</h2>
                        <div className="flex items-center space-x-3">
                            {socialData.map((data, i) => (
                                <Link href={data.link} key={i}>
                                    <a target={'_blank'} rel='noreferrer' key={i} className='p-3 first-letter: hover:shadow-sm hover:scale-105 transition-all duration-300 cursor-pointer text-white bg-themeColor rounded-full '>
                                        {data.icon}
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <TeamExperts />
            <CourseFeatures noBG={true} />
        </Layout>
    )
}

export default index