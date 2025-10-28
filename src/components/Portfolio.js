import React, { useState, useEffect } from 'react'
import request from "graphql-request";
import ProjectCard from './ProjectCard';

function Portfolio () {
    const [projects, setProjects] = useState([]);
    const [activeTab, setActiveTab] = useState(1);

    const tabs = [
        {id: 1, name: 'All'},
        {id: 2, name: 'Git'},
        {id: 3, name: 'Real'}
    ]

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
                        description
                        tags
                        git
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
                <div className="tabs">
                    {tabs.map(tab => (
                        <button 
                            key={tab.id} 
                            onClick={() => setActiveTab(tab.id)}
                            className={`${tab.id === activeTab ? 'active' : ''}`}
                        >
                            {tab.name} projects
                        </button>
                    ))}
                </div>

                <div className="row justify-content-center">
                    <div className="col-xl-11">
                        <div className="row">
                            {projects
                            .filter(project => {
                                if (activeTab === 1) return true; 
                                if (activeTab === 2) return project.git === true; 
                                if (activeTab === 3) return project.git === false;
                                return true;
                            })
                            .sort((a, b) => {
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

export default Portfolio