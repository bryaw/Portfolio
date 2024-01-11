import React from 'react'

const TabButton = ({ active, selectTab, children}) => {
    
    const buttonClasses = active ? ' text-white border-b-2 border-purple-500' : 'text-[ADB7BE] '
  return (
    <button onClick={selectTab}>
        <p className={` text-white hover:font-semibold ${buttonClasses} `}>
            {children}
        </p>
    </button>
  )
}

export default TabButton;