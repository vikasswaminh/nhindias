import Link from 'next/link'
import React from 'react'
import BlogCard from '../../components/blog/BlogCard'
import Seo from '../../components/common/Seo'
import { blogs, categories } from '../../components/dummyData'
import Layout from '../../components/Layout'

const index = () => {
    return (
        <Layout>
            <Seo
                title="Blog | NetworkersHome"
            />
            <div className="w-full -mt-12 flex items-center justify-center relative min-h-[20rem] h-[40vh]">
                <div className="absolute w-full h-full inset-0" style={{ background: 'linear-gradient(to right, rgba(0,72,239,0.99), rgba(0,72,239,0.7))' }}></div>
                <div className="flex flex-col space-y-8  z-20 items-center">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl uppercase font-bold text-white">The BLOG</h2>
                    <div className="flex items-center justify-center flex-wrap gap-4 text-white uppercase">
                        {categories.slice(0, 4).map((cat, i) => (
                            <Link key={i} href={`/blog/category/[category]`} as={`/blog/${cat.slug}`}>
                                <a className="font-semibold py-1 px-2 border border-white rounded-sm hover:bg-white hover:text-themeColor transition-all duration-300 text-base">{cat.title}</a></Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex container -mt-10 z-20 justify-center">
                <div className="min-h-screen w-fit grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {blogs.map((data, i) => (
                        <BlogCard key={i} data={data} />
                    ))}
                </div>

            </div>
        </Layout>

    )
}

export default index