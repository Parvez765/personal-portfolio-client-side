import React from 'react';
import "./Expertice.css"
import codeImg from "../../assests/codeIng-01.png"

const Expertice = () => {
    return (
        <div className='flex justify-around items-center container mx-auto mt-10'>
            <div className='flex flex-col gap-8 container mx-auto mt-24 mb-10'>
                 <h2 className='text-left text-5xl font-bold mb-4'>Proficiency</h2>
                <p className='text-2xl font-bold text-left'>FrontEnd <br/><progress className="progressBar progress-error w-[450px]" value="85" max="100">Html</progress></p>
                <p className='text-2xl font-bold text-left'>Backend <br/><progress className="progressBar progress-error w-[450px]" value="70" max="100">Html</progress></p>
                <p className='text-2xl font-bold text-left'>UI/UX <br/><progress className="progressBar progress-error w-[450px]" value="80" max="100">Html</progress></p>
                <p className='text-2xl font-bold text-left'>Graphics <br/><progress className="progressBar progress-error w-[450px]" value="90" max="100">Html</progress></p>
            </div>
            <div>
                <img src={codeImg} alt="" className='codeImg'/>
            </div>
        </div>
    );
};

export default Expertice;