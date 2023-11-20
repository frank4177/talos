"use client";

import React, { useEffect, useState } from "react";
import { request } from "@/config/config";
import { useDispatch, useSelector } from "react-redux";
import useSWR from "swr";
import Spinner from "@/components/shared/Loaders/Spinner";
import PostCard from "@/components/Cards/PostCard/PostCard";
import { reloadPost } from "@/redux/features/reloadSlice";
import Notfound from "@/components/shared/NotFound/Notfound";

const PostList = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state?.user?.currentUser);
  const [reloader, setReloader] = useState();

  //NEW WAY TO FETCH DATA
  const fetcher = async (...args) => {
    const res = await request.get(...args);
    console.log(res.data);
    return res?.data;
  };

  const { data, isValidating, mutate, error } = useSWR(
    `/posts/${userData?.username}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  console.log(error);

  useEffect(() => {
    dispatch(reloadPost(mutate));
  }, []);

  return (
    <>
      <div className="mt-4 space-y-6">
        {/* LOADER */}
        <div className="flex flex-row justify-center items-center">
          {isValidating ? (
            <Spinner height={48} width={48} color="black" />
          ) : null}
        </div>

        {data?.data?.toReversed()?.map((item) => (
          <PostCard data={item} key={item.created_at} />
        ))}

        {/* NOT FOUND */}
        <div className="flex flex-row justify-center items-center">
          {data?.data?.length === 0 ? (
            <Notfound message="You have no posts" />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default PostList;
