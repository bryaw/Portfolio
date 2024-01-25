import Link from "next/link";

const NavigationLink = ({href, title}) => {
  return (   
        <Link href={href} className=" block px-3 py-2 pl-3 pr-4 text-white sm:text-sm text-sm rounded md:p-0 hover:text-[#ADB7BE]">
            {title}
        </Link>
    )   
}

export default NavigationLink;