import React from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'

const Home = () => {
  return (
    <div className="my-[100px]">
    
        <div>
            <Header />
        </div>

        <div>
            <Blogs />
        </div>
        
        <div>
            <Pagination />
        </div>
      
    </div>
  )
}

export default Home