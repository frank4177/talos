import React from "react";
import { HiOutlineHome } from "react-icons/hi2";

const Sidebar = () => {
  return (
    <>
      <div className="w-[20%]  fixed min-h-[100vh] shadow p-3">
        <p className="font-bold text-[35px] mb-4">
          Talo<span className="text-violet-600">Social</span>
        </p>

        <hr />

        <div className="flex flex-row gap-2 items-center mt-6">
          <div className="rounded-[50%] h-[50px] w-[50px] bg-gray-300 flex flex-row items-center justify-center">
            <span className="font-bold text-[20px]">U</span>
          </div>
          <div>
            <p className="font-bold">Frank</p>
            <p className="text-[13px]">@Static</p>
          </div>
        </div>

        <div>
          <div className="bg-violet-500 flex flex-row h-[55px] rounded-[8px] cursor-pointer items-center gap-3">
            <HiOutlineHome size={30} color="white"/>
            <span className="text-white text-[18px]">
              Home
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
