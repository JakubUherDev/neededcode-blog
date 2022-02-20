import React from 'react';

const Breadcrumbs = ({ post, categoryOnly }) => {

    // Home / Category / post (optional)



    return (
        <>
            <nav className="bg-white mb-2 px-5 py-3 rounded-md w-full">
                <ol className="list-reset flex">
                    <li><a href="/" className="text-blue-600 hover:text-blue-700">Home</a></li>
                    <li><span className="text-gray-500 mx-2">/</span></li>
                    <li>
                        {
                            !categoryOnly ? <a href={`/category/${post.categories[0].slug}`} className="text-blue-600 hover:text-blue-700">{post.categories[0].name}</a> : post.categories[0].name
                        }
                    </li>
                    { !categoryOnly && <>
                        <li><span className="text-gray-500 mx-2">/</span></li>
                        <li className="text-gray-500 capitalize">{post.title}</li>
                    </>}
                </ol>
            </nav>
        </>
    );
};

export default Breadcrumbs;
