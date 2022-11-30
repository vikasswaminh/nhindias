import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import Seo from '../../../components/common/Seo'
import { blogs, categories } from '../../../components/dummyData'
import { BiChevronRight } from 'react-icons/bi'
import { BsChevronDown } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'
import { useState } from 'react'
import { reverseIt } from '../../../components/hooks'


const slug = ({ data }) => {
    return (
        <Layout>
            <Seo
                title={`${data?.seo.title} - Blog | Networkers Home`}
                desc={data?.seo.desc}
                og_img={data?.seo.og_img}
            />
            <div className="px-4 max-w-[90rem] w-full mx-auto py-4 no-scrollbar">
                <BreadCrumbs data={data} />
            </div>
            <div className="grid text-[#212121] grid-cols-1 pb-20 px-4 max-w-[90rem] w-full mx-auto lg:grid-cols-12">
                <div className="col-span-1 flex flex-col gap-6 lg:col-span-8">
                    {data?.content?.map((item, i) => (
                        <div key={i}>
                            {
                                item.type === 'h1' ?
                                    <h1 className="text-3xl  pt-2 font-bold lg:text-4xl">{item.text}</h1>

                                    :
                                    item.type === 'h2' ?
                                        <h2 className='text-2xl  pt-2 lg:text-3xl font-bold'>{item.text}</h2>
                                        :
                                        item.type === 'h3' ?
                                            <h3 className='text-xl pt-2 lg:text-2xl font-bold'>{item.text}</h3>
                                            :
                                            item.type === 'h4' ?
                                                <h4 className='text-lg pt-2 lg:text-xl font-bold'>{item.text}</h4>
                                                :
                                                item.type === 'p' ?
                                                    <p className={`text-base lg:text-lg  ${item.classes}`}>{item.text}</p>
                                                    :
                                                    item.type === 'df' ?
                                                        <p className={`text-base lg:text-lg  ${item.classes}`}><b>{item.qs}</b><span>{item.text}</span></p>
                                                        :
                                                        item.type === 'list' ?
                                                            <div className="flex flex-col pl-4 gap-3">
                                                                {item.items.map((listItem, listIdx) => (
                                                                    item.style === 'line' ?
                                                                        <li key={listIdx} className='list-none text-base font-medium italic lg:text-lg '>
                                                                            - {listItem}
                                                                        </li>
                                                                        :
                                                                        item.style === 'df' ?
                                                                            <li key={listIdx} className='text-base font-medium  italic lg:text-lg '>
                                                                                <b>{listItem.qs}</b><span>{listItem.text}</span>
                                                                            </li>
                                                                            :
                                                                            item.style === 'numbers' ?
                                                                                <li key={listIdx} className='text-base list-decimal font-medium  italic lg:text-lg '>
                                                                                    {listItem}
                                                                                </li>
                                                                                :
                                                                                <li key={listIdx} className='text-base italic font-semibold  lg:text-lg '>
                                                                                    {listItem}
                                                                                </li>
                                                                ))}
                                                            </div>
                                                            :
                                                            item.type === 'img' ?
                                                                <div className='relative bg-gray-100 z-40 rounded-md overflow-hidden w-full aspect-video'>
                                                                    <Image src={item.src} layout='fill' objectFit='cover' alt='blog_img' />
                                                                </div>
                                                                :
                                                                item.type === 'slug' ?
                                                                    <Link href={item.href}>
                                                                        <a className='underline text-themeColor font-semibold text-base'>{item.label}
                                                                        </a>
                                                                    </Link>
                                                                    :
                                                                    ''

                            }
                        </div>

                    ))}
                </div>
                <div className="col-span-4 my-4 lg:mt-0 sticky top-32 h-fit pl-0 lg:pl-4 max-w-md mx-auto">
                    <RecentBlogs />
                    <div className="flex flex-wrap bg-[#fafafa] gap-4 p-3 rounded-md border border-gray-200 shadow-sm mt-4">
                        {categories.map((cat, i) => (
                            <Link key={i} href='/blog/[category]' as={`/blog/${cat.slug}`}>
                                <a className="font-semibold py-1 px-2 border bg-white border-gray-200 rounded-sm hover:bg-gray-100 hover:text-themeColor transition-all duration-300 text-base">{cat.title}</a>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}


const BreadCrumbs = ({ data }) => {
    return (
        <div className='flex gap-2 items-center overflow-x-scroll no-scrollbar md:overflow-x-hidden w-full whitespace-nowrap'>
            <Link href={`/blog`}>
                <a className='font-semibold mb-1 hover:text-themeColor underline'>Blog</a>
            </Link>
            <div className="min-w-2">
                <BiChevronRight />
            </div>
            <Link href='/blog/[category]' as={`/blog/${data.category.slug}`}>
                <a className='font-semibold mb-1 hover:text-themeColor underline'>{data.category.title}</a>
            </Link>
            <div className="min-w-2">
                <BiChevronRight />
            </div>
            <p className='font-semibold mb-1'>{data.content[1].text}</p>
        </div>
    )
}

const RecentBlogs = () => {
    const truncate = (text, slicingInd) => {
        const sliced = text.length > slicingInd ? text.slice(0, slicingInd) + '...' : text
        return sliced
    }
    const [close, setClose] = useState(false)
    return (
        <>
            <div className="flex flex-col gap-4 p-3 bg-[#fafafa] rounded-md border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg lg:text-xl font-bold">Recent Articles</h3>
                    <button onClick={() => setClose(!close)} className="bg-gray-100 cursor-pointer focus:bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center">
                        {close ?
                            <BsChevronDown className='font-bold text-base ' />
                            :
                            <MdClose className='font-bold text-xl ' />
                        }
                    </button>
                </div>
                {!close &&
                    <div className="flex flex-col gap-3">
                        {reverseIt(blogs).slice(0, 5).map((data, i) => (
                            <Link key={i} href={`/blog/[category]/[slug]`} as={`/blog/${data.category.slug}/${data.slug}`}>
                                <a className="grid grid-cols-8 h-[6rem] bg-white group border overflow-hidden gap-4">
                                    <div className="aspect-video col-span-3 relative w-full h-full">
                                        <Image src={data.content[0].src} alt='img' layout='fill' objectFit='cover' />
                                    </div>
                                    <div className="col-span-5 flex flex-col justify-center">
                                        <h2 className="text-lg link-blog truncate group-hover:text-themeColor font-semibold">
                                            {data.content.filter(x => x.type === 'h1')[0].text}
                                        </h2>
                                        <p className="text-sm font-medium opacity-90">
                                            {truncate(data.content.filter(x => x.isDesc === true)[0].text || '', 60)}
                                        </p>
                                    </div>
                                </a>
                            </Link>
                        ))}
                    </div>
                }
            </div>
        </>
    )
}



export async function getStaticPaths() {
    let paths = []
    blogs.forEach((item) => {
        paths.push({ params: { category: item.category.slug, slug: item.slug } })
    })
    return {
        paths,
        fallback: 'blocking'
    }
}

export async function getStaticProps(context) {
    const slug = context.params.slug
    const data = blogs.filter((x) => x.slug === slug)[0] || {}
    return {
        props: { data: data },
    }
}
export default slug