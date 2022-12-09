import React, { useEffect, useState } from 'react';
import ProjectCard from '../../ProjectCard/ProjectCard';


const Projects = () => {
    const [projects, setProjects] = useState([])

    const [projectId, setProjectId] = useState()
    
    
    useEffect(() => {
        fetch("./projects.json")
        .then(res => res.json())
            .then(data => {
                console.log("This is", data)
                setProjects(data)
            })
        
    }, [])
    
    // console.log(projectId)
    

    return (
        <div className='container mx-auto'>
            <h2 className='text-3xl lg:text-5xl font-bold mt-24 mb-10'>Recent Projects</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center'>
                {
                    projects.map(project => <>
                        <ProjectCard project={project} key={project.id} setProjectId={setProjectId}></ProjectCard>
                    </>)
                    
                }
                
            </div>
            
           
        </div>
    );
};

export default Projects;