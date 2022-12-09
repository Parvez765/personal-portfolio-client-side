import React from 'react';
import nu from "../../assests/National_University,_Bangladesh_crest.svg.png"
import collegeLogo from "../../assests/19362653 [Converted]-01.png"
import schoolLogo from "../../assests/SchoolLogo-01.png"

const Education = () => {
    return (
        <div className='mt-14 container mx-auto mb-8'>
            <h2 className='text-3xl lg:text-5xl font-bold mb-14 text-center'>Education Summary</h2>
            <div>
                <div className='flex flex-col lg:flex-row items-center px-10'>
                    <img src={nu} alt="" className='w-[100px] mx-16' />
                    <div>
                        <h2 className='text-lg lg:text-3xl font-bold sm:text-center md:text-center lg:text-left'>National University, Bangladesh</h2>
                        <h3 className='text-lg sm:text-center md:text-center lg:text-left font-bold'>BSC in Botany, Hazi Mohammad Mohsin College, Chattagram</h3>
                        <h3 className='sm:text-center md:text-center lg:text-left text-xl mt-3'>2018-Present</h3>
                    </div>
                </div>
                <hr  className='mt-5'/>
                
           </div>
        </div>
    );
};

export default Education;