import Link from "next/link";

const NavigationLink = ({href, title}) => {
  return (   
        <Link href={"/about"} className=" block px-3 py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-lg text-sm rounded md:p-0 hover:text-white hover:text-xl">
            {title}
        </Link>
    )   
}

export default NavigationLink;