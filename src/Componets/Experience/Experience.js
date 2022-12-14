import React from 'react';
import logos from "../../assests/mentorian.png"
import yellow from "../../assests/yellow.png"
import softimize from "../../assests/softimize.png"
 
const experiences = [
    {
        "img": yellow,
        "position": "Communicator",
        "year": "December 2018 - July 2019",
        
    },
    {
        "img": logos,
        "position": "Graphic Designer",
        "year" : "February 2021 - Ferbruary 2022"
    },
    {
        "img": softimize,
        "position": "Jr. Web Developer",
        "year" : "August 2022 - Present"
    },
    
]

const Experience = () => {
    return (
        <div>
            <h2 className='text-3xl lg:text-5xl font-bold mt-12 mb-12 text-center'>Experiences</h2>
            <div className='container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-center items-center justify-items-center'>
                {
                    experiences.map(experience => <>
                        <div className="card w-34 bg-white  hover:bg-slate-200 shadow-xl">
                            <div className='flex justify-center items-center'>
                                <img src={experience.img} alt=""  className=' w-[300px] p-6'/>
                            </div>
                            <div className="card-body -mt-3.5">
                                <h2 className="card-title justify-center text-2xl">{experience.position}</h2>
                                <p>{experience.year}</p>
                               
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default Experience;