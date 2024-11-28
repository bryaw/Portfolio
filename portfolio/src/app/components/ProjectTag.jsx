import React from 'react'

const ProjectTag = ({ name, onClick, isSelected }) => {
    const buttonStyles = isSelected ? " text-blue border-blue bg-blue text-white" : " text-blue border-textslate hover:border-blue"
  return (
    <button
        onClick={() => onClick(name)}
        className={` ${buttonStyles} rounded-full border-2 px-4 py-2 text-sm text-textslate cursor-pointer `}
    >
        {name}
    </button>
  )
}

export default ProjectTag