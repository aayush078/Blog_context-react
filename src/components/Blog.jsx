import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from './Spinner';

const Blog = () => {
  // Consume
  const { posts, loading } = useContext(AppContext);
  console.log(posts);
  return (
    <div className=' w-11/12  h-screen max-w-[500px] py-7 flex flex-col 
    gap-y-7 mt-[228px] mb-[70px] justify-center items-center'>
        {
          loading ? (<Spinner/>) : 
          posts.length === 0? 
            (
              <div>
                <p>No Post Found</p>
              </div> 
            ) : (
                posts.map((post) => {
                  return (
                    <div key={post.id}>
                      <p className='font-bold text-md'>{post.title}</p>
                      <p   className='text-sm mt-[4px]'>
                        By <span className='italic  '>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
                      </p>
                      <p className='text-md mt-[4px]'>Posted on {post.date}</p>
                      <p className='text-sm mt-[14px] '>{post.content}</p>
                      <div className='flex flex-wrap gap-x-3 items-center'>
                        {
                          post.tags.map( (tag,index) => {
                            return <span key={index} className='text-blue-700 font-bold underline text-xs mt-[4px] ' > {`#${tag}`}</span>
                          })
                        }
                    </div>
                  </div>
                  )
                }))
          
        }
    </div>
  )
}

export default Blog