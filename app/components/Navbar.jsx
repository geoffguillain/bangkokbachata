import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavLink = ({ href, children }) => (
  <Link
    href={href}
    className="block py-2 px-3 text-white font-inter font-medium text-base rounded-sm hover:text-[#D2386C]"
  >
    {children}
  </Link>
);

const Navbar = () => {
  return (
    <nav className="bg-transparent border-gray-200 dark:bg-gray-900 w-full absolute  lg:top-2 left-0 z-[1000]">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-center md:justify-between mx-auto p-4 lg:px-10">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="./images/navLogo.png"
            alt="Logo"
            width={222}
            height={81}
            className="hidden md:block"
          />
        </Link>

        <div className="flex space-x-3 md:space-x-8 rtl:space-x-reverse">
          <div className="flex items-center justify-between w-full md:w-auto">
            <ul className="bg-transparent flex flex-row font-medium p-0 mt-0 rounded-lg space-x-8">
              <li>
                <NavLink href="#classes">Classes</NavLink>
              </li>
              <li>
                <NavLink href="#about">About</NavLink>
              </li>
              <li>
                <NavLink href="#events">Events</NavLink>
              </li>
            </ul>
          </div>
          {/* <Link href="#join-bachata-gang">
            <div className="hidden md:block text-white font-inter bg-[#D2386C] focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-3 text-center">
              JOIN OUR DANCE FAMILY
            </div>
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
