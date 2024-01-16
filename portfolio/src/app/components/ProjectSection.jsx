"use client";
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const PROJECT_DATA = [
    {
        id: 1,
        title: "Ordering System",
        description: "Web Project",
        image: "/images/projects/p1.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "Project 2",
        description: "Web Project",
        image: "/images/projects/p2.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "Project 3",
        description: "Mobile Project",
        image: "/images/projects/p3.png",
        tag: ["All", "Mobile"],
        gitUrl: "/",
        previewUrl: "/",
    }
];

const ProjectSection = () => {
    
const [tag, setTag] = useState("All");

const handleTagChange = (newTag) => {
    setTag(newTag);
};

const filteredProjects = PROJECT_DATA.filter((project) => 
    project.tag.includes(tag)
);

  return (
    <div className=" h-full py-20 px-12">
        <h1 className=" mb-10 text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            My Projects
        </h1>
        <div className=" text-white flex flex-row justify-center items-center gap-4 py-6">
            <ProjectTag 
                onClick={handleTagChange} 
                name="All" 
                isSelected={tag === "All"} 
            />
            <ProjectTag 
                onClick={handleTagChange} 
                name="Web" 
                isSelected={tag === "Web"} 
            />
            <ProjectTag 
                onClick={handleTagChange} 
                name="Mobile" 
                isSelected={tag === "Mobile"} 
            />
        </div>
        <div className=" flex flex-wrap gap-4 items-center justify-center">
            {filteredProjects.map((project) => 
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