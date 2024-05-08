"use client"
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const EmailSection = () => {

    const form = useRef();
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_py5crwf', 'template_dpm36zj', form.current, 'SIp4_Hp7v9Y62GQsu')
          .then((result) => {
              console.log(result.text);
              setEmailSubmitted(true);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset();
    };

  return (
    <section
        id="contact-section"
        className=" grid md:grid-cols-2 my-12 md:my-12 py-24 sm:px-40 px-8">
        <motion.div
            initial={{ opacity: 0, scale: 1}} 
            animate={{ opacity: 1, scale: 1}}
            transition={{ duration: 0.1}}
        >
            <h5 className=" text-xl font-bold text-transparent bg-clip-text bg-primary-600">Lets's Connect</h5>
            <p className=" text-[#ADB7BE] mb-4 max-w-md">
                <TypeAnimation
                    sequence={[
                        'Hello Im looking for new opportunities my inbox is always open. Message me through this email and I will get back to you in a couple of seconds. Thank You',
                        2000,
                    ]}
                    wrapper="span"
                    speed={80}
                    cursor={false}
                    repeat={Infinity}
                />
            </p>
            <div className=" socials flex flex-row gap-4 mt-8">
                <Link href={"https://github.com/bryaw"}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#ccc" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>
                    </div>
                </Link>
                <Link href={"https://www.linkedin.com/in/tomenio-bryan-84b995283/"}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#ccc" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg>
                    </div>
                </Link>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="#ccc" d="M9.365 3.108a56.096 56.096 0 0 1 6.27 0l.632.036l.582.042c.932.08 1.682.219 2.384.597a5.311 5.311 0 0 1 2.035 2.04c.415.774.538 1.593.61 2.639l.053.91a40.18 40.18 0 0 1 0 4.256l-.053.91c-.072 1.047-.195 1.865-.61 2.639a5.31 5.31 0 0 1-2.035 2.04c-.843.454-1.754.563-2.966.639l-.632.037A56.56 56.56 0 0 1 12.5 20l-1.634.005c-.165 0-.332-.002-.499-.005l-.501-.012l-2.241 1.793a1 1 0 0 1-1.617-.654L6 21v-1.666a4.24 4.24 0 0 1-.233-.117a5.31 5.31 0 0 1-2.035-2.04c-.414-.774-.538-1.592-.61-2.638l-.036-.595l-.017-.316a40.052 40.052 0 0 1 0-4.256l.053-.91c.072-1.046.196-1.865.61-2.638a5.31 5.31 0 0 1 2.035-2.04c.772-.417 1.603-.544 2.67-.62l.605-.038zm-.4 3.777c-.977.419-1.813 1.478-1.772 2.58l.009.162l.019.195c.004.035.008.07.014.108l.038.24c.179.974.726 2.555 2.365 4.193c1.638 1.639 3.22 2.186 4.193 2.365l.24.038l.21.025l.254.017c1.101.04 2.16-.79 2.579-1.767a.735.735 0 0 0-.095-.742c-.433-.556-.982-.993-1.552-1.4l-.573-.4a.751.751 0 0 0-1.028.166l-.635.967a.242.242 0 0 1-.322.08c-.43-.245-1.056-.663-1.506-1.114c-.45-.45-.843-1.048-1.064-1.45a.24.24 0 0 1 .07-.308l.976-.724a.752.752 0 0 0 .128-.993l-.33-.485c-.401-.586-.874-1.22-1.495-1.674a.735.735 0 0 0-.723-.079m4.628 2.002a1 1 0 0 0-.666 1.886c.113.04.208.12.268.224l.037.081a1 1 0 0 0 1.886-.666a2.504 2.504 0 0 0-1.525-1.525m-.276-2.22a1 1 0 0 0 .61 1.276a3.513 3.513 0 0 1 2.134 2.134a1 1 0 1 0 1.886-.666a5.513 5.513 0 0 0-3.354-3.354a1 1 0 0 0-1.276.61"/></g></svg>
                </div>
            </div>
        </motion.div>
        <motion.div 
            className=" sm:mt-0 mt-10"
            initial={{ opacity: 0, scale: 1}} 
            animate={{ opacity: 1, scale: 1}}
            transition={{ duration: 0.5}}
        >
            {/* Confirm Email Sent */}
            {   
                emailSubmitted && (
                    <div className=" flex items-center justify-end">
                        <p className=" text-sm font-bold mt-8 px-2 py-2 bg-clip-text text-transparent bg-gradient-to-br from-secondary-500 to-primary-500">
                            Email sent successfully
                        </p>
                    </div>
                )
            }
            <form
                ref={form}
                onSubmit={sendEmail}
                className=" flex flex-col gap-2"
            >
                <input
                    name="user_name"
                    type="hidden" 
                    id="name"
                    placeholder="Juan Dela Cruz"
                    className=" bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                />
                <label htmlFor="email" className=" text-white block text-sm font-medium ml-2">
                    Your Email
                </label>
                <input
                    name="user_email"
                    type="email" 
                    id="email" 
                    required 
                    placeholder="example@gmail.com"
                    className=" bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                />
                <label htmlFor="subject" className=" text-white block text-sm font-medium ml-2 mt-2">
                    Subject
                </label>
                <input
                    name="subject"
                    type="text" 
                    id="subject" 
                    required 
                    placeholder="Enter subject"
                    className=" bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                />
                <label htmlFor="message" className=" text-white block text-sm font-medium ml-2 mt-2">
                    Message
                </label>
                <textarea 
                    name="message"
                    id="message" 
                    required 
                    placeholder="Enter your message here"
                    className=" bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                />
                <button
                    type="submit"
                    className=" bg-primary-700 text-white text-sm sm:text-base lg:text-lg font-medium rounded-lg w-full mt-6 py-2 hover:bg-opacity-70" 
                >
                    Send
                </button>
            </form>
        </motion.div>  
    </section>
  )
}

export default EmailSection