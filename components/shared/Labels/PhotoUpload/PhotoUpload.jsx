import React from "react";
import { CiImageOn } from "react-icons/ci";

const PhotoUpload = () => {
  return (
    <>
      <label htmlFor="file-upload">
        <div className="flex flex-row  w-fit items-center  text-gray-400 gap-[4px] cursor-pointer ">
          <span className="text-[16px]">Photo</span>
          <CiImageOn size={30} />
        </div>
      </label>
    </>
  );
};

export default PhotoUpload;
