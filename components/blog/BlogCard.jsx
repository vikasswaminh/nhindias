import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiTimeFive } from 'react-icons/bi'
import { BsArrowRight } from 'react-icons/bs'
import { FiUser } from 'react-icons/fi'

const BlogCard = ({ data }) => {
    const truncate = (text, slicingInd) => {
        const sliced = text.length > slicingInd ? text.slice(0, slicingInd) + '...' : text
        return sliced
    }
    return (
        <Link href={`/blog/[category]/[slug]`} as={`/blog/${data.category.slug}/${data.slug}`}>
            <a className='flex group flex-col h-fit max-w-[25rem]  overflow-hidden'>
                <div className="relative aspect-video rounded-md overflow-hidden  min-h-[250px] w-full">
                    <Image src={data.content[0].src} layout='fill' objectFit='cover' className='rounded-md overflow-hidden  group-hover:scale-105 transition-all duration-300' alt={'image'} />
                    <Link href={`/blog/[category]`} as={`/blog/${data.category.slug}`}>
                        <a className="absolute rounded-full text-xs font-semibold py-1.5 px-3 right-2 bottom-2 bg-white opacity-90 hover:opacity-100">
                            {data.category.title}
                        </a>
                    </Link>
                </div>
                <div className="py-4 flex flex-col gap-4">
                    {/* <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <BiTimeFive className='text-themeColor' />
                            <span className='text-base opacity-90'>{date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FiUser className='text-themeColor' />
                            <span className='text-base opacity-90'>{authorName}</span>
                        </div>

                    </div> */}
                    <h2 className="text-2xl link-blog group-hover:text-themeColor truncate font-semibold">
                        {data.content.filter(x => x.type === 'h1')[0].text}
                    </h2>
                    <p className="text-base font-medium opacity-90">
                        {truncate(data.content.filter(x => x.isDesc === true)[0].text || '', 140)}
                    </p>
                    <div className="flex gap-2 font-bold text-themeColor hover:gap-4 transition-all duration-300 items-center pt-2">
                        <span>Read Article</span>
                        <BsArrowRight />
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default BlogCard