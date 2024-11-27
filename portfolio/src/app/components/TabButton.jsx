import React from 'react'
import { motion } from "framer-motion";

const TabButton = ({ active, selectTab, children}) => {
    
  const buttonClasses = active ? ' font-semibold text-blue' : '';

  const variants = {
    default: { width: 0 },
    active: { width: "calc(100%)" },
  }

  return (
    <button onClick={selectTab}>
        <p className={` text-blue font-medium hover:font-semibold ${buttonClasses} `}>
            {children}
        </p>
        <motion.div
          animate={ active ? "active" : "default"}
          variants={variants}
          className=" h-1 bg-hoverblue rounded mt-2"
        ></motion.div>
    </button>
  )
}

export default TabButton;