import React from 'react';

const Header = () => {
    return (
        <div>
            <h2 className='text-5xl font-bold mt-10'>MD. <span className='text-rose-800'>PARVEZ HOSSAIN</span></h2>
            <p className='mt-2 text-2xl'>FrontEnd Web Developer</p>
            <p className='mt-6'>
                    I am a <strong>Passionate Web Developer, first learner, and team player</strong><br/> also have strong desire to develop professionally and constantly enhance my skills.
                    </p>
           <a href='https://drive.google.com/file/d/17aA612nKFnBBtBBN9mNjwwe8vF4dV-pz/view?usp=share_link' target="_blank"><button className='btn btn-danger mt-5'>See My Resume</button></a>
        </div>
    );
};

export default Header;