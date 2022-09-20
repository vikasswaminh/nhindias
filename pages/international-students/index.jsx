import Head from 'next/head'
import Layout from '../../components/Layout'
import React from 'react'
import { AiFillCaretRight } from 'react-icons/ai'
import Videos from '../../components/Pages/career/Videos'
import Image from 'next/image'
import Seo from '../../components/common/Seo'

const index = () => {
    return (
        <div>
            <Layout>
                <Seo
                    title="International students @HOME NETWORKERS | NetworkersHome"
                    desc="Best CCNP Enterprise Training Online, CCNP Encor and CCNP Enarsi with SDWAN and DNAC"
                />
                <div className="flex flex-col  space-y-12 pt-12">
                    <div className="grid grid-cols-1 pb-8 container lg:grid-cols-2 gap-8">
                        <div className="aspect-square max-w-[40rem] mx-auto relative w-full h-full overflow-hidden rounded-xl">
                            <Image src='/assets/images/international-first.webp' layout='fill' objectFit='cover' className='hover:scale-105 rounded-xl transition-all duration-300' alt='img' />
                        </div>
                        <div className="flex max-w-[40rem] m-auto flex-col space-y-6">
                            <h2 className="text-3xl font-bold lg:text-4xl">
                                International students
                            </h2>
                            <div className="w-20 h-1 bg-themeColor"></div>
                            <p className="text-xl">
                                All foreign nationals are required to hold a valid visa while visiting India .A short term visa on arrival is available for 3 months duration for USA and most Europe countries however for rest of the countries residents ,we suggest to contact your sponsoring institute for all documentation process.
                            </p>

                            <ul className='text-xl flex flex-col space-y-4'>
                                <li className='flex items-center space-x-4'>
                                    <IconOfThisList /> <span>Copy of visa application form (filled online)</span>
                                </li>
                                <li className='flex items-center space-x-4'>
                                    <IconOfThisList /> <span></span> Passport
                                </li>
                                <li className='flex items-center space-x-4'>
                                    <IconOfThisList /> <span>Two passport size photographs of the applicant</span>
                                </li>
                                <li className='flex items-center space-x-4'>
                                    <IconOfThisList /> <span>Registration Fee copy (From Institute)</span>
                                </li>
                                <li className='flex items-center space-x-4'>
                                    <IconOfThisList /> <span>Admission letter copy (From Institute)</span>
                                </li>
                                <li className='flex items-center space-x-4'>
                                    <IconOfThisList /> <span>School legal registration certificate/MOA</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 container lg:grid-cols-2 gap-8">
                        <div className="flex max-w-[40rem] m-auto flex-col space-y-6">
                            <h2 className="text-3xl font-bold lg:text-4xl">
                                What is the benefit of taking courses in Bangalore ?
                            </h2>
                            <p className="text-xl font-bold lg:text-2xl">
                                Many students prefer to move towards Bangalore city without giving it a second thought when they have CCIE on their mind. Following are the primary reasons for it:
                            </p>
                            <div className="text-base flex flex-col space-y-6">
                                <p>
                                    <span className='font-bold'>CCIE Exam Center Location:</span> If you are thinking about CCIE, then you ought to move towards Bangalore, as it is the only CCIE exam center location in INDIA.
                                </p>
                                <p>
                                    <span className='font-bold'>Endless Career Opportunities:</span> Bangalore brings lucrative career opportunities at your doorstep. From small-scale to large-scale IT enterprises, you name it and you have it in Bangalore. This increases the chances of fulfilling your aspirations and grabbing your dream job with CCIE in Bangalore.
                                </p>
                                <p>
                                    <span className='font-bold'>Silicon City:</span> Bangalore is the Silicon City of India. It attracts IT giants, new start-ups, automobile, health sector and many more companies to have a flourishing business. It is a land of opportunities. Increasing number of industries, give a reason to the young aspiring minds to move to Bangalore to draw the maximum advantage of the location in terms of having a great career
                                </p>

                                <p>

                                    <span className='font-bold'>Infinite Learning Opportunities:</span> Bangalore is the land that lets you live your dreams. You find endless learning opportunities at your doorstep over here. You can find numerous training institutes in Bangalore offering you the CCIE course. The choice certainly depends on you, whether you associate yourself with a brand or not.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6 gap-4 max-w-[40rem] mx-auto  w-full h-full">
                            <VideoFrame>
                                <iframe className='w-full h-full absolute' src="https://www.youtube.com/embed/Qzw4PARleGY" title="NETWORKERS HOME -CCNA CCNP CCIE Training company" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
                                ></iframe>
                            </VideoFrame>
                            <VideoFrame>
                                <iframe className='w-full h-full absolute' src="https://www.youtube.com/embed/THtrFCk-qsw" title="International Student Review NETWORKERS HOME" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </VideoFrame>
                        </div>

                    </div>
                    <Videos />
                </div>
            </Layout >
        </div >
    )
}
const IconOfThisList = () => {
    return (
        <div className='bg-themeColor overflow-hidden !mb-[-2px] h-7 w-7 flex items-center justify-center rounded-full'>
            <AiFillCaretRight className='text-white !text-sm' />
        </div>
    )
}
const VideoFrame = ({ children }) => {
    return (
        <>
            <div className="w-full relative pb-[60%]">
                {children}
            </div>
        </>
    )
}
export default index