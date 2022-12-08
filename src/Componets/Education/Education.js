import React from 'react';
import nu from "../../assests/National_University,_Bangladesh_crest.svg.png"
const Education = () => {
    return (
        <div className='mt-14 container mx-auto'>
            <h2 className='text-4xl font-bold mb-8'>Education Summary</h2>
            <div className='flex items-center'>
                <img src={nu} alt="" className='w-[100px] mx-12' />
                <div>
                <h2 className='text-3xl font-bold text-left'>National University, Bangladesh</h2>
                <h3 className='text-xl'>BSC in Botany, Hazi Mohammad Mohsin College, Chattagram</h3>
               </div>
            </div>
        </div>
    );
};

export default Education;