import React from 'react'
import Link from 'next/link'

const TopBar = () => {
    return (
        <div className='py-2 text-white w-full  bg-themeColor'>
            <div className="flex text-xs md:text-base items-center font-semibold space-x-2 w-fit mx-auto">
                <p>40% Discount on all courses till 2nd Feb 2023- New Year Offer</p>
                <Link href='/networkers-home-contact-us' className='hover:underline'>Call Us</Link>
            </div>
        </div>
    )
}

export default TopBar