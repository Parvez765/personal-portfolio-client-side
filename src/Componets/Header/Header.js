import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
    return (
        <div className='container  mx-auto'>
            <h2 className='text-5xl font-bold mt-10'>MD. <span className='text-rose-800'>PARVEZ HOSSAIN</span></h2>
            <p className='mt-2 text-2xl'>FrontEnd Web Developer</p>
            <p className='mt-6'>
                    I am a <strong>Passionate Web Developer, fast learner, and team player</strong><br/> also have strong desire to develop professionally and constantly enhance my skills.
            </p>
            <div className='flex justify-center items-start mt-5 gap-3'>
            <a href='https://www.facebook.com/pervez.me/' target="_blank"><FaFacebook className='text-2xl text-black hover:text-blue-700'/></a>
            <a href='https://github.com/Parvez765' target="_blank"><FaGithub className='text-2xl text-black hover:text-blue-700'/></a>
            <a href='https://www.linkedin.com/in/parvez-sakib/' target="_blank"><FaLinkedin className='text-2xl text-black hover:text-blue-700'/></a>
            </div>
           <a href='https://drive.google.com/file/d/17aA612nKFnBBtBBN9mNjwwe8vF4dV-pz/view?usp=share_link' target="_blank"><button className='btn btn-danger mt-5'>See My Resume</button></a>
        </div>
    );
};

export default Header;