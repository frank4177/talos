"use client";

import { sidebarMenus } from "@/constants/sidebarData";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiLogout } from "react-icons/ci";
import { logoutUser } from "@/redux/features/userSlice";

const Sidebar = () => {
  const pathname = usePathname();
  const navigate = useRouter("")
  const dispatch = useDispatch()
  const userData = useSelector((state) => state?.user?.currentUser);

  // Get url path
  const path = pathname;

  const handleLogout = ()=>{
    dispatch(logoutUser())
    navigate.push("/")
  }

  return (
    <>
      <div className="p-3 fixed h-full w-[15%] flex flex-col">
        <p className="font-bold text-[20px] mb-4">
          Talo<span className="text-violet-600">Social</span>
        </p>

        <hr />

        <div className="flex flex-row gap-2 items-center mt-6">
          <div className="rounded-[50%] h-[50px] w-[50px] bg-gray-300 flex flex-row items-center justify-center">
            <span className="font-bold text-[25px]">
              {userData?.username.split("")[0]}
            </span>
          </div>
          <div>
            <p className="font-bold">{userData?.username}</p>
            <p className="text-[13px]">@{userData?.username}</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-6 ">
          {sidebarMenus.map((item) => (
            <Link
              href={item.route}
              className={` ${
                path === item.route
                  ? "bg-violet-500 text-white"
                  : "bg-white text-black"
              } flex flex-row h-[55px] rounded-[8px] cursor-pointer items-center p-2 gap-3 `}
              key={item.id}
            >
              <div>{item.icon}</div>
              <span className=" text-[18px]">{item.title}</span>
            </Link>
          ))}
        </div>

        <div className="mt-auto pb-[20px]">
          <div className="flex flex-row items-center gap-1 text-[18px] cursor-pointer" onClick={handleLogout}>
            <CiLogout />
            <span>Log out</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
