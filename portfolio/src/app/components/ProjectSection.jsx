import React from 'react';
import ProjectCard from './ProjectCard';

const PROJECT_DATA = [
    {
        id: 1,
        title: "Project 1",
        description: " Description Project 1",
        image: "/images/projects/project1.jpg",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "Project 2",
        description: " Description Project 2",
        image: "/images/projects/project2.jpg",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "Project 3",
        description: " Description Project 3",
        image: "/images/projects/project3.jpg",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    }
];

const ProjectSection = () => {
  return (
    <div className=" mt-28">
        <h1 className=" mb-10 text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 ">
            My Projects
        </h1>
        <div className=" flex flex-wrap gap-4 items-center justify-center">
            {PROJECT_DATA.map((project) => 
                <ProjectCard 
                    key={project.id} 
                    title={project.title} 
                    description={project.description}
                    imgUrl={project.image}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                />
            )}
        </div>
    </div>
  )
}

export default ProjectSection