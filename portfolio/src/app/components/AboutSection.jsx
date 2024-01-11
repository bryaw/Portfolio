"use client"
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul>
                <li>- Javascript</li>
                <li>- NextJS</li>
                <li>- VueJS</li>
                <li>- React Native</li>
                <li>- PHP</li>
                <li>- HTML/CSS</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul>
                <li>- Web Development</li>
                <li>- Computer Programming</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul>
                <li>- Web Development</li>
                <li>- Mobile Development "IOS/Android"</li>
            </ul>
        )
    }
];

const AboutSection = () => {

    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

  return (
    <section className=" text-white mt-36">
        <div className=" md:grid md:grid-cols-2 gap-10 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image 
                src="/images/about.jpg" 
                height={500} 
                width={500} 
                alt="computer setup"
            />
            <div className=" mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className=" text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">About Me</h2>
                <p className=" text-sm text-white">
                I'm passionate about crafting intuitive and visually appealing digital experiences. I thrive on turning ideas into responsive websites and applications using Javascript and Frameworks. Collaborating with diverse teams fuels my creativity, and I'm constantly exploring new frameworks and trends to stay at the forefront of modern UI/UX. When not coding, I indulge in exploring development tools, sketching interface ideas, and diving into design methodologies.
                </p>
                <div className=" flex flex-row mt-8 gap-4">
                    <TabButton 
                        selectTab={() => handleTabChange("skills")} 
                        active={tab === "skills"}>
                            Skills
                    </TabButton>
                    <TabButton 
                        selectTab={() => handleTabChange("education")} 
                        active={tab === "education"}>
                            Education
                    </TabButton>
                    <TabButton 
                        selectTab={() => handleTabChange("experience")} 
                        active={tab === "experience"}>
                            Experience
                    </TabButton>
                </div>
                <div className=" mt-8">
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection;