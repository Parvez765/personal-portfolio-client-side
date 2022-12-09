import React from 'react';
import BlogPost from '../../Componets/BlogPost/BlogPost';
import Footer from '../../Componets/Footer/Footer';

const Blog = () => {

    
    return (
        <div>
            <h2 className='text-4xl mb-2 font-bold'>Blog Post</h2>
            <p className='mb-10'>Click The Blog Picture To Read The Blog</p>
            <BlogPost />
            <Footer/>
        </div>
    );
};

export default Blog;