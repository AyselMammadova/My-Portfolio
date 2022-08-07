import React, { useState, useEffect } from 'react'
import request from "graphql-request";
import ProjectCard from './ProjectCard';
// import { graphcms } from "./Client";

function Portfolio () {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getAllProjects = async() => {
            const {projects} = await request(
                'https://api-eu-west-2.hygraph.com/v2/cl6dwve6p0yqc01ta2laf6cg5/master',
                `
                {
                    projects {
                        id
                        image {
                            url
                        }
                        source
                        title
                        tags
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
                            {projects.map(project => 
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