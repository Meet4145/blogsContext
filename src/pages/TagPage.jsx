import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';

const TagPage = () => {

  const navigation = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");

  return (
    <div>
        <Header />
        <div className='mt-[100px] mb-6 max-w-2xl mx-auto flex items-center space-x-2'>
            <button className='border-2 border-gray-300 py-1 px-4 rounded-md' onClick={() => navigation(-1)}> 
                    Back
            </button>

          <h2 className='text-xl font-bold'>
            Blogs On <span className='underline'>{tag}</span>
          </h2>
        </div>

        <Blogs />
        <Pagination />

    </div>
  )
}

export default TagPage