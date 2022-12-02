import Link from 'next/link';
import React from 'react'
import Seo from '../components/common/Seo'
import Layout from '../components/Layout';

const Privacy = () => {
    return (
        <Layout>

            <div className='flex container !max-w-[70rem] pb-20 flex-col gap-6 py-4'>
                <Seo
                    title={'Privacy Policy | Networkershome'}
                    og_img='https://www.networkershome.com/assets/images/logo.png'
                />
                <h1 className='text-2xl lg:text-3xl font-medium'>Privacy Policy </h1>
                <p className="text-base">
                    Your security and privacy are important. Networkers Home maintains the following standards to help protect your personal information as you use this website. Please read this Privacy Policy in its entirety to understand how we will collect and handle the privacy of your personal information.
                </p>
                <h2 className='text-xl lg:text-2xl font-medium'>Definitions: </h2>
                <p className="text-base">
                    {`Term's`} refers to in the content of Privacy policy. Whenever we say <b>“we”, “us”, “our”</b> and <b>“Networkers Home”</b>, it refer to <Link href='/'><a className='text-themeColor'> https://www.networkershome.com</a></Link> website. Our “Services” include providing best quality Telugu song lyrics with good readablity. And by “you”, we mean a visitor of <Link href='/'><a className='text-themeColor'> https://www.networkershome.com</a></Link>.
                </p>
                <h2 className='text-xl lg:text-2xl font-medium'>Information We Collect: </h2>
                <p className="text-base">
                    We do not collect any personal information of any user who visits to our website <Link href='/'><a className='text-themeColor'> https://www.networkershome.com</a></Link>.
                </p>
                <h2 className='text-xl lg:text-2xl font-medium'>Cookie Policy: </h2>
                <p className="text-base">
                    We never track any user view history for anaylsis or to provide user specific services based on streaming patterns. Some information which may be stored in browser as specific to user device specific settings which might be Security Cookies for security purposes.

                </p>
                <h2 className='text-xl lg:text-2xl font-medium'>Contact Us: </h2>
                <p className="text-base">
                    If you have any questions about this Privacy Policy, please contact us on our e-mail info@networkershome.com.
                </p>
            </div>
        </Layout>

    )
}

export default Privacy