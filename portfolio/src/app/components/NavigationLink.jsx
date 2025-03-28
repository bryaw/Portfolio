import Link from "next/link";

const NavigationLink = ({href, title, isSelected}) => {
    const buttonStyles = isSelected ? " text-hoverblue border-blue bg-blue text-white" : " text-blue border-textslate hover:border-blue"
  return (   
        <Link href={href} className={`${buttonStyles} block px-3 py-2 pl-3 pr-4 text-textslate sm:text-md text-sm font-bold rounded md:p-0 hover:text-hoverblue`}>
            {title}
        </Link>
    )   
}

export default NavigationLink;