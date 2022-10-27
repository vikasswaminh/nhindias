import React from 'react'
import Layout from '../../../components/Layout'
import Seo from '../../../components/common/Seo'


const slug = ({ slug }) => {
    return (
        <Layout>
            <Seo
                title="Blog | NetworkersHome"
            />
        </Layout>
    )
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export async function getStaticProps(context) {
    const slug = context.params.slug
    return {
        props: { slug: slug },
    }
}
export default slug