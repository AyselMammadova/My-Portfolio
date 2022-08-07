import React from 'react'

function ProjectCard (project) {

  const { source, title, image, tags } = project.project;

  return (
    <div className="col-lg-6 project-box-wrap">
        <a href={source} className="project-box" rel="noreferrer" target="_blank">
            <figure className="mb-0">
                <img src={image.url} alt={title} />
                <h4 className="title">
                    {title}
                </h4>
                <ul className="tags">
                    {tags.map((tag, key) => (
                        <li key={key}>{tag}</li>
                    ))}
                </ul>
            </figure>
        </a>
    </div>
  )
}

export default ProjectCard