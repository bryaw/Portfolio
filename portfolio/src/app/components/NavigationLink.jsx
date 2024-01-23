import Link from "next/link";

const NavigationLink = ({href, title}) => {
  return (   
        <Link href={href} className=" block px-3 py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-sm text-sm rounded md:p-0 hover:text-white">
            {title}
        </Link>
    )   
}

export default NavigationLink;