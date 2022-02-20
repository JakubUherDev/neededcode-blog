import React from 'react';
import { getPosts, getPostDetails } from '../../services'
import CategoriesWidget from '../../components/CategoriesWidget'
import CommentsForm from '../../components/CommentsForm'
import PostDetail from '../../components/PostDetail'
import PostWidget from '../../components/PostWidget'
import Author from '../../components/Author'
import Comments from '../../components/Comments'
import Loader from '../../components/Loader'


import { useRouter} from "next/router";
import Breadcrumbs from "../../components/Breadcrumbs";

const PostDetails = ({ post }) => {
    const router = useRouter()

    if(router.isFallback) {
        return <Loader/>
    }
    return (

        <div className="container mx-auto px-10 mb-8">
            <Breadcrumbs post={post} categoryOnly={false}/>
            <div className="flex flex-row space-x-2">
                <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)}/>
                <CategoriesWidget/>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="col-span-1 lg:col-span-12">
                    <PostDetail post={post}/>
                    <Author author={post.author}/>
                    <CommentsForm slug={post.slug}/>
                    <Comments slug={post.slug}/>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;

export async function getStaticProps({ params }) {
    const data = await getPostDetails(params.slug)

    return {
        props: { post: data }
    }
}
export async function getStaticPaths() {
    const posts = await getPosts()
    return {
        paths: posts.map(({node: { slug }}) => ({ params: { slug }})),
        fallback: true,
    }
}