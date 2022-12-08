import React from 'react';
import nu from "../../assests/National_University,_Bangladesh_crest.svg.png"
import collegeLogo from "../../assests/19362653 [Converted]-01.png"
import schoolLogo from "../../assests/SchoolLogo-01.png"

const Education = () => {
    return (
        <div className='mt-14 container mx-auto mb-8'>
            <h2 className='text-5xl font-bold mb-14 text-center'>Education Summary</h2>
            <div>
                <div className='flex items-center'>
                    <img src={nu} alt="" className='w-[100px] mx-16' />
                    <div>
                        <h2 className='text-3xl font-bold text-left'>National University, Bangladesh</h2>
                        <h3 className='text-xl text-left'>BSC in Botany, Hazi Mohammad Mohsin College, Chattagram</h3>
                        <h3 className='text-left text-xl mt-3'>2018-Present</h3>
                    </div>
                </div>
                <hr  className='mt-5'/>
                <div className='flex items-center mt-12'>
                    <img src={collegeLogo} alt="" className='w-[180px] mx-6' />
                    <div>
                        <h2 className='text-3xl font-bold text-left'>Islamia Degree College, Chattogram</h2>
                        <h3 className='text-xl text-left'>Higher Secondary Certificate (HSC)</h3>
                        <h3 className='text-left text-xl mt-3'>2015-2017</h3>
                    </div>
                </div>
                <hr  className='mt-5'/>
                <div className='flex items-center mt-12'>
                    <img src={schoolLogo} alt="" className='w-[170px] mx-6' />
                    <div>
                        <h2 className='text-3xl font-bold text-left'>Nasirabad Govt. Boy's High School, Chattogram</h2>
                        <h3 className='text-xl text-left'>Secondary School Certificate (SSC)</h3>
                        <h3 className='text-left text-xl mt-3'>2009-2015</h3>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Education;