"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const HomeSection = () => {

  return (
    <section
        id="home-section"
        className=" px-12 w-screen"
        style={{
            minHeight: '100vh',
            minWidth: '100vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center', 
        }}
    >
        <motion.div
            initial={{ opacity: 0, scale: 1}} 
            animate={{ opacity: 1, scale: 1}}
            transition={{ duration: 0.5}}
            className=" grid grid-cols-1 sm:grid-cols-12 py-10 sm:py-0 gap-12"
        >
            <div className=" col-span-8 place-self-center text-center sm:text-left px-28">
                <h1 className=" text-blue text-5xl font-bold mt-2">
                    <span className=" bg-clip-text">Hello, Im {" "}</span>
                        Bryan
                    <br/>
                </h1>
                <h1 className="text-hoverblue text-5xl font-bold mt-6">
                    <TypeAnimation
                        sequence={[
                            'Frontend Developer',
                            2000,
                            'Web/Mobile Developer',
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        deletionSpeed={50}
                        repeat={Infinity}
                    />
                </h1>
                <div className=" w-11/12">
                    <p className=" text-textslate text-sm sm:text-base lg:text-lg font-medium mt-10 mb-16">
                        Front End Developer who specializes in creating web applications and translating visual concepts into interactive user interfaces.
                    </p>
                </div>
                <div className=" flex w-9/12 flex-row gap-4 mt-18 ">
                    <button className=" w-full text-white sm:fit px-6 py-3 rounded-full bg-blue hover:bg-hoverbutton">
                        <a href="/#contact-section">
                            Hire Me
                        </a>
                    </button>
                    <button className=" w-full sm:fit px-1 py-1 rounded-full bg-disable hover:bg-hoverbutton">
                        <span>
                            Download CV
                        </span>
                    </button>
                </div>
            </div>
            <div className=" col-span-4 place-self-center mt-6 sm:pr-48 pr-2 relative">
                <div className=" absolute bg-transparent top-0 -left-28 justify-center items-left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="480px" height="480px" viewBox="0 0 24 24">
                        <g>
                            <circle cx="12" cy="3" r="1" fill="#dbeafe">
                                <animate id="svgSpinners12DotsScaleRotate0" attributeName="r" begin="0;svgSpinners12DotsScaleRotate2.end-0.5s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1" />
                            </circle>
                            <circle cx="16.5" cy="4.21" r="1" fill="#dbeafe">
                                <animate id="svgSpinners12DotsScaleRotate1" attributeName="r" begin="svgSpinners12DotsScaleRotate0.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1" />
                            </circle>
                            <circle cx="7.5" cy="4.21" r="1" fill="#dbeafe">
                                <animate id="svgSpinners12DotsScaleRotate2" attributeName="r" begin="svgSpinners12DotsScaleRotate4.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1" />
                            </circle>
                            <circle cx="19.79" cy="7.5" r="1" fill="#dbeafe">
                                <animate id="svgSpinners12DotsScaleRotate3" attributeName="r" begin="svgSpinners12DotsScaleRotate1.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1" />
                            </circle>
                            <circle cx="4.21" cy="7.5" r="1" fill="#dbeafe">
                                <animate id="svgSpinners12DotsScaleRotate4" attributeName="r" begin="svgSpinners12DotsScaleRotate6.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1" />
                            </circle>
                            <circle cx="21" cy="12" r="1" fill="#dbeafe">
                                <animate id="svgSpinners12DotsScaleRotate5" attributeName="r" begin="svgSpinners12DotsScaleRotate3.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1" />
                            </circle>
                            <circle cx="3" cy="12" r="1" fill="#dbeafe">
                                <animate id="svgSpinners12DotsScaleRotate6" attributeName="r" begin="svgSpinners12DotsScaleRotate8.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1" />
                            </circle>
                            <circle cx="19.79" cy="16.5" r="1" fill="#dbeafe">
                                <animate id="svgSpinners12DotsScaleRotate7" attributeName="r" begin="svgSpinners12DotsScaleRotate5.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1" />
                            </circle>
                            <circle cx="4.21" cy="16.5" r="1" fill="#dbeafe">
                                <animate id="svgSpinners12DotsScaleRotate8" attributeName="r" begin="svgSpinners12DotsScaleRotatea.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1" />
                            </circle>
                            <circle cx="16.5" cy="19.79" r="1" fill="#dbeafe">
                                <animate id="svgSpinners12DotsScaleRotate9" attributeName="r" begin="svgSpinners12DotsScaleRotate7.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1" />
                            </circle>
                            <circle cx="7.5" cy="19.79" r="1" fill="#dbeafe">
                                <animate id="svgSpinners12DotsScaleRotatea" attributeName="r" begin="svgSpinners12DotsScaleRotateb.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1" />
                            </circle>
                            <circle cx="12" cy="21" r="1" fill="#dbeafe">
                                <animate id="svgSpinners12DotsScaleRotateb" attributeName="r" begin="svgSpinners12DotsScaleRotate9.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1" />
                            </circle>
                            <animateTransform attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="360 12 12;0 12 12" />
                        </g>
                    </svg>
                </div>
                <div className=" bg-bgblue rounded-b-full rounded-tl-full relative w-[250px] h-[250px] lg:w-[390px] lg:h-[390px] overflow-hidden">
                    <Image
                        className=" absolute trasnform -translate-x-1/4 -translate-y-1/2 top-1/2 mt-4 ml-48"
                        src="/images/crop.png"
                        alt="my image"
                        height={250}
                        width={250}
                    />
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default HomeSection;