import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';

const Blogs = () => {

    const { posts, loading } = useContext(AppContext);

    return (
        <div className='flex flex-col gap-y-10 mt-[1rem] mb-[5rem]'>
            {
                loading ? 
                (<Spinner />) : 
                (
                    posts.length === 0 ? 
                    (<div>
                        <p className='flex w-full h-full justify-center items-center text-3xl font-bold'> No Post Found</p>
                    </div>) : 
                    (posts.map( (post) => (
                        <BlogDetails key={post.id} post={post}/>
                    )))
                )
            }
        </div>
    )
}

export default Blogs