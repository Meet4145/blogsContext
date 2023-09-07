import React from 'react'
import Header from '../components/Header'
import BlogDetails from '../components/BlogDetails'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useNavigation, useState, useContext} from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from '../components/Spinner';

const BlogPage = () => {

    const newBaseUrl = "https://codehelp-apis.vercel.app/api/"
    const [blog, setBlog] = useState(null);
    const [relatedblogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {loading, setLoading} = useContext(AppContext);
    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        } catch (error) {
            console.log("Error fetching posts");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect(() => {
            if(blogId) {
                fetchRelatedBlogs();
            }
        }, [location.pathname]);

    return (
        <div>
            <Header />

            <div className='mt-[100px] mb-6 max-w-2xl mx-auto'>
                <button className='border-2 border-gray-300 py-1 px-4 rounded-md' onClick={() => navigation(-1)}> 
                    Back
                </button>
            </div>

            {
                loading ?  
                (
                    <div>
                        <Spinner />
                    </div>
                ) :
                blog ?
                (
                    <div className='flex flex-col gap-y-10 max-w-2xl mx-auto mb-[3rem]'>
                        <BlogDetails post={blog} />
                        <h2 className='max-w-2xl font-bold text-3xl'> Related Blogs </h2>
                        {
                            relatedblogs.map( (post) => (
                                <div key = {post.id}>
                                    <BlogDetails post={post} />
                                </div>
                            ) )
                        }
                    </div>
                ) :
                (
                    <div>
                        <p className='flex w-full h-full justify-center items-center text-3xl font-bold'> No blog found </p>
                    </div>
                )
            }
        
        </div>
    )
}

export default BlogPage