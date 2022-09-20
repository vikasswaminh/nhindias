import Image from 'next/image'
import React from 'react'
import { GoLocation } from 'react-icons/go'
import { BiTime } from 'react-icons/bi'
import { AiOutlineHome, AiOutlineCalendar } from 'react-icons/ai'
import { FiUserCheck } from 'react-icons/fi'
import { FaHotjar } from 'react-icons/fa'
import Button from '../../common/Button'
import Link from 'next/link'

const JobsSection = ({ data }) => {
    return (
        <div className='flex flex-col space-y-6 container !overflow-visible'>
            {data?.map(item => (
                <JobItem item={item} key={item.imageUrl} />
            ))}
        </div>
    )
}

const JobItem = ({ item }) => {
    const { imageUrl, title, vacancyType, location, duration, jobType, experience, isHot, postedAt, text } = item
    return (
        <>
            <div className='hidden md:flex rounded-xl h-fit border shadow-lg overflow-hidden'>
                <div className="aspect-[0.7] max-w-[20rem] max-h-[100%] xl:max-h-[20rem] xl:max-w-[28rem] relative w-full">
                    <Image src={imageUrl} layout='fill' objectFit='cover' alt='img' />
                </div>
                <div className="flex my-auto p-6 flex-col space-y-4">
                    <h2 className="text-2xl text-themeColor font-bold">{title} | <span className='text-black'>{vacancyType}</span></h2>
                    <div className="flex space-x-2  text-lg items-center">
                        <div className="flex font-bold text-lg items-center space-x-2">
                            <GoLocation className='text-lg font-bold' /> <span>Location:</span>
                        </div>
                        <span>{location}</span>
                    </div>
                    <div className="flex items-center flex-wrap">
                        <div className="flex mr-6 mb-2 space-x-2  text-lg items-center">
                            <div className="flex font-bold text-lg items-center space-x-2">
                                <BiTime className='text-lg font-bold' /> <span>Full-time</span>
                            </div>
                        </div>
                        <div className="flex mr-6 mb-2 space-x-2  text-lg items-center">
                            <div className="flex font-bold text-lg items-center space-x-2">
                                <AiOutlineHome className='text-lg font-bold' /> <span>Not Remote</span>
                            </div>
                        </div>
                        <div className="flex mr-6 mb-2 space-x-2  text-lg items-center">
                            <div className="flex font-bold text-lg items-center space-x-2">
                                <FiUserCheck className='text-lg font-bold' /> <span>{experience}</span>
                            </div>
                        </div>
                        {isHot &&
                            <div className="flex mr-6 mb-2 space-x-2  text-lg items-center">
                                <div className="flex font-bold text-lg items-center space-x-2">
                                    <FaHotjar /> <span>Hot Job</span>
                                </div>
                            </div>
                        }
                        <div className="flex mr-6 mb-2 space-x-2  text-lg items-center">
                            <div className="flex font-bold text-lg items-center space-x-2">
                                <AiOutlineCalendar /> <span>{postedAt}</span>
                            </div>
                        </div>

                    </div>
                    <p className="text-xl">{text}</p>
                    <Link href='mailto:preeti@networkershome.com?subject=For%20Job@NH'>
                        <a tar className="max-w-[10rem]">
                            <Button text={'Send CV'} />
                        </a>
                    </Link>
                </div>
            </div>
            <div className="border flex flex-col mx-auto md:hidden max-w-[25rem] rounded overflow-hidden shadow-lg">
                <img alt='image' className="w-full" src={imageUrl} alt="Sunset in the mountains" />
                <div className="px-2 py-4">
                    <div className="font-bold text-xl mb-2">{title} | {vacancyType}</div>
                    <p className="text-gray-700 text-base">
                        {text}
                    </p>
                </div>
                <div className="px-3 pb-2">
                    <div className="flex items-center flex-wrap">
                        <div className="flex mr-6 mb-2 space-x-2  text-lg items-center">
                            <div className="flex font-bold text-lg items-center space-x-2">
                                <BiTime className='text-lg font-bold' /> <span>Full-time</span>
                            </div>
                        </div>
                        <div className="flex mr-6 mb-2 space-x-2  text-lg items-center">
                            <div className="flex font-bold text-lg items-center space-x-2">
                                <AiOutlineHome className='text-lg font-bold' /> <span>Not Remote</span>
                            </div>
                        </div>
                        <div className="flex mr-6 mb-2 space-x-2  text-lg items-center">
                            <div className="flex font-bold text-lg items-center space-x-2">
                                <FiUserCheck className='text-lg font-bold' /> <span>{experience}</span>
                            </div>
                        </div>
                        {
                            isHot &&
                            <div className="flex mr-6 mb-2 space-x-2  text-lg items-center">
                                <div className="flex font-bold text-lg items-center space-x-2">
                                    <FaHotjar /> <span>Hot Job</span>
                                </div>
                            </div>
                        }
                        <div className="flex mr-6 mb-2 space-x-2  text-lg items-center">
                            <div className="flex font-bold text-lg items-center space-x-2">
                                <AiOutlineCalendar /> <span>{postedAt}</span>
                            </div>
                        </div>

                    </div >
                </div >
                <Link href='mailto:preeti@networkershome.com?subject=For%20Job@NH'>
                    <a tar className="max-w-[10rem] mb-4 ml-4">
                        <Button text={'Send CV'} />
                    </a>
                </Link>
            </div >
        </>
    )
}
export default JobsSection