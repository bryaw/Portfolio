import Link from "next/link";

const NavigationLink = ({href, title}) => {
  return (   
        <Link href={href} className=" block px-3 py-2 pl-3 pr-4 text-blue sm:text-md text-sm font-bold rounded md:p-0 hover:text-hoverblue">
            {title}
        </Link>
    )   
}

export default NavigationLink;