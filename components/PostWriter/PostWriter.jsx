"use client";

import React, { useState } from "react";
import Button from "../shared/Buttons/Button";
import FileUpload from "../Form/FormElements/FileUpload/FileUpload";
import PhotoUpload from "../shared/Labels/PhotoUpload/PhotoUpload";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { request } from "@/config/config";
import { useSelector } from "react-redux";
import Spinner from "../shared/Loaders/Spinner";

const PostWriter = () => {
  const userData = useSelector((state) => state?.user?.currentUser);
  const reload = useSelector((state) => state?.reload?.posts);
  const [post, setPost] = useState("");
  const [preview, setPreview] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const isNotEmpty = post.trim() || preview.trim();

  const handleImageClose = ()=>{
    setPreview("")
    setErrorMessage("")
  }


  //  WITH BASE64
  const handlePostSubmitWithBase64 = async () => {
    setIsLoading(true);
    try {
      const res = await request.post(
        `/createpost`,
        {
          username: userData?.username,
          base64str: preview,
          post: post,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
      setErrorMessage("")
      if (res?.data?.message === "Post Created") {
        setPost("")
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      if (error?.response?.status === 413) {
        setErrorMessage("Oops! 413 (Payload Too Large). Please try a smaller sized image");
      }
      if (error?.response?.status === 502) {
        setErrorMessage("Something went wrong");
      }
      console.log(error);
    }
  };

  // WITHOUT BASE64
  const handlePostSubmitWithoutBase64 = async () => {
    setIsLoading(true);
    try {
      const res = await request.post(
        `/posts`,
        {
          username: userData?.username,
          post: post,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
      setErrorMessage("")
      if (res?.data?.message === "Post Created") {
        setPost("")
      }
      reload()
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);

      console.log(error);
    }
  };


  // SUBMIT POST CONDITION
  const handlePostSubmit = (e)=>{
    e.preventDefault();
    if (preview) {
      handlePostSubmitWithBase64()
    }else if (post && !preview){
      handlePostSubmitWithoutBase64()
    }
  }
  return (
    <>
      <form
        className="shadow min-h-[100px] max-w-[1000px] max-[374px]:px-2 px-4 py-2 rounded-[8px] border-[2px]"
        onSubmit={handlePostSubmit}
      >
        <div className="flex flex-row  gap-2 mt-2">
          {/* AVATAR */}
          <div className="rounded-[50%] h-[50px] w-[50px] max-[374px]:hidden bg-gray-300 flex flex-row items-center justify-center">
            <span className="font-bold text-[25px]">
              {userData?.username.split("")[0]}
            </span>
          </div>

          {/* TEXT FIELD */}
          <div className=" h-full w-full">
            <textarea
              className=" border-[1px] w-full  placeholder:text-[20px] resize-none outline-none p-2"
              placeholder="What's on your mind?"
              name=""
              id=""
              value={post}
              onChange={(e) => setPost(e.target.value)}
              rows={post.length >= 1 ? "4" : "2"}
            />

            {/* IMAGE PREVIEW */}
            {preview ? (
              <div className=" bg-red-400 relative rounded-[20px] w-fit m-auto  object-cover">
                <div
                  className="absolute text-white bg-black p-1 rounded-[50%] cursor-pointer right-2 mt-5"
                  onClick={ handleImageClose}
                >
                  <AiOutlineClose size={25} />
                </div>
                <Image
                  src={preview}
                  height={300}
                  width={400}
                  className="w-full object-contain max-w-[600px]"
                  alt="image preview"
                />
              </div>
            ) : null}
          </div>
        </div>

        <p className="text-red-600 text-[13px] mt-[10px]">
        {errorMessage}
        </p>
        

        {/* UPLOAD PHOTO */}
        <div className="flex flex-row gap-2 mt-[20px] justify-between">
          <FileUpload label={<PhotoUpload />} setPreview={setPreview} setErrorMessage={setErrorMessage}/>
          <Button
            title="Post"
            width={200}
            height={30}
            disabled={!isNotEmpty ? true : false}
            loader={<Spinner height={20} width={20} />}
            loading={isLoading}
          />
        </div>
      </form>
    </>
  );
};

export default PostWriter;
