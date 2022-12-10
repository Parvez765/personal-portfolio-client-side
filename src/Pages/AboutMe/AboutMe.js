import React from 'react';
import AboutMeDetails from '../../Componets/AboutMeDetails';

const AboutMe = () => {
    return (
        <div>
            <h2 className='text-2xl lg:text-4xl font-bold'>About Me</h2>
            <div className='container mx-auto mt-16'>
                <AboutMeDetails/>
            </div>
        </div>
    );
};

export default AboutMe;