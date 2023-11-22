"use client";

import { sidebarMenus } from "@/constants/sidebarData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);

  // Get url path
  const path = pathname;

  const toggleNav = () => {
    setToggle((prev) => !prev);
  };

  return (
    <>
      <div className="h-[60px] shadow flex flex-row items-center  relative box-border min-[1200px]:hidden mb-5">
        {!toggle ? (
          <GiHamburgerMenu
            size={25}
            className="cursor-pointer ml-3"
            onClick={toggleNav}
          />
        ) : (
          <AiOutlineClose size={25} className="cursor-pointer ml-3"  onClick={toggleNav}/>
        )}
        {!toggle ? null : (
          <div className="max-w-[300px] box-border w-[100%] h-[400px] bg-gray-100 absolute top-[100%] z-50 p-3 min-[1200px]:hidden">
            <ul className="space-y-2 flex flex-col">
              {sidebarMenus.map((item) => (
                <Link
                  href={item.route}
                  className={` ${
                    path === item.route
                      ? "text-violet-500  bg-white h-[30px] flex flex-row items-center p-2"
                      : " text-black p-2"
                  } `}
                  key={item.id}
                >
                  {item.title}
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
