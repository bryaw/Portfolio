import React from 'react'

const ProjectTag = ({ name, onClick, isSelected }) => {
    const buttonStyles = isSelected ? " text-white border-primary-500 " : " text-[#ADB7BE] border-slate-600 hover:border-white"
  return (
    <button
        onClick={() => onClick(name)}
        className={` ${buttonStyles} rounded-full border-2 px-4 py-2 text-sm cursor-pointer `}
    >
        {name}
    </button>
  )
}

export default ProjectTag