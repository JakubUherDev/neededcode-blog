import Head from 'next/head'

import PostCard from '../components/PostCard'
import PostWidget from '../components/PostWidget'
import CategoriesWidget from '../components/CategoriesWidget'
import Footer from '../components/Footer'
import FeaturedPosts from '../sections/FeaturedPosts'

import { getPosts } from '../services'



export default function Home({ posts } ) {
  return (
    <div className="container mx-auto px-10 mb-8">
        <Head>
            <title>NeededCode</title>
            <link rel="icon" href="/rocket.ico" />
        </Head>
        <FeaturedPosts/>
        {/* Here we will loop through our posts */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            <div className="lg:col-span-8 col-span-1">
                {posts.map( (post, index) => (
                    <PostCard post={post.node} key={index}/>
                ))}
            </div>
            <div className="lg:col-span-4 col-span-1">
                <div className="lg:sticky relative top-8">
                    <PostWidget/>
                    <CategoriesWidget/>
                </div>
            </div>
        </div>
        {/*<Footer />*/}
    </div>
  )
}

// export async function getStaticProps() {
//     const posts = (await getPosts()) || []
//
//     return {
//         props: { posts }
//     }
// }

export async function getServerSideProps() {
    const posts = (await getPosts()) || []

    return {
        props: { posts }
    }
}