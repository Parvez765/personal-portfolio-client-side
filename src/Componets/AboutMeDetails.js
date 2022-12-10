import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import profile from "../assests/profilePicture.jpg"

const AboutMeDetails = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center justify-items-center gap-8'>
            <div className='p-6 lg:p-0 rounded-lg'>
                <img src={profile} alt="" className='w-[550px]'/>
            </div>
            <div className='text-center lg:text-left mb-6 p-6 lg:p-0'>
                <h2 className='text-3xl lg:text-5xl font-bold '>Hi, I am<br /> <span className='text-red-700'>Md. Parvez Hossain</span></h2>
                <h2 className='text-3xl font-bold mt-4'>FrontEnd Web Developer</h2>
                <p className='mt-6 font-bold'>I'm continually working to improve my abilities and advance professionally. I have faith in my capacity to think of creative ideas that will maximize my skill set and enable me to achieve my objectives. I demonstrate my work ethic, assiduity, and passion in whatever I do.</p>
                <p className='mt-6 font-bold text-xl text-red-700'>My Specialty Areas Includes<br /> FrontEnd Web Development and Graphic Design </p>
                <p className='mt-6 font-bold'>I progressively transformed into a committed man who is serious about his career, passion, and future aspirations.</p>
                <a href='https://drive.google.com/file/d/17aA612nKFnBBtBBN9mNjwwe8vF4dV-pz/view?usp=share_link' target="_blank"><button className='btn btn-danger mt-5'>See My Resume</button></a>
                <div className=' flex mt-4 gap-4 justify-center lg:justify-start'>
                    <a href='https://www.facebook.com/pervez.me/' target="_blank"><FaFacebook className='text-2xl text-black hover:text-blue-700'/></a>
                    <a href='https://github.com/Parvez765' target="_blank"><FaGithub className='text-2xl text-black hover:text-blue-700'/></a>
                    <a href='https://www.linkedin.com/in/parvez-sakib/' target="_blank"><FaLinkedin className='text-2xl text-black hover:text-blue-700'/></a>
                </div>
            </div>
        </div>
    );
};

export default AboutMeDetails;