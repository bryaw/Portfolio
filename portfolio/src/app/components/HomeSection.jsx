"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HomeSection = () => {

  return (
    <section className="">
        <div className=" grid grid-cols-1 sm:grid-cols-12">
            <div className=" col-span-7 place-self-center text-center sm:text-left">
                <h1 className=" text-white text-2xl lg:text-4xl font-bold">
                    <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Hello, Im {" "}</span>
                    Gwenchanna
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
                <p className=" text-[#ADB7BE] text-sm sm:text-base lg:text-lg mt-2 mb-6">Front End Developer who specializes in creating web applications and translating visual concepts into interactive user interfaces.</p>
                <div className=" flex flex-row gap-2 mt-6">
                    <button className=" text-white w-full sm:fit px-6 py-3 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 border border-white">
                        Hire Me
                    </button>
                    <button className=" w-full sm:fit px-1 py-1 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 hover:bg-blue-500 border border-white">
                        <span className=" block bg-black hover:bg-purple-300 rounded-full px-5 py-2 text-white hover:text-black">Download CV</span>
                    </button>
                </div>
            </div>
            <div className=" col-span-5 place-self-center mt-6 lg:mt-0">
                <div className="bg-gray-900 rounded-full relative w-[250px] h-[250px] sm:h-260 sm:w-260 lg:w-[270px] lg:h-[270px]">
                    <Image
                        className=" rounded-full absolute trasnform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        src="/images/bryan.png"
                        alt="my image"
                        height={225}
                        width={225}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeSection;