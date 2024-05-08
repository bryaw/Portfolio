"use client";
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion";

const PROJECT_DATA = [
    {
        id: 1,
        title: "Ordering System",
        description: "Online Ordering and Management System",
        image: "/images/projects/proj1.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/bryaw/Ordering-System",
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
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = PROJECT_DATA.filter((project) => 
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

  return (
    <section id="project-section">
        <div className=" h-full py-28 px-12 ">
            <h1 className=" mb-10 text-center text-3xl font-bold text-white">
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
            <ul 
                ref={ref}
                className=" flex flex-wrap gap-4 items-center justify-center"
            >
                {filteredProjects.map((project, index) => 
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard 
                            key={project.id} 
                            title={project.title} 
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                )}
            </ul>
        </div>
    </section>
  )
}

export default ProjectSection