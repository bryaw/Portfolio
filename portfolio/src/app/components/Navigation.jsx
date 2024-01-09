"use client"
import Link from "next/link";
import React, {useState} from 'react';
import NavigationLink from "./NavigationLink";
import MenuOverlay from "./MenuOverlay";

const NavigationLinks = [
    {
        title: "About",
        path: "",
    },
    {
        title: "Projects",
        path: "",
    },
    {
        title: "Contact",
        path: "",
    },
]

const Navigation = () => {

const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className=" fixed left-0 right-0 z-10 bg-[#121212] bg-opacity-100 ">
        <div className=" flex flex-wrap items-center justify-between mx-auto px-6 py-2">
            <Link href={"https://github.com/bryaw"}>
                <div className=" flex flex-row gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#ccc" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>
                    <span className=" text-2xl md:text-3xl text-white font-bold italic">
                        bryaw
                    </span>
                </div>
            </Link>
            <div className=" mobile-menu block md:hidden">
                {
                    !navbarOpen ? (
                        <button onClick={() => setNavbarOpen(true)} className=" flex items-center px-3 py-2 border rounded border-slate-200 hover:border-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ccc" d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"/></svg>
                        </button>
                    ) : (
                        <button onClick={() => setNavbarOpen(false)} className=" flex items-center px-3 py-2 border rounded border-slate-200 hover:border-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 15 15"><path fill="#ccc" fill-rule="evenodd" d="M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687L4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5z" clip-rule="evenodd"/></svg>
                        </button>
                    )
                }
            </div>
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className=" flex p-4 md:p-0 md:flex-row mdspace-x-8 mt-0 gap-4">
                    {
                        NavigationLinks.map((link, index) => (
                            <li key={index}>
                                <NavigationLink href={link.path} title={link.title} />
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