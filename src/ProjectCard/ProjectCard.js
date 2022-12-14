import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project, setProjectId }) => {
    // console.log(projectId)
    return (
        <div className="card bg-base-100 shadow-xl container mx-auto">
        <figure><img src={project.img} alt="Shoes"/></figure>
        <div className="card-body">
            <h2 className="card-title justify-center">
           {project.projectName}
            {/* <div className="badge badge-secondary">NEW</div> */}
            </h2>
            <p>{project.description}</p>
           
            <div className="card-actions justify-center">
                <Link to={`/project/${project.id}`}><button onClick={() => setProjectId(project)} className='btn btn-primary'>View Project</button></Link>
          
            </div>
        </div>
    </div>
    );
};

export default ProjectCard;