import Head from 'next/head'
import React from 'react'
import { useEffect, useState } from 'react'

const Seo = ({ title, desc, og_desc, og_title, og_img, keywords, }) => {
    const [currentUrl, setCurrentUrl] = useState('https://networkershome.com')
    useEffect(() => {
        if (typeof window != 'undefined') {
            setCurrentUrl(window.location.href)
        }
    }, [])
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={desc} />
            <link rel="icon" href="/favicon.ico" />
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <meta property={"og:locale"} content={"en_US"} />
            <meta property={"og:type"} content={"website"} />
            <meta property={"og:title"}
                content={og_title || title} />
            <meta name="twitter:site" content={currentUrl || "https://www.networkershome.come"} />
            <meta property={"og:image"} content={og_img || 'https://www.networkershome.com/assets/images/people5.jpeg'} />
            <meta property={"og:site_name"} content={"Networkers Home"} />
            <meta property={"og:url"} content={currentUrl || "https://www.networkershome.come"} />
            <meta property={"twitter:card"} content={"summary"} />
            <meta name="twitter:title" content="Best CCIE, Cyber security and Cloud Training online and classroom. Learn CCNA,CCNP, CEH and AWS from experts" />
            <meta property={"og:description"}
                content={og_desc || desc} />
            <meta name="twitter:description" content="CCIE, Cloud and Cyber security training online with 100% placement guarantee. CCNA,CCNP,CEH,AWS and CCIE Training" />
            <meta name="twitter:creator" content="@Networkershome5" />
            <meta name="keywords"
                content={keywords || 'Networkershome, Best Networking Courses, Best Network Training, CCIE, CNCP, Network Engineer'} />
        </Head>
    )
}

export default Seo