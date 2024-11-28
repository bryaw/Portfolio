import React from 'react';
import Image from 'next/image';

const Footer = () => {

    const currentDate = new Date();
    const formattedDate = currentDate.getFullYear();
    
  return (
    <nav className=" border-t-2 border-slate-200">
        <span className=" flex flex-wrap items-center justify-center px-6 py-4 text-center">
            <Image
                src="/images/logo.png" 
                height={100} 
                width={100} 
            />
            <p className=" text-textslate text-sm "> <span className=" text-blue">{formattedDate}</span> . All rights reserved </p>
        </span>
    </nav>
  )
}

export default Footer