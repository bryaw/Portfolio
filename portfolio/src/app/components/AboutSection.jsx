"use client"
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';    
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <div className=" flex flex-row gap-6">
                <TypeAnimation
                    style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}
                    sequence={[
                        '- Javascript \n- Next Js \n- Vue Js \n- React Native \n- PHP \n- Tailwind CSS \n- HTML/CSS',
                        2000,
                    ]}
                    wrapper="span"
                    speed={70}
                    cursor={false}
                    repeat={Infinity}
                />
            </div>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <TypeAnimation
                style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}
                sequence={[
                    '- Web Development \n- Mobile Application',
                    2000,
                ]}
                wrapper="span"
                speed={70}
                cursor={false}
                repeat={Infinity}
            />
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <TypeAnimation
                style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}
                sequence={[
                    '- Web Development',
                    2000,
                ]}
                wrapper="span"
                speed={70}
                cursor={false}
                repeat={Infinity}
            />
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
    <section id="about-section" className=" px-12 py-10 text-white">
        <motion.div
            initial={{ opacity: 0, scale: 1}}
            animate={{ opacity: 1, scale: 1}}
            transition={{ duration: 0.5}}
            className=" md:grid md:grid-cols-2 gap-10 items-center py-16 px-4 xl:gap-16 sm:py-16 xl:px-16"
        >
            <div className=" h-full flex items-center justify-center">
                <Image
                    className=" rounded-2xl"
                    data-aos="fade-right" 
                    data-aos-offset="200" 
                    data-aos-delay="50" 
                    data-aos-duration="1000"
                    src="/images/about.jpg" 
                    height={500} 
                    width={500} 
                    alt="computer setup"
                />
            </div>
            <div 
                className=" md:mt-0 text-left flex flex-col h-full"
                data-aos="fade-left" 
                data-aos-offset="200" 
                data-aos-delay="50" 
                data-aos-duration="1000"
            >
                <h2 className=" text-4xl font-bold mb-4 text-white mt-4">
                    About Me
                </h2>
                <p className=" text-sm text-[#ADB7BE]">
                    I'm passionate about crafting intuitive and visually appealing digital experiences. I thrive on turning ideas into responsive websites and applications using Javascript and Frameworks.
                </p>
                <div className=" flex flex-row mt-8 gap-4">
                    <TabButton 
                        selectTab={() => handleTabChange("skills")} 
                        active={tab === "skills"}>
                            Skills
                    </TabButton>
                    <TabButton 
                        selectTab={() => handleTabChange("experience")} 
                        active={tab === "experience"}>
                            Experience
                    </TabButton>
                    <TabButton 
                        selectTab={() => handleTabChange("education")} 
                        active={tab === "education"}>
                            Education
                    </TabButton>
                </div>
                <div className=" mt-8">
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default AboutSection;