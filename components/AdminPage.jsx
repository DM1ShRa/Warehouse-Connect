"use client"
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import PromptCard from './PromptCard';
import { useRouter } from 'next/router';
const AdminPage = () => {
    const [allPosts, setAllPosts] = useState([]);
    
    const fetchPost = async () => {
        const response = await fetch('/api/prompt');
        const data = await response.json();
        console.log(data)

        setAllPosts(data);
    }

    useEffect(() => {
      fetchPost();
    }, []);

    
  return (
    <>
        <h1>Products pending for verification</h1>
        <div className='mt-16 prompt_layout mx-5'>
            {allPosts.map((post) => (
                post.isVerified == false?(
                    <PromptCard
                        key={post._id}
                        post={post}
                        handleEdit={() =>{}}
                        handleDelete={() =>{}}
                        handleTagClick={()=>{}}
                    />
                ):(<></>)
            ))}
        </div>
    </>
    
  )
}

export default AdminPage
