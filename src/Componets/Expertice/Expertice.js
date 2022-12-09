import React from 'react';
import "./Expertice.css"
import codeImg from "../../assests/codeIng-01.png"

const Expertice = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-items-center justify-center items-center container mx-auto'>
            <div className='flex flex-col gap-8 container mx-auto mt-24 mb-10 items-center'>
                 <h2 className='sm:text-center md:text-center text-left text-3xl lg:text-5xl font-bold mb-4'>Proficiency</h2>
                <p className='text-2xl font-bold text-left'>FrontEnd <br/><progress className="progressBar progress-error sm:w-[500px] md:w-[550px] lg:w-[550px]" value="85" max="100">Html</progress></p>
                <p className='text-2xl font-bold text-left'>Backend <br/><progress className="progressBar progress-error sm:w-[500px] md:w-[550px] lg:w-[550px]" value="70" max="100">Html</progress></p>
                <p className='text-2xl font-bold text-left'>UI/UX <br/><progress className="progressBar progress-error sm:w-[500px] md:w-[550px] lg:w-[550px]" value="80" max="100">Html</progress></p>
                <p className='text-2xl font-bold text-left'>Graphics <br/><progress className="progressBar progress-error sm:w-[500px] md:w-[550px] lg:w-[550px]" value="90" max="100">Html</progress></p>
            </div>
            <div>
                <img src={codeImg} alt="" className='codeImg'/>
            </div>
        </div>
    );
};

export default Expertice;