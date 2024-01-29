import React from 'react';
import NavigationLink from './NavigationLink';

const MenuOverlay = ({ links }) => {
  return (
    <div className=" fixed left-0 right-8 z-10 bg-gradient-to-br from-[#0d0d0d] via-slate-900 to-[#0d0d0d] bg-opacity-90 w-full">
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