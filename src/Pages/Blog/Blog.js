import React from 'react';
import BlogPost from '../../Componets/BlogPost/BlogPost';
import Footer from '../../Componets/Footer/Footer';

const Blog = () => {

    
    return (
        <div>
            <h2 className='text-4xl mb-2 font-bold'>Blog Post</h2>
           
            <BlogPost />
            <Footer/>
        </div>
    );
};

export default Blog;