import React from 'react'
import { motion } from "framer-motion";

const TabButton = ({ active, selectTab, children}) => {
    
  const buttonClasses = active ? ' text-white' : 'text-[ADB7BE] ';

  const variants = {
    default: { width: 0 },
    active: { width: "calc(100%)" },
  }

  return (
    <button onClick={selectTab}>
        <p className={` text-white hover:font-semibold ${buttonClasses} `}>
            {children}
        </p>
        <motion.div
          animate={ active ? "active" : "default"}
          variants={variants}
          className=" h-1 bg-primary-500 rounded mt-2"
        ></motion.div>
    </button>
  )
}

export default TabButton;