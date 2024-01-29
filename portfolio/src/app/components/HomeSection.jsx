"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const HomeSection = () => {

  return (
    <section
        id="home-section"
        className=" px-12"
        style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center', 
        }}
    >
        <motion.div
            initial={{ opacity: 0, scale: 1}} 
            animate={{ opacity: 1, scale: 1}}
            transition={{ duration: 0.5}}
            className=" grid grid-cols-1 sm:grid-cols-12 py-10 sm:py-0"
        >
            <div className=" col-span-7 place-self-center text-center sm:text-left px-10">
                <h1 className=" text-white text-2xl lg:text-4xl font-bold mt-16">
                    <span className=" text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Hello, Im {" "}</span>
                        Bryan
                    <br/>
                    <TypeAnimation
                        sequence={[
                            'Web Developer',
                            2000,
                            'Mobile Developer',
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        deletionSpeed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className=" text-[#ADB7BE] text-sm sm:text-base lg:text-lg mt-2 mb-6">
                    Front End Developer who specializes in creating web applications and translating visual concepts into interactive user interfaces.
                </p>
                <div className=" flex flex-row gap-4 mt-12 ">
                    <button className=" w-full text-white sm:fit px-6 py-3 rounded-full bg-gradient-to-br from-middle-600 via-primary-600 to-secondary-600 hover:from-middle-500">
                        Hire Me
                    </button>
                    <button className=" w-full sm:fit px-1 py-1 rounded-full bg-gradient-to-br from-middle-600 via-primary-600 to-secondary-600 hover:bg-gradient-to-br hover:from-middle-500">
                        <span className=" block bg-black hover:bg-gradient-to-br from-middle-600 via-primary-600 to-secondary-600 hover:from-blue-500 rounded-full px-5 py-2 text-white">
                            Download CV
                        </span>
                    </button>
                </div>
            </div>
            <div className=" col-span-5 place-self-center mt-6">
                <div className="bg-transparent rounded-full relative w-[250px] h-[250px] sm:h-260 sm:w-260 lg:w-[270px] lg:h-[270px]">
                    <Image
                        className=" rounded-full absolute trasnform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        src="/images/bryan.png"
                        alt="my image"
                        height={300}
                        width={300}
                    />
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default HomeSection;