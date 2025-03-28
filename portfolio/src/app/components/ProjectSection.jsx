"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const PROJECT_DATA = [
    {
        id: 1,
        title: "Ordering System",
        description: "Online Ordering and Management System",
        image: "/images/projects/OrderingSystem.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "Lawsys Accounting",
        description: "Lawfirm Management System",
        image: "/images/projects/Lawsys.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "Lawsys Mobile",
        description: "Mobile Lawfirm Management System",
        image: "/images/projects/LawsysMobile.png",
        tag: ["All", "Mobile"],
        gitUrl: "/",
        previewUrl: "/",
    }
];

const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    const [popImage, setPopImage] = useState(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const handleImageClick = (imgUrl) => {
        console.log("Image Clicked:", imgUrl); // Debug log
        setPopImage(imgUrl);
    };

    const filteredProjects = PROJECT_DATA.filter((project) => project.tag.includes(tag));

    return (
        <section id="project-section">
            <div className="h-full py-28 px-12">
                <h1 className="mb-10 text-center text-4xl font-bold text-blue">
                    My Projects
                </h1>
                <div className="text-white flex flex-row justify-center items-center gap-4 py-6">
                    {["All", "Web", "Mobile"].map((category) => (
                        <ProjectTag
                            key={category}
                            onClick={handleTagChange}
                            name={category}
                            isSelected={tag === category}
                        />
                    ))}
                </div>
                <ul ref={ref} className="flex flex-wrap gap-4 items-center justify-center">
                    {filteredProjects.map((project, index) => (
                        <motion.li
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.3, delay: index * 0.2 }}
                        >
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                imgUrl={project.image}
                                gitUrl={project.gitUrl}
                                previewUrl={project.previewUrl}
                                onImageClick={() => handleImageClick(project.image)}
                            />
                        </motion.li>
                    ))}
                </ul>

                {/* Image Popup */}
                {popImage && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                        onClick={() => setPopImage(null)}
                    >
                        <div className="relative">
                            <button 
                                className="absolute top-2 right-2 bg-gray-700 text-white px-3 py-1 rounded-full"
                                onClick={() => setPopImage(null)}
                            >
                                ✖
                            </button>
                            <img 
                                src={popImage} 
                                alt="Popup Image" 
                                className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectSection;
