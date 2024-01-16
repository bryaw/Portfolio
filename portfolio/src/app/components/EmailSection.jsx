"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';

const EmailSection = () => {

    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data ={
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };

        const JSONdata = JSON.stringify(data);
        const endpoint = "api/send";

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }

        const response = await fetch (endpoint, options);

        if (response.status === 200) {
            const resData = await response.json();
            console.log('Message sent.');
            setEmailSubmitted(true);
        }
        else {
            console.error('Failed to send message. Status:', response.status);
        }
    };

  return (
    <section className=" grid md:grid-cols-2 my-12 md:my-12 py-24 px-24">
        <div>
            <h5 className=" text-xl font-bold text-transparent bg-clip-text bg-purple-600">Lets's Connect</h5>
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
            <div className=" socials flex flex-row gap-2 mt-8">
                <Link href={"https://github.com/bryaw?tab=repositories"}>
                    <div className=" flex flex-row gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#ccc" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>
                    </div>
                </Link>
                <Link href={"https://github.com/bryaw?tab=repositories"}>
                    <div className=" flex flex-row gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#ccc" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg>
                    </div>
                </Link>
            </div>
        </div>
        <div className="">
            <form
                onSubmit={handleSubmit}
                className=" flex flex-col gap-2"
            >
                <label htmlFor="email" className=" text-white block text-sm font-medium ml-2">
                    Your Email
                </label>
                <input
                    name="email"
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
                    type="message" 
                    id="message" 
                    required 
                    placeholder="Enter your message here"
                    className=" bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                />
                <button
                    type="submit"
                    className=" bg-purple-700 text-white text-sm sm:text-base lg:text-lg font-medium rounded-lg w-full mt-6 py-2 hover:bg-opacity-70" 
                >
                    Send Message
                </button>

                {/* Confirm Email Sent */}
                {
                    emailSubmitted && (
                        <p className=" text-green-500 mt-8">Email sent successfully</p>
                    )
                }
            </form>
        </div>  
    </section>
  )
}

export default EmailSection