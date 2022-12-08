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
        "position": "Jr. Web Developer(Intern)",
        "year" : "August 2022 - Present"
    },
    
]

const Experience = () => {
    return (
        <div>
            <h2 className='text-5xl font-bold mt-12 mb-12'>Work Experiences</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mb-12'>
                {
                    experiences.map(experience => <>
                        <div className="card w-96  bg-white  hover:bg-slate-200 shadow-xl cur">
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