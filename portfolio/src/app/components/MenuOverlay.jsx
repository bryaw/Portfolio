import React from 'react';
import NavigationLink from './NavigationLink';

const MenuOverlay = ({ links }) => {
  return (
    <div className=" fixed left-0 right-8 z-10 bg-[#121212] bg-opacity-90 w-full">
      <ul className=" flex flex-col py-4 px-8 items-end">
          {links.map((link, index) => (
              <li key={index}>
                  <NavigationLink href={link.path} title={link.title} />
              </li>
          ))}
      </ul>
    </div>
  )
}

export default MenuOverlay;