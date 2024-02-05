import React, { useState } from 'react';
import Link from 'next/link';

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl}) => {
    const [popImage, setPopImage] = useState(false);
  return (
    <div>
        <div className=" mb-4">
            <div 
                className=" h-48 w-80 rounded-t-xl relative group" 
                style={{ 
                    background: `url(${imgUrl})`, 
                    backgroundSize: "cover",
                    height: "150px",
                    width: "300px"
                }}
            >
                <div className=" gap-4 items-center justify-center overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                    <Link 
                        href={gitUrl}
                        className=" relative cursor-pointer hover:text-white"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#ccc" fill-rule="evenodd" d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527M16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06m-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0" clip-rule="evenodd"/></svg>
                    </Link>
                    <button 
                        onClick={() => setPopImage(true)}
                        className=" relative cursor-pointer hover:text-white"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256"><path fill="#ccc" d="M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 0 0 0-6.5M128 192c-30.78 0-57.67-11.19-79.93-33.25A133.47 133.47 0 0 1 25 128a133.33 133.33 0 0 1 23.07-30.75C70.33 75.19 97.22 64 128 64s57.67 11.19 79.93 33.25A133.46 133.46 0 0 1 231.05 128c-7.21 13.46-38.62 64-103.05 64m0-112a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32"/></svg>
                    </button>
                </div>
            </div>
            <div className=" text-white rounded-b-xl bg-black py-2 px-4 ">
                <h5 className=" text-xl font-semibold mt-2 mb-1">{title}</h5>
                <p className=" text-[#ADB7BE] text-xs">{description}</p>
            </div>
            {
                popImage && (
                    <div className=" top-0 left-0 items-center justify-center">
                        <img height="500" width="500" src={imgUrl} alt="Popup Image" />
                    </div>
                )
            }
        </div>
        
    </div>
  )
}

export default ProjectCard