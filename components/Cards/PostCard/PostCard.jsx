import Image from "next/image";
import React from "react";
import scrn from "../../../public/darkerGre.png";
import moment from "moment";
import { GoHeart, GoComment } from "react-icons/go";
import { IoShareSocialOutline } from "react-icons/io5";

const PostCard = ({ data }) => {
  return (
    <>
      <div className=" rounded-[8px] max-w-[1000px] px-4 py-2 shadow border-[2px]">
        <div className="flex flex-row gap-2 items-center mt-2">
          <div className="rounded-[50%] h-[50px] w-[50px] bg-gray-300 flex flex-row items-center justify-center">
            <span className="font-bold text-[25px]">
              {data.username.split("")[0]}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">{data.username}</span>
            <span className="text-[13px]">
              {moment(data.created_at).fromNow()}
            </span>
          </div>
        </div>

        <p className="mt-[15px]">{data.post}</p>

        {data.base64str ? <Image src={data?.base64str} alt="image" /> : null}

        <div className="flex flex-row gap-6 items-center mt-[25px]">
          <GoHeart size={20}/>
          <IoShareSocialOutline size={20}/>
          <GoComment size={20}/>
        </div>
      </div>
    </>
  );
};

export default PostCard;
