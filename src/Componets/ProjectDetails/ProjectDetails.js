import React, { useEffect, useState }  from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

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
        <div className='mt-16 px-8'>
            <h2 className='text-2xl font-bold'>ScreenShots of {project.projectName}</h2>
            <p className='mb-10'>Click The Photo To See The Full View</p>
                <PhotoProvider>
                    <div className='container mx-auto grid sm:grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
                                            
                        {screenShot?.map(screen => (
                                <PhotoView key={screen.id} src={screen}>
                                    <img src={screen} alt="" className='shadow-lg'/>
                                </PhotoView>
                        ))}
                    </div>
                </PhotoProvider>
            
            <div className='mt-16 text-left container m-6 mx-auto mb-6'>
                <h2 className='text-3xl font-bold'>Project Name: {projectName}</h2>
                <h2 className='text-xl'>Description: {description}</h2>
            </div>
            <div className='container mx-auto text-left'>
                {
                    keyFeature?.map(feature => <>
                        <li className=''>{feature}</li>
                    </>)
                }
            </div>
            <div className='grid grid-cols-3 lg:grid-cols-9 container mx-auto mt-3 gap-4 justify-center lg:justify-start'>
                {
                    technology?.map(tech => <>
                        <button className='btn btn-outline'>{tech}</button>
                    </>)
                }
            </div>
            <div className='text-left mt-6 container mx-auto'>
                <li><a href={link} target="_blank">Live Link</a></li>
                <li><a href={clientSide} target="_blank">Client Side</a></li>
                <li><a href={serverSide} target="_blank">Server Side</a></li>
            </div>
        </div>
    );
};

export default ProjectDetails;