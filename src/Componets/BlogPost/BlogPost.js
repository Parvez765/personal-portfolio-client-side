import React from 'react';
import react from "../../assests/blogImg/react.png"
import javascript from "../../assests/blogImg/javascript.png"
import flex from "../../assests/blogImg/flex.png"

const BlogPost = () => {
    return (
        <div className="card bg-base-100 mx-auto mt-14 container">
            <div className='px-8 lg:p-0'>
                <figure><img src={react} alt="Album" className='w-full lg:h-[250px] object-contain' /></figure>
            </div>
            <div className="card-body text-left lg:text-center">
            <h2 className="card-title justify-start lg:justify-center text-2xl font-bold ">React Js</h2>
            <p>Currently, React JS is the most widely used framework for creating web applications in the web development sector. <br/>Basically, this framework goes a long way in giving a flexible, user-friendly look to the frontend of web applications. <br/>Jordan Waki, a software developer at Facebook, invented this framework in 2013, which is now being used by giant companies <br/>including Google to build their single page applications.<br/><br/>React JS is a front-end base framework built primarily with JavaScript and can be used to easily build component-based single page applications.<br/> In addition, the biggest advantage of React is that it is component-based and does not have to repeat the same code over and over again.<br/> As a result, if developers want to write code in a central place, they can easily use it wherever they need. <br/><br/>
            Apart from this, the other benefits that make React JS so popular are:<br/>
                -It speeds up rendering of websites through virtual DOM creation<br/>
                - This framework has a strong community for this reason a quick solution to any problem can be solved easily<br/>
                - Can create customized components<br/><br/>
                Besides, this framework has many advantages which is one of the main reason to increase it's popularity day by day<br/>
                    It is better to say that the social media site that you or I are using now is built with React JS😀😀
            </p>
            
            </div>
           
            
        </div>
    );
};

export default BlogPost;