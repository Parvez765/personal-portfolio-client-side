import React, { useEffect, useState } from 'react';
import "./About.css"
import gif from "../../../assests/giphy.gif"




const About = () => {

    const [technologies, setTechnologies] = useState([])

    useEffect(() => {
        fetch("/technologies.json")
            .then(res => res.json())
            .then(data => setTechnologies(data))
        
    }, [])

    return (
        <div className="hero mt-32 sm:text-center md:text-center lg:text-left">
            <div className="hero-content flex-col lg:flex-row justify-center items-center">
                <img src={gif} className="rounded-lg shadow-2xl mx-10 gifImages"/>
                <div>
                <h1 className="text-3xl lg:text-5xl font-bold mt-6">Technologies I Love To Use</h1>
                <p className="py-2">PASSIONATE WEB DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
                    
                    <div className='grid grid-cols-3 lg:grid-cols-7 gap-4 justify-items-center'>
                        {
                            technologies?.map(tech => <>
                                <img src={tech.img} alt="" className='logos'/>
                            </>)
                        }
                    </div>
                  
                    {/* <div className='mt-5 flex justify-center items-center gap-3'>
                        <FaAngellist className='text-2xl'></FaAngellist><p><strong>I do ui/ux design for the website that helps website to get a unique look.</strong></p>
                        <FaAngellist className='text-3xl'></FaAngellist><p><strong> I also develop the websites. I create high performance website with blazing fast speed.</strong></p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default About;