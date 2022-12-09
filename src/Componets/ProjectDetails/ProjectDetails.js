import React, { useEffect, useState }  from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ProjectDetails = () => {
    // const projects = useLoaderData()
    // console.log(projects)

    const [project, setProject] = useState({})

    const {screenShot, projectName, description, keyFeature, technology, link, clientSide, serverSide} = project
    
    const {id} = useParams()
    // console.log()

    useEffect(() => {
        fetch("/projects.json")
        .then(res => res.json())
            .then(data => {
                const findProject = data.find(item => item.id === parseInt(id))
                setProject(findProject)
            })
        }, [id])
        console.log(project);

    return (
        <div className='mt-16'>
            <h2 className='text-2xl font-bold'>ScreenShots of {project.projectName}</h2>
            <div className='container mx-auto grid grid-cols-3 gap-4 bg-slate-200 drop-shadow-lg p-6 mt-8'>
                {
                    screenShot?.map(screen => <>
                        <img src={screen} alt=""  className='w-[550px]'/>
                    </>)
                }
            </div>
            <div className='mt-12 bg-white drop-shadow-lg container mx-auto p-12 mb-10'>
                <h2 className='text-4xl font-bold mb-12'>Project Description</h2>
                <h2 className='text-3xl font-bold text-left mb-8'>Project Name: {projectName}</h2>
                <h2 className='text-3xl font-bold text-left mb-8'>Project Description: {description}</h2>
                <h2 className='text-left text-xl font-bold mb-6'>KeyFeatures</h2>
                {
                    keyFeature?.map(feature => <>
                        <li className='text-left'>{feature}</li>
                    </>)
                }
                <div className='grid sm:grid-cols-5 md:grid-cols-5 gap-4 justify-start mt-4'>
                    {
                        technology?.map(tech => <>
                            <button className='btn btn-outline mx-2 hover:btn-primary'>{tech}</button>
                        </>)
                    }
                </div>
                <p className='text-left mt-5'>Live Link : {link}</p>
                <p className='text-left mt-5'>Client Side : {clientSide}</p>
                <p className='text-left mt-5'>Server Side : {serverSide}</p>
            </div>
        </div>
    );
};

export default ProjectDetails;