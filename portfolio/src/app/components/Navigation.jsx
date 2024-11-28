"use client"
// import Link from "next/link";
import React, {useState} from 'react';
import { useRouter } from "next/navigation";
import NavigationLink from "./NavigationLink";
import MenuOverlay from "./MenuOverlay";
import Image from 'next/image';

const NavigationLinks = [
    {
        title: "Home",
        path: "/#home-section",
    },
    {
        title: "About",
        path: "/#about-section",
    },
    {
        title: "Projects",
        path: "/#project-section",
    },
    {
        title: "Contact",
        path: "/#contact-section",
    },
];

const Navigation = () => {

const [navbarOpen, setNavbarOpen] = useState(false);
const router = useRouter();

  return (
    <nav className=" fixed bg-white bg-opacity-90 w-screen z-50">
        <div className=" flex flex-wrap items-center justify-between mx-36 md:px-4 px-6 py-8">
            {/* <Image
                src="/images/logo.png"
                height={150} 
                width={150} 
                alt="computer setup"
            /> */}
            <h1 className=" text-blue text-xl font-bold">
                Bry@w
            </h1>
            <div className=" mobile-menu block md:hidden">
                {
                    !navbarOpen ? (
                        <button onClick={() => setNavbarOpen(true)} className=" flex items-center px-3 py-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="#ccc" d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"/></svg>
                        </button>
                    ) : (
                        <button onClick={() => setNavbarOpen(false)} className=" flex items-center px-3 py-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 15 15"><path fill="#ccc" fill-rule="evenodd" d="M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687L4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5z" clip-rule="evenodd"/></svg>
                        </button>
                    )
                }
            </div>
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className=" flex md:p-0 md:flex-row mdspace-x-8 mt-0 gap-10">
                    {
                        NavigationLinks.map((link, index) => (
                            <li key={index}>
                                <NavigationLink 
                                    href={link.path} 
                                    title={link.title}
                                    isSelected={router.asPath === link.path}
                                />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
        { navbarOpen ? <MenuOverlay links={NavigationLinks} /> : null}
    </nav>
  )
}

export default Navigation