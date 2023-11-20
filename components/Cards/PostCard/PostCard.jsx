import Image from "next/image";
import React from "react";
import scrn from "../../../public/darkerGre.png";
import moment from "moment";

const PostCard = ({ data }) => {
  return (
    <>
      <div className="space-y-2 rounded-[8px] max-w-[1000px] px-4 py-2 shadow border-[2px]">
        <div className="flex flex-row gap-2 items-center mt-2">
          <div className="rounded-[50%] h-[50px] w-[50px] bg-gray-300 flex flex-row items-center justify-center">
            <span className="font-bold text-[25px]">{data.username.split("")[0]}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">{data.username}</span>
            <span className="text-[13px]">{moment(data.created_at).fromNow()}</span>
          </div>
        </div>

        <p>
          {data.post}
        </p>

        {/* <Image src={""} alt="image"/> */}
      </div>
    </>
  );
};

export default PostCard;
