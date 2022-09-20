import Head from 'next/head'
import Layout from '../../components/Layout'
import React from 'react'
import SectionOne from '../../components/Pages/career/SectionOne'
import Videos from '../../components/Pages/career/Videos'
import Seo from '../../components/common/Seo'

const index = () => {
    return (
        <div>
            <Layout>
                <Seo
                    title="CCIE Course details,Course fee and CCIE Scope. CCIE Enterprise and CCIE Security scope"
                    desc="The CCIE is one of the most difficult certifications to obtain, and as such, holders of the credential are highly sought-after by employers."
                />


                <div className="flex flex-col space-y-12 pt-12">
                    <SectionOne />
                    <Videos />
                </div>
            </Layout>
        </div>
    )
}

export default index
