import React, { useState, useEffect } from 'react'
import request from "graphql-request";
import ProjectCard from './ProjectCard';


function Portfolio () {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getAllProjects = async() => {
            const {projects} = await request(
                process.env.REACT_APP_SECRET_KEY,
                `
                {
                    projects(first: 100) {
                        id
                        image {
                            url
                        }
                        source
                        title
                        tags
                        order
                    }
                }
                `
            );

            setProjects(projects);
        };

        getAllProjects();

    }, []);



    return (
        
        <div className="portfolio-list">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-11">
                        <div className="row">
                            {projects.sort((a, b) => {
                                return a.order > b.order ? -1 : a.order < b.order ? 1 : 0;
                            }).map(project => 
                                <ProjectCard key={project.id} project={project} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

// export const getStaticProps = async () => {
//     const projects = await GetAllProjects();
//     return {
//         props: {
//             projects
//         }
//     };
// }

export default Portfolio